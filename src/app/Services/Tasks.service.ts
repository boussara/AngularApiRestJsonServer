import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

constructor(private http: HttpClient) { }

findAll() {

  return this.http.get<Task[]>('http://localhost:2000/tasks');
}

}
