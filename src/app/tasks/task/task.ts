import { Component, EventEmitter, Input, Output} from '@angular/core';

import { type task } from './task.model';
import { OutletContext } from '@angular/router';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
@Input({ required: true }) task!: task;
@Output() complete = new EventEmitter<string>(); 

onCompleteTask () {
  this.complete.emit(this.task.id); 
}
}
