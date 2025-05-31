import { IsEmail,IsString,IsEnum,IsNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name : string

    @IsEmail()
    email : string

    @IsEnum(['ADMIN',"ENGINEER","INTERN"],{
        message : "Valid Role Is Required"
    })
    role : "ADMIN" | "ENGINEER" | "INTERN"
}