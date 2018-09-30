import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  printConsole(args) {
    console.log(args);
  }

}
