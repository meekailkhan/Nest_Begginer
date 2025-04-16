import { Module } from "@nestjs/common";
import { ProviderController } from "./providers.controller";
import { ProviderService } from "./providers.service";

@Module({
    imports : [],
    controllers : [ProviderController],
    providers : [ProviderService]
})
export class ProviderModule {
    
}