import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';


@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.css'],
})

export class AddUserPageComponent implements OnInit {
  constructor(public _accessDataStore: DataStoreService) {}

  ngOnInit(): void {}

}
