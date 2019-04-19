import { Component, OnInit } from '@angular/core';
import Student from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-get',
  templateUrl: './student-get.component.html',
  styleUrls: ['./student-get.component.css']
})
export class StudentGetComponent implements OnInit {

  students: Student[];
  
  constructor(private ss: StudentService) { }

  ngOnInit() {
	this.getStudents();
  }
  
  getStudents(): void {
	this.ss
    .getStudents()
    .subscribe((data: Student[]) => {
        this.students = data;
    });
  }

  deleteStudent(id) {
    this.ss.deleteStudent(id).subscribe(res => {
		console.log('Deleted');
		this.getStudents();
    });
  }
}