import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [{
  path: '',
  component: ListingComponent
}, {
  path: ':type/:id',
  component: IndividualComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
