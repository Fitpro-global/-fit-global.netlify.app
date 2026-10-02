// ==========================================
// BIBLIOTECA DE TREINOS FIT GLOBAL - VERSÃO 2026
// Treinos modernos com métodos avançados e exercícios atuais
// ==========================================

const exercicios = {
  hipertrofia: {
    iniciante: {
      // Divisão moderna: Full Body 3x por semana
      fullbody: [
        { nome: "Agachamento Goblet", series: 3, reps: "10-12", descanso: "60s", nota: "Foco em mobilidade e técnica" },
        { nome: "Supino Reto com Halteres", series: 3, reps: "10-12", descanso: "60s" },
        { nome: "Remada Curvada com Halteres", series: 3, reps: "10-12", descanso: "60s" },
        { nome: "Hip Thrust com Peso Corporal", series: 3, reps: "12-15", descanso: "60s", nota: "Ativação de glúteos" },
        { nome: "Desenvolvimento com Halteres", series: 3, reps: "10-12", descanso: "60s" },
        { nome: "Prancha Frontal", series: 3, reps: "30s", descanso: "30s" }
      ]
    },
    intermediario: {
      // Divisão moderna: Upper/Lower 4x por semana
      upper: [
        { nome: "Supino Reto com Barra", series: 4, reps: "8-10", descanso: "90s" },
        { nome: "Remada Cavaleiro", series: 4, reps: "8-10", descanso: "90s" },
        { nome: "Supino Inclinado com Halteres", series: 3, reps: "10-12", descanso: "60s" },
        { nome: "Puxada Frontal Pegada Neutra", series: 3, reps: "10-12", descanso: "60s" },
        { nome: "Elevação Lateral com Halteres", series: 4, reps: "12-15", descanso: "60s" },
        { nome: "Face Pull", series: 3, reps: "15-20", descanso: "60s", nota: "Saúde dos ombros" },
        { nome: "Rosca Direta com Barra W", series: 3, reps: "10-12", descanso: "60s" },
        { nome: "Tríceps Corda", series: 3, reps: "10-12", descanso: "60s" }
      ],
      lower: [
        { nome: "Agachamento Livre", series: 4, reps: "8-10", descanso: "120s" },
        { nome: "Romanian Deadlift (Stiff)", series: 4, reps: "8-10", descanso: "90s" },
        { nome: "Bulgarian Split Squat", series: 3, reps: "10-12 cada perna", descanso: "90s", nota: "Exercício moderno essencial" },
        { nome: "Leg Press 45°", series: 3, reps: "10-12", descanso: "90s" },
        { nome: "Cadeira Extensora", series: 3, reps: "12-15", descanso: "60s" },
        { nome: "Mesa Flexora", series: 3, reps: "12-15", descanso: "60s" },
        { nome: "Panturrilha no Leg Press", series: 4, reps: "15-20", descanso: "60s" },
        { nome: "Abdominal com Peso", series: 3, reps: "15-20", descanso: "30s" }
      ]
    },
    avancado: {
      // Divisão moderna: Push/Pull/Legs 6x por semana
      push: [
        { nome: "Supino Reto com Barra", series: 5, reps: "5-6", descanso: "180s", nota: "Força base" },
        { nome: "Supino Inclinado com Halteres", series: 4, reps: "8-10", descanso: "90s" },
        { nome: "Desenvolvimento Militar", series: 4, reps: "8-10", descanso: "90s" },
        { nome: "Elevação Lateral", series: 5, reps: "10-12", descanso: "60s", nota: "Técnica: drop set na última série" },
        { nome: "Tríceps Testa", series: 4, reps: "8-10", descanso: "60s" },
        { nome: "Tríceps Mergulho", series: 3, reps: "10-12", descanso: "60s" },
        { nome: "Crossover Polia Alta", series: 3, reps: "12-15", descanso: "60s" }
      ],
      pull: [
        { nome: "Barra Fixa com Peso", series: 5, reps: "5-6", descanso: "180s", nota: "Força base" },
        { nome: "Remada Curvada com Barra", series: 4, reps: "8-10", descanso: "90s" },
        { nome: "Remada Unilateral com Halter", series: 4, reps: "8-10", descanso: "90s" },
        { nome: "Puxada Frontal Pegada Fechada", series: 3, reps: "10-12", descanso: "60s" },
        { nome: "Face Pull", series: 4, reps: "15-20", descanso: "60s" },
        { nome: "Rosca Scott", series: 4, reps: "8-10", descanso: "60s" },
        { nome: "Rosca Martelo", series: 3, reps: "10-12", descanso: "60s" }
   ],
      legs: [
        { nome: "Agachamento Livre Pesado", series: 5, reps: "5-6", descanso: "180s", nota: "Força base" },
        { nome: "Leg Press 45°", series: 4, reps: "10-12", descanso: "120s" },
        { nome: "Bulgarian Split Squat", series: 4, reps: "10-12 cada perna", descanso: "90s" },
        { nome: "Stiff com Halteres", series: 4, reps: "10-12", descanso: "90s" },
        { nome: "Cadeira Extensora", series: 4, reps: "12-15", descanso: "60s", nota: "Técnica: rest-pause" },
        { nome: "Mesa Flexora", series: 4, reps: "12-15", descanso: "60s" },
        { nome: "Panturrilha Sentado", series: 5, reps: "15-20", descanso: "60s" },
        { nome: "Abdominal Hanging Leg Raise", series: 4, reps: "12-15", descanso: "30s" }
      ]
    }
  },
  
  emagrecimento: {
    iniciante: {
      funcional: [
        { nome: "Agachamento com Peso Corporal", series: 3, reps: "15", descanso: "30s" },
        { nome: "Flexão de Braço (joelhos)", series: 3, reps: "10-12", descanso: "30s" },
        { nome: "Afundo Alternado", series: 3, reps: "12 cada perna", descanso: "30s" },
        { nome: "Remada com Elástico", series: 3, reps: "15", descanso: "30s" },
        { nome: "Prancha Frontal", series: 3, reps: "30s", descanso: "30s" },
        { nome: "Mountain Climber", series: 3, reps: "30s", descanso: "30s" }
      ],
      cardio: [
        { nome: "Caminhada Rápida ou Bicicleta", series: 1, reps: "30 min", descanso: "-", nota: "Zona 2 (consegue conversar)" }
      ]
    },
    intermediario: {
      hiit: [
        { nome: "Burpee", series: 4, reps: "40s", descanso: "20s" },
        { nome: "Kettlebell Swing", series: 4, reps: "40s", descanso: "20s", nota: "Exercício moderno queima-gordura" },
        { nome: "Agachamento com Salto", series: 4, reps: "40s", descanso: "20s" },
        { nome: "Mountain Climber", series: 4, reps: "40s", descanso: "20s" },
        { nome: "Box Jump ou Step Up", series: 4, reps: "40s", descanso: "20s" },
        { nome: "Prancha Dinâmica", series: 4, reps: "40s", descanso: "20s" }
      ],
      forca: [
        { nome: "Agachamento com Halteres", series: 3, reps: "12-15", descanso: "60s" },
        { nome: "Supino com Halteres", series: 3, reps: "12-15", descanso: "60s" },
        { nome: "Remada Curvada", series: 3, reps: "12-15", descanso: "60s" },
        { nome: "Hip Thrust", series: 3, reps: "15-20", descanso: "60s" }
      ],
      cardio: [
        { nome: "HIIT na Esteira", series: 1, reps: "20 min", descanso: "-", nota: "30s sprint / 60s caminhada" }
      ]
    },
    avancado: {
      metcon: [
        { nome: "Thruster com Halteres", series: 5, reps: "12", descanso: "30s", nota: "CrossFit style" },
        { nome: "Burpee com Box Jump", series: 5, reps: "10", descanso: "30s" },
        { nome: "Kettlebell Swing Pesado", series: 5, reps: "15", descanso: "30s" },
        { nome: "Wall Ball", series: 5, reps: "12", descanso: "30s" },
        { nome: "Sprint na Esteira", series: 5, reps: "30s", descanso: "30s" }
      ],
      forca: [
        { nome: "Agachamento Frontal", series: 4, reps: "8-10", descanso: "90s" },
        { nome: "Supino Inclinado", series: 4, reps: "8-10", descanso: "90s" },
        { nome: "Terra Romeno", series: 4, reps: "10-12", descanso: "90s" },
        { nome: "Remada Pendlay", series: 4, reps: "8-10", descanso: "90s" }
      ],
      cardio: [
        { nome: "Tabata Protocol", series: 1, reps: "4 min", descanso: "-", nota: "20s máximo / 10s descanso x 8 rounds" },
        { nome: "Corrida de Alta Intensidade", series: 1, reps: "25 min", descanso: "-" }
      ]
    }
  },
  
  resistencia: {
    iniciante: {
      circuito: [
        { nome: "Agachamento", series: 3, reps: "20", descanso: "20s" },
        { nome: "Flexão", series: 3, reps: "15", descanso: "20s" },
        { nome: "Afundo", series: 3, reps: "15 cada perna", descanso: "20s" },
        { nome: "Remada com Elástico", series: 3, reps: "20", descanso: "20s" },
        { nome: "Prancha", series: 3, reps: "40s", descanso: "20s" }
      ]
    },
    intermediario: {
      circuito: [
        { nome: "Agachamento com Salto", series: 4, reps: "20", descanso: "15s" },
        { nome: "Flexão Diamante", series: 4, reps: "15", descanso: "15s" },
        { nome: "Afundo Saltado", series: 4, reps: "20", descanso: "15s" },
        { nome: "Barra Fixa", series: 4, reps: "10", descanso: "15s" },
        { nome: "Prancha Dinâmica", series: 4, reps: "45s", descanso: "15s" }
      ]
    },
    avancado: {
      circuito: [
        { nome: "Agachamento Búlgaro com Salto", series: 5, reps: "20", descanso: "10s" },
        { nome: "Flexão com Palma", series: 5, reps: "15", descanso: "10s" },
        { nome: "Pistol Squat", series: 5, reps: "10 cada perna", descanso: "10s" },
        { nome: "Muscle Up", series: 5, reps: "8", descanso: "10s" },
        { nome: "Prancha com Toque nos Ombros", series: 5, reps: "1 min", descanso: "10s" }
      ]
    }
  },
  
  mobilidade: {
    geral: [
      { nome: "Cat-Cow Stretch", series: 2, reps: "10 ciclos", descanso: "-" },
      { nome: "World's Greatest Stretch", series: 2, reps: "5 cada lado", descanso: "-" },
      { nome: "90/90 Hip Stretch", series: 2, reps: "30s cada lado", descanso: "-" },
      { nome: "Thoracic Spine Rotation", series: 2, reps: "10 cada lado", descanso: "-" },
      { nome: "Foam Rolling (Rolamento)", series: 1, reps: "5 min", descanso: "-", nota: "Foco em pontos tensos" },
      { nome: "Deep Squat Hold", series: 3, reps: "30s", descanso: "30s", nota: "Mobilidade de tornozelo e quadril" }
    ]
  }
};

// Divisões de treino modernas baseadas nos dias da semana
const divisoesTreino = {
  2: ["Full Body A", "Full Body B"],
  3: ["Full Body A", "Full Body B", "Full Body C"],
  4: ["Upper A", "Lower A", "Upper B", "Lower B"],
  5: ["Push", "Pull", "Legs", "Upper", "Lower"],
  6: ["Push", "Pull", "Legs", "Push", "Pull", "Legs"]
};

// Função para gerar treino automaticamente
function gerarTreino(objetivo, nivel, diasPorSemana) {
  const treinoBase = exercicios[objetivo][nivel];
  const divisao = divisoesTreino[diasPorSemana] || divisoesTreino[3];
  
  const treino = {
    dataCriacao: new Date().toISOString(),
    dataUltimaAlteracao: new Date().toISOString(),
    objetivo: objetivo,
    nivel: nivel,
    diasPorSemana: diasPorSemana,
    divisao: divisao,
    treinos: {}
  };

  // Para hipertrofia
  if (objetivo === "hipertrofia") {
    if (nivel === "iniciante") {
      divisao.forEach((dia, index) => {
        treino.treinos[Dia ${index + 1}] = [...treinoBase.fullbody];
      });
    } else if (nivel === "intermediario") {
      divisao.forEach((dia, index) => {
        if (dia.includes("Upper")) {
          treino.treinos[Dia ${index + 1}] = [...treinoBase.upper];
        } else {
          treino.treinos[Dia ${index + 1}] = [...treinoBase.lower];
        }
      });
    } else {
      const pushPullLegs = ["push", "pull", "legs"];
      divisao.forEach((dia, index) => {
        const tipo = pushPullLegs[index % 3];
        treino.treinos[Dia ${index + 1}] = [...treinoBase[tipo]];
      });
    }
  }
  
  // Para emagrecimento
  else if (objetivo === "emagrecimento") {
    if (nivel === "iniciante") {
      divisao.forEach((dia, index) => {
        treino.treinos[Dia ${index + 1}] = [
          ...treinoBase.funcional,
          ...treinoBase.cardio
        ];
      });
    } else {
      divisao.forEach((dia, index) => {
        if (index % 2 === 0) {
          treino.treinos[Dia ${index + 1}] = [
            ...(treinoBase.hiit  treinoBase.metcon  treinoBase.funcional),
             ...(treinoBase.cardio || [])
          ];
        } else {
          treino.treinos[Dia ${index + 1}] = [...treinoBase.forca];
        }
      });
    }
  }
  
  // Para resistência
  else if (objetivo === "resistencia") {
    divisao.forEach((dia, index) => {
      treino.treinos[Dia ${index + 1}] = [...treinoBase.circuito];
    });
  }
  
  // Para mobilidade
  else if (objetivo === "mobilidade") {
    divisao.forEach((dia, index) => {
      treino.treinos[Dia ${index + 1}] = [...treinoBase.geral];
    });
  }

  return treino;
}

// Função para evoluir o treino (progressão a cada 2 meses)
function evoluirTreino(treinoAtual) {
  const dataCriacao = new Date(treinoAtual.dataCriacao);
  const hoje = new Date();
  const mesesDecorridos = (hoje - dataCriacao) / (1000 * 60 * 60 * 24 * 30);
  
  if (mesesDecorridos < 2) {
    return null;
  }

  let novoNivel = treinoAtual.nivel;
  if (treinoAtual.nivel === "iniciante") novoNivel = "intermediario";
  else if (treinoAtual.nivel === "intermediario") novoNivel = "avancado";
  else novoNivel = "avancado";

  const novoTreino = gerarTreino(
    treinoAtual.objetivo,
    novoNivel,
    treinoAtual.diasPorSemana
  );

  novoTreino.dataCriacao = treinoAtual.dataCriacao;
  novoTreino.nivelAnterior = treinoAtual.nivel;
  novoTreino.evolucaoSugerida = true;

  return novoTreino;
}

// Função para calcular dias até próxima evolução
function diasParaProximaEvolucao(treino) {
  const dataCriacao = new Date(treino.dataCriacao);
  const hoje = new Date();
  const diasDecorridos = Math.floor((hoje - dataCriacao) / (1000 * 60 * 60 * 24));
  const diasParaEvolucao = 60 - diasDecorridos;
  return Math.max(0, diasParaEvolucao);
}