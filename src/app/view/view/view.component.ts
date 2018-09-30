import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../hello.service';
import { HttpClient } from '@angular/common/http';
import { MyServiceService } from '../../my-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  userName: string = '';
  response: any;

  constructor(private helloService: HelloService,
    private httpClient: HttpClient,
    private myService : MyServiceService) {

    helloService.printConsole("from the second module")

  }

  ngOnInit() {
  }

  search() {
    this.myService.sayHi();
    this.helloService.printConsole("search() invoked")
    this.httpClient.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response
        this.helloService.printConsole(response);

      })

      
  }

}
