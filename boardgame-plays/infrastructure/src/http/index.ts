import Fastify from "fastify";
import { validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { serializerCompiler } from "fastify-type-provider-zod";
import z from "zod";

const fastify = Fastify({
  logger: process.env.NODE_ENV !== "test",
});

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

const playAGamePayloadSchema = z.object({
  boardgameName: z.string(),
  players: z.array(z.string()),
});

const playAGameResponseSchema = z.object({
  boardgameName: z.string(),
  bggId: z.string(),
  players: z.array(z.string()),
});

fastify.withTypeProvider<ZodTypeProvider>().post(
  "/play",
  {
    schema: {
      body: playAGamePayloadSchema,
      response: {
        201: playAGameResponseSchema,
      },
    },
  },
  (request, response) => {
    response.status(201).send({
      boardgameName: request.body.boardgameName,
      bggId: "123",
      players: request.body.players,
    });
  }
);

export { fastify };
