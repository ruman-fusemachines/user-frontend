import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from '../user/user.component';
import { UserdetailComponent} from '../userdetail/userdetail.component';
import { UserAddComponent} from '../user-add/user-add.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/users', pathMatch:'full'},
  {path:'users', component: UserComponent},
  {path: 'user/detail/:id', component: UserdetailComponent},
  {path: 'user/add', component: UserAddComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
