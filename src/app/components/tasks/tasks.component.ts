import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasksList: any;

  constructor(
    private route: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.get_tasks().subscribe(tasks => {
      this.tasksList = tasks;
      console.log(this.tasksList);
    });
  }

  onClickAddTask() {
    this.route.navigate(['task/new']);
  }

  onClickUpdateTask(event: any, task: any) {
    let taskModel = {
      title: task.title,
      description: task.description,
      time: task.time,
      checked: event.target.checked
    };
    this.taskService.update_task(task.id, taskModel).subscribe(task => {
      console.log('UPDATED');
    })
  }
}
