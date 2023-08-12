export class SingletonClass {
  private static singletonClassReference: SingletonClass;

  private constructor() {}

  public static getInstance() {
    if (!SingletonClass.singletonClassReference) {
      SingletonClass.singletonClassReference = new SingletonClass();
    }
    return SingletonClass.singletonClassReference;
  }

  public doSomeWork() {
    console.log('I am doing some work');
  }
}
