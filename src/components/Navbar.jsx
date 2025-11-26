export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="flex justify-around bg-yellow-500 text-white py-4 font-semibold text-lg">
      <button
        onClick={() => setCurrentPage("books")}
        className={currentPage === "books" ? "underline" : ""}
      >
        Livros
      </button>

      <button
        onClick={() => setCurrentPage("progress")}
        className={currentPage === "progress" ? "underline" : ""}
      >
        Progresso
      </button>

      <button
        onClick={() => setCurrentPage("mural")}
        className={currentPage === "mural" ? "underline" : ""}
      >
        Mural
      </button>
    </nav>
  );
}
