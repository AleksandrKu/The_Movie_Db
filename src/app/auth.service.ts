import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';


@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: 'n0KkCP53F21P44cRkM9LtXLNPctgXAWT',
        domain: 'kkss.eu.auth0.com',
        responseType: 'token id_token',
        audience: 'https://kkss.eu.auth0.com/userinfo',
        redirectUri: 'http://localhost:4200/account',
        scope: 'openid'
    });

    constructor(public router: Router) {}

    public login(): void {
        this.auth0.authorize();
    }

}