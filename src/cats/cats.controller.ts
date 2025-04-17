import { Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Post, Query, Redirect, Res} from "@nestjs/common";
import { CatsService } from "./cats.service";
import { Response } from "express";
import { Observable, of } from "rxjs";
import { CreateCatDto } from "./creat-cat.dto";



@Controller("cats")
export class CatsController {
    constructor(private readonly catsService : CatsService){}

    @Get("allCats")
    // @HttpCode(201)
    findAllCats(@Res({passthrough:true}) response : Response ){
        return 'there is all cats'
    }

    @Get("cat/*")
    findIndvidualCat(){
        return 'there is alone cat'
    }

    @Get('docs')
    @Redirect("https://docs.nestjs.com",301)
    getDocs(@Query('version') version){
        if(version && version === "5"){
            return {url : "https://docs.nestjs.com/v5/"}
        }
    }

    @Get(':breed/:id')
    findById(@Param() param : any){
        let res = `cat breed is ${param.breed} and id is ${param.id}`
        return res
    }

    @Post()
    @Header('Cache-Control','no-store')
    @Header('author',"meekail")
    @HttpCode(200)
    addCat(){
        return "this action add new cat"
    }

    @Get('async')
    findByAsync():Observable<any[]>{
        return of(['one','two','three']);
    }

    @Post('create')
    async addNew(@Body() createCatDto : CreateCatDto){
        // if(createCatDto.age > 5){
        //     return `${createCatDto.name} is a child cat`
        // }else if(createCatDto.age == 5){
        //     return `${createCatDto.name} is a adult cat`
        // }else{
        //     return `${createCatDto.name} is a elderly cat`
        // }
        return `this action adds new cat`
    }

    @Get('query')
    findByQuery(@Query('age') age:number, @Query('breed') breed : string){
        return `this action return all cats with age ${age} and also breed ${breed}`
    }

    @Get('speci')
    findAll(@Res({passthrough:true}) res : Response){
        res.status(HttpStatus.OK)
        return []
    }
}

