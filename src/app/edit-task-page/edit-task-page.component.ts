import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.css']
})
export class EditTaskPageComponent implements OnInit {
  constructor(public _accessDataStore: DataStoreService) { 
    this._accessDataStore.checkEditTaskPageValidity();
  }

  ngOnInit(): void {
  }

}
