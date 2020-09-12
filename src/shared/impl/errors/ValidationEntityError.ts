import { BaseError } from "./BaseError";
import { IHttpError, IJsonResult } from "./interfaces";

export interface IValidation {
	value: any;
	property: string;
	messages: string[];
}

interface IValidationJsonResult extends IJsonResult {
	validations: IValidation[];
}

export class ValidationEntityError extends BaseError implements IHttpError {

	constructor(
		message: string,
		devMessage: string,
		private readonly _validations: IValidation[]
	) {
		super(message, devMessage);
	}

	handleForHttp(): IValidationJsonResult {
		return {
			...super.handleForHttp(),
			code: 400,
			validations: this._validations
		}
	}

}
