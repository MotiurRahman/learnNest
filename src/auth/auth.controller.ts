import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req: any) {
    //return this.authService.validateUser(loginDTO.email, loginDTO.password);
    // console.log(req);
    // return req.user;
    return this.authService.signIn(req.user.email, req.user.password);
  }
}