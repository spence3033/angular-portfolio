import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { HomeComponent } from './page/body/home/home.component';
import { AboutComponent } from './page/body/about/about.component';
import { ResumeComponent } from './page/body/resume/resume.component';
import { PortfolioComponent } from './page/body/portfolio/portfolio.component';
import { ContactComponent } from './page/body/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
