import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import { requireAuth } from '@clerk/express';

const auth = requireAuth({signInUrl: process.env.CLERK_SIGN_IN_URL})

dotenv.config();
const app = express();
// app.use(requireAuth());



ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on https://localhost:3000/ ..."),
);
