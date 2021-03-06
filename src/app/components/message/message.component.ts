import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string = '';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    if (this.message.length) {
      M.toast({html: this.message, classes: 'rounded'});
    }
  }

}
