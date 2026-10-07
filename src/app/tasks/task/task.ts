import { Component, Input, Output, inject } from '@angular/core';

import { type task } from './task.model';
import { OutletContext } from '@angular/router';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.services';
@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
@Input({ required: true }) task!: task;
private taskService = inject(TaskService)

onCompleteTask () {
  this.taskService.removeTask(this.task.id); 
}
}
