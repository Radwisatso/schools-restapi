FROM oven/bun

WORKDIR /app

COPY . /app

RUN bun install

COPY prisma ./prisma/

COPY . .

RUN bunx prisma generate

# CMD ["bunx", "prisma", "migrate", "dev" , "&&", "bun", "start"]
CMD ["bun", "start"]