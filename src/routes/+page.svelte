<script>
  const educationLevels = [
    "Educação Infantil - Creche",
    "Educação Infantil - Pré-Escola",
    "1º Ano - Ensino Fundamental",
    "2º Ano - Ensino Fundamental",
    "3º Ano - Ensino Fundamental",
    "4º Ano - Ensino Fundamental",
    "5º Ano - Ensino Fundamental",
    "6º Ano - Ensino Fundamental",
    "7º Ano - Ensino Fundamental",
    "8º Ano - Ensino Fundamental",
    "9º Ano - Ensino Fundamental",
    "1ª série - Ensino Médio",
    "2ª série - Ensino Médio",
    "3ª série - Ensino Médio",
    "EJA - Ensino Fundamental - Anos Iniciais",
    "EJA - Ensino Fundamental - Anos Finais",
    "EJA - Ensino Médio"
  ];

  const promptPrinciples = [
    "Seja explícito sobre a persona, o papel pedagógico e os limites de segurança.",
    "Liste os insumos do usuário como fatos e contexto, separando-os das instruções do modelo.",
    "Peça raciocínio estruturado, rubricas e verificações de alinhamento com a BNCC.",
    "Determine formato de saída (itens, bullets, blocos de código) para facilitar a cópia.",
    "Convide o modelo a propor revisões e extensões, mantendo o foco da aula."
  ];

  const improvementToggles = [
    {
      id: "misconceptions",
      label: "Antecipar dúvidas e concepções alternativas dos alunos",
      helper: "Inclui perguntas socráticas e exemplos concretos para sanar lacunas."
    },
    {
      id: "assessment",
      label: "Gerar diagnósticos e critérios de avaliação claros",
      helper: "Solicita rubrica resumida com níveis de desempenho e evidências."
    },
    {
      id: "adaptations",
      label: "Personalizar para diferentes perfis de turma",
      helper: "Adiciona adaptações inclusivas e sugestões para alunos com diferentes ritmos."
    },
    {
      id: "followups",
      label: "Sugerir extensões e continuação da aprendizagem",
      helper: "Entrega ideias de dever de casa, projetos curtos e materiais complementares."
    }
  ];

  let form = {
    titulo: "",
    disciplina: "",
    conteudo: "",
    objetivos: "",
    nivel: "",
    perfilTurma: "",
    recursos: "",
    idioma: "Português do Brasil",
    tom: "Caloroso, colaborativo e claro"
  };

  let selectedToggles = new Set(["assessment", "adaptations"]);
  let result = "";
  let validationMessage = "";
  let copied = false;

  const counts = (text, max) => `${text.length} / ${max} caracteres`;

  const toggleSelection = (id) => {
    const next = new Set(selectedToggles);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    selectedToggles = next;
  };

  const buildPrompt = () => {
    const { titulo, disciplina, conteudo, objetivos, nivel, perfilTurma, recursos, idioma, tom } = form;

    const togglesText = [
      selectedToggles.has("misconceptions")
        ? "Inclua perguntas diagnóstico, exemplos concretos e feedbacks para concepções alternativas." 
        : null,
      selectedToggles.has("assessment")
        ? "Crie rubrica sucinta (4 níveis) conectada aos objetivos, com evidências observáveis." 
        : null,
      selectedToggles.has("adaptations")
        ? "Traga opções de adaptação para alunos com diferentes ritmos, necessidades e contextos socioculturais." 
        : null,
      selectedToggles.has("followups")
        ? "Sugira extensões pós-aula, como dever de casa breve ou um desafio prático." 
        : null
    ]
      .filter(Boolean)
      .join("\n- ");

    return `SISTEMA (persona)
Você é o Prof. GPT, um designer instrucional especializado na Educação Básica do Brasil. Domina a BNCC, usa pedagogia sociointeracionista e construcionista, e valoriza aprendizagem ativa, inclusiva e investigativa. Ao responder, seja direto, evite jargão, e mantenha o tom ${tom}. Priorize o idioma: ${idioma}.

CONTEXTO DO USUÁRIO (fatos)
- Título da aula: ${titulo}
- Disciplina: ${disciplina}
- Nível/etapa: ${nivel}
- Conteúdo esperado: ${conteudo}
- Objetivos principais: ${objetivos}
- Perfil da turma: ${perfilTurma || "não informado"}
- Recursos e restrições logísticas: ${recursos || "não informado"}

INSTRUÇÕES DO MODELO (como responder)
1) Entregue um plano de aula estruturado em: título, objetivos claros, roteiros de atividades por etapas, competências/habilidades BNCC, metodologia e recursos didáticos, avaliação e retomadas.
2) Inclua técnicas de mediação (perguntas abertas, momentos de checagem formativa) e estratégias para engajamento.
3) Resuma a avaliação em uma rubrica concisa e observável.
4) Mantenha a resposta bem formatada em tópicos e subtítulos. Use bullets curtos.
5) Faça uma checagem final: o plano está alinhado à BNCC? Há clareza de evidências de aprendizagem? Se encontrar lacunas, proponha melhorias.
${togglesText ? `6) Ajustes avançados:\n- ${togglesText}` : ""}

SAÍDA DESEJADA
- Forneça a resposta em seções com títulos em MAIÚSCULAS e bullets curtos.
- Inclua um bloco final \"Para adaptar\" com sugestões rápidas de customização.
- Finalize com três prompts de acompanhamento para continuar a conversa com o LLM.
`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    copied = false;
    const missing = Object.entries(form)
      .filter(([key, value]) => ["titulo", "disciplina", "conteudo", "objetivos", "nivel"].includes(key) && !value)
      .map(([key]) => key);

    if (missing.length) {
      validationMessage = "Preencha os campos obrigatórios para gerar o prompt.";
      result = "";
      return;
    }

    validationMessage = "";
    result = buildPrompt();
  };

  const copyToClipboard = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result);
    copied = true;
  };
</script>

<svelte:head>
  <title>Prof. GPT | Prompt Builder</title>
  <meta
    name="description"
    content="Monte prompts pedagógicos melhores para elaborar planos de aula alinhados à BNCC com o Prof. GPT."
  />
</svelte:head>

<section class="page">
  <header class="hero">
    <div>
      <p class="eyebrow">Prompt Builder pedagógico</p>
      <h1>Co-crie aulas melhores com instruções modernas para LLMs</h1>
      <p class="lede">
        Atualizamos o Prof. GPT para aproveitar boas práticas de prompt engineering. Estruture a persona, o contexto e o formato
        da resposta em segundos.
      </p>
      <div class="badges">
        <span class="badge">BNCC & inclusão</span>
        <span class="badge">Saída estruturada</span>
        <span class="badge">Sugestões de follow-up</span>
      </div>
    </div>
    <div class="card highlight">
      <h2>Checklist rápido</h2>
      <ul>
        {#each promptPrinciples as principle}
          <li>{principle}</li>
        {/each}
      </ul>
    </div>
  </header>

  <main class="layout">
    <section class="card form-card">
      <div class="section-header">
        <div>
          <p class="eyebrow">Dados da aula</p>
          <h2>Descreva o essencial</h2>
          <p class="muted">Use frases curtas para manter o prompt compacto e focado.</p>
        </div>
        <button class="ghost" on:click={() => (form = { ...form, titulo: "", disciplina: "", conteudo: "", objetivos: "", nivel: "", perfilTurma: "", recursos: "" })}>Limpar campos</button>
      </div>

      <form class="grid" on:submit|preventDefault={handleSubmit}>
        <label>
          <div class="label-row">
            <span>Nome da aula *</span>
            <span class="count">{counts(form.titulo, 100)}</span>
          </div>
          <input
            type="text"
            placeholder="Ex: Explorando reações dos metais alcalinos"
            bind:value={form.titulo}
            maxlength="100"
            required
          />
        </label>

        <label>
          <div class="label-row">
            <span>Disciplina ou componente *</span>
            <span class="count">{counts(form.disciplina, 100)}</span>
          </div>
          <input type="text" placeholder="Ex: Química" bind:value={form.disciplina} maxlength="100" required />
        </label>

        <label>
          <div class="label-row">
            <span>Nível da Educação Básica *</span>
          </div>
          <select bind:value={form.nivel} required>
            <option value="">Selecione</option>
            {#each educationLevels as level}
              <option value={level}>{level}</option>
            {/each}
          </select>
        </label>

        <label class="span-2">
          <div class="label-row">
            <span>Conteúdo que a aula deve cobrir *</span>
            <span class="count">{counts(form.conteudo, 1200)}</span>
          </div>
          <textarea
            rows="3"
            placeholder="Ex: Reações dos metais alcalinos com água; produtos formados; segurança em laboratório."
            bind:value={form.conteudo}
            maxlength="1200"
            required
          ></textarea>
        </label>

        <label class="span-2">
          <div class="label-row">
            <span>Principais objetivos *</span>
            <span class="count">{counts(form.objetivos, 1200)}</span>
          </div>
          <textarea
            rows="3"
            placeholder="Ex: Relacionar propriedades e reatividade; interpretar evidências; explicar por que a reação libera calor."
            bind:value={form.objetivos}
            maxlength="1200"
            required
          ></textarea>
        </label>

        <label>
          <div class="label-row">
            <span>Perfil da turma</span>
            <span class="muted">Interesses, ritmo, acessibilidade</span>
          </div>
          <textarea
            rows="2"
            placeholder="Ex: Turma curiosa, heterogênea, precisa de exemplos visuais e linguagem simples."
            bind:value={form.perfilTurma}
            maxlength="400"
          ></textarea>
        </label>

        <label>
          <div class="label-row">
            <span>Recursos e restrições</span>
            <span class="muted">Laboratório, tempo, materiais</span>
          </div>
          <textarea
            rows="2"
            placeholder="Ex: 50 minutos; laboratório com pia; poucos reagentes; projetor disponível."
            bind:value={form.recursos}
            maxlength="400"
          ></textarea>
        </label>

        <label>
          <div class="label-row">
            <span>Idioma de saída</span>
          </div>
          <input type="text" bind:value={form.idioma} />
        </label>

        <label>
          <div class="label-row">
            <span>Tom de voz</span>
          </div>
          <input type="text" bind:value={form.tom} />
        </label>

        <div class="toggles span-2">
          <p class="label-row">
            <span>Melhorias opcionais</span>
            <span class="muted">Aproveite recursos modernos de LLM</span>
          </p>
          <div class="toggle-grid">
            {#each improvementToggles as toggle}
              <button
                type="button"
                class:selected={selectedToggles.has(toggle.id)}
                on:click={() => toggleSelection(toggle.id)}
              >
                <div class="toggle-title">{toggle.label}</div>
                <p class="muted small">{toggle.helper}</p>
              </button>
            {/each}
          </div>
        </div>

        {#if validationMessage}
          <div class="alert" role="alert">{validationMessage}</div>
        {/if}

        <div class="actions">
          <button type="submit" class="primary">Gerar prompt</button>
          <button type="button" class="secondary" on:click={() => (result = buildPrompt())} disabled={!result && !form.titulo}>
            Atualizar com últimas edições
          </button>
        </div>
      </form>
    </section>

    <section class="card output-card">
      <div class="section-header">
        <div>
          <p class="eyebrow">Prompt pronto</p>
          <h2>Copie e use no ChatGPT</h2>
          <p class="muted">Envie para modelos modernos (GPT-4o, Claude 3, Llama 3) com a mesma estrutura.</p>
        </div>
      </div>

      {#if result}
        <div class="output">
          <pre>{result}</pre>
          <div class="output-actions">
            <button class="primary" on:click={copyToClipboard}>{copied ? "Copiado!" : "Copiar"}</button>
            <a class="secondary" href="https://chat.openai.com" target="_blank" rel="noreferrer">Abrir ChatGPT</a>
          </div>
        </div>
      {:else}
        <div class="empty">
          <p>Preencha os campos e gere o prompt estruturado. Use o checklist ao lado para orientar o texto.</p>
        </div>
      {/if}
    </section>
  </main>
</section>

<style>
  :global(body) {
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: radial-gradient(circle at 20% 20%, #e8f0ff, #f8fbff 35%, #ffffff);
    color: #0f172a;
    margin: 0;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(a) {
    text-decoration: none;
  }

  .page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1.5rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .hero {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    align-items: start;
  }

  .eyebrow {
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #2563eb;
    font-weight: 700;
    margin: 0 0 0.5rem;
  }

  h1 {
    margin: 0.25rem 0;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    line-height: 1.2;
  }

  h2 {
    margin: 0.25rem 0;
    font-size: 1.4rem;
  }

  .lede {
    color: #334155;
    margin: 0.5rem 0 1rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .badge {
    background: #e0ebff;
    color: #1d4ed8;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 18px;
    padding: 1.5rem;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  }

  .card.highlight {
    border: 1px solid #bfdbfe;
    background: linear-gradient(180deg, #ffffff 0%, #f4f7ff 100%);
  }

  .card.highlight ul {
    padding-left: 1.1rem;
    margin: 0.5rem 0 0;
    display: grid;
    gap: 0.5rem;
    color: #334155;
  }

  .layout {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 3fr 2fr;
  }

  .form-card form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
  }

  .muted {
    color: #475569;
    font-weight: 400;
  }

  .muted.small {
    font-size: 0.9rem;
  }

  .count {
    color: #94a3b8;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
  }

  label {
    display: block;
    font-weight: 600;
    color: #0f172a;
  }

  input,
  textarea,
  select {
    margin-top: 0.35rem;
    width: 100%;
    padding: 0.75rem;
    border-radius: 10px;
    border: 1px solid #cbd5e1;
    background: #f8fafc;
    font-size: 1rem;
    color: #0f172a;
  }

  textarea {
    resize: vertical;
  }

  .span-2 {
    grid-column: 1 / -1;
  }

  .toggles {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .toggle-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 0.75rem;
  }

  .toggle-grid button {
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    border-radius: 12px;
    padding: 0.85rem 1rem;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .toggle-grid button.selected {
    border-color: #2563eb;
    background: #e0ebff;
    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.15);
  }

  .toggle-title {
    font-weight: 700;
    margin-bottom: 0.3rem;
    color: #0f172a;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
  }

  button.primary,
  .primary {
    background: #2563eb;
    color: #ffffff;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  button.primary:hover,
  .primary:hover {
    background: #1d4ed8;
  }

  button.secondary,
  .secondary {
    background: #e2e8f0;
    color: #0f172a;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .ghost {
    background: transparent;
    border: 1px solid #e2e8f0;
    color: #475569;
    padding: 0.65rem 0.85rem;
    border-radius: 10px;
    cursor: pointer;
  }

  .alert {
    grid-column: 1 / -1;
    background: #fef3c7;
    color: #92400e;
    padding: 0.85rem 1rem;
    border: 1px solid #f59e0b;
    border-radius: 10px;
    font-weight: 600;
  }

  .output-card {
    position: sticky;
    top: 1.5rem;
    height: fit-content;
  }

  .output {
    background: #0f172a;
    color: #e2e8f0;
    border-radius: 12px;
    padding: 1rem;
    border: 1px solid #1e293b;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  pre {
    background: transparent;
    border: none;
    color: inherit;
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.45;
  }

  .output-actions {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .empty {
    background: #f8fafc;
    border: 1px dashed #cbd5e1;
    padding: 1rem;
    border-radius: 12px;
    color: #475569;
  }

  @media (max-width: 980px) {
    .layout {
      grid-template-columns: 1fr;
    }

    .output-card {
      position: static;
    }
  }
</style>
