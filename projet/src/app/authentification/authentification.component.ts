import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
    this.user = new User();
    this.user.login = "teste";

  }

}
