import { SchoolStudent } from './school-student';
import { Student } from './student';

export class StudentAdapter implements Student {
  schoolStudent: SchoolStudent;
  constructor(schoolStudent: SchoolStudent) {
    this.schoolStudent = schoolStudent;
  }

  getName(): string {
    return this.schoolStudent.getFullName();
  }

  getEmail(): string {
    return this.schoolStudent.getStudentEmail();
  }
}
