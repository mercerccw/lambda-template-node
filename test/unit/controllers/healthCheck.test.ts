import { healthCheck } from '../../../src/controllers';

describe('health tests', () => {
  it('healthCheck returns status', () => {
    expect(healthCheck().health).toBe('Server is good 👍');
  });
});
