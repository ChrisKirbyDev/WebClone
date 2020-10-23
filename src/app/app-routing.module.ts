import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './container/index/index/index.component';
import { IndexTwoComponent } from './container/index/index-two/index-two.component';
import { IndexThreeComponent } from './container/index/index-three/index-three.component';
import { IndexFourComponent } from './container/index/index-four/index-four.component';
import { IndexFiveComponent } from './container/index/index-five/index-five.component';
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
