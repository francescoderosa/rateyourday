import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { App } from './app.component';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { DayListComponent } from './day-list/day-list.component';

@NgModule({
  declarations: [ App, DayDetailComponent, DayListComponent ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
