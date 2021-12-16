import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserModel } from '../models/UserModel';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  users: UserModel[];

  showUserForm: boolean = false;

  name = '';
  email = "";
  gender = "";
  status = "";

  @Output() add = new EventEmitter<UserModel>();


  addUser(){
    const user: UserModel = {
      id: Math.round(Math.random()*1000),
      name: this.name,
      email: this.email,
      gender: this.gender,
      status: this.status
    };
    this.add.emit(user);
  }
  ngOnInit(): void {}

  onSubmit(e: any){
    
  }
}
