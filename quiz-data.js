const quizCategories = {
    JavaScript: {
        icon: '⚡',
        questions: [
            {
                question: "Qual é a diferença entre 'let' e 'var' em JavaScript?",
                options: ["let tem escopo de bloco, var tem escopo de função", "var tem escopo de bloco, let tem escopo de função", "Não há diferença", "let é mais rápido que var"],
                correct: 0,
                difficulty: "easy",
                explanation: "let tem escopo de bloco (mais seguro), enquanto var tem escopo de função. let foi introduzido no ES6 para corrigir problemas de escopo."
            },
            {
                question: "O que é uma Closure em JavaScript?",
                options: ["Uma função que termina o programa", "Uma função que tem acesso ao escopo da função externa", "Um objeto imutável", "Um tipo de array"],
                correct: 1,
                difficulty: "medium",
                explanation: "Closures são funções que retêm acesso às variáveis do escopo da função que as criou, mesmo após essa função ter terminado."
            },
            {
                question: "Qual é o resultado de typeof NaN?",
                options: ["'nan'", "'number'", "'undefined'", "'object'"],
                correct: 1,
                difficulty: "hard",
                explanation: "typeof NaN retorna 'number', apesar de NaN significar 'Not a Number'. Isso é uma peculiaridade histórica do JavaScript."
            },
            {
                question: "Como se cria um array vazio em JavaScript?",
                options: ["array = []", "array = new Array()", "array = {}", "Ambas a) e b) estão corretas"],
                correct: 3,
                difficulty: "easy",
                explanation: "Ambos [] e new Array() criam arrays vazios. A sintaxe [] é mais comum e recomendada por ser mais concisa."
            },
            {
                question: "O que faz o método 'reduce' em arrays?",
                options: ["Remove elementos do array", "Retorna um único valor a partir de todos os elementos", "Ordena o array", "Cria uma cópia do array"],
                correct: 1,
                difficulty: "hard",
                explanation: "reduce() executa uma função acumuladora em cada elemento, retornando um único valor resultante da operação."
            }
        ]
    },
    Python: {
        icon: '🐍',
        questions: [
            {
                question: "Qual é a forma correta de criar uma lista em Python?",
                options: ["lista = (1, 2, 3)", "lista = [1, 2, 3]", "lista = {1, 2, 3}", "lista = <1, 2, 3>"],
                correct: 1,
                difficulty: "easy",
                explanation: "Listas em Python usam colchetes []. Parênteses criam tuplas, chaves criam sets ou dicionários."
            },
            {
                question: "O que é um decorador em Python?",
                options: ["Uma função que modifica outras funções ou classes", "Um tipo de comentário", "Uma estrutura de dados", "Um comando de importação"],
                correct: 0,
                difficulty: "medium",
                explanation: "Decoradores são funções que modificam o comportamento de outras funções ou classes sem alterar seu código-fonte."
            },
            {
                question: "Qual é a diferença entre '==' e 'is' em Python?",
                options: ["Não há diferença", "'==' compara valores, 'is' compara identidade (referência na memória)", "'is' compara valores, '==' compara identidade", "'is' é mais rápido que '=='"],
                correct: 1,
                difficulty: "hard",
                explanation: "'==' compara se os valores são iguais, enquanto 'is' verifica se são o mesmo objeto na memória."
            },
            {
                question: "Como se itera sobre um dicionário em Python?",
                options: ["for item in dict:", "for key, value in dict.items():", "for i in range(len(dict)):", "Todas as opções funcionam"],
                correct: 1,
                difficulty: "medium",
                explanation: "for key, value in dict.items() é a forma recomendada para iterar sobre chaves e valores simultaneamente."
            },
            {
                question: "O que é list comprehension em Python?",
                options: ["Uma maneira de criar listas de forma concisa", "Um tipo de comentário", "Uma função built-in", "Um comando de importação"],
                correct: 0,
                difficulty: "medium",
                explanation: "List comprehension é uma sintaxe elegante para criar listas: [x*2 for x in range(5)] cria [0,2,4,6,8]"
            }
        ]
    },
    "Web Development": {
        icon: '🌐',
        questions: [
            {
                question: "O que significa CSS?",
                options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Code Style Standards"],
                correct: 1,
                difficulty: "easy",
                explanation: "CSS significa Cascading Style Sheets, usada para estilizar elementos HTML na web."
            },
            {
                question: "Qual é a diferença entre display: flex e display: grid?",
                options: ["flex é 1D (linha ou coluna), grid é 2D (linhas e colunas)", "grid é 1D, flex é 2D", "São a mesma coisa", "flex é mais rápido"],
                correct: 0,
                difficulty: "medium",
                explanation: "Flexbox trabalha em uma dimensão (linha OU coluna), enquanto Grid trabalha em duas dimensões simultaneamente."
            },
            {
                question: "O que é responsive design?",
                options: ["Usar cores vibrantes", "Fazer com que o site se adapte a diferentes tamanhos de tela", "Adicionar animações", "Usar muitas imagens"],
                correct: 1,
                difficulty: "easy",
                explanation: "Responsive design garante que um website funcione bem em dispositivos de diferentes tamanhos (mobile, tablet, desktop)."
            },
            {
                question: "Qual é a função do viewport meta tag?",
                options: ["Definir a cor do site", "Controlar como a página é renderizada em dispositivos móveis", "Melhorar SEO", "Adicionar segurança"],
                correct: 1,
                difficulty: "medium",
                explanation: "O viewport meta tag controla o layout em navegadores móveis e é essencial para responsive design."
            },
            {
                question: "O que é uma API REST?",
                options: ["Uma ferramenta para desenhar", "Arquitetura para comunicação entre clientes e servidores via HTTP", "Um tipo de banco de dados", "Uma linguagem de programação"],
                correct: 1,
                difficulty: "hard",
                explanation: "REST (Representational State Transfer) é um padrão arquitetural para APIs que usam HTTP para operações CRUD."
            }
        ]
    },
    "Git & GitHub": {
        icon: '🔧',
        questions: [
            {
                question: "O que faz o comando 'git clone'?",
                options: ["Cria um novo repositório local", "Copia um repositório remoto para a máquina local", "Deleta um repositório", "Envia alterações para o repositório remoto"],
                correct: 1,
                difficulty: "easy",
                explanation: "git clone cria uma cópia local completa de um repositório remoto, incluindo seu histórico."
            },
            {
                question: "Qual é a diferença entre 'git pull' e 'git fetch'?",
                options: ["Não há diferença", "fetch busca as alterações, pull busca E mescla", "pull é mais seguro que fetch", "fetch é obsoleto"],
                correct: 1,
                difficulty: "medium",
                explanation: "fetch apenas baixa as alterações, enquanto pull faz fetch + merge automaticamente."
            },
            {
                question: "O que é um merge conflict?",
                options: ["Um erro ao fazer commit", "Uma situação onde duas branches modificam as mesmas linhas", "Um problema de permissões", "Um tipo de bug"],
                correct: 1,
                difficulty: "medium",
                explanation: "Merge conflict ocorre quando duas branches alteram o mesmo código, e Git não consegue resolver automaticamente."
            },
            {
                question: "Como se desfaz o último commit (mantendo as mudanças)?",
                options: ["git reset HEAD~1", "git revert HEAD", "git undo", "git delete HEAD"],
                correct: 0,
                difficulty: "hard",
                explanation: "git reset HEAD~1 desfaz o commit mas mantém as alterações no diretório de trabalho."
            },
            {
                question: "Para que serve uma branch?",
                options: ["Fazer backup do código", "Isolar linhas de desenvolvimento paralelas", "Aumentar a velocidade", "Melhorar a segurança"],
                correct: 1,
                difficulty: "easy",
                explanation: "Branches permitem trabalhar em features isoladas sem afetar o código principal (main/master)."
            }
        ]
    },
    "Algoritmos": {
        icon: '🧠',
        questions: [
            {
                question: "Qual é a complexidade de uma busca binária?",
                options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
                correct: 2,
                difficulty: "hard",
                explanation: "A busca binária divide o espaço de busca pela metade a cada iteração, resultando em O(log n)."
            },
            {
                question: "O que é Big O notation?",
                options: ["Um tipo de variável", "Uma forma de medir a complexidade de um algoritmo", "Uma linguagem de programação", "Um tipo de banco de dados"],
                correct: 1,
                difficulty: "medium",
                explanation: "Big O descreve como o tempo/espaço de um algoritmo cresce com o tamanho da entrada."
            },
            {
                question: "Qual algoritmo de ordenação tem melhor caso O(n)?",
                options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Merge Sort"],
                correct: 2,
                difficulty: "hard",
                explanation: "Insertion Sort tem O(n) no melhor caso (quando já está ordenado), enquanto a maioria tem O(n log n)."
            },
            {
                question: "O que é recursão?",
                options: ["Uma função que não retorna nada", "Uma função que chama a si mesma", "Um tipo de loop", "Um erro do programa"],
                correct: 1,
                difficulty: "easy",
                explanation: "Recursão é quando uma função chama a si mesma, sempre com um caso base para evitar infinitude."
            },
            {
                question: "O que é memoização?",
                options: ["Adicionar comentários ao código", "Armazenar em cache resultados já calculados", "Fazer backup de dados", "Otimizar memória RAM"],
                correct: 1,
                difficulty: "medium",
                explanation: "Memoização otimiza recursão armazenando resultados já calculados para evitar recomputação."
            }
        ]
    }
};