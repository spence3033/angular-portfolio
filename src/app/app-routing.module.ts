import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/body/home/home.component';
import { ResumeComponent } from './page/body/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
