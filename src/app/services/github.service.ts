import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id = '62499bf7b3604a16a36d';
    private client_secret='81cfadabaa65f0c2117474ac56e8b9845a3151c0';

	constructor(private _http:Http){
		console.log('In GithubService');
		this.username='soutya9';
	}

	 getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }
    
     getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }

	updateUser(username:string){
		this.username=username;
	}
}