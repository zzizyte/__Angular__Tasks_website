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
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user)=>user.id === this.selectedUserId);

  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
  
  // // onSelectUser(user:{id:string, name: string}) {
  // //   this.selectedUserId = user.id;
  // //   this.selectedUserName = user.name;
  // // }
}
