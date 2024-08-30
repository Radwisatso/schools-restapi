import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
const port = +process.env.PORT! || 3000
const prisma = new PrismaClient();
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// Get mentors
app.get("/mentors", async (c) => {
  const mentors = await prisma.mentor.findMany();
  return c.json(
    {
      status: "success",
      message: "Successfully read mentors",
      data: mentors,
    },
    200
  );
});

// Add mentors
app.post("/mentors", async (c) => {
  const { username } = await c.req.json();
  const newMentor = await prisma.mentor.create({
    data: { username },
  });
  return c.json({
    status: "success",
    message: "Successfully add a mentor",
    data: newMentor,
  });
});



export default {
  port: port,
  fetch: app.fetch
};
