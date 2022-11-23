const express = require('express');

const app = express; 

app.use(express.json());


const nomeUsu = nome;
const cpfUsu = cpf;
const cepUsu = cep;
const sexoUsuM = mas;
const sexoUsuF = fem;
const sexoUsu = ou;
const emailUsu = exampleInpuEmail1;
const senhaUsu = exampleInputPassword1;
const confirmSenha = exampleInputPassword2;
const btnEnviar = enviar;

const cadUsu = [ nomeUsu , cpfUsu , cepUsu , sexoUsuM , sexoUsuF , sexoUsu , emailUsu , senhaUsu , confirmSenha , btnEnviar ];


//Retorna um usuário e suas informações
app.get('/cadastro-usuario/:index' , (req, res) => {
    const { index } = req.params;

    return res.json(cadUsu[index]); 
})

//Criar novo usuário
app.post('/cadastro-usuario', (req, res) => {
   
    const { nomeUsu } = req.body;
    const { cpfUsu } = req.body;
    const { cepUsu } = req.body;
    const { sexoUsuM } = req.body;
    const { sexoUsuF } = req.body;
    const { sexoUsu } = req.body;
    const { emailUsu } = req.body;
    const { senhaUsu } = req.body;
    const { confirmSenha } = req.body;
    const { btnEnviar } = req.body;
   
   
    cadUsu.push(nomeUsu);
    cadUsu.push(cpfUsu);
    cadUsu.push(cepUsu);
    cadUsu.push(sexoUsuM);
    cadUsu.push(sexoUsuF);
    cadUsu.push(sexoUsu);
    cadUsu.push(emailUsu);
    cadUsu.push(senhaUsu);
    cadUsu.push(confirmSenha);
    cadUsu.push(btnEnviar);

    //cadUsu.push(cadUsu);

    return res.json(cadUsu); 
})

//atualização de usuário 
app.put('/cadastro-usuario/:index', (req, res) => {
    const { index } = req.params; 

    const { nomeUsu } = req.body;
    const { cpfUsu } = req.body;
    const { cepUsu } = req.body;
    const { sexoUsuM } = req.body;
    const { sexoUsuF } = req.body;
    const { sexoUsu } = req.body;
    const { emailUsu } = req.body;
    const { senhaUsu } = req.body;
    const { confirmSenha } = req.body;
    const { btnEnviar } = req.body;

    cadUsu[index] = cadUsu;  

    return res.json(cadUsu);
    
})

//Deletar usuário 
app.delete('/deletar-usuario/:index' , (req, res) => {
    const { index } = req.params; 

    cadUsu.splice(index, cadUsu); 

    return res.json({ message: "O seu usuário foi deletado com sucesso!"})

})
