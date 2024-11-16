import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { UserGit } from '../../_models/userGit';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy, OnInit, DoCheck{

  constructor(private userService: UserService, private toastr: ToastrService){
    this.user = userService.getUser();
  }

  num: number = 1;
  user: User | undefined;
  userGit: UserGit | undefined;
  username: String = '';

  ngDoCheck(): void {
    console.log("uma mudança foi feita");
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  console.log("Morri")
  }

  adiciona1(){
    this.num++;
  }

  getGitUser(){
    this.userService.getGitUser(this.username)
      .subscribe((res: UserGit) => {
        this.userGit = res;
      }, (erro) => {
        console.log(erro.error)
        this.toastr.error(erro.error.message, 'Erro!')
      });
  }

  pesquisar(){
    this.getGitUser();
    this.username = '';
  }
}
