import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { MovieService } from '../../app/movies.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    private movies: string[] = [];
    private directors: string[] = [];
    private actors: string[] = [];
    private years: string[] = [];
    private urlsc: string[] = [];
    private urlsy: string[] = [];

    constructor(public navCtrl: NavController, public service: MovieService) { }

    search(name: string){
        this.movies = [];
        this.directors = [];
        this.actors = [];
        this.years = [];
        this.service.getPeliculas(name).subscribe(success => this.movies = success, error => console.error(error));
        this.service.getYear().subscribe(success => this.years = success, error => console.error(error));
        this.service.getDirector().subscribe(success => this.directors = success, error => console.error(error));
        this.service.getActors().subscribe(success => this.actors = success, error => console.error(error));
        this.service.getCover().subscribe(success => this.urlsc = success, error => console.error(error));
        this.service.getTrailer().subscribe(success => this.urlsy = success, error => console.error(error));
        this.movies = [];
        this.directors = [];
        this.actors = [];
        this.years = [];
    }
}