import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatListModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { ContainerComponent } from './container/container.component';
import { PrimeNgScrollComponent } from './prime-ng-scroll/prime-ng-scroll.component';
import { NgxInfiniteScrollComponent } from './ngx-infinite-scroll/ngx-infinite-scroll.component';
import {DataScrollerModule} from 'primeng/primeng';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {SuperheroesService} from './shared/services/superheroes.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PrimeNgScrollComponent,
    NgxInfiniteScrollComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTabsModule,
    DataScrollerModule,
    InfiniteScrollModule
    ],
  providers: [SuperheroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
