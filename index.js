const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;

  if (usuario === 'admin' && contrasena === '1234') {
    return res.json({ acceso: true, mensaje: "Login exitoso" });
  } else {
    return res.status(401).json({ acceso: false, mensaje: "Credenciales incorrectas" });
  }
});

app.get('/', (req, res) => {
  res.send("API en línea");
});

// Render usa este puerto por defecto
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
