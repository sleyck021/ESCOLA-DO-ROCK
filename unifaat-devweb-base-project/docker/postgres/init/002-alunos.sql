CREATE TABLE IF NOT EXISTS alunos (
    id_aluno SERIAL PRIMARY KEY,
    nome_aluno VARCHAR(255),
    id_dturma INTEGER,
    CONSTRAINT chave_estrangeira_turma
        FOREIGN KEY (id_dturma)
        REFERENCES turma (id_turma)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

INSERT INTO alunos (nome_aluno, id_dturma) VALUES
('João', 1),
('Cleber', 2);