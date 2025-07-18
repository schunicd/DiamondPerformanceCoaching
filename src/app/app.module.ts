import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SocialBarComponent } from './social-bar/social-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MeComponent } from './pages/about/me/me.component';
import { PersonalityDimensionsComponent } from './pages/about/personality-dimensions/personality-dimensions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MindsetSkillsComponent } from './pages/solutions/corporate/mindset-skills/mindset-skills.component';
import { SalesComponent } from './pages/solutions/corporate/sales/sales.component';
import { OneOnOneComponent } from './pages/solutions/personal/one-on-one/one-on-one.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { VideosComponent } from './pages/videos/videos.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialBarComponent,
    NavbarComponent,
    MeComponent,
    PersonalityDimensionsComponent,
    ContactComponent,
    MindsetSkillsComponent,
    SalesComponent,
    OneOnOneComponent,
    StatisticsComponent,
    VideosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
