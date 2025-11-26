export function getProgresso() {
  const data = localStorage.getItem("progressoBiblia");
  return data ? JSON.parse(data) : {};
}

export function marcarComoLido(livro, capitulo) {
  const progresso = getProgresso();

  if (!progresso[livro]) progresso[livro] = [];

  if (!progresso[livro].includes(capitulo)) {
    progresso[livro].push(capitulo);
  }

  localStorage.setItem("progressoBiblia", JSON.stringify(progresso));
}

export function isCapituloLido(livro, capitulo) {
  const progresso = getProgresso();
  return progresso[livro]?.includes(capitulo) || false;
}

export function getProgressoTotal(bibleData) {
  const progresso = getProgresso();
  let lidos = 0;
  let total = 0;

  Object.keys(bibleData).forEach(livro => {
    total += bibleData[livro].length;
    lidos += progresso[livro]?.length || 0;
  });

  return {
    total,
    lidos,
    porcentagem: ((lidos / total) * 100).toFixed(2)
  };
}
