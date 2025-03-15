import { RequestHandler } from "express";
import { sendEmail } from "../libs/mailtrap";

export const forgot: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const sended = await sendEmail({
    body: ``,
    subject: "",
    to: email,
  });

  res.json({ message: email, sended });
};
