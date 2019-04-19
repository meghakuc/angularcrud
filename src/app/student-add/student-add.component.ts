import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators} from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ss: StudentService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      student_name: ['', Validators.required],
      department_name: ['', Validators.required],
      roll_number: ['', Validators.required]
    });
  }
  
  addStudent(student_name, department_name, roll_number) {
    this.ss.addStudent(student_name, department_name, roll_number);
  }

  ngOnInit() {
  }
}