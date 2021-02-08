import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  list=[];
  constructor(private http : HttpClient,private router: Router) { }

  ngOnInit() {
    var token=JSON.parse(localStorage.getItem("currentUser"));
   token=token.token;
    var reqHeader = new HttpHeaders({ 'Authorization': 'Bearer '+token });
   
    this.http.get<ApiResults>('http://localhost:57949/api/customer',{headers : reqHeader}).subscribe(data => {
      console.log(data);
      this.list = data.list,
      error => console.error('Hata !',error)
      
      
    })
  }

}

interface ApiResults {
  total:number;
  list: Array<object>;
}
