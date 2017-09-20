import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  text: string = "";
  query: string = "";
  urlImage: string = "https://image.tmdb.org/t/p/w45_and_h67_bestv2";
  films: string[];
  arrayFilmLength: number = 0;
  isArrayMore20: boolean = false;
  isArray: boolean = false;

  constructor( private httpservice: HttpService ){}

  ngOnInit() {  }

   onKey(event: KeyboardEvent)  {
     this.text = '';
    this.query = (event.target as HTMLInputElement).value;
this.httpservice.searchFilms(this.query)
    .subscribe(
        (films) => {
          this.films = films;
          this.arrayFilmLength = this.films.length;
          this.isArrayMore20 = (this.arrayFilmLength>=20) ? true: false;
          this.isArray = (this.arrayFilmLength<1) ? true: false;
          /*console.log(this.films);*/
        },
        error => console.log(error)
    );
  }

    searchFilms(data) {
     this.text = data;
    }
}
