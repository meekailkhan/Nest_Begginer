import { Body, Controller, Get, Post } from "@nestjs/common";
import { JobService } from "../services/jobs.service";

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobService : JobService){}

    @Post()
    createJobs(@Body() createJobDto){
    }
}