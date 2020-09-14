import { IValidation, ValidationEntityError } from '../shared/impl/errors';
import { validate, ValidationError, ValidationOptions } from 'class-validator';

interface MessagesError {
	message: string;
	devMessage: string;
}

export class ValidationUtils {

	static async handleAndValidate(target: any, options: ValidationOptions, { message, devMessage }: MessagesError) {
		const errors = await validate(target, options);

		if (errors.length !== 0) {
			const validations = ValidationUtils.mapToValidation(errors);

			throw new ValidationEntityError(message, devMessage, validations);
		}
	}

	private static mapToValidation(errors: ValidationError[]): IValidation[] {
		const removeUnderscore = (target: string) => target.replace(/_/, '');

		return errors.map(({ property, value, constraints }) => {
			const prop = removeUnderscore(property);
			const messages = Object.values(constraints).map(removeUnderscore);

			return {
				value,
				messages,
				property: prop
			};
		}) as IValidation[];
	}

}
