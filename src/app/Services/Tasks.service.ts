import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  apiurl = 'http://localhost:3000/tasks/';

constructor(private http: HttpClient) { }

findAll() {

  return this.http.get<Task[]>(this.apiurl);
}

delete(id) {

return this.http.delete(this.apiurl + id);
           }

persiste(task) {
return this.http.post<Task>(this.apiurl, task);
}

completed(id , completed) {
  return this.http.patch(this.apiurl + id, {completed: !completed});
}
update(task) {
return this.http.put(this.apiurl + task.id , task);
}
}
