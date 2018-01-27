import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";


@Injectable()
export class DeezerService {
    
    private _deezerApiBaseUrl = 'https://api.deezer.com/';

    public constructor(private _http: HttpClient) {

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