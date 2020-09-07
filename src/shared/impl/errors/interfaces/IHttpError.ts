export interface JsonResult {
	code: number;
	name: string;
	stack?: string;
	message: string;
	devMessage: string;
}

export interface IHttpError {

	handleForHttp(): JsonResult;

}
