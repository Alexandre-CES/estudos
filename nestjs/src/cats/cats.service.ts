import { Injectable, Optional, Inject } from "@nestjs/common";
import { Cat } from './interfaces/cat.interface';
import { privateDecrypt } from "crypto";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat){
        this.cats.push(cat);
    }

    findAll(): Cat[]{
        return this.cats;
    }

    findOne(id): Cat{
        return this.cats[id];
    }
}

//optional provider
@Injectable()
export class HttpService<T>{
    constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T){}
}

//property-based injection
@Injectable()
export class HttpService2<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}