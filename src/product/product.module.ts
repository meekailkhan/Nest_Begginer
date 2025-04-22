import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "src/filter/http-exception.filter";

@Module({
    imports : [],
    controllers : [ProductController],
    providers : [ProductService,{
        provide : APP_FILTER,
        useClass : HttpExceptionFilter
    }]
})
export class ProductModule {

}