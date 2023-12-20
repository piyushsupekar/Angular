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
    if(pf.name=="Dnyaneshwar" && pf.password=="123456"){

      alert("login Succesfull");3
    }
	
    else{
      alert('Invalid User Name or Password');
    }
	};




}
