import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user/user.controller';
import { User } from './entity/user.entity';
import { UserService } from './service/user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([User])],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
