import { IHttpError, IJsonResult } from './interfaces';

export class BaseError extends Error implements IHttpError {

	private _devMessage: string;

	constructor(message: string, devMessage: string) {
		super(message);

		this.name = 'BaseError';

		this._devMessage = devMessage;
	}

	handleForHttp(): IJsonResult {
		return {
			code: 500,
			name: this.name,
			stack: this.stack,
			message: this.message,
			devMessage: this._devMessage
		};
	}

}
