import { JobType } from "../constant/jobs.constant";


export class Job {
    comapanyName : string;
    title : string;
    email : string;
    type : JobType = JobType.FULL_TIME;
    experience : number;
    salary : number;
    tags? : string[] = [];
    isActive : boolean = true;
    id : number;
}