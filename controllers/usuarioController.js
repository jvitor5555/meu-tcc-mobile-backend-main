import Usuario from "../models/usuario.js";

export const Login = async (req, res) => {

    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { email } });

        if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado' });
        if (usuario.senha !== senha) return res.status(404).json({ message: 'Usuário ou senha inválido' });

        const id = usuario.idUsuario

        return res.status(200).json({ data: { id: id, email: usuario.email } });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro no servidor' })
    }

}

export const Cadastro = async (req, res) => {

    const { nome, email, senha, cpf } = req.body;

    try {

        if (!nome || !email || !senha || !cpf) return res.status(400).json({ message: "Dados obrigatórios" })

        const usuario = await Usuario.create({
            nome: nome,
            email: email,
            cpf: cpf,
            senha: senha,
            
        });

        if (usuario) return res.status(200).json({ data: { message: 'Usuário cadastrado com sucesso', id: usuario.idUsuario } })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro no servidor' })
    }

}