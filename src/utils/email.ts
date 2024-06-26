// https://medium.com/@chiragmehta900/how-to-send-mail-in-node-js-with-nodemailer-in-typescript-889cc46d1437
import nodemailer from "nodemailer";
import chalk from "chalk";
import "dotenv";

export interface MailInterface {
  from?: string;
  to: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
  subject: string;
  text?: string;
  html: string;
}

export default class MailService {
  private static instance: MailService;
  private transporter!: nodemailer.Transporter;

  private constructor() {}
  //INTSTANCE CREATE FOR MAIL
  static getInstance() {
    if (!MailService.instance) {
      MailService.instance = new MailService();
    }
    return MailService.instance;
  }
  //CREATE CONNECTION FOR LOCAL
  async createLocalConnection() {
    let account = await nodemailer.createTestAccount();
    this.transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
  }
  //CREATE CONNECTION FOR LIVE
  async createConnection() {
    nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: "",
        pass: ""
      }
    });
  }
  //SEND MAIL
  async sendMail(
    requestId: string | number | string[],
    options: MailInterface
  ) {
    return await this.transporter
      .sendMail({
        from: options.from,
        to: options.to,
        cc: options.cc,
        bcc: options.bcc,
        subject: options.subject,
        text: options.text,
        html: options.html,
      })
      .then((info) => {
        Logging.info(`${requestId} - Mail sent successfully!!`);
        Logging.info(
          `${requestId} - [MailResponse]=${info.response} [MessageID]=${info.messageId}`
        );
        if (process.env.NODE_ENV === "local") {
          Logging.info(
            `${requestId} - Nodemailer ethereal URL: ${nodemailer.getTestMessageUrl(
              info
            )}`
          );
        }
        return info;
      });
  }
  //VERIFY CONNECTION
  async verifyConnection() {
    return this.transporter.verify();
  }
  //CREATE TRANSPOTER
  getTransporter() {
    return this.transporter;
  }
}

class Logging {
  // public static log = (args:any)=> this.info(args);
  public static log = (args: any) => this.info(args);
  public static info = (args: any) =>
    console.log(
      chalk.blue(`[${new Date().toLocaleString()}][INFO]`),
      typeof args === "string" ? chalk.blueBright(args) : args
    );

  public static warn = (args: any) =>
    console.log(
      chalk.yellow(`[${new Date().toLocaleString()}][INFO]`),
      typeof args === "string" ? chalk.yellowBright(args) : args
    );

  public static error = (args: any) =>
    console.log(
      chalk.red(`[${new Date().toLocaleString()}][INFO]`),
      typeof args === "string" ? chalk.redBright(args) : args
    );
}
