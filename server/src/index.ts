import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { __prod__ } from "./constants";
import { Products } from "./entities/Products";
import cors from "cors";
import path from "path";
import { ProductResolver } from "./resolvers/ProductResolver";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    logging: true,
    url: process.env.DATABASE_URL,
    synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Products],
  });

  (await __prod__) ? conn.runMigrations() : null;

  // await Products.delete({});

  const app = express();
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProductResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });
  app.get("/", (_, res) => {
    res.send("Welcome to the server");
  });
  app.listen(+process.env.PORT, () => {
    console.log("server started on port 4000");
  });
};
main();
