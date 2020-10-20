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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SliderComponent,
    IconBoxComponent,
    CourseCategoriesComponent,
    PopularCoursesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
