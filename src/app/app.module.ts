import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routes }  from './app.router';
import { AppComponent }  from './app.component';
import { AuthGuard} from './services/authguard';
import { login} from './components/Forms/login';
import { register } from './components/Forms/register';
import { AuthGuardService} from './services/loginservice';
import { Home } from './components/Forms/Home';
import { addBook } from './components/Forms/addBook';
import { viewBook } from './components/Forms/viewBook';
import { editBook } from './components/Forms/editBook';
import { profile} from './components/Profile/profile.component';
import { DonorFormService } from './services/donorForm.service';
import { GithubService } from './services/github.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routes, RouterModule ],
  declarations: [register, login, Home, addBook,viewBook, editBook, AppComponent, profile],
  bootstrap:    [ AppComponent ],/*bootstap don e to root component always*/
  providers: [DonorFormService,AuthGuardService,AuthGuard, GithubService]
  /*providers: [GithubService]*/ //for service, provided here insted in app.component
})
export class AppModule { }