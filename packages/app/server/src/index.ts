import express from "express";
import { PrismaClient } from "@prisma/client";
import { prototype } from "events";

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
})