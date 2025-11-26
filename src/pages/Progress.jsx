import { useState } from "react";

export default function Progress() {
  // Exemplo: quantidade total de capítulos da Bíblia
  const totalCapitulos = 1189;

  // Capítulos lidos — depois podemos salvar isso no localStorage
  const [lidos, setLidos] = useState(120);

  const porcentagem = ((lidos / totalCapitulos) * 100).toFixed(1);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-600 mb-6">Progresso</h1>

      <div className="mb-4 text-lg font-semibold">
        Capítulos lidos: {lidos} / {totalCapitulos}
      </div>

      <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-4"
          style={{ width: `${porcentagem}%` }}
        ></div>
      </div>

      <p className="mt-3 font-medium">{porcentagem}% concluído</p>

      {/* Botão provisório pra testar */}
      <button
        onClick={() => setLidos(lidos + 1)}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700 transition"
      >
        +1 capítulo lido
      </button>
    </div>
  );
}
