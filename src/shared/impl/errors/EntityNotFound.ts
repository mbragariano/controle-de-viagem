import { BaseError } from './BaseError';
import { IHttpError, IJsonResult } from './interfaces';

export class EntityNotFound extends BaseError implements IHttpError {

	constructor(message: string, devMessage: string) {
		super(message, devMessage);

		this.name = 'EntityNotFound';
	}

	handleForHttp(): IJsonResult {
		return { ...super.handleForHttp(), code: 404 };
	}

}
