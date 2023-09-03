import { NextFunction, Request, Response } from "express";

export function validarLogin(req: Request, res: Response, next: NextFunction) {
    const { email, senha } = req.body

    if (!email) {
        return res.status(400).json({ mensagem: 'Email não informado.' })
    }
    if (typeof email !== 'string') {
        return res.status(400).json({ mensagem: 'Email não corresponde ao esperado.' })
    }
    if (!senha) {
        return res.status(400).json({ mensagem: 'Senha não informada.' })
    }
    if (typeof senha !== 'string') {
        return res.status(400).json({ mensagem: 'Senha não corresponde ao esperado.' })
    }

    next()
}