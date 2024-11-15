import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy, OnInit, DoCheck{

  constructor(private userService: UserService){
    this.user = userService.getUser();
  }

  num: number = 1;
  user: User | undefined;

  ngDoCheck(): void {
    console.log("uma mudança foi feita");
  }

  ngOnInit(): void {
    console.log("Nasci");
  }

  ngOnDestroy(): void {
  console.log("Morri")
  }

  adiciona1(){
    this.num++;
  }


}
