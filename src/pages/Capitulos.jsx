import { useParams, Link } from "react-router-dom";
import { useState } from "react";

export default function Capitulos() {
  const { id } = useParams();
  const totalCapitulos = 10; // ajuste para cada livro real
  const capitulos = Array.from({ length: totalCapitulos }, (_, i) => ({
    id: i + 1,
    nome: `Capítulo ${i + 1}`
  }));

  const [progresso, setProgresso] = useState(() => {
    const salvo = localStorage.getItem(`livro-${id}-progresso`);
    return salvo ? JSON.parse(salvo) : [];
  });

  const toggleCapitulo = (capId) => {
    let novoProgresso;
    if (progresso.includes(capId)) {
      novoProgresso = progresso.filter((p) => p !== capId);
    } else {
      novoProgresso = [...progresso, capId];
    }
    setProgresso(novoProgresso);
    localStorage.setItem(`livro-${id}-progresso`, JSON.stringify(novoProgresso));
  };

  const porcentagem = Math.round((progresso.length / totalCapitulos) * 100);

  return (
    <div>
      <h1>Capítulos do Livro {id}</h1>
      <p>Progresso: {porcentagem}%</p>
      <ul>
        {capitulos.map((c) => (
          <li key={c.id}>
            <input
              type="checkbox"
              checked={progresso.includes(c.id)}
              onChange={() => toggleCapitulo(c.id)}
            />{" "}
            {c.nome}
          </li>
        ))}
      </ul>
      <Link to={`/book/${id}`}>Voltar aos Detalhes do Livro</Link>
      <br />
      <Link to="/">Voltar à Lista de Livros</Link>
    </div>
  );
}
