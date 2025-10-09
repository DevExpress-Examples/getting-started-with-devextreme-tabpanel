import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxTabPanelModule } from 'devextreme-angular/ui/tab-panel';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
import { DxRadioGroupModule } from 'devextreme-angular/ui/radio-group';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTabPanelModule,
    DxFormModule,
    DxTextAreaModule,
    DxRadioGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
