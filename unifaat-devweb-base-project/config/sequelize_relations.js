import AlunoModel from "../app/Models/AlunoModel.js";
import TurmaModel from "../app/Models/TurmaModel.js";

TurmaModel.hasMany(AlunoModel, {
   foreignKey: 'id_dturma',
   as: 'alunos'
});

AlunoModel.belongsTo(TurmaModel, {
   foreignKey: 'id_dturma',
   as: 'turma'
});

export { TurmaModel, AlunoModel };