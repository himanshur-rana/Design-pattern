import { Student } from './student';

export class CollegeStudent implements Student {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }
}
