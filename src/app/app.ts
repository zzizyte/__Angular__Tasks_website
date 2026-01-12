import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  users = DUMMY_USERS;
  selectedUserID = 'someID'

  onSelectUser(id:string){
    this.selectedUserID = id;
  }

  get selectedUser() {
    return this.users.find((user)=>user.id === this.selectedUserID)!;

  }

  
  // // onSelectUser(user:{id:string, name: string}) {
  // //   this.selectedUserID = user.id;
  // //   this.selectedUserName = user.name;
  // // }
}
