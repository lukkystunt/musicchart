import {Component, OnInit} from "@angular/core";
import {DeezerService} from "../../shared/services/deezer.service";
import { TNSPlayer } from 'nativescript-audio';
import {PlayerService} from "../../shared/services/player.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"

})
export class HomeComponent implements OnInit {

    public charts: Array<Object>;

    private _player: TNSPlayer;

    public isBusy = true;


    constructor(private _deezerService: DeezerService, private _playerService: PlayerService) {
        this._player = new TNSPlayer();
    }

    ngOnInit(): void {
        this.getChartsFromDeezer();
    }

    getChartsFromDeezer() {
        this._deezerService.getChartFromDeezer(15)
            .subscribe(
                data => {
                    this.charts = data['tracks']['data'];
                    this.isBusy = false;
                },
                error => {
                    console.log(JSON.stringify(error));
                    this.isBusy = false;
                }
            )
    }

    public onTap(args) {
        console.log(args)
        this._playerService.playerListener$.next(args);
    }

}
