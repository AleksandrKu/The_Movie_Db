import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

let window: any;
let FB: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor( private authservice: AuthService ) {

}
  ngOnInit() {  }

login() {
    this.authservice.login();
}


}
