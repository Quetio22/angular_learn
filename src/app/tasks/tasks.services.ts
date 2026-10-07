import { type NewtaskDate } from './task/task.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn all basic and advenced features of Angular & how to apply them.',
            dueDate: '2025-12-31'
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },

    ];

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }
    addTask(taskdata: NewtaskDate, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskdata.title, 
            summary: taskdata.summary,
            dueDate: taskdata.date
        });
        this.saveTasks();
    }

    removeTask(id: string) {
 this.tasks = this.tasks.filter((task) => task.id !== id);
 this.saveTasks();

    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
} 