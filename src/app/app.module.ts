import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyDataService } from './my-data.service';
import { UsersDataComponent } from './users-data/users-data.component';
import { GenderPipe } from './gender.pipe';
import { ThreedotPipe } from './threedot.pipe';
import { AgePipe } from './age.pipe';
import { RowSumPipe } from './row-sum.pipe';
import { BackgroundColorPipe } from './background-color.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UsersDataComponent, GenderPipe, ThreedotPipe, AgePipe, RowSumPipe, BackgroundColorPipe ],
  bootstrap:    [ AppComponent ],
  providers: [MyDataService]
})
export class AppModule { }
