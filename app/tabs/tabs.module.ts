import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";
import {PlayerComponent} from "./player/player.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        HomeComponent,
        SearchComponent,
        PlayerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
