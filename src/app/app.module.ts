// Importing required Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

// Importing Modules from Material UI
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';


// Importing other Components
import { MainPageComponent } from './main-page/main-page.component';
import { AddUserPageComponent } from './add-user-page/add-user-page.component';
import { AssignTaskPageComponent } from './assign-task-page/assign-task-page.component';
import { ViewTaskPageComponent } from './view-task-page/view-task-page.component';
import { DataStoreService } from './data-store.service';
import { EditTaskPageComponent } from './edit-task-page/edit-task-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddUserPageComponent,
    AssignTaskPageComponent,
    ViewTaskPageComponent,
    EditTaskPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [DataStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
