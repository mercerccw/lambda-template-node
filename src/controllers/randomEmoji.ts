import { emojis } from '../models/emojis';

function randomEmoji(): string {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

export { randomEmoji };
