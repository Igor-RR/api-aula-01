import express, {Request,Response} from "express";
import { request } from "node:http";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT,() => {
    console.log("Servidor executando em localhost");
});

app.get("/",(req: Request, res: Response) => {
    res.send("Olá express!!!"); 
});

app.get("/saudacao/:nome",(req: Request, res: Response) => {
    const nome = req.params.nome;
    res.send("Olá " + nome);

})