import { Component, OnInit } from '@angular/core';
import { User } from './address-input-style2/user.model';
import { HelloService } from './hello.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  
  title = 'Niraj';

  user: User;
  response  : any;
  constructor(private helloService : HelloService,
              private httpClient : HttpClient) {
    this.user = new User();
    this.user.name = "Nikhil Valand";
    this.user.title = "Drupal Developer";
    this.user.address = "D-Cabin, Chandkheda",
      this.user.phone = ['7600637906', '8460828683'];


      helloService.printConsole(this.user);
  }


  ngOnInit(): void {
    let obs = this.httpClient.get('http://localhost:8080/api/products');
    obs.subscribe((response) => {
        this.helloService.printConsole(response)

        this.response = response;

       
    })
  }

}

