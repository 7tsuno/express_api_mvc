import mysql from 'mysql';
import config from '../config/config';

const db = config.db;
const table = 'users';

const show = async () => {
  return await [
    {
      id : "001"
    }
  ]
};

export default {
  show,
};
