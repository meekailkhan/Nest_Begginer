import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProviderService } from "./providers.service";
import { ProviderDto } from "./providers.dto";
import { Cat } from "./providers.interface";

@Controller('provider')
export class ProviderController {
    constructor(private readonly providerService : ProviderService){}

    @Post()
    async create(@Body() providerDto:ProviderDto){
        this.providerService.create(providerDto)
    }

    @Get()
    async findAll():Promise<Cat[]>{
        return this.providerService.findAll()
    }
}