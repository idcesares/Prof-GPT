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
  result = 
  `
  Você é o Prof. GPT, um especialista em desenvolvimento de planos de aula para a educação básica, cobrindo todas as disciplinas e componentes curriculares. Você tem um profundo entendimento da Base Nacional Comum Curricular (BNCC) e utiliza sua criatividade e proatividade para elaborar planos de ensino eficazes e envolventes. Sua pedagogia está enraizada em teorias como o sociointeracionismo e o construcionismo, que destacam a importância do aprendizado social e da construção ativa do conhecimento. Você acredita que cada aluno é único e que o conhecimento é construído de maneira individual e coletiva, por meio de interações sociais e experiências práticas.

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
        alert('Copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard:', error);
      });
  }
</script>

<style>
  .container {
    margin-top: 2rem;
    text-align: center;
  }

  .form-container {
    max-width: 400px;
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
    <form>
      <div class="mb-3">
        <label for="nivelEducacao" class="form-label">Nível da etapa/modalidade da Educação Básica</label>
        <select class="form-control" id="nivelEducacao" bind:value="{nivelEducacao}" placeholder="Selecione o nível">
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
          <option>1º Ano - Ensino Médio</option>
          <option>2º Ano - Ensino Médio</option>
          <option>3º Ano - Ensino Médio</option>
          <option>EJA - Ensino Fundamental - Anos Iniciais</option>
          <option>EJA - Ensino Fundamental - Anos Finais</option>
          <option>EJA - Ensino Médio</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="nomeAula" class="form-label">Nome da Aula</label>
        <input type="text" class="form-control" id="nomeAula" bind:value="{nomeAula}" maxlength="50">
        <div class="form-text">{nomeAulaCount} / 50 caracteres</div>
      </div>
      <div class="mb-3">
        <label for="disciplina" class="form-label">Disciplina ou Componente Curricular</label>
        <input type="text" class="form-control" id="disciplina" bind:value="{disciplina}" maxlength="50">
        <div class="form-text">{disciplinaCount} / 50 caracteres</div>
      </div>
      <div class="mb-3">
        <label for="conteudoAula" class="form-label">Esta aula deve conter</label>
        <textarea class="form-control" id="conteudoAula" rows="3" bind:value="{conteudoAula}" maxlength="1500"></textarea>
        <div class="form-text">{conteudoAulaCount} / 1500 caracteres</div>
      </div>
      <div class="mb-3">
        <label for="objetivosAula" class="form-label">Principais objetivos da aula</label>
        <textarea class="form-control" id="objetivosAula" rows="3" bind:value="{objetivosAula}" maxlength="1500"></textarea>
        <div class="form-text">{objetivosAulaCount} / 1500 caracteres</div>
      </div>
      <button type="button" class="btn btn-primary" on:click="{handleSubmit}">Gerar Prompt para o <strong>ChatGPT</strong></button>
    </form>
  </div>

  {#if result}
    <div class="result-area">
      <h3>Prompt para o ChatGPT:</h3>
      <p class="subtitle">Utilize o botão abaixo para copiar o prompt para o ChatGPT</p>
      <pre>{result}</pre>
      <button class="btn btn-secondary copy-btn" on:click="{copyToClipboard}">Copiar para a Área de Transferência</button>
    </div>
  {/if}
</div>