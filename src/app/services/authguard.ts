import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuardService} from './loginservice';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private authenticationService: AuthGuardService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       let url = state.url;/*get current url into var url*/

    return this.checkLogin(url);/*checking url and providing to login*/
  }

/*logic for checkLogin*/
  checkLogin(url: string): boolean {
    if (this.authenticationService.isLoggedIn) { return true; }

    this. authenticationService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
