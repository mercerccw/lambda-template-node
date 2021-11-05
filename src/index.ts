import { anotherHello } from './models/hello';

const handler = async (_event: any = {}): Promise<any> => {
  console.log('Hello World!');
  const greeting = anotherHello();
  const response = JSON.stringify(greeting, null, 2);
  return response;
};

export { handler };
