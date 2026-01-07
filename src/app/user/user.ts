import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent{
  @Input({required:true}) id!: string;
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  // @Output() select = new EventEmitter<{id:string; name: string}>();
  @Output() select = new EventEmitter<string>();

  // select = output<string>();
  // avatar = input<string>();
  // name = input<string>();

  // imagePath = computed(()=> { return 'assets/users/' + this.avatar()})
  
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // onSelected() {
  //   this.select.emit({id:this.id, name:this.name})
  // }
    onSelected() {
    this.select.emit(this.id)
  }
}

