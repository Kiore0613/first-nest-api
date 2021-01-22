import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user/user.controller';
import { User } from './entity/user.entity';
import { UserService } from './service/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'carebook-db-mysql-do-user-8598233-0.b.db.ondigitalocean.com',
      port: 25060,
      logging: true,
      username: 'kiore',
      password: 'v781qrp5019obwwc',
      database: 'defaultdb',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
