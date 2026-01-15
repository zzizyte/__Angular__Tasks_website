import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Output() select = new EventEmitter<{id:string; name: string}>();
  @Output() select = new EventEmitter<string>();

  // select = output<string>();
  // avatar = input<string>();
  // name = input<string>();

  // imagePath = computed(()=> { return 'assets/users/' + this.avatar()})

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // onSelected() {
  //   this.select.emit({id:this.id, name:this.name})
  // }
  onSelected() {
    this.select.emit(this.user.id);
  }
}
