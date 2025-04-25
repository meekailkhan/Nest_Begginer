import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { JobService } from "../services/jobs.service";
import { CreateJobDto } from "../dto/jobs.dto";

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobService : JobService){}

    @Post()
    @UsePipes(ValidationPipe)
    createJobs(@Body() createJobDto:CreateJobDto){
        return this.jobService.createJob(createJobDto)
    }
}