import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';
import { TasksService } from 'src/app/Services/Tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  searchtext = '';
  showform = false;
  editform = false;
  mytask: Task = {
    label: '',
    completed: false
  };
  tasks: Task[] = [];
  reasulttasks: Task[] = [];

  constructor(private tasksservices: TasksService) { }

  ngOnInit() {
    this.gettasks();

  }

  gettasks() {

    this.tasksservices.findAll()
    .subscribe(tasks => {
      this.reasulttasks = this.tasks = tasks;
    });
     }

  deletetasks(id) {

    // alert('Button is clicked' + id);
    // tslint:disable-next-line: deprecation
    // console.log(event);


     this.tasksservices.delete(id).subscribe(() => {
   this.tasks = this.tasks.filter(task => task.id !== id);
 });

  }

  persistetask() {
     // alert('Button is clicked');
      // tslint:disable-next-line: deprecation
     // console.log(event);

      this.tasksservices.persiste(this.mytask)
    .subscribe((task) => {
     this.tasks = [task, ...this.tasks];
     this.resttask();
     this.showform = false;
    });


  }

  resttask() {

    this.mytask = {
      label: '',
      completed: false
    };


  }

  toggulecompleted(task) {
    this.tasksservices.completed(task.id , task.completed)
    .subscribe(() => {
       task.completed = !task.completed;
    });

  }

  edittask(task) {
    this.mytask = task;
    this.editform = true;

  }

  updatetask() {
  this.tasksservices.update(this.mytask).subscribe(task => {
    this.resttask();
    this.editform = false;
  });
  }

  searchtask(){

this.reasulttasks = this.tasks.filter((task) => task.label.toLowerCase().includes(this.searchtext.toLowerCase()));

  }
}
