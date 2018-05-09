import { BokkmarkedComponent } from './bokkmarked/bokkmarked.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'bookmarked', component: BokkmarkedComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
