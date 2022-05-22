import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirective } from './directives/color.directive';
import { PlayerTableComponent } from './player-table/player-table.component';
import { PlayerStrengthComponentModule } from './player/player-strength/player-strength.component';
import { TeamListComponent } from './team-list/team-list.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PlayerTableComponent,
    TeamListComponent,
    ColorDirective
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
    NzRadioModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
