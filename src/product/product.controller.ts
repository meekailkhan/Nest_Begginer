import { Controller, Get, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController{
    constructor(private readonly productService : ProductService){}

    @Get(':id')
    findOne(@Param('id',new ParseIntPipe({errorHttpStatusCode : HttpStatus.NOT_ACCEPTABLE})) id : number){
        return this.productService.findOne(id)
    }

    @Get('uuid/:uuid')
    findUUID(@Param('uuid',new ParseUUIDPipe()) uuid:string ){
        return this.productService.findUUID(uuid)
    }
}