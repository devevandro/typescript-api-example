import { MailtrapClient, MailtrapClientConfig } from "mailtrap";

type Email = {
  to: string;
  subject: string;
  body: string;
};

export const sendEmail = async ({ to, subject, body }: Email) => {
  const options: MailtrapClientConfig = {
    token: '',
    testInboxId: 0,
  };
  const mailtrap = new MailtrapClient(options);

  try {
    await mailtrap.testing.send({
      from: { name: '', email: ''},
      to: [{ email: to }],
      subject,
      html: body,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
