import convict from 'convict';
import validator from 'convict-format-with-validator';

export type RestSchema = {
  PORT: number,
  SALT: string,
  DB_HOST: string
};

convict.addFormats(validator);

export const restSchema = convict<RestSchema>({
  PORT: {
    doc: 'Port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
  },
  SALT: {
    doc: 'Salt for password hash',
    format: String,
    default: null,
    env: 'SALT',
  },
  DB_HOST: {
    doc: 'IP address of the database server (MongoDB)',
    format: 'ipaddress',
    env: 'DB_HOST',
    default: '127.0.0.1'
  },
});


