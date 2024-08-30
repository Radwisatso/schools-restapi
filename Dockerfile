FROM oven/bun

WORKDIR /app

COPY . /app

RUN bun install

COPY prisma ./prisma/

COPY . .

RUN bunx prisma generate
# RUN bunx prisma migrate dev 

CMD ["bunx", "prisma", "migrate", "dev" , "&&", "bun", "start"]