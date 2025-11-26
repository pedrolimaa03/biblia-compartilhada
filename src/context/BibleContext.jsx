import { createContext, useContext, useState } from "react";

const BibleContext = createContext();

export function BibleProvider({ children }) {

  // Cada livro terá a quantidade de capítulos lidos
  const [progresso, setProgresso] = useState({});

  function marcarCapitulo(livro, capitulo) {
    setProgresso(prev => {
      const lidos = prev[livro] || [];

      // Se já existe, remove (desmarca)
      if (lidos.includes(capitulo)) {
        return { ...prev, [livro]: lidos.filter(c => c !== capitulo) };
      }

      // Se não existe, adiciona
      return { ...prev, [livro]: [...lidos, capitulo] };
    });
  }

  return (
    <BibleContext.Provider value={{ progresso, marcarCapitulo }}>
      {children}
    </BibleContext.Provider>
  );
}

export function useBible() {
  return useContext(BibleContext);
}
