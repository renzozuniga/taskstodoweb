import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public get_tasks() {
    return this.http.get(this.baseUrl + '/task');
  }

  public create_task(task: any): Observable<any>  {
    return this.http.post(this.baseUrl + '/task', task );
  }

  public update_task(id: string, task: any): Observable<any>  {
    return this.http.put(this.baseUrl + '/task/' + id, task );
  }
}