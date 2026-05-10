import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

export const resend = new Resend(process.env.RESEND_API_KEY);
