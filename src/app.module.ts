import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
// import { PugAdapter} from '@nestjs-modules/mailer/dist/adapters/pug.adapter'
import { MailService } from './mail.service';
import * as path from 'path';
import { MailController } from './mail.controller';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: 'smtps://test@qq.com:pass@smtp.qq.com',
      defaults: {
        from: 'test@qq.com',
      },
      preview: true,
      template: {
        dir: path.join(__dirname, './template'),
        adapter: new EjsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [MailController, AppController],
  providers: [MailService, AppService],
})
export class AppModule {}
