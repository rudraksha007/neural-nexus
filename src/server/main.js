import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import { ClerkExpressWithAuth } from '@clerk/express';
import { requireAuth } from '@clerk/express';


dotenv.config();
const app = express();
app.use(
  ClerkExpressWithAuth({
    secretKey: process.env.CLERK_SECRET_KEY,
  })
);



ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on https://localhost:3000/ ..."),
);
