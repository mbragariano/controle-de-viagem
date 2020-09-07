import { BaseError } from './BaseError';
import { IHttpError, JsonResult } from './interfaces';

export class EntityNotFound extends BaseError implements IHttpError {

	constructor(message: string, devMessage: string) {
		super(message, devMessage);

		this.name = 'EntityNotFound';
	}

	handleForHttp(): JsonResult {
		return { ...super.handleForHttp(), code: 404 };
	}

}
