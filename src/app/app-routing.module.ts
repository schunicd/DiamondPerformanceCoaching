import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeComponent } from './pages/about/me/me.component';
import { PersonalityDimensionsComponent } from './pages/about/personality-dimensions/personality-dimensions.component';
import { SalesComponent } from './pages/solutions/corporate/sales/sales.component';
import { MindsetSkillsComponent } from './pages/solutions/corporate/mindset-skills/mindset-skills.component';
import { OneOnOneComponent } from './pages/solutions/personal/one-on-one/one-on-one.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { VideosComponent } from './pages/videos/videos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'about/me', component: MeComponent },
  { path: 'about/personality-dimensions', component: PersonalityDimensionsComponent },
  { path: 'solutions/corporate/sales', component: SalesComponent },
  { path: 'solutions/corporate/mindset-skills', component: MindsetSkillsComponent },
  { path: 'solutions/personal/one-on-one', component: OneOnOneComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }