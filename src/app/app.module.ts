import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactComponent } from './component/contact/contact.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { CourseGridComponent } from './component/course-grid/course-grid.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseSidebarComponent } from './component/course-sidebar/course-sidebar.component';
import { CourseTableComponent } from './component/course-table/course-table.component';
import { GalleryMasonryComponent } from './component/gallery-masonry/gallery-masonry.component';
import { IndexComponent } from './component/index/index.component';
import { OurTeacherComponent } from './component/our-teacher/our-teacher.component';
import { ShortcodeComponent } from './component/shortcode/shortcode.component';
import { BlogDetailsComponent } from './component/blog-details/blog-details.component';
import { BlogListOneComponent } from './component/blog-list-one/blog-list-one.component';
import { BlogListTwoComponent } from './component/blog-list-two/blog-list-two.component';
import { BlogListThreeComponent } from './component/blog-list-three/blog-list-three.component';
import { BlogZigzacOneComponent } from './component/blog-zigzac-one/blog-zigzac-one.component';
import { BlogZigzacTwoComponent } from './component/blog-zigzac-two/blog-zigzac-two.component';
import { FourOFourComponent } from './component/four-o-four/four-o-four.component';
import { GalleryGridOneComponent } from './component/gallery-grid-one/gallery-grid-one.component';
import { GalleryGridTwoComponent } from './component/gallery-grid-two/gallery-grid-two.component';
import { IndexTwoComponent } from './component/index-two/index-two.component';
import { IndexThreeComponent } from './component/index-three/index-three.component';
import { IndexFourComponent } from './component/index-four/index-four.component';
import { IndexFiveComponent } from './component/index-five/index-five.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogDetailsComponent,
    AboutusComponent,
    ContactComponent,
    CourseDetailsComponent,
    CourseGridComponent,
    CourseListComponent,
    CourseSidebarComponent,
    CourseTableComponent,
    GalleryMasonryComponent,
    IndexComponent,
    OurTeacherComponent,
    ShortcodeComponent,
    BlogListOneComponent,
    BlogListTwoComponent,
    BlogListThreeComponent,
    BlogZigzacOneComponent,
    BlogZigzacTwoComponent,
    FourOFourComponent,
    GalleryGridOneComponent,
    GalleryGridTwoComponent,
    IndexTwoComponent,
    IndexThreeComponent,
    IndexFourComponent,
    IndexFiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
