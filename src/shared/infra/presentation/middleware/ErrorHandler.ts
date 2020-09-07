import { Request, Response, NextFunction } from "express";
import { BaseError } from "../../../impl/errors";

export function errorHandler(
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction,
) {
	console.error(error);

	if (error instanceof BaseError) {
		const errorObject = error.handleForHttp();

		return response.status(errorObject.code).json(errorObject);
	}

	return response.status(500).json({
		code: 500,
		name: error.name,
		stack: error.stack,
		devMessage: error.message,
		message: 'Erro não tratado pelo aplicação.'
	});
}
