import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatFormFieldModule,
  MatInputModule,
  MatListModule, MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ContainerComponent } from './container/container.component';
import { PrimeNgScrollComponent } from './prime-ng-scroll/prime-ng-scroll.component';
import { NgxInfiniteScrollComponent } from './ngx-infinite-scroll/ngx-infinite-scroll.component';
import {CalendarModule, DataScrollerModule} from 'primeng/primeng';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {SuperheroesService} from './shared/services/superheroes.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FeaturesComponent } from './features/features.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PrimeNgScrollComponent,
    NgxInfiniteScrollComponent,
    FeaturesComponent,
    HeroDetailsComponent,
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
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    DataScrollerModule,
    InfiniteScrollModule,
    CalendarModule,
    MatFormFieldModule,
    MatInputModule
    ],
  providers: [SuperheroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
