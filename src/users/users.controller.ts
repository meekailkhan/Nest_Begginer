import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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
    create(@Body() userData: {name:string,email:string,role:"ADMIN" | "INTERN" | "ENGINEER"}) {
        return this.userService.create(userData)
    }

    @Patch(":id") // users/:id
    update(@Param("id", ParseIntPipe) id: number, @Body() userData: {name:string,email:string,role:"ADMIN"|"INTERN"|"ENGINEER"}) {
        return this.userService.update(id,userData)
    }

    @Delete(":id")
    del(@Param("id" ,ParseIntPipe) id:number){
        return this.userService.dele(id)
    }
}
