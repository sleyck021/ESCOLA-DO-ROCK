CREATE TABLE IF NOT EXISTS tabela_exemplo (
    id_exemplo SERIAL PRIMARY KEY,
    nome_exemplo VARCHAR(155),
    esta_ativo BOOLEAN DEFAULT FALSE,
    teste BOOLEAN DEFAULT TRUE
);

INSERT INTO tabela_exemplo (nome_exemplo, esta_ativo, teste) VALUES
('João da Silva', TRUE, FALSE),
('Maria Oliveira', FALSE, FALSE),
('Pedro Santos', TRUE, FALSE),
('Ana Paula Souza', TRUE, TRUE),
('Carlos Eduardo', FALSE, TRUE),
('Juliana Rocha', TRUE, TRUE),
('Fernando Almeida', FALSE, TRUE),
('Beatriz Lima', TRUE, TRUE),
('Rafael Costa', TRUE, FALSE),
('Larissa Martins', FALSE, FALSE),
('Bruno Ferreira', TRUE, FALSE),
('Camila Duarte', FALSE, FALSE);