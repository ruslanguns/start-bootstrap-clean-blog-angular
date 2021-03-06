import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostComponent } from './pages/post/post.component';
import { YoutubePipe } from './pipes/youtube.pipe';
import { DomSecurePipe } from './pipes/dom-secure.pipe';

const COMPONENTS = [
  AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    CoursesComponent,
    NotFoundComponent,
    PostComponent,
    SidebarComponent
];

const PIPES = [
  YoutubePipe,
  DomSecurePipe
];

@NgModule({
  declarations: [
    COMPONENTS,
    PIPES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
