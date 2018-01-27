import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DeezerService } from "./shared/services/deezer.service";
import {PlayerService} from "./shared/services/player.service";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptHttpClientModule],
  providers :[DeezerService, PlayerService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
