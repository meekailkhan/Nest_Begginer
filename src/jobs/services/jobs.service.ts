import { Injectable } from "@nestjs/common";
import { CreateJobDto } from "../dto/jobs.dto";
import { Job } from "../interfaces/jobs.interface";

const JOBS = new Map<number,Job>()
let jobId = 1

@Injectable()
export class JobService {
    createJob(createJobDto : CreateJobDto){
        const job = Object.assign({...createJobDto,id : jobId++},new Job())

        JOBS.set(job.id,job)

        return job

    }
}