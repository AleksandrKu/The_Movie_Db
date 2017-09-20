import {Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {Subscription} from 'rxjs/Subscription';
import {HttpService} from '../../http.service';


@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnDestroy, OnInit {
    private id: number;
    private subscription: Subscription;

    backdropPath: string = "https://image.tmdb.org/t/p/w1400_and_h450_bestv2";
    budget: string;
    genres: object[];
    imdbId: number;
    originalTitle: string;
    overview: string;
    posterPath: string = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
    productionCompanies: object;
    productionCountries: object;
    releaseDate: string;
    runtime: number;
    spokenLanguages: object;
    voteAverage: object;
    voteCount: object;
    title: string;
    isPoster: boolean = false;

    constructor(private activateRoute: ActivatedRoute,
                private httpservice: HttpService,
    private sanitizer: DomSanitizer

    ) {
        this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnInit() {

        this.httpservice.getDetails(this.id)
            .subscribe(
                (film) => {
                    let backdrop_path = film.backdrop_path ? this.backdropPath + film.backdrop_path : '';
                   /* let backdrop = this.backdropPath + film.backdrop_path;
                     this.backdropPath = "url(" + this.sanitizer.bypassSecurityTrustResourceUrl(backdrop) + ")";*/

                    this.backdropPath = "url(" +  backdrop_path  + ")";
                    this.budget = film.budget;
                    this.genres = film.genres;
                    this.imdbId = film.imdbId;
                    this.originalTitle = film.original_title;
                    this.overview = film.overview;

                    this.posterPath = film.poster_path ? this.posterPath + film.poster_path : '';
                    this.isPoster = film.poster_path;
                    this.productionCompanies = film.production_companies;
                    this.productionCountries = film.production_countries;
                    this.releaseDate = film.release_date;
                    this.runtime = film.runtime;
                    this.spokenLanguages = film.spoken_languages;
                    this.voteAverage = film.vote_average;
                    this.voteCount = film.vote_count;
                    this.title = film.title;
                },
                error => console.log(error)
            );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
