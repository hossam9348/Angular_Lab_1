import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  age: number = 0;
  name: string = "";
  id: number = 0;
  Students: { id: number, name: string, age: number }[] = [];

  flagName: boolean = false;
  flagAge: boolean = false;


  add(): boolean {
    this.flagAge = false;
    this.flagName = false;
    if (this.name.length < 3 || this.name == "") { this.flagName = true; return false; }
    if (this.age < 19 || this.age == 0) { this.flagAge = true; return false; }
    this.Students.push({ id: this.id++, name: this.name, age: this.age });
    age: this.age = 0;
    name: this.name = "";
    return true;
  }
}

