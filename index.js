const app = require('./server');
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log('Modificación a incluir en la rama');
});

module.exports = server; // Exporta el servidor
