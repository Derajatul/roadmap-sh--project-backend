FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

RUN npm install

# Generate Prisma Client
RUN npx prisma generate

COPY . .

EXPOSE 3000

# We use a shell script or a multi-command string to handle migrations before starting
CMD npx prisma db push && npm run dev
