import moment from 'moment';

const place = 'person';

export default function anotherHello(world: string = place): void {
  const now = moment();
  console.log(now.toISOString());
  console.log(`Hello ${world}! `);
}
