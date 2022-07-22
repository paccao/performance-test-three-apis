import { Request, Response, NextFunction } from 'express'

export type APIController = (req: Request,
	res: Response,
	next: NextFunction) => void