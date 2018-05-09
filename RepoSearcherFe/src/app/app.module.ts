import { GitRepoService } from './git-repo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { BokkmarkedComponent } from './bokkmarked/bokkmarked.component';
import { GitRepoDetailsComponent } from './git-repo-details/git-repo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BokkmarkedComponent,
    GitRepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GitRepoService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
