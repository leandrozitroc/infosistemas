import Knex from "knex";
import * as env from "dotenv"

export const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.HOST,
      user : process.env.USER,
      password : process.env.PASSWD,
      database : process.env.DB
    }
  });
