import { ArrayMinSize, IsEmail, IsIn, IsInt, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { JobType } from "../constant/jobs.constant";
import { Type } from "class-transformer";

class LocationDto {
    @IsString()
    @IsNotEmpty()
    city : string

    @IsString()
    @IsNotEmpty()
    country : string
}

export class CreateJobDto {
    @IsString()
    @IsNotEmpty()
    company : string

    @IsString()
    @IsNotEmpty()
    title : string

    @IsEmail()
    email : string

    @IsIn(Object.keys(JobType))
    @IsOptional()
    type? : JobType

    @IsInt()
    @IsNotEmpty()
    experiance: number

    @IsNumber()
    @IsNotEmpty()
    salary : number

    @ArrayMinSize(1)
    @IsString({each : true})
    tags : string

    @ValidateNested()
    @IsObject()
    @Type(() => LocationDto)
    location : LocationDto

}