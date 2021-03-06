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
import { NameFilterPipe } from './name-filter.pipe';
import { GenderFilterPipe } from './gender-filter.pipe';
import { ColumnTotalPipe } from './column-total.pipe';
import { TotalSumKoSumPipe } from './total-sum-ko-sum.pipe';
import { TestPipe } from './test.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UsersDataComponent, GenderPipe, ThreedotPipe, AgePipe, RowSumPipe, BackgroundColorPipe, NameFilterPipe, GenderFilterPipe, ColumnTotalPipe, TotalSumKoSumPipe, TestPipe, SearchPipe ],
  bootstrap:    [ AppComponent ],
  providers: [MyDataService]
})
export class AppModule { }
