export default function BottomNav({ currentPage, setCurrentPage }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around py-3 border-t border-gray-700">
      <button onClick={() => setCurrentPage("books")}>Livros</button>
      <button onClick={() => setCurrentPage("progress")}>Progresso</button>
      <button onClick={() => setCurrentPage("mural")}>Mural</button>
      <button onClick={() => setCurrentPage("profile")}>Perfil</button>
    </div>
  );
}
