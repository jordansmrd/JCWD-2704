/** @format */

import nodemailer from "nodemailer";
import { pass, user } from "../configs/config";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});
