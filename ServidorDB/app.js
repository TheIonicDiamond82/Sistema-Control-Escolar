var express = require('express')
var mysql = require('mysql')
const cors = require('cors')

var app = express()
app.use(express.json())
app.use(cors());

//Parametros de conexion
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistemacontrolescolar'
});

//Nos conectamos
conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("Conexion exitosa");
    }

})

//Alumnos
//Get de alumnos
app.get('/api/alumnos', (req, res) => {
    conexion.query('SELECT * FROM alumnos', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas)
        }
    })
})

//Get articulo por id
app.get('/api/alumnos/:ncontrol', (req, res) => {
    conexion.query('SELECT *FROM alumnos WHERE ncontrol = ?', [req.params.ncontrol], (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila)
        }
    })
})

//Post alumnos
app.post('/api/alumnos', (req, res) => {
    let data = {
        nombre: req.body.nombre,
        carrera: req.body.carrera,
        estatus: req.body.estatus
    };
    let sql = "INSERT INTO alumnos SET ?";
    conexion.query(sql, data, function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })

})

//Put alumnos
app.put('/api/alumnos/:ncontrol', function (req, res) {
    let ncontrol = req.params.ncontrol;
    let nombre = req.body.nombre;
    let carrera = req.body.carrera;
    let estatus = req.body.estatus;

    let sql = "UPDATE alumnos SET nombre = ?, carrera = ?, estatus = ? WHERE ncontrol = ?";
    conexion.query(sql, [nombre, carrera, estatus, ncontrol], function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

//Delete alumnos
app.delete('/api/alumnos/:ncontrol', function (req, res) {
    let ncontrol = req.params.ncontrol;
    conexion.query('DELETE FROM alumnos WHERE ncontrol = ?', [ncontrol], function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})



//maestros
//Get de maestros
app.get('/api/maestros', (req, res) => {
    conexion.query('SELECT * FROM maestros', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas)
        }
    })
})
//Get maestros por clavemaestro
app.get('/api/maestros/:clavemaestro', (req, res) => {
    conexion.query('SELECT *FROM maestros WHERE clavemaestro = ?', [req.params.clavemaestro], (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila)
        }
    })
})

//Post maestros
app.post('/api/maestros', function (req, res) {
    let data = {
        nombre: req.body.nombre,
        departamento: req.body.departamento,
        estatus: req.body.estatus
    };
    let sql = "INSERT INTO maestros SET ?";
    conexion.query(sql, data, function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

//Put maestros
app.put('/api/maestros/:clavemaestro', function (req, res) {
    let clavemaestro = req.params.clavemaestro;
    let nombre = req.body.nombre;
    let departamento = req.body.departamento;
    let estatus = req.body.estatus;

    let sql = "UPDATE maestros SET nombre = ?, departamento = ?, estatus = ? WHERE clavemaestro = ?";
    conexion.query(sql, [nombre, departamento, estatus, clavemaestro], function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

//Delete maestros
app.delete('/api/maestros/:clavemaestro', function (req, res) {
    let clavemaestro = req.params.clavemaestro;
    conexion.query('DELETE FROM maestros WHERE clavemaestro = ?', [clavemaestro], function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})


//materias
//Get de materias
app.get('/api/materias', (req, res) => {
    conexion.query('SELECT * FROM materias', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas)
        }
    })
})

//Get materia por clavemateria
app.get('/api/materias/:clavemateria', (req, res) => {
    conexion.query('SELECT *FROM materias WHERE clavemateria = ?', [req.params.clavemateria], (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila)
        }
    })
})

//Post materias
app.post('/api/materias', function (req, res) {
    let data = {
        clavemateria: req.body.clavemateria,
        nombre: req.body.nombre,
        creditos: req.body.creditos,
    };
    let sql = "INSERT INTO materias SET ?";
    conexion.query(sql, data, function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

//Put materias
app.put('/api/materias/:clavemateria', function (req, res) {
    let clavemateria = req.params.clavemateria;
    let nombre = req.body.nombre;
    let creditos = req.body.creditos;

    let sql = "UPDATE materias SET nombre = ?, creditos = ? WHERE clavemateria = ?";
    conexion.query(sql, [nombre, creditos, clavemateria], function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

//Delete materias
app.delete('/api/materias/:clavemateria', function (req, res) {
    let clavemateria = req.params.clavemateria;
    conexion.query('DELETE FROM materias WHERE clavemateria = ?', [clavemateria], function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

//grupos
//Get de grupos
app.get('/api/grupos', (req, res) => {
    conexion.query('SELECT * FROM grupos', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas)
        }
    })
})
//Post grupos
app.post('/api/grupos', function (req, res) {
    let data = {
        clavemateria: req.body.clavemateria,
        clavegrupo: req.body.clavegrupo,
        clavemaestro: req.body.clavemaestro,
        limitealumnos: req.body.limitealumnos,
        inscritos: req.body.inscritos,
        horariolunes: req.body.horariolunes,
        horariomartes: req.body.horariomartes,
        horariomiercoles: req.body.horariomiercoles,
        horariojueves: req.body.horariojueves,
        horarioviernes: req.body.horarioviernes,
    };
    let sql = "INSERT INTO grupos SET ?";
    conexion.query(sql, data, function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

//Delete grupos
app.delete('/grupos/:clavegrupo', function (req, res) {
    let clavegrupo = req.params.clavegrupo;
    conexion.query('DELETE FROM grupos WHERE clavegrupo = ?', [clavegrupo], function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

//Actualizar articulos desde grupos
app.put('/api/grupos/', function (req, res) {
    let clavegrupo = req.body.clavegrupo;
    let clavemateria = req.body.clavemateria;
    let clavemaestro = req.body.clavemaestro;
    let limitealumnos = req.body.limitealumnos;
    let inscritos = req.body.inscritos;
    let horariolunes = req.body.horariolunes;
    let horariomartes = req.body.horariomartes;
    let horariomiercoles = req.body.horariomiercoles;
    let horariojueves = req.body.horariojueves;
    let horarioviernes = req.body.horarioviernes;

    let sql = "UPDATE grupos SET clavemateria = ?, clavemaestro = ?, limitealumnos = ?, inscritos = ?, horariolunes = ?, horariomartes = ?, horariomiercoles = ?, horariojueves = ?, horarioviernes = ? WHERE clavegrupo = ?";
    conexion.query(sql, [
        clavemateria,
        clavemaestro,
        limitealumnos,
        inscritos,
        horariolunes,
        horariomartes,
        horariomiercoles,
        horariojueves,
        horarioviernes,
        clavegrupo
    ], function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    })
})

//Toma de carga
app.post('/api/tomadecarga', async (req, res) => {
    let ncontrol = req.body.ncontrol;
    let clavemateria = req.body.clavemateria;
    let clavegrupo = req.body.clavegrupo;

    // Verificar si el grupo está lleno
    conexion.query('SELECT inscritos, limitealumnos FROM grupos WHERE clavemateria = ? AND clavegrupo = ?', [clavemateria, clavegrupo], (error, grupoResult) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error en el servidor');
        }

        const inscritos = grupoResult[0].inscritos;
        const limitealumnos = grupoResult[0].limitealumnos;

        if (inscritos >= limitealumnos) {
            return res.status(400).send('El grupo está lleno. No se puede inscribir más alumnos.');
        }

        // Insertar la carga
        conexion.query('INSERT INTO carga (clavemateria, clavegrupo, ncontrol) VALUES (?, ?, ?)', [clavemateria, clavegrupo, ncontrol], (error) => {
            if (error) {
                console.error(error);
                if (error.code == 'ER_DUP_ENTRY') {
                    return res.status(409).send('Error: La carga ya existe. No se pueden duplicar entradas.');
                }
                return res.status(500).send('Error en el servidor');
            }

            // Incrementar la cantidad de inscritos en el grupo
            conexion.query('UPDATE grupos SET inscritos = inscritos + 1 WHERE clavemateria = ? AND clavegrupo = ?', [clavemateria, clavegrupo], (error) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send('Error en el servidor');
                }

                res.send('Alumno inscrito correctamente.');
            });
        });
    });
});

//Mensaje del servidor
app.get('/', function (req, res) {
    res.send('Estas dentro del servidor de Articulos')
})
//Escucha del servidor
app.listen('3000', function () {
    console.log('Te escucho desde el puerto 3000')
}
)