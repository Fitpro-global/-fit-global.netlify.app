// ==========================================
// NETLIFY FUNCTION - GEMINI API
// Esta função roda no servidor (backend)
// A chave da API fica 100% protegida aqui
// ==========================================

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

exports.handler = async (event) => {
  // Só aceita requisições POST
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ erro: 'Método não permitido' }) 
    };
  }

  try {
    const { prompt, type } = JSON.parse(event.body);
    
    const GEMINI_URL = https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY};
    
    let finalPrompt = prompt;
    
    // Monta o prompt baseado no tipo de requisição
    if (type === 'treino') {
      finalPrompt = Você é um personal trainer especialista em treinos modernos de 2026. 
      Gere um treino personalizado baseado nos dados abaixo.

      Dados do aluno:
      ${prompt}

      Responda APENAS em formato JSON válido, sem texto adicional, sem markdown, seguindo exatamente este modelo:
      {
        "nomeTreino": "Nome criativo do treino",
        "descricao": "Breve descrição do método usado",
        "treinos": {
          "Dia 1": [
            {"nome": "Exercício", "series": 3, "reps": "10-12", "descanso": "60s", "nota": "Dica técnica"}
          ],
          "Dia 2": []
        },
        "dicas": ["Dica 1", "Dica 2", "Dica 3"]
      }

      Use exercícios modernos e atuais. Responda em português.;
    } else if (type === 'chat') {
      finalPrompt = Você é a assistente virtual da FIT GLOBAL, uma academia online.
      Responda de forma amigável, em no máximo 3 frases, em português.
      
      ${prompt};
    } else if (type === 'substituicao') {
      finalPrompt = Sugira 3 exercícios modernos para substituir: ${prompt}
      Responda APENAS em JSON válido: {"sugestoes": [{"nome": "Ex1", "motivo": "Por que substitui"}, {"nome": "Ex2", "motivo": "..."}, {"nome": "Ex3", "motivo": "..."}]};
    }

    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: finalPrompt }] }],
        generationConfig: {
          temperature: type === 'treino' ? 0.8 : 0.7,
          maxOutputTokens: type === 'treino' ? 2048 : 500
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(Erro ${response.status}: ${errorData.error?.message || 'Erro na API'});
    }

    const data = await response.json();
    const textoResposta = data.candidates[0].content.parts[0].text;
    
    // Limpa markdown se vier
    const textoLimpo = textoResposta.replace(/`json\n?/g, '').replace(/```\n?/g, '').trim();
    
    return {
      statusCode: 200,
      body: JSON.stringify({ resposta: textoLimpo })
    };

  } catch (error) {
    console.error('Erro na função Gemini:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ erro: error.message })
    };
  }
};