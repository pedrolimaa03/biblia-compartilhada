import bibleData from "../data/bibleData.jsx";
import { getProgressoTotal, getProgresso } from "../utils/progresso";


export default function Progresso() {
  const dados = getProgressoTotal(bibleData);
  const progresso = getProgresso();

  return (
    <div>
      <h1>Progresso da Leitura</h1>

      <h2>Total geral:</h2>
      <p>
        {dados.lidos} de {dados.total} capítulos lidos
      </p>
      <p>{dados.porcentagem}% concluído</p>

      <hr />

      <h2>Detalhamento por livro</h2>

      {Object.keys(bibleData).map(livro => (
        <div key={livro} style={{ marginBottom: "10px" }}>
          <strong>{livro}</strong>:{" "}
          {progresso[livro]?.length || 0} / {bibleData[livro].length}
        </div>
      ))}
    </div>
  );
}
