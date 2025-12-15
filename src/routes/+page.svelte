<script lang="ts">
  import { generatePrompt, type LessonPlanData } from '$lib/promptUtils';

  let title = 'Prof. GPT';
  let subtitle = 'Co-crie seu Plano de Aula com auxílio de IA';

  let formData: LessonPlanData = {
    nomeAula: '',
    disciplina: '',
    conteudoAula: '',
    objetivosAula: '',
    nivelEducacao: 'Educação Infantil - Creche' // Default value
  };

  let result = '';
  let copied = false;

  $: nomeAulaCount = formData.nomeAula.length;
  $: disciplinaCount = formData.disciplina.length;
  $: conteudoAulaCount = formData.conteudoAula.length;
  $: objetivosAulaCount = formData.objetivosAula.length;

  function handleSubmit() {
    if (!formData.nomeAula || !formData.disciplina || !formData.conteudoAula || !formData.objetivosAula || !formData.nivelEducacao) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    result = generatePrompt(formData);
    copied = false;
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(result)
      .then(() => {
        copied = true;
        setTimeout(() => copied = false, 3000);
      })
      .catch((error) => {
        console.error('Erro ao copiar para a área de transferência.', error);
      });
  }

  function goToChatGPT() {
    window.open('https://chat.openai.com', '_blank');
  }
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto text-center mb-8">
    <h1 class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">{title}</h1>
    <p class="mt-4 text-xl text-gray-600">{subtitle}</p>
  </div>

  <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
    <form class="p-6 space-y-6 sm:p-8" on:submit|preventDefault={handleSubmit}>

      <div>
        <label for="nivelEducacao" class="block text-sm font-medium text-gray-700 mb-1">Nível da etapa/modalidade da Educação Básica</label>
        <select id="nivelEducacao" bind:value={formData.nivelEducacao} required class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border">
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

      <div>
        <label for="nomeAula" class="block text-sm font-medium text-gray-700 mb-1">Nome da Aula</label>
        <input type="text" id="nomeAula" bind:value={formData.nomeAula} maxlength="100" placeholder="Ex: Explorando os Metais Alcalinos: Propriedades e Reações" required class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border">
        <div class="text-xs text-gray-500 mt-1 text-right">{nomeAulaCount} / 100 caracteres</div>
      </div>

      <div>
        <label for="disciplina" class="block text-sm font-medium text-gray-700 mb-1">Disciplina ou Componente Curricular</label>
        <input type="text" id="disciplina" bind:value={formData.disciplina} maxlength="100" placeholder="Ex: Química" required class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border">
        <div class="text-xs text-gray-500 mt-1 text-right">{disciplinaCount} / 100 caracteres</div>
      </div>

      <div>
        <label for="conteudoAula" class="block text-sm font-medium text-gray-700 mb-1">Esta aula deve conter</label>
        <textarea id="conteudoAula" rows="3" bind:value={formData.conteudoAula} maxlength="1500" placeholder="Ex: Reações dos metais alcalinos com a água: Estudar as reações dos metais alcalinos (como lítio, sódio, potássio) com a água..." required class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"></textarea>
        <div class="text-xs text-gray-500 mt-1 text-right">{conteudoAulaCount} / 1500 caracteres</div>
      </div>

      <div>
        <label for="objetivosAula" class="block text-sm font-medium text-gray-700 mb-1">Principais objetivos da aula</label>
        <textarea id="objetivosAula" rows="3" bind:value={formData.objetivosAula} maxlength="1500" placeholder="Ex: Investigar e compreender as reações dos metais alcalinos com a água, relacionando-as com suas propriedades e reatividades" required class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"></textarea>
        <div class="text-xs text-gray-500 mt-1 text-right">{objetivosAulaCount} / 1500 caracteres</div>
      </div>

      <div class="pt-4">
        <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
          Gerar Prompt para o <strong>ChatGPT</strong>
        </button>
      </div>
    </form>
  </div>

  {#if result}
    <div class="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div class="p-6 sm:p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Prompt para o ChatGPT:</h3>
        <p class="text-sm text-gray-500 mb-4">Este texto será utilizado para modelar uma resposta personalizada no ChatGPT. Copie o prompt e cole na interface do ChatGPT.</p>

        <div class="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-800 whitespace-pre-wrap overflow-x-auto border border-gray-300">
          {result}
        </div>

        <div class="mt-6 flex flex-col sm:flex-row gap-4">
          <button class="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 {copied ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'}" on:click={copyToClipboard}>
            {#if copied}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              Copiado!
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              1. Copiar para a Área de Transferência
            {/if}
          </button>

          <button class="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200" on:click={goToChatGPT}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            2. Acessar o ChatGPT
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
