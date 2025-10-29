// ====================================================================
// O array 'questions' COMPLETO com 15 perguntas sobre Apostasia e Restauração.
// ====================================================================

const questions = [
    {
        question: "1. Qual é a doutrina da 'Grande Apostasia', conforme ensinada na Igreja de Jesus Cristo dos Santos dos Últimos Dias?",
        answers: [
            { text: "Que a Bíblia foi totalmente destruída.", correct: false },
            { text: "Que toda a Igreja Cristã se separou em diferentes grupos.", correct: false },
            { text: "Que a autoridade do sacerdócio e a plenitude da doutrina foram tiradas da Terra após os apóstolos originais.", correct: true },
            { text: "Que o Livro de Mórmon foi perdido.", correct: false }
        ]
    },
    {
        question: "2. Qual escritura do Novo Testamento os Santos dos Últimos Dias frequentemente usam para apoiar a ideia de uma Apostasia, indicando que 'tudo iria se opor a Deus'?",
        answers: [
            { text: "Mateus 5:14 (A Luz do Mundo)", correct: false },
            { text: "2 Tessalonicenses 2: 2 ao 4 (Afastamento da verdade)", correct: true },
            { text: "João 3:16 (O amor de Deus)", correct: false },
            { text: "Salmos 23 (O Bom Pastor)", correct: false }
        ]
    },
    {
        question: "3. Qual é o papel principal da Restauração do Evangelho, liderada por Joseph Smith?",
        answers: [
            { text: "Criar uma nova religião.", correct: false },
            { text: "Restaurar a autoridade do sacerdócio, as ordenanças e as verdades que foram perdidas.", correct: true },
            { text: "Apenas traduzir as placas de ouro.", correct: false },
            { text: "Mudar o local da Igreja para os Estados Unidos.", correct: false }
        ]
    },
    {
        question: "4. Qual dos Apóstolos de Jesus Cristo original prometeu que 'os céus o receberão [Jesus]' até 'aos tempos da restauração de tudo' (Atos 3:21)?",
        answers: [
            { text: "Paulo.", correct: false },
            { text: "Pedro.", correct: true },
            { text: "João.", correct: false },
            { text: "Tiago.", correct: false }
        ]
    },
    {
        question: "5. O que os Santos dos Últimos Dias entendem por 'Sacerdócio'?",
        answers: [
            { text: "Apenas um cargo honorário.", correct: false },
            { text: "O poder e a autoridade de Deus delegados ao homem para agir em Seu nome.", correct: true },
            { text: "O direito de dar sermões.", correct: false },
            { text: "O dinheiro da Igreja.", correct: false }
        ]
    },
    {
        question: "6. Quais mensageiros celestiais vieram a Joseph Smith e Oliver Cowdery para restaurar o Sacerdócio Aarônico?",
        answers: [
            { text: "Elias e Eliseu.", correct: false },
            { text: "Moisés e Elias.", correct: false },
            { text: "João Batista.", correct: true },
            { text: "Morôni e Pedro.", correct: false }
        ]
    },
    {
        question: "7. Que chaves o Sacerdócio de Melquisedeque, restaurado por Pedro, Tiago e João, detém?",
        answers: [
            { text: "As chaves do batismo.", correct: false },
            { text: "As chaves para governar a Igreja e administrar as ordenanças do Templo.", correct: true },
            { text: "As chaves para realizar o Sacramento.", correct: false },
            { text: "As chaves para a obra missionária.", correct: false }
        ]
    },
    {
        question: "8. Qual é o propósito do Livro de Mórmon, conforme declarado na sua capa?",
        answers: [
            { text: "Contar a história da América.", correct: false },
            { text: "Convencer o judeu e o gentio de que Jesus é o Cristo.", correct: true },
            { text: "Substituir a Bíblia.", correct: false },
            { text: "Ser apenas um registro histórico.", correct: false }
        ]
    },
    {
       question: "9. Que profeta das escrituras previu que o Senhor iria abençoar um vidente, e que o nome do vidente, era igual ao seu?",
        answers: [
            { text: "José do Egito (2 Néfi 3:14–15).", correct: true },
            { text: "Néfi.", correct: false },
            { text: "Mosias.", correct: false },
            { text: "Morôni.", correct: false }
        ]
    },
    {
        question: "10. Qual é a atitude da Igreja de Jesus Cristo dos Santos dos Últimos Dias em relação à Bíblia?",
        answers: [
            { text: "Acreditam que ela foi completamente alterada e é inútil.", correct: false },
            { text: "Acreditam nela 'contanto que seja traduzida corretamente'.", correct: true },
            { text: "Usam apenas o Livro de Mórmon.", correct: false },
            { text: "A consideram uma obra de ficção.", correct: false }
        ]
    },
    {
        question: "11. Em que o Livro de Mórmon difere de outros livros sagrados em sua estrutura de testemunho?",
        answers: [
            { text: "Possui orações especiais no final.", correct: false },
            { text: "Contém o testemunho de três e de oito testemunhas oculares das placas.", correct: true },
            { text: "Possui mapas detalhados.", correct: false },
            { text: "É o livro mais vendido do mundo.", correct: false }
        ]
    },
    {
        question: "12. Qual é a promessa feita em Morôni 10:4–5 para quem ler e ponderar o Livro de Mórmon?",
        answers: [
            { text: "Que se tornarão ricos.", correct: false },
            { text: "Que a verdade do livro será manifestada pelo poder do Espírito Santo.", correct: true },
            { text: "Que verão anjos.", correct: false },
            { text: "Que todos os seus pecados serão perdoados imediatamente.", correct: false }
        ]
    },
    {
        question: "13. Quem visitou Joseph Smith e o preparou para a tradução do Livro de Mórmon?",
        answers: [
            { text: "O Profeta Elias.", correct: false },
            { text: "João, o Amado.", correct: false },
            { text: "O Anjo Morôni.", correct: true },
            { text: "O Anjo Gabriel.", correct: false }
        ]
    },
    {
        question: "14. De acordo com o Livro de Mórmon, qual é o 'evangelho' que os profetas pré-colombianos ensinavam?",
        answers: [
            { text: "As leis de Moisés.", correct: false },
            { text: "O evangelho de arrependimento e fé em Jesus Cristo.", correct: true },
            { text: "A fundação de um reino terrestre.", correct: false },
            { text: "O uso de ouro e prata.", correct: false }
        ]
    },
    {
        question: "15. De acordo com a doutrina, o que é necessário para que as ordenanças do sacerdócio sejam válidas?",
        answers: [
            { text: "Fé e obras.", correct: false },
            { text: "Somente a dignidade do receptor.", correct: false },
            { text: "A autoridade e o poder devidamente conferidos.", correct: true },
            { text: "Apenas a intenção sincera.", correct: false }
        ]
    }
];


// ====================================================================
// 2. REFERÊNCIAS HTML E VARIÁVEIS DE ESTADO
// ====================================================================

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz");
const resultScreen = document.getElementById("result-screen");
const scoreDisplay = document.getElementById("score-display");
const restartButton = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

// Variáveis de Áudio (removidas por padrao, mas podem ser adicionadas depois)
const bgMusic = document.getElementById("background-music");
const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");


// ====================================================================
// 3. FUNÇÕES DE ÁUDIO (Mantidas para referência futura)
// ====================================================================

function playBackgroundMusic() {
    if (bgMusic) {
        bgMusic.volume = 0.3; 
        bgMusic.play().catch(error => {
            console.log("Música de fundo não pôde iniciar automaticamente:", error);
        });
    }
}

function playSoundEffect(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0; 
        audioElement.volume = 1.0;
        audioElement.play();
    }
}


// ====================================================================
// 4. FUNÇÕES PRINCIPAIS DO QUIZ
// ====================================================================

function startQuiz() {
    // IMPORTANTE: Ajuste o total de perguntas aqui se for diferente de 20
    const totalQuestions = questions.length; 
    
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove("hide");
    resultScreen.classList.add("hide");
    nextButton.classList.add("hide");
    
    showQuestion();
    // playBackgroundMusic(); // Descomente para ativar a música
}

function showQuestion() {
    // 1. Limpa o estado anterior
    resetState(); 

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    const totalQuestions = questions.length;
    
    // 2. Exibe a pergunta (e a contagem correta)
    // NOTE a correção na exibição da pergunta e contagem!
    questionElement.innerHTML = `Pergunta ${questionNo}/${totalQuestions}: ${currentQuestion.question}`;

    // 3. Cria os botões de resposta
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        
        // Armazena se a resposta é correta no dataset
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    // Esconde o botão "Próxima Pergunta"
    nextButton.classList.add("hide");
    
    // Remove todos os botões de resposta anteriores
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // 1. Aplica o estilo (Acerto/Erro) e toca o som
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        // playSoundEffect(soundCorrect); // Descomente para ativar o som
    } else {
        selectedBtn.classList.add("wrong");
        // playSoundEffect(soundWrong); // Descomente para ativar o som
    }
    
    // 2. Desabilita todos os botões após a escolha
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Mostra qual era a resposta correta
        }
        button.disabled = true;
    });

    // 3. Mostra o botão "Próxima Pergunta"
    nextButton.classList.remove("hide");
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    // Esconde a tela do quiz e mostra a tela de resultado
    quizContainer.classList.add("hide");
    resultScreen.classList.remove("hide");
    
    // Exibe a pontuação final
    scoreDisplay.innerHTML = `${score} de ${questions.length}`;
}


// ====================================================================
// 5. EVENT LISTENERS (LIGANDO OS BOTÕES)
// ====================================================================

nextButton.addEventListener("click", () => {
    handleNextButton();
});

restartButton.addEventListener("click", () => {
    startQuiz(); // Chama a função para reiniciar o quiz
});


// ====================================================================
// 6. INICIA O QUIZ
// ====================================================================

startQuiz();