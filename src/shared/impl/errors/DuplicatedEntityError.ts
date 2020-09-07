import { BaseError } from './BaseError';
import { IHttpError, JsonResult } from './interfaces';

export class DuplicatedEntityError extends BaseError implements IHttpError {

	constructor(message: string, devMessage: string) {
		super(message, devMessage);

		this.name = 'DuplicatedEntityError';
	}

	handleForHttp(): JsonResult {
		return { ...super.handleForHttp(), code: 409 };
	}

}
