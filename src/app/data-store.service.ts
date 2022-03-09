import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

//Structure of Data in Todo List App
export interface TodoStructure {
  userName: String;
  taskAssigned: String[];
}

@Injectable({
  providedIn: 'root',
})

export class DataStoreService {
  todoData: TodoStructure[];
  editTaskData: any = null;

  constructor(public _snackBar: MatSnackBar,public _router: Router) {
    // Check data existance in localstorage,if exist retrieve and parse data, else initialized
    if (localStorage.getItem('todoData') == null || undefined) {
      localStorage.setItem('todoData', '[]');
    }
    this.todoData = JSON.parse(localStorage.getItem('todoData') || '[]');
    
  }

  // Method to trigger toast message 
  triggerToaster(message: any, duration: any) {
    this._snackBar.open(message,'Ok',{
      duration: duration*1000
    });
  }

  // Service method to Create a new user and update the localstorage Todo list data [used by route: addUser]
  addUser(userName: String) {
    try {
      if(userName == ""){
        this.triggerToaster('Kindly fill the Username',3);
        return;
      }
      
      let checkUserExistance = this.todoData.filter((data) => data.userName == userName);
      if (checkUserExistance.length > 0) {
        this.triggerToaster('User Already Exist',3);
        return;
      }

      let userData: TodoStructure = {userName: userName,taskAssigned: []};
      this.todoData.push(userData);
      localStorage.setItem('todoData', JSON.stringify(this.todoData));
      this.triggerToaster('Task Created Successfully!',3);
      this._router.navigate(['']);
    } catch (e) {
      console.log(e);
      this.triggerToaster('Failed to Create User',3);
    }
  }

  // Service method to Add new task to existing user and update the localstorage Todo list data [used by route: assignTask]
  assignTask(userName: String, taskAssigned: String) {
    try {
      if(userName == "" || taskAssigned == ""){
        this.triggerToaster('Kindly fill all the fields',3);
        return;
      }
      for (let i = 0; i < this.todoData.length; i++) {
        if (this.todoData[i].userName == userName) {
          this.todoData[i].taskAssigned.push(taskAssigned);
          localStorage.setItem('todoData', JSON.stringify(this.todoData));
          this.triggerToaster('Task Assigned Successfully',3);
          this._router.navigate(['viewTask']);
          return;
        }
      }
      this.triggerToaster('No match Found',3);
    } catch (e) {
      this.triggerToaster('Unable to Assign Task',3);
    }
  }

  // Service method that returns the entire Todo list data in JSON format [used by routes: assignTask, viewTask]
  getTodoData() {
    return this.todoData.reverse();
  }

  // Service method that returns the entire Todo User list [used by route: assignTask]
  getTodoUserList() {
    let userList = this.todoData.reverse().map((userData) => userData.userName);
    if (userList.length <= 0) {
      this.triggerToaster('No User Found, Kindly Create a new user',5);
      this._router.navigate(['addUser']);
    }
    return userList;
  }

  // Service method to delete a user [used by route: viewTask]
  deleteUser(userName: String){
    try{
      let updatedTodoData = this.todoData.filter((todo=>todo.userName!=userName));
      this.todoData=[...updatedTodoData];
      localStorage.setItem('todoData', JSON.stringify(this.todoData));
      this.triggerToaster('User Deleted Successfully',3);
      this._router.navigate(['viewTask']);
    }
    catch(e){
      this.triggerToaster('Failed to Delete User',3);
    }
  }


  // Service method to delete a specific task [used by route: viewTask]
  deleteTask(userName: String,specificTask: String){
    try{
      for (let i = 0; i < this.todoData.length; i++) {
        if (this.todoData[i].userName == userName) {
          let updatedTaskList = this.todoData[i].taskAssigned.filter((task)=>task!=specificTask);
          this.todoData[i].taskAssigned=[...updatedTaskList];
          localStorage.setItem('todoData', JSON.stringify(this.todoData));
          this.triggerToaster('Task Deleted Successfully',3);
          this._router.navigate(['viewTask']);
          return;
        }
      }
      this.triggerToaster('Failed to Delete Task',3);
      this._router.navigate(['viewTask']);
    }
    catch(e){
      this.triggerToaster('Failed to Delete Task',3);
    }
  }

  // Service method to edit soecific task of an user [used by route: editTask]
  editSpecificTask(userName: String, updatedTask: String){
    try{
      for (let i = 0; i < this.todoData.length; i++) {
        if (this.todoData[i].userName == userName) {
          for(let j = 0; j < this.todoData[i].taskAssigned.length;j++){
            if(this.todoData[i].taskAssigned[j]==this.editTaskData.specificTask){
              this.todoData[i].taskAssigned[j]=updatedTask;
              localStorage.setItem('todoData', JSON.stringify(this.todoData));
              this.editTaskData=null;
              this.triggerToaster('Task Updated Successfully',3);
              this._router.navigate(['viewTask']);
              return;
            }
          }
        }
      }
      this.triggerToaster('Failed to Update Task',3);
      this._router.navigate(['viewTask']);
    }
    catch(e){
      this.triggerToaster('Failed to Update Task',3);
    }
  }

  // Method to redirect to edit page [used by route: editTask]
  redirectToEditTask(userName: String, specificTask: String){
    this.editTaskData={
      'userName': userName,
      'specificTask': specificTask
    }
    this._router.navigate(['editTask']);
  }


  // Check if data need to editted are stored [used by route: editTask]
  checkEditTaskPageValidity(){
    if(this.editTaskData==null){
      this.triggerToaster('Invalid Access',3);
      this._router.navigate(['viewTask']);
    }
  }

}
