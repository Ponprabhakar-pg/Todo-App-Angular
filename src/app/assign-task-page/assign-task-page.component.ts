import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';


@Component({
  selector: 'app-assign-task-page',
  templateUrl: './assign-task-page.component.html',
  styleUrls: ['./assign-task-page.component.css'],
})
export class AssignTaskPageComponent implements OnInit {

  constructor(public _accessDataStore: DataStoreService,) {
  }

  ngOnInit(): void {}


}
