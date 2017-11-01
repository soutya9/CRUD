import { Component} from '@angular/core';
import { GithubService } from '../.././services/github.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId : module.id,
  selector: 'Profile',
  templateUrl: `profile.html`
})

export class profile  {
	user: any[];
	repos: any[];
	username:string;

 	constructor(private _githubService:GithubService){

 		this.user=null;
 		/*this._githubService.getUser().subscribe(user =>{
 			console.log(user);
 			this.user=user;
 		})

 		this._githubService.getRepos().subscribe(repos =>{
 			console.log(repos);
 			this.repos=repos;
 		})*/
 	}

 	searchUser(){
 		this._githubService.updateUser(this.username);

 		this._githubService.getUser().subscribe(user =>{
 			console.log(user);
 			this.user=user;
 		})

 		this._githubService.getRepos().subscribe(repos =>{
 			console.log(repos);
 			this.repos=repos;
 		})
 	}
}
