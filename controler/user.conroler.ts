import { Request } from "express";
import { prisma } from "../db";

class UserController {
    async createUser(req: Request) {
        prisma.user.create(req.body);
    }
}