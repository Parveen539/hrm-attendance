
class ApiError extends Error {
    constructor(
        statusCode,
        errorMsg = null,
        errors = [],
        success = false,
        message = "Something went wrong",
        stack = "",
    ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success = success;
        this.errors = errors;
        this.errorMsg = errorMsg;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };