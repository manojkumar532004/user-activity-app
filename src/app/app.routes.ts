import { Routes } from '@angular/router';
import { RegisterPage } from './user/register-page/register-page';
import { LoginPage } from './user/login-page/login-page';
import { MainHome } from './main-home/main-home';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { UserComponent } from './user/user-component/user-component';
import { ProfileComponent } from './user/profile-component/profile-component';
import { ActivityComponent } from './activity/activity-component/activity-component';
import { GoalComponent } from './activity/goal-component/goal-component';

export const routes: Routes = [
    {path:'',component:MainHome},
    {path:'register-page',component:RegisterPage},
    {path:'login-page',component:LoginPage},
    {path:'dashboard',component:Dashboard},
    {path:'user-component',component:UserComponent},
    {path:'profile-component',component:ProfileComponent},
    {path:'activity-component',component:ActivityComponent},
    {path:'goal-component',component:GoalComponent}
];
