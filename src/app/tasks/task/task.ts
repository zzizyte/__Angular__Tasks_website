import { Component, Input } from '@angular/core';
import { Task } from '../task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  constructor(private TasksService: TasksService) {}
  onCompleteTask() {
    this.TasksService.removeTask(this.task.id);
  }
}
