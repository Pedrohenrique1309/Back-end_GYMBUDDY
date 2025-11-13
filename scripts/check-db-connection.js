// Script simples para verificar conexão com o banco usando DATABASE_URL
require('dotenv').config()
const mysql = require('mysql2/promise')

async function check() {
  const url = process.env.DATABASE_URL
  if(!url) {
    console.error('DATABASE_URL não definido no ambiente')
    process.exit(1)
  }

  try {
    // mysql2 aceita a connection string diretamente
    const connection = await mysql.createConnection(url)
    const [rows] = await connection.query('SELECT 1 AS ok')
    console.log('Conexão com o banco estabelecida com sucesso:', rows[0])
    await connection.end()
    process.exit(0)
  } catch (err) {
    console.error('Falha ao conectar no banco:', err.message)
    process.exit(2)
  }
}

check()
