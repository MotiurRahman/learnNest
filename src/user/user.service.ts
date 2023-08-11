import { Injectable } from '@nestjs/common';
import { CreatUserDTO } from './Create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entiry/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  getUserDetails(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  createUser(createUseDto: CreatUserDTO) {
    return this.userRepository.save(createUseDto);
  }

  createAnotherUser(createUserDto: CreatUserDTO) {
    return createUserDto;
  }

  updateUser(updateUserDTO: CreatUserDTO, id: number) {
    return this.userRepository.update(id, updateUserDTO);
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
}
