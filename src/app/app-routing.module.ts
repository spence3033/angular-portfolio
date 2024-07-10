import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { ContactComponent } from './body/contact/contact.component';
import { UnfinishedComponent } from './body/unfinished/unfinished.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'unfinished', component: UnfinishedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
