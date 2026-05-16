import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  //   port: 587,
  auth: {
    user: "kaushik.cyber7@gmail.com",
    pass: "caze ucqm zwwh lqok",
  },
});

try {
  const info = await transporter.sendMail({
    from: "Kaushik Patel <kaushik.cyber7@gmail.com>",
    to: "kaushik.lf07@gmail.com",
    subject: "Hello Procodrr",
    html: "<h2>Hello world?</h2>",
  });

  console.log("Message sent: %s", info.messageId);
} catch (err) {
  console.error("Error while sending mail:", err);
}
