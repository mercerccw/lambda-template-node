// import anotherHello from './models/hello';

// eslint-disable-next-line no-unused-vars
export default async (event: any = {}): Promise<any> => {
  // console.log(event);
  // const greeting = anotherHello();
  const response = JSON.stringify(event, null, 2);
  return response;
};
