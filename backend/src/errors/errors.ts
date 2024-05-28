import { ApplicationError } from "protocols";

export function notFoundError(): ApplicationError {
    return {
        name: 'NotFoundError',
        message: 'No result for this search!',
    };
}

export function unauthorizedError(): ApplicationError {
    return {
        name: 'UnauthorizedError',
        message: 'Unauthorized access!',
    };
}

export function validationError(variable:string): ApplicationError {
    return {
        name: 'ValidationError',
        message: `Field ${variable} invalid`,
    };
}
export function repositoryError(variable:string): ApplicationError{
    return {
        name: 'RepositoryError',
        message: `error trying to access table ${variable}`
    };
}