import { useParams, Link } from "react-router-dom";

export default function BookPage() {
  const { id } = useParams();
  const totalCapitulos = 10; // exemplo, ajustar para cada livro real

  const progresso = JSON.parse(localStorage.getItem(`livro-${id}-progresso`) || "[]");
  const porcentagem = Math.round((progresso.length / totalCapitulos) * 100);

  return (
    <div>
      <h1>Detalhes do Livro {id}</h1>
      <p>Progresso do livro: {porcentagem}%</p>
      <Link to={`/book/${id}/capitulos`}>Ver Capítulos</Link>
      <br />
      <Link to="/">Voltar à Lista de Livros</Link>
    </div>
  );
}
