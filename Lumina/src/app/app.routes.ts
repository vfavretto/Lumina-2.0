import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
];
