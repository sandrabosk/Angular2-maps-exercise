import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2bpeazr0WYw5T3ZzRh6DRjqxYuTBV8OI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
