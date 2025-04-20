import { 
    HttpException,
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus
} from "@nestjs/common";
import { Request, Response } from "express";


@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
        const message = exception instanceof HttpException ? exception.getResponse() : 'Internal Server error'

        response.status(status).json({
            success : false,
            statusCode : status,
            message : typeof message === "string" ?  message : (message as any).message,
            path : request.url,
            timestamp : new Date().toISOString()
        })
    }
}