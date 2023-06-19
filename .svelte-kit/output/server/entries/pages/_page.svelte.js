import {
  c as create_ssr_component,
  e as escape,
  d as add_attribute,
} from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-keap3l{margin-top:2rem;text-align:center}.form-container.svelte-keap3l{max-width:400px;margin:0 auto}.result-area.svelte-keap3l{margin-top:2rem;border:1px solid #ccc;padding:1rem;text-align:left}.copy-btn.svelte-keap3l{margin-top:1rem}",
  map: null,
};
let title = "Prof. GPT";
let subtitle = "Co-crie seu Plano de Aula com auxílio de IA";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nomeAula = "";
  let disciplina = "";
  let conteudoAula = "";
  let objetivosAula = "";
  let nomeAulaCount = 0;
  let disciplinaCount = 0;
  let conteudoAulaCount = 0;
  let objetivosAulaCount = 0;
  $$result.css.add(css);
  nomeAulaCount = nomeAula.length;
  disciplinaCount = disciplina.length;
  conteudoAulaCount = conteudoAula.length;
  objetivosAulaCount = objetivosAula.length;
  return `<div class="container svelte-keap3l"><h1>${escape(title)}</h1>
  <p class="lead">${escape(subtitle)}</p>

  <div class="form-container svelte-keap3l"><form><div class="mb-3"><label for="nivelEducacao" class="form-label">Nível da etapa/modalidade da Educação Básica</label>
        <select class="form-control" id="nivelEducacao" placeholder="Selecione o nível"><option value="Educação Infantil - Creche">Educação Infantil - Creche</option><option value="Educação Infantil - Pré-Escola">Educação Infantil - Pré-Escola</option><option value="1º Ano - Ensino Fundamental">1º Ano - Ensino Fundamental</option><option value="2º Ano - Ensino Fundamental">2º Ano - Ensino Fundamental</option><option value="3º Ano - Ensino Fundamental">3º Ano - Ensino Fundamental</option><option value="4º Ano - Ensino Fundamental">4º Ano - Ensino Fundamental</option><option value="5º Ano - Ensino Fundamental">5º Ano - Ensino Fundamental</option><option value="6º Ano - Ensino Fundamental">6º Ano - Ensino Fundamental</option><option value="7º Ano - Ensino Fundamental">7º Ano - Ensino Fundamental</option><option value="8º Ano - Ensino Fundamental">8º Ano - Ensino Fundamental</option><option value="9º Ano - Ensino Fundamental">9º Ano - Ensino Fundamental</option><option value="1º Ano - Ensino Médio">1º Ano - Ensino Médio</option><option value="2º Ano - Ensino Médio">2º Ano - Ensino Médio</option><option value="3º Ano - Ensino Médio">3º Ano - Ensino Médio</option><option value="EJA - Ensino Fundamental - Anos Iniciais">EJA - Ensino Fundamental - Anos Iniciais</option><option value="EJA - Ensino Fundamental - Anos Finais">EJA - Ensino Fundamental - Anos Finais</option><option value="EJA - Ensino Médio">EJA - Ensino Médio</option></select></div>
      <div class="mb-3"><label for="nomeAula" class="form-label">Nome da Aula</label>
        <input type="text" class="form-control" id="nomeAula" maxlength="50"${add_attribute(
          "value",
          nomeAula,
          0
        )}>
        <div class="form-text">${escape(
          nomeAulaCount
        )} / 50 caracteres</div></div>
      <div class="mb-3"><label for="disciplina" class="form-label">Disciplina ou Componente Curricular</label>
        <input type="text" class="form-control" id="disciplina" maxlength="50"${add_attribute(
          "value",
          disciplina,
          0
        )}>
        <div class="form-text">${escape(
          disciplinaCount
        )} / 50 caracteres</div></div>
      <div class="mb-3"><label for="conteudoAula" class="form-label">Esta aula deve conter</label>
        <textarea class="form-control" id="conteudoAula" rows="3" maxlength="1500">${""}</textarea>
        <div class="form-text">${escape(
          conteudoAulaCount
        )} / 1500 caracteres</div></div>
      <div class="mb-3"><label for="objetivosAula" class="form-label">Principais objetivos da aula</label>
        <textarea class="form-control" id="objetivosAula" rows="3" maxlength="1500">${""}</textarea>
        <div class="form-text">${escape(
          objetivosAulaCount
        )} / 1500 caracteres</div></div>
      <button type="button" class="btn btn-primary">Gerar Prompt para o <strong>ChatGPT</strong></button></form></div>

  ${``}</div>`;
});
export { Page as default };
