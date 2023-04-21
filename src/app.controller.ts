import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMailDto } from './dto/send-mail.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mail')
@Controller('mail')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-mail')
  sendMail(@Body() dto: SendMailDto) {
    return this.appService.sendMail(dto);
  }
}
