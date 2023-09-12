import { NextFunction, Request, Response } from "express";

export function validarTipagem(req: Request, res: Response, next: NextFunction) {
    const { arquivado, id, titulo, recado } = req.body

    if (typeof arquivado !== 'boolean') {
        return res.status(400).json({ message: 'Chave "arquivado" não corresponde ao esperado' })
    }
    if (typeof id !== 'string') {
        return res.status(400).json({ message: 'Chave "id" não corresponde ao esperado.' })
    }
    if (typeof titulo !== 'string') {
        return res.status(400).json({ message: 'Chave "titulo" não corresponde ao esperado.' })
    }
    if (typeof recado !== 'string') {
        return res.status(400).json({ message: 'Chave "recado" não corresponde ao esperado.' })
    }

    next()
}