import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  uri = 'http://localhost:4000/student';

  constructor(private http: HttpClient) { }

  addStudent(student_name, department_name, roll_number) {
    const obj = {
      student_name: student_name,
      department_name: department_name,
      roll_number: roll_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  
  getStudents() {
    return this
           .http
           .get(`${this.uri}`);
  }
  
  editStudent(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  
  updateStudent(student_name, department_name, roll_number, id) {
    const obj = {
        student_name: student_name,
        department_name: department_name,
        roll_number: roll_number
      };
    return this
      .http
      .post(`${this.uri}/update/${id}`, obj);
  }
  
  deleteStudent(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}