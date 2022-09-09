import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ArtifickComponent } from './artifick/artifick.component';
import { SpongebobComponent } from './spongebob/spongebob.component';
import { SquidwardComponent } from './squidward/squidward.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ArtifickComponent,
    SpongebobComponent,
    SquidwardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
