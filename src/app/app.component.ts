import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { Home } from './components/Forms/Home';
import { login} from './components/Forms/login';
import { register} from './components/Forms/register';
import { addBook } from './components/Forms/addBook';
import { viewBook } from './components/Forms/viewBook';
import { DonorFormService } from './services/donorForm.service';
import { AuthGuard } from './services/authguard';
import { editBook } from './components/Forms/editBook';
import { AuthGuardService} from './services/loginservice';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>
  `
})
export class AppComponent  { 

}

