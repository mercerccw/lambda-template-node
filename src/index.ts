import { anotherHello } from './models/hello';

const handler = async (_event: any = {}): Promise<any> => {
  const responseMessage = 'Hello, World!';
  if (process.env.isLambda) {
    console.log(anotherHello());
  }
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};

export { handler };
