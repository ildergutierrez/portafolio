document.getElementById('numeroIdentidad').addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        document.getElementById('contra').addEventListener('input', function(e) {
            if(this.value.length  >0){
                document.getElementById('razon').style.display = 'block'; // Ocultar mensaje
                }
                else{
                    document.getElementById('razon').style.display = 'none';
                }
        });
        document.getElementById('numerocel').addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        //  Validar inyecciones SQL
        const sqlInjections = [
    // Básicas con comillas y comparaciones simples
    "' OR '1'='1",
    "'OR'1'='1", // Sin espacio
    "' OR '1'='1' --",
    "'OR'1'='1'--", // Sin espacio
    "' OR '1'='1' #",
    "'OR'1'='1'#", // Sin espacio
    "' OR 1=1 --",
    "'OR1=1--", // Sin espacio
    "' OR 1=1 #",
    "'OR1=1#", // Sin espacio
    "' OR x=x --",
    "'ORx=x--", // Sin espacio
    "' OR x=x #",
    "'ORx=x#", // Sin espacio

    // Con comentarios y variaciones avanzadas
    "' OR 1=1/*",
    "'OR1=1/*", // Sin espacio
    "' OR '1'='1' /*",
    "'OR'1'='1'/*", // Sin espacio
    "'; DROP TABLE users; --",
    "';DROP TABLE users;--", // Sin espacio
    "'; DROP TABLE students; --",
    "';DROP TABLE students;--", // Sin espacio
    "'; SELECT * FROM users WHERE '1'='1'; --",
    "';SELECT*FROM users WHERE '1'='1';--", // Sin espacio
    "' UNION SELECT null, username, password FROM users --",
    "'UNION SELECT null, username, password FROM users--", // Sin espacio
    "' UNION SELECT null, table_name, column_name FROM information_schema.tables --",
    "'UNION SELECT null, table_name, column_name FROM information_schema.tables--", // Sin espacio

    // Ataques directos de administrador
    "admin' --",
    "admin'--", // Sin espacio
    "admin' #",
    "admin'#", // Sin espacio
    "admin'/*",
    "admin'/*", // Sin espacio

    // Comparaciones booleanas avanzadas
    "' OR '1'='1' AND 'a'='a",
    "'OR'1'='1'AND'a'='a", // Sin espacio
    "' OR '1'='1' AND 'a'='b",
    "'OR'1'='1'AND'a'='b", // Sin espacio

    // Ordenamientos y consultas UNION
    "1' ORDER BY 1--",
    "1'ORDER BY 1--", // Sin espacio
    "1' AND 1=1--",
    "1'AND 1=1--", // Sin espacio
    "1' AND 1=2--",
    "1'AND 1=2--", // Sin espacio
    "1' UNION SELECT username, password FROM users--",
    "1'UNION SELECT username, password FROM users--", // Sin espacio
"DROP",
"DELETE",
"UPDATE",
"INSERT",
"SELECT",
"CREATE",
"TRUNCATE",
"RENAME",
"REPLACE",
"SHOW",
"DESCRIBE",
"GRANT",
"REVOKE",
"admin",
"LIKE",

    // Ataques condicionales
    "' OR EXISTS(SELECT * FROM users WHERE username = 'admin' AND password = 'password')--",
    "'OREXISTS(SELECT * FROM users WHERE username='admin'AND password='password')--", // Sin espacio
    "' AND (SELECT COUNT(*) FROM users) > 0--",
    "'AND(SELECT COUNT(*)FROM users)>0--", // Sin espacio

    // Comandos peligrosos
    "'; EXEC xp_cmdshell('dir'); --",
    "';EXEC xp_cmdshell('dir');--", // Sin espacio
    "'; SHUTDOWN --",
    "';SHUTDOWN--", // Sin espacio
    "'; DROP DATABASE exampleDB; --",
    "';DROP DATABASE exampleDB;--", // Sin espacio

    // Consultas informativas
    "' UNION ALL SELECT null, version(), user() --",
    "'UNION ALL SELECT null, version(), user()--", // Sin espacio
    "' UNION SELECT 1, @@version --",
    "'UNION SELECT 1,@@version--", // Sin espacio

    // Inyecciones complejas
    "' AND 1=(SELECT COUNT(*) FROM users); --",
    "'AND1=(SELECT COUNT(*)FROM users);--", // Sin espacio
    "'; INSERT INTO users (username, password) VALUES ('hacker', 'password123'); --",
    "';INSERT INTO users(username,password)VALUES('hacker','password123');--", // Sin espacio

    // Variaciones con caracteres especiales o codificaciones
    "'/**/OR/**/'1'/**/='1'/**/",
    "'--+OR--+'1'--+='1'",
    "';--+DROP+TABLE+users;--"
];

        document.getElementById('documento').addEventListener('input', function(e) {
            document.getElementById('documento').addEventListener('input', function(e) {
                const inputValue = this.value.toLowerCase(); // Convertimos a minúsculas para evitar diferencias
                for (const sqlInjection of sqlInjections) {
                    if (inputValue.includes(sqlInjection.toLowerCase())  ) { // Comparar usando includes
                        document.getElementById('mensaje').style.display = 'block'; // Mostrar mensaje
                        document.getElementById('btn_registro').disabled = true; // Deshabilitar el botón
                        this.value = '';// Limpiar el campo
                        break; // Detener el bucle
                    }else{
                            document.getElementById('btn_registro').disabled = false; // Habilitar el botón
                            document.getElementById('mensaje').style.display = 'none'; // Ocultar mensaje
                        }
                }
            });
        });