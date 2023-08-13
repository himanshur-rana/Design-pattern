import { StudentClient } from './student-client';

class Demo {
  main() {
    const client = new StudentClient();
    const students = client.getStudents();
    for (const student of students) {
      console.log(student.getName());
      console.log(student.getEmail());
    }
  }
}

new Demo().main();
