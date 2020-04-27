import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private router: Router,
    private data: DataService
  ) { }
  
  taskForm: FormGroup;
  
  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      time: new FormControl({
        "hour": 13,
        "minute": 30
      })
    });
  }

  onSubmit(){
    let time = this.taskForm.value.time;
    this.taskForm.value.time = time.hour + ':' + time.minute;
    this.taskForm.value.checked = false;
    console.log('FORM: ', this.taskForm.value);
    this.taskService.create_task(this.taskForm.value)
      .subscribe(data =>
        this.goTaskList(), 
        error => console.log(error));
  }

  goTaskList() {
    this.router.navigate(['/']);
    this.newMessage();
  }

  newMessage() {
    this.data.changeMessage('Stored successfully!');
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}