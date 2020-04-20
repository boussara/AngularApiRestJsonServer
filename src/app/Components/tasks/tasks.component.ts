import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { TasksService } from 'src/app/Services/Tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private tasksservices: TasksService) { }

  ngOnInit() {
    this.gettasks();

  }

  gettasks() {

    this.tasksservices.findAll().subscribe(tasks => this.tasks = tasks);
     }
}
