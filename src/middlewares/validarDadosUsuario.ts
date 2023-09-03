import { NextFunction, Request, Response } from 'express';

export function validarDadosUsuario(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const dados = request.body;

    const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm

    if (!dados.nome) {
        return response.status(400).json({
            sucesso: false,
            motivo: 'É obrigatório informar um nome de usuário.',
        });
    }

    if (typeof dados.nome !== 'string') {
        return response.status(400).json({ mensagem: 'Nome não corresponde ao esperado.' })
    }

    if (!dados.email || !emailRegex.test(dados.email)) {
        return response.status(400).json({
            sucesso: false,
            motivo: 'É obrigatório informar um email válido.',
        });
    }

    if (typeof dados.email !== 'string') {
        return response.status(400).json({ mensagem: 'Email não corresponde ao esperado.' })
    }

    if (!dados.senha || dados.senha.length < 8) {
        return response.status(400).json({
            sucesso: false,
            motivo: 'É obrigatório informar uma senha válida.',
        });
    }

    if (typeof dados.senha !== 'string') {
        return response.status(400).json({ mensagem: 'Senha não corresponde ao esperado.' })
    }

    next();
}
