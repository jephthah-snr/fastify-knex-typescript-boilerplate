import "reflect-metadata";
import fastify, {
  FastifyInstance
} from 'fastify';
import { Model } from 'objection';
import database from "./configurations/knexfile"
import knex from "knex";
import * as dotenv from 'dotenv';
import { Server, IncomingMessage, ServerResponse } from 'http';
dotenv.config();

class App {
  public app: FastifyInstance<Server, IncomingMessage, ServerResponse>;
  public app_domain: string = '0.0.0.0';
  public app_port = process.env.PORT || 5000;

  constructor() {
    this.app = fastify({ logger: true });
    App.database();

    this.app.register(require('fastify-jwt'), {
      secret: process.env.JWT_SECRET,
    });

    this.listen();
  }

  private static database() {
    Model.knex(knex(database.development));
  }

  public listen() {
    this.app.listen(this.app_port, '0.0.0.0', () => {
      console.log(`App listening at port ${this.app_port} 🌟👻`);
    });
  }
}

export default App;
