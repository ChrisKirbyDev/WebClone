import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { IndexTwoComponent } from './component/index-two/index-two.component';
import { IndexThreeComponent } from './component/index-three/index-three.component';
import { IndexFourComponent } from './component/index-four/index-four.component';
import { IndexFiveComponent } from './component/index-five/index-five.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'first-component', component: IndexTwoComponent },
  { path: 'second-component', component: IndexThreeComponent },
  { path: 'third-component', component: IndexFourComponent },
  { path: 'fourth-component', component: IndexFiveComponent },
  { path: 'about-us-component', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
