import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  constructor(private fb: FormBuilder, private userService: UserService){}

  userSelecionado: User | undefined = undefined;

  userForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.inicializaForm();
  }

  inicializaForm(){
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(250)]]
    });
  }

  infoUserSelecionado(user: User){
    this.userService.setUser(user);
    this.userSelecionado = user;
  }

  enviarForm(){
    if(this.userForm.valid){
      this.users.push(this.userForm.value)
      this.userForm.reset()
    }
  }

  users: User[] = [
    {nome:"Beto", idade: 49},
    {nome:"Maria", idade: 22},
    {nome:"Nanda", idade: 23},
    {nome:"Luis", idade: 26}
  ];
}
