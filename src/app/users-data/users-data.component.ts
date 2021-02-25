import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  constructor(private _myData:MyDataService) { }

users=[];
  ngOnInit() {
    this.users = this._myData.users;
  }

}