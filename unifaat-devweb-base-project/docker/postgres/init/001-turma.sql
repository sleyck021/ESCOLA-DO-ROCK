CREATE TABLE IF NOT EXISTS turma (
    id_turma SERIAL PRIMARY KEY,
    nome_professor VARCHAR(255)
);

INSERT INTO turma (nome_professor) VALUES
('Roberto'),
('Josivaldo');