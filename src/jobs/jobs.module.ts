import { Module } from "@nestjs/common";
import { JobsController } from "./controller/jobs.controller";
import { JobService } from "./services/jobs.service";

@Module({
    imports : [],
    controllers : [JobsController],
    providers : [JobService]
})
export class JobsModule {}