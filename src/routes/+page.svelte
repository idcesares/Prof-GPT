<script>
  let title = 'Prof. GPT';
  let subtitle = 'Co-crie seu Plano de Aula com auxílio de IA';
  let nomeAula = '';
  let disciplina = '';
  let conteudoAula = '';
  let objetivosAula = '';
  let nivelEducacao = '';
  let result = '';

  let nomeAulaCount = 0;
  let disciplinaCount = 0;
  let conteudoAulaCount = 0;
  let objetivosAulaCount = 0;

  $: nomeAulaCount = nomeAula.length;
  $: disciplinaCount = disciplina.length;
  $: conteudoAulaCount = conteudoAula.length;
  $: objetivosAulaCount = objetivosAula.length;

  function handleSubmit() {
  if (!nomeAula || !disciplina || !conteudoAula || !objetivosAula || !nivelEducacao) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  result = 
  `
  Como Prof. GPT, você é um especialista no desenvolvimento de planos de aula personalizados para a educação básica, abrangendo todas as disciplinas. Você entende profundamente a Base Nacional Comum Curricular (BNCC) do Brasil e elabora planos de ensino que atendem às diretrizes nacionais enquanto estimulam a curiosidade e o amor pelo aprendizado. Sua pedagogia se baseia no sociointeracionismo e construcionismo, realçando a importância do aprendizado social e da construção ativa do conhecimento. Acreditando na unicidade de cada aluno, você adapta métodos de ensino às necessidades individuais, promove um ambiente de aprendizado inclusivo e diversificado, e encoraja os alunos a serem questionadores e exploradores ativos em seu processo de aprendizado.

  Com base nas informações abaixo, crie um plano de aula.

  O plano de aula deverá conter:
  - Título da aula
  - Objetivo principal a ser alcançado
  - Roteiro e conteúdo da aula
  - Habilidades e competências a serem desenvolvidas
  - Metodologia e recursos didáticos
  - Avaliação

  As informações abaixo serão utilizadas para a criação do plano de aula:

  Nome da aula: ${nomeAula}\n
  Disciplina: ${disciplina}\n
  Conteúdo: ${conteudoAula}\n
  Objetivos: ${objetivosAula}
  Nível de Educação: ${nivelEducacao}
  `;
  }
  function copyToClipboard() {
    navigator.clipboard.writeText(result)
      .then(() => {
        alert('Texto copiado para a área de transferência.');
      })
      .catch((error) => {
        console.error('Erro ao copiar para a área de transferência.', error);
      });
  }

  function goToChatGPT() {
    window.open('https://chat.openai.com', '_blank');
    console.log(link)
  }

</script>

<style>
  .container {
    margin-top: 2rem;
    text-align: center;
  }

  .form-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .result-area {
    margin-top: 2rem;
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: left;
  }

  .copy-btn {
    margin-top: 1rem;
  }
</style>

<div class="container">
    <h1>{title}</h1>
    <p class="lead">{subtitle}</p>

  <div class="form-container">
    <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
      <div class="mb-3">
        <label for="nivelEducacao" class="form-label fw-bold">Nível da etapa/modalidade da Educação Básica</label>
        <select class="form-control" id="nivelEducacao" bind:value="{nivelEducacao}" required>
          <option>Educação Infantil - Creche</option>
          <option>Educação Infantil - Pré-Escola</option>
          <option>1º Ano - Ensino Fundamental</option>
          <option>2º Ano - Ensino Fundamental</option>
          <option>3º Ano - Ensino Fundamental</option>
          <option>4º Ano - Ensino Fundamental</option>
          <option>5º Ano - Ensino Fundamental</option>
          <option>6º Ano - Ensino Fundamental</option>
          <option>7º Ano - Ensino Fundamental</option>
          <option>8º Ano - Ensino Fundamental</option>
          <option>9º Ano - Ensino Fundamental</option>
          <option>1ª série - Ensino Médio</option>
          <option>2ª série - Ensino Médio</option>
          <option>3ª série - Ensino Médio</option>
          <option>EJA - Ensino Fundamental - Anos Iniciais</option>
          <option>EJA - Ensino Fundamental - Anos Finais</option>
          <option>EJA - Ensino Médio</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="nomeAula" class="form-label fw-bold">Nome da Aula</label>
        <input type="text" class="form-control" id="nomeAula" bind:value="{nomeAula}" maxlength="50" placeholder="Ex: Explorando os Metais Alcalinos: Propriedades e Reações" required>
        <div class="form-text">{nomeAulaCount} / 100 caracteres</div>
      </div>
      <div class="mb-3">
        <label for="disciplina" class="form-label fw-bold">Disciplina ou Componente Curricular</label>
        <input type="text" class="form-control" id="disciplina" bind:value="{disciplina}" maxlength="50" placeholder="Ex: Química" required>
        <div class="form-text">{disciplinaCount} / 100 caracteres</div>
      </div>
      <div class="mb-3">
        <label for="conteudoAula" class="form-label fw-bold">Esta aula deve conter</label>
        <textarea class="form-control" id="conteudoAula" rows="3" bind:value="{conteudoAula}" maxlength="1500" placeholder="Ex: Reações dos metais alcalinos com a água: Estudar as reações dos metais alcalinos (como lítio, sódio, potássio) com a água, observando os produtos formados, como hidrogênio gasoso e hidróxidos alcalinos." required></textarea>
        <div class="form-text">{conteudoAulaCount} / 1200 caracteres</div>
      </div>
      <div class="mb-3">
        <label for="objetivosAula" class="form-label fw-bold">Principais objetivos da aula</label>
        <textarea class="form-control" id="objetivosAula" rows="3" bind:value="{objetivosAula}" maxlength="1500" placeholder="Ex: Investigar e compreender as reações dos metais alcalinos com a água, relacionando-as com suas propriedades e reatividades" required></textarea>
        <div class="form-text">{objetivosAulaCount} / 1200 caracteres</div>
      </div>
      <button type="submit" class="btn btn-primary" on:click="{handleSubmit}">Gerar Prompt para o <strong>ChatGPT</strong></button>
    </form>
  </div>

  {#if result}
    <div class="result-area">
      <h3>Prompt para o ChatGPT:</h3>
      <p class="subtitle">Este texto será utilizado para modelar uma resposta personalizada no ChatGPT. Utilize o botão abaixo para copiar o prompt a área de escrita do ChatGPT.</p>
      <pre>{result}</pre>
      <button class="btn btn-primary copy-btn" on:click="{copyToClipboard}">1. Copiar para a Área de Transferência</button>
      <button class="btn btn-secondary copy-btn" on:click="{goToChatGPT}">2. Acessar o ChatGPT</button>
    </div>
  {/if}
</div>