import { BaseError } from './BaseError';
import { IHttpError, IJsonResult } from './interfaces';

export class DuplicatedEntityError extends BaseError implements IHttpError {

	constructor(message: string, devMessage: string) {
		super(message, devMessage);

		this.name = 'DuplicatedEntityError';
	}

	handleForHttp(): IJsonResult {
		return { ...super.handleForHttp(), code: 409 };
	}

}
