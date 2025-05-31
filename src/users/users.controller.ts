import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    findAll(@Query('role') role?: "ADMIN" | "INTERN" | "ENGINEER") {
        return this.userService.findAll(role)
    }

    @Get(":id") // users/:id
    findOne(@Param('id',ParseIntPipe) id: number) {
        return this.userService.findOne(id)
    }

    @Post() // users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Patch(":id") // users/:id
    update(@Param("id", ParseIntPipe) id: number, @Body(ValidationPipe) UpdateUserDto: UpdateUserDto) {
        return this.userService.update(id,UpdateUserDto)
    }

    @Delete(":id")
    del(@Param("id" ,ParseIntPipe) id:number){
        return this.userService.dele(id)
    }
}
