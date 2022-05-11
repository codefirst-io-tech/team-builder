import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerTableComponent } from './player-table/player-table.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzSliderModule} from "ng-zorro-antd/slider";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {PlayerStrengthComponentModule} from "./player/player-strength/player-strength.component";
import {NzSpaceModule} from "ng-zorro-antd/space";
import { TeamListComponent } from './team-list/team-list.component';
import {NzListModule} from "ng-zorro-antd/list";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzRadioModule} from "ng-zorro-antd/radio";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PlayerTableComponent,
    TeamListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzLayoutModule,
    NzButtonModule,
    NzDrawerModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCollapseModule,
    NzDatePickerModule,
    NzSelectModule,
    NzMenuModule,
    NzIconModule,
    NzSliderModule,
    NzInputNumberModule,
    PlayerStrengthComponentModule,
    NzSpaceModule,
    NzListModule,
    NzModalModule,
    NzRadioModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
