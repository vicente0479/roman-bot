import a2r from "./functions/a2r.js"
import r2a from "./functions/r2a.js"
import cors from "cors"
import express from "express"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

// Romanos a Arabigos
app.get("/r2a", r2a);

// Arabigos a Romanos
app.get("/a2r", a2r);


app.listen(PORT, () => {
    console.log(`Servidor de conversor escuchando en el puerto ${PORT}`);
});



export default app