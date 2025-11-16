const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
const ip = "localhost";
// importamos las rutas
const pasatiempos = require("./routes/PasatiemposRouter");
const departamentos = require("./routes/DepartamentosRouter");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// usamos las rutas
app.use(pasatiempos);
app.use(departamentos);
app.listen(port, ip, () => {
  console.log(`Servidor iniciado y esta escuchando en el puerto
${port}`);
});
