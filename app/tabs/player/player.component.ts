import { Component, OnInit,Output, Input,EventEmitter } from "@angular/core";
import { TNSPlayer } from 'nativescript-audio';
import {PlayerService} from "../../shared/services/player.service";

@Component({
    selector: "Player",
    moduleId: module.id,
    templateUrl: "./player.component.html"
})
export class PlayerComponent implements OnInit {

    @Output() tap: EventEmitter<any> = new EventEmitter<any>();

    private _player: TNSPlayer;

    public mediaControlPlay = true;

    public mediaControlPause = false;

    public currentTrack;
    public trackDetails = "";

    constructor(private _playerService: PlayerService) {
        this._player = new TNSPlayer();
    }

    ngOnInit(): void {
        this._playerService.playerListener$.subscribe(
            res=>{
                this._playTrack(res);
            }
        )
    }

    onTap(args){
        this.tap.emit(args);
    }

    public togglePlay() {
        if(this.currentTrack) {
            if (this._player.isAudioPlaying()) {
                this._mediaControlPause();
                this._player.pause();
            } else {
                this._mediaControlPlay()
                this._player.play();
            }
        }
    }

    private _playTrack(track){

        this.currentTrack = track;
        this.trackDetails = `${track.artist.name} ${track.title_short}`;
        this._player.playFromUrl({
            audioFile: track.preview,
            loop: false,
            completeCallback: this._trackComplete.bind(this),
            errorCallback: this._trackError.bind(this)
        }).then(()=>{
            this._mediaControlPause();
            this._player.getAudioTrackDuration().then((duration) => {
                // iOS: duration is in seconds
                // Android: duration is in milliseconds
                console.log(`song duration:`, duration);
            });
        });
    }

    private _mediaControlPlay(){
        this.mediaControlPlay = true;
        this.mediaControlPause = false;
    }

    private _mediaControlPause(){
        this.mediaControlPlay = false;
        this.mediaControlPause = true;
    }

    private _trackComplete(args: any) {
        console.log('reference back to player:', args.player);

        // iOS only: flag indicating if completed succesfully
        console.log('whether song play completed successfully:', args.flag);
    }

    private _trackError(args: any) {
        console.log('reference back to player:', args.player);
        console.log('the error:', args.error);

        // Android only: extra detail on error
        console.log('extra info on the error:', args.extra);
    }

}
