import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Film } from './film';

@Injectable()
export class HttpService {
  private api_key:string = "a60b7c51f2572478770c70f3ea085bc8";
/*  private urlRequestToken: string = "https://api.themoviedb.org/3/authentication/token/new?api_key=" + this.api_key;
  private urlCreateSession: string = "https://api.themoviedb.org/3/authentication/session/new?api_key=" + this.api_key;*/
  private urlGetTopRated: string = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + this.api_key + "&language=en-US&page=1";

 /* private urlGetDetails: string = "https://api.themoviedb.org/3/movie/19404?api_key="+this.api_key +"&language=en-US";*/

  films: Film[];

  constructor(private http: Http) { }

 /* public createRequestToken(): Observable<object> {
    return this.http.get(this.urlRequestToken)
        .map((resp: Response) => {
          console.log(resp.json().request_token);
          return resp.json().request_token;
        })
        .catch((error: any) => {
          /!*console.log(error);*!/
          return Observable.throw(error)
        });
  }*/
/*  public createSession(token): Observable<object> {
    this.urlCreateSession += "&request_token="+token;
    console.log(this.urlCreateSession);
    return this.http.get(this.urlCreateSession)
        .map((resp: Response) => {
           console.log(resp);
          return resp;
        })
        .catch((error: any) => {
          /!*console.log(error);*!/
          return Observable.throw(error)
        });
  }*/

  public getTopRated(): Observable<any> {
    return this.http.get(this.urlGetTopRated)
        .map((res: Response) => {
          /*console.log(res.json().results);*/
          let filmList = res.json().results;
           /*for(let i in filmList){*/
            /*console.log(filmList[i]);*/
            /*let film = filmList[i];*/
            /*this.films = ({title: film.title, overview: film.overview});*/
          /*  this.films[i] = filmList[i];
          }*/
          console.log(res.json().results);
          return res.json().results;
        })
        .catch((error: any) => {
          /*console.log(error);*/
          return Observable.throw(error)
        });
  }


  public getDetails(id) {
     let urlGetDetails: string = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+this.api_key +"&language=en-US";
      return this.http.get(urlGetDetails)
          .map((res: Response) => {

              console.log(res.json());
              return res.json();
          })
          .catch((error: any) => {
              /*console.log(error);*/
              return Observable.throw(error)
          });

  }

    public searchFilms(title: string) {
        let urlSearchFilms: string = "https://api.themoviedb.org/3/search/movie?api_key="+this.api_key +"&language=en-US&query="+title+"&page=1&include_adult=false";
        return this.http.get(urlSearchFilms)
            .map((res: Response) => {
                /*console.log(res.json().results);*/
                return res.json().results;
            })
            .catch((error: any) => {
                /*console.log(error);*/
                return Observable.throw(error)
            });

    }

   /* public facebooks(title: string) {
        let urlSearchFilms: string = "https://api.themoviedb.org/3/search/movie?api_key="+this.api_key +"&language=en-US&query="+title+"&page=1&include_adult=false";
        return this.http.get(urlSearchFilms)
            .map((res: Response) => {
                /!*console.log(res.json().results);*!/
                return res.json().results;
            })
            .catch((error: any) => {
                /!*console.log(error);*!/
                return Observable.throw(error)
            });

    }*/


}
