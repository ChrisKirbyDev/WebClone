import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { IconBoxComponent } from './icon-box/icon-box.component';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { FormComponent } from './form/form.component';
import { PopularEventComponent } from './popular-event/popular-event.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { FlatContactComponent } from './flat-contact/flat-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SliderComponent,
    IconBoxComponent,
    CourseCategoriesComponent,
    PopularCoursesComponent,
    FormComponent,
    PopularEventComponent,
    LatestNewsComponent,
    FlatContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
