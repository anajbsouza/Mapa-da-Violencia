import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ApplicationError, RequestError } from "../protocols";

export function handleApplicationErrors(
    err: RequestError | ApplicationError | Error,
    _req: Request,
    res: Response,
    next: NextFunction)
    {
        if (err.name === 'NotFoundError') {
            return res.status(httpStatus.NOT_FOUND).send({
                message: err.message,
            });
        }
        if (err.name === 'UnauthorizedError') {
            return res.status(httpStatus.UNAUTHORIZED).send({
                message: err.message,
            });
        }
        if (err.name === 'ValidationError') {
            return res.status(httpStatus.BAD_REQUEST).send({
                message: err.message,
            });
        }
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
            message: err.message,
        });
    }