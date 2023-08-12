import { SingletonClass } from './singleton-class';

const main = () => {
  const instance1 = SingletonClass.getInstance();
  instance1.doSomeWork();

  const instance2 = SingletonClass.getInstance();
  instance2.doSomeWork();
};

main();
