import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreatUserDTO } from './Create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  // Get all user information
  @Get()
  getAllUser() {
    return this.appService.getAllUser();
  }

  // Create a new user
  @Post()
  createUser(@Body() createUseDto: CreatUserDTO) {
    return this.appService.createUser(createUseDto);
  }

  // Create a new user
  @Post('/another')
  createAnotherUser(@Body() createUserDto: CreatUserDTO) {
    return this.appService.createAnotherUser(createUserDto);
  }

  // Get a user Details
  @Get('/:userID')
  getUseDeatils(@Param('userID', ParseIntPipe) userID: number) {
    return this.appService.getUserDetails(userID);
  }

  // update a specific user
  @Patch('/:userID')
  updateUser(
    @Body() updateUserDTO: CreatUserDTO,
    @Param('userID', ParseIntPipe) userID: number,
  ) {
    return this.appService.updateUser(updateUserDTO, userID);
  }

  // Delete a specific user
  @Delete('/:userID')
  deleteUser(@Param('userID', ParseIntPipe) userID: number) {
    return this.appService.deleteUser(userID);
  }
}
