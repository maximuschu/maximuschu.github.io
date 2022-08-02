import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';


const routes: Routes = [
  {path: 'about', component: AboutComponent}, 
  {path: 'resume', component: ResumeComponent},
  {path: '', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), NoopAnimationsModule, MatSliderModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  exports: [RouterModule]
})
export class AppModule { }
