import moment from 'moment';

const place = 'person';

function healthCheck(world: string = place): any {
  const now = moment();
  console.log(now.toISOString());
  console.log(`Hello ${world}! `);
  return {
    timestamp: now.toISOString(),
    health: 'Server is good 👍',
  };
}

export { healthCheck };
