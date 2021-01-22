import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

      async getAll(): Promise<User[]>{
          return await this.usersRepository.find();
      }

      async createUser(user: User): Promise<User> {
        const newUser = new User();

        newUser.name = user.name;
        newUser.age = user.age;
        newUser.address = user.address;

        return await this.usersRepository.save(newUser);
      }

      async updateUser(id: number, user: User): Promise<User> {
          const updateUser = await this.usersRepository.findOne(id);
          
          updateUser.name = user.name;
          updateUser.age = user.age;
          updateUser.address = user.address;

          return await this.usersRepository.save(updateUser);
      }

      async deleteUser(id: number): Promise<any>{
          return await this.usersRepository.delete(id);
      }
}
