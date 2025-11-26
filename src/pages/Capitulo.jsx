import { marcarComoLido, isCapituloLido } from "../utils/progresso";
import bibleData from "../data/bibleData.jsx";
import { useParams } from "react-router-dom";

export default function Capitulo() {
  const { livro, cap } = useParams();
  const capitulo = parseInt(cap);

  const texto = bibleData[livro][capitulo - 1];

  const lido = isCapituloLido(livro, capitulo);

  function handleMarcarLido() {
    marcarComoLido(livro, capitulo);
    window.location.reload();
  }

  return (
    <div>
      <h1>{livro} - Capítulo {capitulo}</h1>

      <button
        onClick={handleMarcarLido}
        disabled={lido}
        style={{
          padding: "10px",
          background: lido ? "gray" : "green",
          color: "white",
          border: 0,
          borderRadius: "6px",
          marginBottom: "20px",
          cursor: lido ? "not-allowed" : "pointer"
        }}
      >
        {lido ? "Lido ✔" : "Marcar como lido"}
      </button>

      <p style={{ whiteSpace: "pre-line" }}>
        {texto}
      </p>
    </div>
  );
}
