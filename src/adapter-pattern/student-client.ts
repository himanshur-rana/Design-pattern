import { CollegeStudent } from './college-student';
import { SchoolStudent } from './school-student';
import { Student } from './student';
import { StudentAdapter } from './student-adapter';

export class StudentClient {
  getStudents(): Student[] {
    const students: Student[] = [];
    const clgStudentObj = new CollegeStudent(
      'Himanshu',
      'himanshurjj@gmail.com'
    );
    students.push(clgStudentObj);
    const sclStudentObj = new StudentAdapter(
      new SchoolStudent('Himanshu', 'himanshu.rana@simpplr.com')
    );
    students.push(sclStudentObj);
    return students;
  }
}
