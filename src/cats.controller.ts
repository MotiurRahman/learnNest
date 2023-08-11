import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  getUser(): string {
    return 'This action returns all cats';
  }
  @Post()
  create(@Req() req: Request): string {
    return req.body;
  }

  @Get('/:userID')
  getCat(@Param() params: { userID: number }) {
    return params;
  }

  @Patch('/:userID')
  updateCat(@Req() req: Request): string {
    return req.body;
  }
}
