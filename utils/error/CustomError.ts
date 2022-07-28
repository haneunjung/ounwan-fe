class CustomError extends Error {
  statusCode: number;
  code: any;
  constructor(statusCode: number, code: string, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
}

export default CustomError;
