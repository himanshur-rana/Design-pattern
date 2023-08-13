export class SchoolStudent {
  fullName: string;
  studentEmail: string;
  constructor(fullName: string, studentEmail: string) {
    this.fullName = fullName;
    this.studentEmail = studentEmail;
  }

  getFullName(): string {
    return this.fullName;
  }

  getStudentEmail(): string {
    return this.studentEmail;
  }
}
