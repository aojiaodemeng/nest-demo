import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public sendMail(): void {
    this.mailerService
      .sendMail({
        to: 'test1@qq.com', // list of receivers
        subject: 'Testing Nest MailerModule ✔', // Subject line
        template: '1',
        context: {
          youAreUsingPug: true,
        },
      })
      .then(() => {
        console.log('succsess');
        return 'succsess';
      })
      .catch(() => {
        console.log('failed');
        return 'failed';
      });
  }
}
