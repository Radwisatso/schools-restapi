import { Hono } from "hono";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
