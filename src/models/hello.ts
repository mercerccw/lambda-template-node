import moment from 'moment';

const place = 'person';

function anotherHello(world: string = place): any {
  const now = moment();
  console.log(now.toISOString());
  console.log(`Hello ${world}! `);
  return {
    now: now.toISOString(),
    greeting: `Hello ${world}! `,
  };
}

export { anotherHello };
