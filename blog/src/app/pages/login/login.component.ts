import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  profile:any={
		name:'',
		password:''
		
	  }

	show(pf:any):void{
	
		alert("Name : "+ pf.name + " \n password : "+pf.password)
	
	};




}
