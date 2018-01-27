import { Injectable } from "@angular/core";
import {ReplaySubject} from 'rxjs/ReplaySubject';


@Injectable()
export class PlayerService {

    public playerListener$ = new ReplaySubject<any>(0);


}