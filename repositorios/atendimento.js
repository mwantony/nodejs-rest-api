const query = require('../infraestrutura/database/queries')

class Atendimento {
  adiciona(atendimento) {
    const sql = 'INSERT INTO Atendimentos SET ?'
    return query(sql, atendimento)
  }

  lista() {
    const sql = 'SELECT * FROM Atendimentos'
    return query(sql)
  }

  altera(id, valores) {
    const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
    return query(sql, [valores, id])
  }
}

module.exports = new Atendimento()