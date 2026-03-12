import * as crypto from 'node:crypto';

export const createSha256 = (line: string, solt: string) => {
  const shaHasher = crypto.createHmac('sha256', solt);
  return shaHasher.update(line).digest('hex');
};
