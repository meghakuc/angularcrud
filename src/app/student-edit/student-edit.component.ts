import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  angForm: FormGroup;
  student: any = {};
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private ss: StudentService,
    private fb: FormBuilder) { 
		this.createForm();
	}
	
  createForm() {
	this.angForm = this.fb.group({
		student_name: ['', Validators.required],
		department_name: ['', Validators.required],
		roll_number: ['', Validators.required]
	  });
  }
  
  updateStudent(student_name, department_name, roll_number) {
    this.route.params.subscribe(params => {
		this.ss.updateStudent(student_name, department_name, roll_number, params['id'])
		.subscribe((data: string) =>{
			console.log(data);
			this.router.navigate(['student']);
		});
    });
  }

  ngOnInit() {
	this.route.params.subscribe(params => {
        this.ss.editStudent(params['id']).subscribe(res => {
          this.student = res;
      });
    });
  }
}