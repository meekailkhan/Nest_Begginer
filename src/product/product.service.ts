import { BadRequestException, HttpException, Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class ProductService {
    findOne(id : number ){
        if(!id || typeof id !== 'number'){
            throw new BadRequestException('id is required or numeric string to search a product')
        }
        if(id !== 123 ){
            throw new NotFoundException("product is not available")
        }
        
        return {
            success : true,
            data : {
                id,
                message : `${id} this product`
            }
        }
    }

    findUUID(uuid:string):string{
        return uuid
    }
}