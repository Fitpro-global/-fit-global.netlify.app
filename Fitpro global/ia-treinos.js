// ==========================================
// SISTEMA DE IA PARA TREINOS - FIT GLOBAL
// ✅ Chave da API PROTEGIDA no Netlify Functions
// ==========================================

const exerciciosTendencia = [
  { nome: "Zercher Squat", categoria: "hipertrofia", nota: "Tendência 2026 - fortalece core e quadríceps" },
  { nome: "Meadows Row", categoria: "hipertrofia", nota: "Exercício moderno para costas" },
  { nome: "Jefferson Curl", categoria: "mobilidade", nota: "Fortalecimento da cadeia posterior" },
  { nome: "Sissy Squat", categoria: "hipertrofia", nota: "Isolamento avançado de quadríceps" },
  { nome: "ATG Split Squat", categoria: "mobilidade", nota: "Método Knees Over Toes Guy" },
  { nome: "Tibialis Raise", categoria: "hipertrofia", nota: "Prevenção de lesões no joelho" },
  { nome: "Nordic Hamstring Curl", categoria: "hipertrofia", nota: "Fortalecimento excêntrico de isquiotibiais" },
  { nome: "Cossack Squat", categoria: "mobilidade", nota: "Mobilidade lateral de quadril" },
  { nome: "Reverse Hyperextension", categoria: "hipertrofia", nota: "Saúde da lombar e glúteos" },
  { nome: "Belt Squat", categoria: "hipertrofia", nota: "Agachamento sem carga na coluna" },
  { nome: "Deficit Reverse Lunge", categoria: "hipertrofia", nota: "Amplitude aumentada para glúteos" },
  { nome: "Floor Press", categoria: "hipertrofia", nota: "Alternativa segura ao supino" },
  { nome: "Spoto Press", categoria: "hipertrofia", nota: "Supino com pausa para força" },
  { nome: "Larsen Press", categoria: "hipertrofia", nota: "Supino sem pernas para core" },
  { nome: "Crawls (Bear Crawl)", categoria: "funcional", nota: "Mobilidade e core dinâmico" },
  { nome: "Turkish Get-Up", categoria: "funcional", nota: "Exercício completo com kettlebell" },
  { nome: "Halo com Kettlebell", categoria: "mobilidade", nota: "Mobilidade de ombros" },
  { nome: "Psoas March", categoria: "mobilidade", nota: "Ativação de flexores de quadril" },
  { nome: "90/90 Breathing", categoria: "recuperação", nota: "Técnica de respiração moderna" },
  { nome: "Blood Flow Restriction (BFR)", categoria: "avançado", nota: "Treino com restrição de fluxo" }
];

function getNovidadesSemana() {
  const semanaAtual = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const inicio = (semanaAtual * 3) % exerciciosTendencia.length;
  const novidades = [];
  
  for (let i = 0; i < 3; i++) {
    const indice = (inicio + i) % exerciciosTendencia.length;
    novidades.push(exerciciosTendencia[indice]);
  }
  
  return novidades;
}

async function gerarTreinoComIA(dadosAluno, solicitacaoEspecial = "") {
  const prompt = 
- Nome: ${dadosAluno.nomeAluno}
- Objetivo: ${dadosAluno.objetivo}
- Nível: ${dadosAluno.nivel}
- Dias por semana: ${dadosAluno.diasPorSemana}
${solicitacaoEspecial ? - Solicitação especial: ${solicitacaoEspecial} : ''}
  ;

  try {
    // ✅ Chamada para a Netlify Function (chave protegida no servidor)
    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prompt: prompt,
        type: 'treino'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.erro || 'Erro ao gerar treino');
    }

    const data = await response.json();
    const textoLimpo = data.resposta;
    
    const jsonMatch = textoLimpo.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Resposta inválida da IA');
    
    const treinoIA = JSON.parse(jsonMatch[0]);
    
    if (!treinoIA.nomeTreino || !treinoIA.treinos) {
      throw new Error('JSON da IA incompleto');
    }
    
    return treinoIA;
  } catch (error) {
    console.error('Erro ao gerar treino com IA:', error);
    alert(❌ Erro na IA: ${error.message}\n\nVerifique sua conexão e tente novamente.);
    return null;
  }
}

async function perguntarIA(pergunta, contextoTreino = "") {
  const promptCompleto = contextoTreino 
    ? Contexto: ${contextoTreino}\n\nPergunta: ${pergunta}
    : pergunta;
    try {
    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prompt: promptCompleto,
        type: 'chat'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.erro || 'Erro na API');
    }

    const data = await response.json();
    return data.resposta;
  } catch (error) {
    console.error('Erro no chat IA:', error);
    return "Desculpe, estou com problemas de conexão. Tente novamente em instantes.";
  }
}

async function sugerirSubstituicao(exercicio, motivo = "") {
  const prompt = motivo 
    ? ${exercicio} (motivo: ${motivo})
    : exercicio;

  try {
    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prompt: prompt,
        type: 'substituicao'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.erro || 'Erro na API');
    }

    const data = await response.json();
    const textoLimpo = data.resposta;
    
    const jsonMatch = textoLimpo.match(/\{[\s\S]*\}/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
  } catch (error) {
    console.error('Erro ao sugerir substituição:', error);
    return null;
  }
}