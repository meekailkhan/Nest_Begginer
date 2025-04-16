import { Injectable } from "@nestjs/common";
import {Cat} from './providers.interface'

@Injectable()
export class ProviderService {
    private readonly cats : Cat[] = [];

    create(cat:Cat){
        this.cats.push
    }

    findAll(): Cat[]{
        return this.cats
    }
}