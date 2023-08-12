import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Render('index')
  // getView() {
  //   //return this.appService.getHello();
  //   return { message: 'Hello world!' };
  // }
  root(@Res() res: Response) {
    return res.render('index');
  }
}
