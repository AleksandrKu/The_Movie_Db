import { Component, OnInit } from "@angular/core";
import { HttpService } from '../../http.service';
/*import { Observable } from "rxjs/Observable";*/

@Component({
    selector: "main-app",
    templateUrl: "main.component.html",
    styleUrls: ["./main.component.css"]
}) export class MainComponent implements OnInit {
  /*  private urlGetToken: string = "https://api.themoviedb.org/3/authentication/token/new?api_key=a60b7c51f2572478770c70f3ea085bc8";*/
    token: any = "token";
    films: string[];
    constructor( private httpservice: HttpService) { }

    ngOnInit() {
      /*  this.httpservice.createRequestToken()
            .subscribe(
                (data) => {
                    console.log(data);
                    this.token = data;
                    /!*this.createSession(data);*!/

                },
                error => console.log(error)
            );*/
        this.getTopRated();
    }

/*    createSession(token) {
            this.httpservice.createSession(token)
                .subscribe(
                    (data) => {
                        console.log(data);
                        this.token = data;
                    },
                    error => console.log(error)
                );
    }*/

    getTopRated() {
        this.httpservice.getTopRated()
            .subscribe(
                (arrayFilms) => {
                    this.films = arrayFilms;
                   /*console.log(arrayFilms);*/

                },
                error => console.log(error)
            );
    }

}