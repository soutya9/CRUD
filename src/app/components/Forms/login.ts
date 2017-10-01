import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { AuthGuardService} from '../.././services/loginservice';

@Component({
    moduleId: module.id,
    selector:'login',
    templateUrl: 'login.html'
})

export class login implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    value={};

    constructor(
        private route: ActivatedRoute,/*use only whem using snapshot*/
        private router: Router,/*use only when we navigate */
        private authenticationService: AuthGuardService
        ) { }

    ngOnInit() {
        // reset login status
        // get return url from route parameters or default to '/'
        /*snapshot for getting current element. Can be anything, eg. url, id*/
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model)
            .subscribe(
                data => {
                   /* this.router.navigate([this.returnUrl]);*/
                },
                error => {
                    this.loading = false;
                });
    }

    /*logOut() {

    console.log("in logout")
    this.value=this.authenticationService.logout();
    console.log(this.value)
  }*/
}