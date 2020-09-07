/**
 * Interface for use case classes.
 *
 * @param {T} data - Representation data entered.
 * @param {K} result - Representation data returned.
 */
export interface IUseCase<T, K> {

	execute(param: T): Promise<K>

}
