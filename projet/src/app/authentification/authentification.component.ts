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
  login() {
    if ((this.user.login == "teste") && (this.user.mdp == "teste"))
      window.location.replace('calcule');
    else
      alert("le login ou mot de passe est incorrecte");



  }

}
