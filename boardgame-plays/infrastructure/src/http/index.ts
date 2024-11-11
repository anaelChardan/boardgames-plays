import { PlayAGame } from "@boardava/domain";
import Fastify from "fastify";
import { validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { serializerCompiler } from "fastify-type-provider-zod";
import z from "zod";

type Dependencies = {
  playAGame: PlayAGame; // on dépend du contrat
};

export function buildHttpServer(dependencies: Dependencies) {
  const fastify = Fastify({
    logger: process.env.NODE_ENV !== "test",
  });
  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);

  const { playAGame } = dependencies;

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
      // ici on peut faire des validations supplémentaires
      // on peut aussi adapter la réponse dédié au HTTP
      const play = playAGame.forBoardgame(
        request.body.boardgameName,
        request.body.players
      );

      response.status(201).send(play);
    }
  );

  return fastify;
}
