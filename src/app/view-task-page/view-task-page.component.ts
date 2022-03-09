import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';


@Component({
  selector: 'app-view-task-page',
  templateUrl: './view-task-page.component.html',
  styleUrls: ['./view-task-page.component.css'],
})

export class ViewTaskPageComponent implements OnInit {

  constructor(public _accessDataStore: DataStoreService) { }

  ngOnInit(): void {}

}
