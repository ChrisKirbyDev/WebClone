import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { IndexTwoComponent } from './component/index-two/index-two.component';
import { IndexThreeComponent } from './component/index-three/index-three.component';
import { IndexFourComponent } from './component/index-four/index-four.component';
import { IndexFiveComponent } from './component/index-five/index-five.component';

const routes: Routes = [
  { path: 'first-component', component: IndexComponent },
  { path: 'second-component', component: IndexTwoComponent },
  { path: 'third-component', component: IndexThreeComponent },
  { path: 'fourth-component', component: IndexFourComponent },
  { path: 'fifth-component', component: IndexFiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
