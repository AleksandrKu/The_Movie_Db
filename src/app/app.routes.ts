import {Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {SearchComponent} from "./components/search/search.component";
import {AccountComponent} from "./components/account/account.component";
import {FilmComponent} from "./components/film/film.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "main",
        pathMatch: "full"
    },
    {
        path: "main",
        component: MainComponent,
    },
    {
        path: "search",
        component: SearchComponent
    },
    {
        path: "account",
        component: AccountComponent
    },
    {
        path: "film/:id",
        component: FilmComponent
    }
];
