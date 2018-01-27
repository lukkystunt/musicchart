import { Component, OnInit } from "@angular/core";
import { TextField } from "ui/text-field";
import {DeezerService} from "../../shared/services/deezer.service";
import {PlayerService} from "../../shared/services/player.service";


@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    public searchWord;

    public tracks: Array<Object>;

    public isBusy;

    public trackContainer = false;

    constructor(private _deezerService : DeezerService, private _playerService: PlayerService) {

    }

    ngOnInit(): void {

    }

    public searchTrack(args) {
        let textField = <TextField>args.object;

        this.searchWord = textField.text;

        this.isBusy = true;

        this.trackContainer = false;

        this._deezerService
            .searchTrackFromDeezer(textField.text, 10)
            .subscribe(
                data => {
                    if(data['total']>0) {
                        this.tracks = data['data'];
                        this.trackContainer = true;
                    }else{
                        alert("No track found");
                    }
                    this.isBusy = false;
                },
                error => {
                    console.log(JSON.stringify(error));
                    this.isBusy = false;
                }
            )

    }

    public onTap(args) {
        this._playerService.playerListener$.next(args);
    }



}
