import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Player, Team} from "@codefirst-io/team-builder/src/lib/models";
import {AbidinoTeamBuilderService} from "@codefirst-io/team-builder";
import {environment} from "../../environments/environment";
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls:  ['player-table.component.css']
})
export class PlayerTableComponent {
  playerList: Player[] = []
  isVisibleDrawer = false;
  isVisibleTeamList = false;
  isVisiblePlayerEdit= false;
  inputValue!: string;
  separateKey = environment.separateKey;
  teams: Team[] = [];
  data: any;

  newPlayerForm = this.fb.group({
    name: [null, [Validators.required]],
    strength: [null, [Validators.required]],
    position: [null]
  });

  editPlayerForm = this.fb.group({
    name: [null, [Validators.required]],
    strength: [null, [Validators.required]],
    position: [null]
  });
  selectedPlayer: any;
  radioValue: any;



  get newPlayerStrengthFormControl(): FormControl{
    return this.newPlayerForm.get('strength') as FormControl;
  }

  get newPlayerNameFormControl(): FormControl{
    return this.newPlayerForm.get('name') as FormControl;
  }

  get editPlayerStrengthFormControl(): FormControl{
    return this.editPlayerForm.get('strength') as FormControl;
  }

  get editPlayerNameFormControl(): FormControl{
    return this.editPlayerForm.get('name') as FormControl;
  }

  constructor(private fb: FormBuilder) {}


  closeDrawer(): void {
    this.isVisibleDrawer = false;
  }

  addNewPlayer() {
    this.isVisibleDrawer = true;
  }

  onStrengthChange(value: any) {
    if(value > 10){
      this.newPlayerStrengthFormControl.setValue(10);
    }else if(value < 0){
      this.newPlayerStrengthFormControl.setValue(0);
    }
  }

  onEditStrengthChange(value: any) {
    if(value > 10){
      this.editPlayerStrengthFormControl.setValue(10);
    }else if(value < 0){
      this.editPlayerStrengthFormControl.setValue(0);
    }
  }

  saveNewPlayer() {
    if(this.newPlayerForm.valid){
      this.saveSinglePlayer();
    }if(this.inputValue){
      this.saveMultiplePlayer();
    }
  }

  saveSinglePlayer() {
    const newPlayer = new Player(this.newPlayerNameFormControl.value, this.newPlayerStrengthFormControl.value);
    this.playerList = [...this.playerList, newPlayer];
    this.newPlayerForm.reset();
  }

  saveMultiplePlayer() {
    let lines = this.inputValue.split(/[\r\n]+/);
    for (const line of lines){
      const lastIndex = line.length -1;
      line[lastIndex] === this.separateKey ? line.slice(lastIndex,0) : null;
      const parsedLine = line.split(this.separateKey);
      const isLineValid = parsedLine.every(a => a !== '');
      if(isLineValid){
        const newPlayer = new Player(parsedLine[0], Number(parsedLine[1]));
        this.playerList = [...this.playerList, newPlayer];
      }
    }
    this.inputValue = '';
    this.closeDrawer();
  }

  buildTeams() {
    this.teams = AbidinoTeamBuilderService.buildTeams(this.playerList);
    this.isVisibleTeamList = true;
  }

  handleCancelModal(): void {
    this.isVisibleTeamList = false;
  }

  onFileChange(evt: any) {
    const target : DataTransfer =  <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname : string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      let excelData = this.data.slice(1);
      for(let line of excelData){
        if(line[1]){
          const newPlayer = new Player(line[0], Number(line[2]));
          this.playerList = [...this.playerList, newPlayer];
        }
      }
    };
    reader.readAsBinaryString(target.files[0]);
  }


  deletePlayer() {
    this.playerList = this.playerList.filter(player => player.name !== this.radioValue);
    this.radioValue = '';
  }

  editPlayer(){
    const foundedPlayer = this.playerList.find(player => player.name === this.radioValue);
    this.editPlayerNameFormControl.setValue(foundedPlayer?.name);
    this.editPlayerStrengthFormControl.setValue(foundedPlayer?.strength);
    this.isVisiblePlayerEdit = true;
  }

  handleCancelModalPlayerEdit() {
    this.isVisiblePlayerEdit = false;
  }

  saveEditPlayer() {
    const editPlayerIndex = this.playerList.findIndex(player => player.name === this.radioValue);
    this.playerList[editPlayerIndex].name =this.editPlayerNameFormControl.value;
    this.playerList[editPlayerIndex].strength =this.editPlayerStrengthFormControl.value;
    this.isVisiblePlayerEdit = false;
  }
}
