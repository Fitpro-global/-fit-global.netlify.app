[02/10/2026 09:44] Maylson Campello: // ==========================================
// SISTEMA DE IA PARA TREINOS - FIT GLOBAL
// ✅ Com fallback (funciona mesmo sem IA)
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

// ✅ FUNÇÃO PRINCIPAL - Gera treino com IA (com fallback)
async function gerarTreinoComIA(dadosAluno, solicitacaoEspecial = "") {
  console.log('🤖 Tentando gerar treino com IA...');
  
  try {
    const prompt = 
- Nome: ${dadosAluno.nomeAluno}
- Objetivo: ${dadosAluno.objetivo}
- Nível: ${dadosAluno.nivel}
- Dias por semana: ${dadosAluno.diasPorSemana}
${solicitacaoEspecial ? - Solicitação especial: ${solicitacaoEspecial} : ''}
    ;

    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prompt: prompt,
        type: 'treino'
      })
    });

    if (!response.ok) {
      throw new Error(Erro ${response.status});
    }

    const data = await response.json();
    
    if (data.erro) {
      throw new Error(data.erro);
    }

    const textoLimpo = data.resposta;
    const jsonMatch = textoLimpo.match(/\{[\s\S]*\}/);
    
    if (!jsonMatch) throw new Error('Resposta inválida');
    
    const treinoIA = JSON.parse(jsonMatch[0]);
    
    if (!treinoIA.nomeTreino || !treinoIA.treinos) {
      throw new Error('JSON incompleto');
    }
    
    console.log('✅ Treino gerado com IA:', treinoIA.nomeTreino);
    return treinoIA;
[02/10/2026 09:44] Maylson Campello: } catch (error) {
    console.warn('⚠️ IA indisponível, usando treino padrão:', error.message);
    
    // ✅ FALLBACK: Gera treino normal do treinos.js
    if (typeof gerarTreino === 'function') {
      const treinoPadrao = gerarTreino(
        dadosAluno.objetivo,
        dadosAluno.nivel,
        dadosAluno.diasPorSemana
      );
      treinoPadrao.nomeTreino = "Treino Personalizado FIT GLOBAL";
      treinoPadrao.descricao = "Treino gerado automaticamente pelo sistema";
      treinoPadrao.dicas = ["Mantenha a consistência", "Hidrate-se bem", "Descanse adequadamente"];
      
      console.log('✅ Treino padrão gerado com sucesso');
      return treinoPadrao;
    }
    
    return null;
  }
}

// ✅ CHAT COM IA (com fallback)
async function perguntarIA(pergunta, contextoTreino = "") {
  try {
    const promptCompleto = contextoTreino 
      ? Contexto: ${contextoTreino}\n\nPergunta: ${pergunta}
      : pergunta;

    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prompt: promptCompleto,
        type: 'chat'
      })
    });

    if (!response.ok) throw new Error('Erro na API');

    const data = await response.json();
    return data.resposta;
    
  } catch (error) {
    console.warn('⚠️ Chat IA indisponível');
    return "Desculpe, a IA está temporariamente indisponível. Mas seu treino está funcionando normalmente! 💪";
  }
}

// ✅ SUBSTITUIÇÃO COM IA (com fallback)
async function sugerirSubstituicao(exercicio, motivo = "") {
  try {
    const prompt = motivo 
      ? ${exercicio} (motivo: ${motivo})
      : exercicio;

    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        prompt: prompt,
        type: 'substituicao'
      })
    });

    if (!response.ok) throw new Error('Erro na API');

    const data = await response.json();
    const textoLimpo = data.resposta;
    const jsonMatch = textoLimpo.match(/\{[\s\S]*\}/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    
  } catch (error) {
    console.warn('️ Substituição IA indisponível');
    return null;
  }
}

console.log('✅ ia-treinos.js carregado com sucesso');