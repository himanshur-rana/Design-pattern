export class SingletonClass {
  private static singletonClassReference: SingletonClass;
  private counter: number;
  private constructor() {
    this.counter = 0;
  }

  public static getInstance() {
    if (!SingletonClass.singletonClassReference) {
      SingletonClass.singletonClassReference = new SingletonClass();
    }
    return SingletonClass.singletonClassReference;
  }

  public doSomeWork() {
    console.log(this);
    this.counter++;
    console.log('I am doing some work');
  }
}
