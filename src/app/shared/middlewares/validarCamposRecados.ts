import { NextFunction, Request, Response } from "express";

export function validarCamposRecados(req: Request, res: Response, next: NextFunction) {
    const { titulo, recado } = req.body

    if (!titulo) {
        return res.status(400).json({ mensagem: 'Título não informado.' })
    }
    if (typeof titulo !== 'string') {
        return res.status(400).json({ mensagem: 'Título não corresponde ao esperado.' })
    }
    if (!recado) {
        return res.status(400).json({ mensagem: 'Recado sem corpo.' })
    }
    if (typeof recado !== 'string') {
        return res.status(400).json({ mensagem: 'Recado não corresponde ao esperado.' })
    }

    next()
}