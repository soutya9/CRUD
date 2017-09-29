import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { editBook } from './components/Forms/editBook';
import { Home} from './components/Forms/Home';
import { viewBook } from './components/Forms/viewBook';
import { addBook } from './components/Forms/addBook';
import { DonorFormService } from './services/donorForm.service';
import { login} from './components/Forms/login';
import { AuthGuardService} from './services/loginservice';
import { AuthGuard} from './services/authguard';

export const router: Routes = [
{path:'login', component:login},
{
        path: '',/*if no path*/
        component:Home,/*go to cool*/
        canActivate: [AuthGuard],/*canActive avoids routing to other pages. Allows 
                                   route only when AuthGuard service is valid */
        children: [

/*sub routes or children routes of cool component*/

{path:'addBook', component: addBook},
{path:'view', component: viewBook},
{path:'edit', component:editBook},
{path:'edit/:id', component:editBook},

]}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);