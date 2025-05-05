import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskInput = '';
  tasks: string[] = [];
  editIndex: number | null = null;

  addTask() {
    if (this.taskInput.trim()) {
      this.tasks.push(this.taskInput);
      this.taskInput = '';
    }
  }

  editTask(index: number) {
    this.editIndex = index;
  }

  updateTask() {
    this.editIndex = null;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    if (this.editIndex === index) {
      this.editIndex = null;
    }
  }
}
