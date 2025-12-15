import { describe, it, expect } from 'vitest';
import { generatePrompt, type LessonPlanData } from './promptUtils';

describe('generatePrompt', () => {
    it('should generate a prompt with all fields correctly inserted', () => {
        const data: LessonPlanData = {
            nomeAula: 'Introdução à Fotossíntese',
            disciplina: 'Biologia',
            conteudoAula: 'Processo da fotossíntese, importância para a vida, fases clara e escura.',
            objetivosAula: 'Compreender como as plantas produzem energia.',
            nivelEducacao: '1ª série - Ensino Médio'
        };

        const prompt = generatePrompt(data);

        expect(prompt).toContain('Como Prof. GPT, você é um especialista');
        expect(prompt).toContain('Introdução à Fotossíntese');
        expect(prompt).toContain('Biologia');
        expect(prompt).toContain('Processo da fotossíntese');
        expect(prompt).toContain('Compreender como as plantas produzem energia');
        expect(prompt).toContain('1ª série - Ensino Médio');
        expect(prompt).toContain('sociointeracionismo e construcionismo');
    });

    it('should format the output as Markdown', () => {
        const data: LessonPlanData = {
            nomeAula: 'Test',
            disciplina: 'Test',
            conteudoAula: 'Test',
            objetivosAula: 'Test',
            nivelEducacao: 'Test'
        };
        const prompt = generatePrompt(data);
        expect(prompt).toContain('# Formato de Saída');
        expect(prompt).toContain('O plano de aula deve ser formatado em Markdown');
    });
});
