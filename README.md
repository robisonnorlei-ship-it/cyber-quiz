# 🎮 CYBER QUIZ v1.0

Um jogo de quiz interativo com tema cyberpunk, testando seu conhecimento em tecnologia e programação.

## ✨ Características

- **5 Categorias**: JavaScript, Python, Web Development, Git & GitHub, Algoritmos
- **Múltiplos Níveis**: Easy, Medium e Hard
- **Sistema de Pontos**: Ganhe pontos baseado na dificuldade
- **Interface Cyberpunk**: Visual futurista com animações glitch
- **Estatísticas em Tempo Real**: Acompanhe seu progresso
- **Explicações Educacionais**: Aprenda com cada resposta
- **Tela de Resultado Final**: Veja sua pontuação e rating

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador
2. Selecione uma categoria para começar
3. Responda as 5 perguntas da categoria
4. Veja seu resultado final e rating

## 📁 Arquivos

- **index.html** - Interface HTML e estilos CSS
- **quiz-data.js** - Base de dados com todas as perguntas
- **quiz-game.js** - Lógica e interatividade do jogo

## 🎯 Categorias e Perguntas

### ⚡ JavaScript (5 perguntas)
- Diferença entre let e var
- O que é Closure
- typeof NaN
- Como criar arrays
- Método reduce

### 🐍 Python (5 perguntas)
- Criação de listas
- Decoradores
- Comparação == vs is
- Iteração em dicionários
- List comprehension

### 🌐 Web Development (5 perguntas)
- O que é CSS
- Flexbox vs Grid
- Responsive Design
- Viewport meta tag
- API REST

### 🔧 Git & GitHub (5 perguntas)
- git clone
- git pull vs git fetch
- Merge conflicts
- Desfazer commits
- Branches

### 🧠 Algoritmos (5 perguntas)
- Busca binária
- Big O notation
- Algoritmos de ordenação
- Recursão
- Memoização

## 📊 Sistema de Pontos

- **Easy**: 10 pontos ✓
- **Medium**: 25 pontos ✓
- **Hard**: 50 pontos ✓

Você ganha pontos apenas se acertar a resposta!

## 🎖️ Ratings

| Taxa de Acerto | Rating |
|---|---|
| 100% | 🔥 PERFEITO! VOCÊ É UM GÊNIO! 🔥 |
| 80-99% | ⭐ EXCELENTE! MUITO BOM! ⭐ |
| 60-79% | ✨ BOM! CONTINUE ESTUDANDO! ✨ |
| 40-59% | 💪 PODE MELHORAR! MAIS UMA VEZ! 💪 |
| < 40% | 📚 ESTUDE MAIS E TENTE NOVAMENTE! 📚 |

## 🎨 Customização

### Adicionar Novas Perguntas

Edite `quiz-data.js` e use esta estrutura:

```javascript
{
    question: "Sua pergunta aqui?",
    options: ["Opção A", "Opção B", "Opção C", "Opção D"],
    correct: 0,
    difficulty: "easy",
    explanation: "Sua explicação..."
}
```

### Adicionar Novas Categorias

Adicione um novo entry em `quizCategories` em `quiz-data.js`:

```javascript
"Sua Categoria": {
    icon: '🎯',
    questions: [ /* suas perguntas */ ]
}
```

## 🛠️ Tecnologias

- HTML5
- CSS3 (com animações cyberpunk)
- JavaScript Vanilla (sem dependências)

## 📝 Licença

Livre para uso e modificação! 🚀

---

**Desenvolvido com ❤️ para testar seu conhecimento em tech**