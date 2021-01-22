import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';
import { User } from 'src/interface/user.interface';
import { UserService } from 'src/service/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    
    @Post()
    createUser(@Body() user:User, @Res() response) {
        this.userService.createUser(user).then (res => {
            response.status(HttpStatus.CREATED).json(res);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({res: "Error creating new user"});
        })
    }

    @Get()
    getAll(@Res() response){
        this.userService.getAll().then(usersList => {
            response.status(HttpStatus.OK).json(usersList);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({res: 'Error no data'});
        })
    }

    @Put(':id')
    updateUser(@Body() updateUser: User, @Res() response, @Param('id') id) {
        this.userService.updateUser(id, updateUser).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({res: 'unexpected error'});
        })
    }

    @Delete(':id')
    deleteUser(@Res() response, @Param('id') id) {
        this.userService.deleteUser(id).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({res: 'Error!!!'});
        })    
    }
}
