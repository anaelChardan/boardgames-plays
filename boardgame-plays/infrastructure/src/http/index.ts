import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.post("/play", (_request, _reply) => {
  return { hello: "world" };
});

export { fastify };
