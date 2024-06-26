import {ExpressErrorMiddlewareInterface, Middleware} from "routing-controllers";
import {logger} from "../helper/logger";


export class ErrorMiddleware implements ExpressErrorMiddlewareInterface{
	error(error: any, _request: any, response: any, _next: (err?: any) => any): void {
		const httpCode = error?.httpCode ?? error?.status ?? error?.reponse?.status ?? 500;
		const message = error?.reponse?.data.message ?? error?.message ?? "Generic error message";
		const name = error?.reponse?.statusText ?? error?.name ?? "AppError";

		const errors = error?.reponse?.data?.errors ?? error.errors ?? error.stack?.split("\n") ?? [].map((e: any) => {
			if (e.target) delete e.target;
			return e;
		})

		const finalError = {
			httpCode,
			message,
			name,
			errors,
		}

		logger.error(`Error MW- ${JSON.stringify(finalError)}`)

		response.status(httpCode).json(finalError)
	}

}