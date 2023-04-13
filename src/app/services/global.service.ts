import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  //subjects global 
  private userTitle = new Subject<string>();
  public setUserTitle = this.userTitle.asObservable();    


  constructor() { }

  getUserTitle(name:string="Test of"){
    this.userTitle.next(name)
  }
}
