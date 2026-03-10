import express, {Request,Response} from "express";
import { request } from "node:http";

const app = express();
const PORT = 3000;

/* Configura um middleware do express para converter objetos javascript em json*/
app.use(express.json());

app.get("/",(req: Request, res: Response) => {
    res.send("Olá express!!!"); 
});

app.get("/saudacao/:nome",(req: Request, res: Response) => {
    const nome = req.params.nome;
    /*res.send("Olá " + nome);*/
    res.json({
        mensagem: `Olá ${nome}!`
    });

});

app.post("/saudacao",(req: Request, res: Response)=>{
    const {nome} = req.body;

    res.json({
        mensagem:`Olá ${nome}`!
    })
});

app.listen(PORT,() => {
    console.log("Servidor executando em localhost");
});