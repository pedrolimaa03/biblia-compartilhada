import { Link } from "react-router-dom";

// Lista de livros simulada
const livros = [
  { id: 1, nome: "Gênesis", totalCapitulos: 10 },
  { id: 2, nome: "Êxodo", totalCapitulos: 12 },
  { id: 3, nome: "Levítico", totalCapitulos: 8 }
];

export default function Books() {
  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {livros.map((livro) => {
          const progresso = JSON.parse(localStorage.getItem(`livro-${livro.id}-progresso`) || "[]");
          const porcentagem = Math.round((progresso.length / livro.totalCapitulos) * 100);

          return (
            <li key={livro.id}>
              <Link to={`/book/${livro.id}`}>
                {livro.nome} - Progresso: {porcentagem}%
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
