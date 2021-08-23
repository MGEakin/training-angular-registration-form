import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'Matt',
    mobile: '614-209-2922',
    email: 'matthew.eakin@innovect.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
