import { IsEmail, IsString } from 'class-validator';

export class CreatUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
