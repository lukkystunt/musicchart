import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import { isAndroid, isIOS, device, screen } from "platform";


@Injectable()
export class DeezerService {
    private _baseUrl = 'http://127.0.0.1:8080';

    private _imageBaseUrl = 'http://127.0.0.1:8080/assets/';
    
    private _deezerApiBaseUrl = 'https://api.deezer.com/';

    public constructor(private _http: HttpClient) {
        if(isAndroid){
            this._baseUrl = 'http://10.0.2.2:8080'
            this._imageBaseUrl = 'http://10.0.2.2:8080/assets/';
        }
    }

    getChartFromDeezer(limit) {
        let url = `${this._deezerApiBaseUrl}chart?limit=${limit}`;
        
       return this._http.get(url).map(res => res);
    }

    searchTrackFromDeezer(name:string, limit){
        let url = `${this._deezerApiBaseUrl}search?q=${name}&limit=${limit}`;

        return this._http.get(url).map(res => res);
    }
}