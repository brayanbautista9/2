// Datos de los cuentos
const stories = [
    {
        title: "La cigüeña y la zorra",
        text: `Había una vez una cigüeña bonachona que se llamaba Picorrojo y vivía en la copa de un roble. En el tronco del mismo árbol vivía un anciano búho y un poco más abajo, entre las raíces del árbol, una zorra con muy mal genio a la que todos llamaban Malauva.

La zorra se portaba muy mal con la cigüeña y siempre estaba buscando la forma de burlarse de ella. Por ejemplo, un día que Malauva invitó a Picorrojo a comer: 
- Baja Picorrojo, que te invito a comer conmigo unas gachas que acabo de preparar. 
Pero el animal había puesto las gachas en una piedra muy llana formando una capa muy fina porque sabía que así la cigüeña no podría comérselas. Y eso fue precisamente lo que ocurrió. La cigüeña no pudo picar nada y la zorra se las comió todas. Pero eso no fue todo, porque encima tuvo la cara de decirle: 
- ¡Cómo te has puesto cigüeña! Ahora estarás varios días sin comer, ¿eh? 
La pobre cigüeña no dijo nada y se subió a su nido con el mismo hambre con el que había bajado. 

Un día el búho, que era amigo de la cigüeña y a quien no le gustaba nada la forma en que la zorra se burlaba de ella, tuvo una idea. 
- Picorrojo, ve a buscar una caña en la que quepa tu pico y cuando la encuentras vuelve. Prepararemos unas migas y las meteremos dentro. Le dirás a la zorra que la invitas a comer y verás cómo nos reiremos de ella viendo cómo intenta comerlas. 

El plan del búho funcionó perfectamente. La cigüeña metía una y otra vez su pico en la caña y cogía una buena ración de migas, mientras que Malauva lo intentaba con su hocico y no sacaba nada. Pero llegó un momento en el que la zorra perdió la paciencia y de repente cogió la caña con los dientes, la destrozó y se comió todas las migas. 

El búho permaneció la noche entera pensando de qué forma podrían dar un escarmiento a la zorra y al final tuvo una idea. Al día siguiente el búho explicó a la cigüeña lo que debía hacer. Después fue Picorrojo y habló con Malauva: 
- Comadre, vengo a contarle me han invitado a una boda en el cielo. Va a ser un festín. Habrá pavo relleno, gallina en pepitoria, pollitos dorados, queso, gorrinos al horno… Lástima que usted no pueda venir… a no ser que quiera subirse a mis espaldas. Yo podría llevarla si quiere venir. 
- ¡Claro que quiero! - dijo Malauva relamiéndose sólo de pensar en toda esa comida 

Así que se subió la zorra sobre las alas de la cigüeña y ésta echó a volar. Al rato dijo Picorrojo: 
- ¡Ay! Creo que tiene pulgas 
- ¿Yo? ¿Nada de eso! - dijo la zorra 
- Yo sólo sé que me pica mucho la espalda así que agárrese bien que me voy a sacudir 
Al sacudirse la cigüeña la zorra salió volando y por los aires. Menos mal que tuvo la suerte de caer encima de un arbusto y gracias a eso salió viva. 

Cuando regresó a su madriguera hecha trizas y llena de heridas se encontró con el búho. 
- ¿Qué? ¿Cómo ha ido la boda? 
- Bien, pero si salgo de ésta ya le digo que no iré a mas bodas en el cielo`,
        wordCount: 570,
        questions: [
            {
                question: "¿Qué se puede inferir sobre la personalidad de la zorra Malauva?",
                options: [
                    "Es bromista pero inofensiva",
                    "Es egoísta y cruel",
                    "Es educada y generosa",
                    "Es astuta y vengativa"
                ],
                answer: 1,
                explanation: "La zorra Malauva demuestra ser egoísta y cruel al burlarse de la cigüeña y aprovecharse de ella repetidamente."
            },
            {
                question: "¿Por qué el búho decidió ayudar a Picorrojo?",
                options: [
                    "Porque quería burlarse de la zorra también",
                    "Porque era amigo de la cigüeña y no toleraba las injusticias",
                    "Porque la zorra lo molestaba también",
                    "Porque la cigüeña no podía defenderse sola"
                ],
                answer: 1,
                explanation: "El búho era amigo de la cigüeña y no le gustaba cómo la zorra se burlaba de ella, mostrando su sentido de justicia."
            },
            {
                question: "El plan del búho con la caña demostró que se puede devolver la burla con astucia y sin violencia.",
                options: ["Verdadero", "Falso"],
                answer: 0,
                explanation: "El plan inicial del búho fue astuto y no violento, usando la inteligencia para devolver la burla."
            },
            {
                question: "¿Cuál podría ser la intención del autor al mostrar cómo la cigüeña se vengó?",
                options: [
                    "Enseñar que siempre es mejor perdonar",
                    "Mostrar que las bromas pueden tener consecuencias",
                    "Defender la violencia como solución",
                    "Justificar que el más débil nunca gana"
                ],
                answer: 1,
                explanation: "El cuento muestra que las acciones tienen consecuencias, especialmente cuando se trata de burlas malintencionadas."
            },
            {
                question: "¿Qué lección deja el final del cuento cuando la zorra cae del cielo?",
                options: [
                    "Que la violencia resuelve todo",
                    "Que quien mal obra, mal acaba",
                    "Que hay que saber volar",
                    "Que la venganza no sirve"
                ],
                answer: 1,
                explanation: "La moraleja es clara: las malas acciones tienen consecuencias negativas para quien las realiza."
            }
        ]
    },
    {
        title: "Caperucita Roja",
        text: `Había una vez una niña llamada Caperucita Roja, que vivía en un bosque con su madre. Un día, su madre le dijo: 
Lleva esta cesta con pan y miel a tu abuela. Está enferma y esto la animará. No hables con extraños y ve directo por el camino.

Caperucita Roja asintió y partió. En el bosque, un lobo la vio y le preguntó:
—¿Adónde vas, niña bonita?
—A casa de mi abuela, al otro lado del bosque —respondió ella, olvidando la advertencia.

El lobo, astuto, corrió a la casa de la abuela, llamó a la puerta y fingió ser Caperucita. La abuela abrió y él la encerró en el armario. Luego, se puso su gorro y se metió en la cama.

Cuando Caperucita llegó, notó algo raro:
—Abuela, ¡qué ojos más grandes tienes!
—Son para verte mejor —dijo el lobo.
—¡Y qué orejas más grandes!
—Son para oírte mejor.
—¡Y qué dientes más grandes!
—¡Son para comerte mejor! —rugió el lobo, saltando de la cama.

En ese momento, un leñador que escuchó los gritos entró con su hacha y asustó al lobo, que huyó para nunca volver. La abuela salió del armario y abrazó a Caperucita, quien prometió nunca más desobedecer.`,
        wordCount: 250,
        questions: [
            {
                question: "¿Qué alimentos llevaba Caperucita en su cesta?",
                options: [
                    "Manzanas y peras",
                    "Pan y miel",
                    "Queso y vino",
                    "Galletas y chocolate"
                ],
                answer: 1,
                explanation: "La madre de Caperucita le dio una cesta con pan y miel para llevar a su abuela."
            },
            {
                question: "¿Qué advertencia le dio su madre?",
                options: [
                    "Que no se mojara",
                    "Que no hablara con extraños",
                    "Que corriera rápido",
                    "Que cantara fuerte"
                ],
                answer: 1,
                explanation: "La madre le advirtió específicamente que no hablara con extraños en el camino."
            },
            {
                question: "¿Dónde escondió el lobo a la abuela?",
                options: [
                    "En el sótano",
                    "En el armario",
                    "En el ático",
                    "En el jardín"
                ],
                answer: 1,
                explanation: "El lobo encerró a la abuela en el armario antes de hacerse pasar por ella."
            },
            {
                question: "¿Quién rescató a Caperucita?",
                options: [
                    "Un policía",
                    "Un leñador",
                    "Un cazador",
                    "Su padre"
                ],
                answer: 1,
                explanation: "Fue un leñador quien escuchó los gritos y asustó al lobo."
            },
            {
                question: "¿Qué prometió Caperucita al final?",
                options: [
                    "Comer más verduras",
                    "Nunca más desobedecer",
                    "Visitar más a su abuela",
                    "Aprender a cocinar"
                ],
                answer: 1,
                explanation: "Caperucita aprendió la lección y prometió no volver a desobedecer a su madre."
            }
        ]
    },
    {
        title: "La gallina de los huevos de oro",
        text: `Había una vez un granjero pobre que vivía con su esposa en una pequeña cabaña. Un día, su gallina, la más gordita del corral, puso un huevo brillante. Al recogerlo, el granjero casi se cae de espaldas: ¡era de oro puro!

—¡Mira, mujer! —gritó emocionado—. ¡Nuestra gallina es mágica!

Al día siguiente, la gallina puso otro huevo de oro, y así durante una semana. El granjero y su esposa vendieron los huevos y se llenaron de lujos: compraron vestidos, comida fina y hasta una carreta nueva.

Pero el granjero, ávido de riqueza, empezó a impacientarse:
—¿Por qué esperar a que ponga un huevo cada día? ¡Si la abrimos, sacaremos todo el oro de una vez!

Su esposa trató de detenerlo:
—¡No seas tonto! Si la matas, no tendremos más oro.

Pero el granjero no escuchó. Tomó un cuchillo, mató a la gallina y la abrió... solo para descubrir que por dentro era igual que todas las demás. No había oro, ni joyas, ni nada.

Al día siguiente, sin gallina y sin huevos, el granjero y su esposa volvieron a ser pobres. El hombre lloró de arrepentimiento, pero ya era tarde.

Moraleja: La avaricia rompe el saco. Quien todo lo quiere, todo lo pierde.`,
        wordCount: 250,
        questions: [
            {
                question: "¿Qué ponía la gallina que sorprendió al granjero?",
                options: [
                    "Huevos de chocolate",
                    "Huevos de oro",
                    "Huevos gigantes",
                    "Huevos de colores"
                ],
                answer: 1,
                explanation: "La gallina ponía huevos de oro puro, lo que sorprendió al granjero."
            },
            {
                question: "¿Qué compraron con el dinero de los huevos?",
                options: [
                    "Una casa nueva",
                    "Vestidos y comida fina",
                    "Un coche",
                    "Un televisor"
                ],
                answer: 1,
                explanation: "Con el dinero de los huevos compraron vestidos, comida fina y una carreta nueva."
            },
            {
                question: "¿Por qué decidió el granjero matar a la gallina?",
                options: [
                    "Porque estaba enferma",
                    "Para conseguir todo el oro de una vez",
                    "Porque ya no ponía huevos",
                    "Porque su esposa se lo pidió"
                ],
                answer: 1,
                explanation: "El granjero, movido por la avaricia, quería todo el oro de una vez en lugar de esperar un huevo cada día."
            },
            {
                question: "¿Qué encontró dentro de la gallina?",
                options: [
                    "Muchas monedas de oro",
                    "Nada especial",
                    "Un mapa del tesoro",
                    "Un diamante"
                ],
                answer: 1,
                explanation: "Al abrir la gallina, descubrió que por dentro era normal, sin ningún oro."
            },
            {
                question: "¿Cuál es la moraleja de la historia?",
                options: [
                    "No hay que confiar en los animales",
                    "La avaricia rompe el saco",
                    "El oro no da la felicidad",
                    "Hay que compartir lo que se tiene"
                ],
                answer: 1,
                explanation: "La moraleja es clara: la avaricia puede hacer que lo pierdas todo."
            }
        ]
    }
];

// Variables globales
let currentStory;
let startTime;
let endTime;
let correctAnswers = 0;
let currentQuestion = 0;
let timerInterval;
let seconds = 0;
let userAnswers = [];

// Elementos del DOM
const introSection = document.getElementById('intro-section');
const storyContainer = document.getElementById('story-container');
const storyTitle = document.getElementById('story-title');
const storyContent = document.getElementById('story-content');
const wordCount = document.getElementById('word-count');
const startReadingBtn = document.getElementById('start-reading-btn');
const endReadingBtn = document.getElementById('end-reading-btn');
const resultsContainer = document.getElementById('results-container');
const readingTime = document.getElementById('reading-time');
const readingSpeed = document.getElementById('reading-speed');
const readingLevel = document.getElementById('reading-level');
const speedProgress = document.getElementById('speed-progress');
const speedFeedback = document.getElementById('speed-feedback');
const quizContainer = document.getElementById('quiz-container');
const comprehensionSection = document.getElementById('comprehension-section');
const timer = document.getElementById('timer');
const timeDisplay = document.getElementById('time-display');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notification-message');
const notificationIcon = document.getElementById('notification-icon');
const instructionModal = document.getElementById('instruction-modal');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    showNotification('info', 'Bienvenido a Lector Veloz Pro', 'Presiona el botón "Comenzar Prueba" para empezar.');
    setTimeout(() => {
        instructionModal.style.display = 'flex';
    }, 1000);
});

// Funciones principales
function startTest() {
    // Seleccionar un cuento al azar
    currentStory = stories[Math.floor(Math.random() * stories.length)];
    
    // Mostrar el cuento
    storyTitle.textContent = currentStory.title;
    storyContent.innerHTML = formatText(currentStory.text);
    wordCount.textContent = `${currentStory.wordCount} palabras`;
    
    // Mostrar secciones
    introSection.style.display = 'none';
    storyContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    
    // Reiniciar controles
    startReadingBtn.disabled = false;
    endReadingBtn.disabled = true;
    
    // Desplazamiento suave
    storyContainer.scrollIntoView({ behavior: 'smooth' });
    
    showNotification('info', 'Cuento seleccionado', `Ahora lee "${currentStory.title}" y presiona "Empezar lectura" cuando estés listo.`);
}

function startReading() {
    startTime = new Date();
    startReadingBtn.disabled = true;
    endReadingBtn.disabled = false;
    
    // Iniciar temporizador
    seconds = 0;
    updateTimerDisplay();
    timer.style.display = 'flex';
    timerInterval = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000);
    
    showNotification('info', 'Lectura iniciada', 'Lee el texto cuidadosamente. Presiona "Terminar lectura" cuando hayas terminado.');
}

function endReading() {
    endTime = new Date();
    clearInterval(timerInterval);
    timer.style.display = 'none';
    
    startReadingBtn.disabled = false;
    endReadingBtn.disabled = true;
    
    calculateResults();
    showQuiz();
    
    showNotification('success', 'Lectura completada', '¡Bien hecho! Ahora revisa tus resultados y responde el cuestionario.');
}

function calculateResults() {
    const readingTimeSeconds = (endTime - startTime) / 1000;
    const wordsPerMinute = Math.round((currentStory.wordCount / readingTimeSeconds) * 60);
    
    // Mostrar resultados
    readingTime.textContent = `${readingTimeSeconds.toFixed(1)}s`;
    readingSpeed.textContent = wordsPerMinute;
    
    // Determinar nivel
    let level, levelDescription, progressWidth;
    if (wordsPerMinute < 150) {
        level = "Básico";
        levelDescription = "Velocidad por debajo del promedio. Practica regularmente para mejorar.";
        progressWidth = (wordsPerMinute / 150) * 100;
    } else if (wordsPerMinute >= 150 && wordsPerMinute < 250) {
        level = "Intermedio";
        levelDescription = "Buena velocidad de lectura, similar al promedio de adultos.";
        progressWidth = (wordsPerMinute / 250) * 100;
    } else {
        level = "Avanzado";
        levelDescription = "¡Excelente! Tu velocidad está por encima del promedio.";
        progressWidth = 100;
    }
    
    readingLevel.textContent = level;
    speedProgress.style.width = `${progressWidth}%`;
    
    // Feedback personalizado
    let feedback = "";
    if (wordsPerMinute < 100) {
        feedback = "Sugerencia: Intenta reducir la subvocalización (repetir palabras mentalmente) y expande tu visión periférica para captar más palabras por mirada.";
    } else if (wordsPerMinute < 200) {
        feedback = "Buen ritmo. Para mejorar, practica la lectura por bloques en lugar de palabra por palabra.";
    } else if (wordsPerMinute < 300) {
        feedback = "¡Excelente velocidad! Sigue practicando para mantener este ritmo con buena comprensión.";
    } else {
        feedback = "¡Velocidad excepcional! Asegúrate de mantener una buena comprensión a este ritmo.";
    }
    
    speedFeedback.textContent = feedback;
    
    // Mostrar resultados
    resultsContainer.style.display = 'block';
    comprehensionSection.style.display = 'block';
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

function showQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    userAnswers = [];
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestion >= currentStory.questions.length) {
        showFinalResults();
        return;
    }
    
    const question = currentStory.questions[currentQuestion];
    
    quizContainer.innerHTML = `
        <div class="quiz-header">
            <h3><i class="fas fa-question-circle"></i> Pregunta ${currentQuestion + 1} de ${currentStory.questions.length}</h3>
            <span class="question-counter">${currentQuestion + 1}/${currentStory.questions.length}</span>
        </div>
        
        <div class="question">
            <div class="question-text">${question.question}</div>
            <div class="options">
                ${question.options.map((option, index) => `
                    <label class="option">
                        <input type="radio" name="answer" value="${index}">
                        <span class="checkmark"></span>
                        <span class="option-text">${option}</span>
                    </label>
                `).join('')}
            </div>
            <div id="feedback" class="feedback"></div>
        </div>
        
        <div class="navigation-buttons">
            ${currentQuestion > 0 ? `
                <button class="btn btn-secondary" onclick="previousQuestion()">
                    <i class="fas fa-arrow-left btn-icon"></i> Anterior
                </button>
            ` : '<div></div>'}
            
            <button id="next-btn" class="btn btn-primary" onclick="nextQuestion()">
                ${currentQuestion < currentStory.questions.length - 1 ? 'Siguiente' : 'Finalizar'}
                <i class="fas fa-arrow-right btn-icon"></i>
            </button>
        </div>
    `;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        showNotification('warning', 'Selecciona una respuesta', 'Por favor elige una opción antes de continuar.');
        return;
    }
    
    const answerIndex = parseInt(selectedOption.value);
    userAnswers[currentQuestion] = answerIndex;
    
    currentQuestion++;
    displayQuestion();
}

function previousQuestion() {
    currentQuestion--;
    displayQuestion();
    
    // Restaurar respuesta seleccionada si existe
    if (userAnswers[currentQuestion] !== undefined) {
        document.querySelector(`input[name="answer"][value="${userAnswers[currentQuestion]}"]`).checked = true;
    }
}

function showFinalResults() {
    // Calcular respuestas correctas
    correctAnswers = 0;
    currentStory.questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / currentStory.questions.length) * 100);
    
    // Determinar nivel de comprensión
    let comprehensionLevel, comprehensionFeedback;
    if (percentage >= 80) {
        comprehensionLevel = "Excelente";
        comprehensionFeedback = "¡Felicidades! Demuestras una comprensión profunda del texto.";
    } else if (percentage >= 60) {
        comprehensionLevel = "Buena";
        comprehensionFeedback = "Buen trabajo. Comprendiste la mayoría del contenido, pero hay margen para mejorar.";
    } else if (percentage >= 40) {
        comprehensionLevel = "Regular";
        comprehensionFeedback = "Comprensión básica. Considera releer con más atención y hacer pausas para reflexionar.";
    } else {
        comprehensionLevel = "Baja";
        comprehensionFeedback = "Parece que no comprendiste gran parte del texto. Practica la lectura activa y toma notas.";
    }
    
    // Mostrar resultados finales
    quizContainer.innerHTML = `
        <div class="final-results">
            <h3><i class="fas fa-award"></i> Resultados Finales</h3>
            <div class="final-score">${percentage}%</div>
            <p>Respuestas correctas: ${correctAnswers} de ${currentStory.questions.length}</p>
            <p>Nivel de comprensión: <strong>${comprehensionLevel}</strong></p>
            <p>${comprehensionFeedback}</p>
            
            <div class="performance-chart">
                <div class="chart-bar" style="height: ${percentage}%; left: 20%;"></div>
                <div class="chart-label">Comprensión</div>
                
                <div class="chart-bar" style="height: ${Math.min(100, parseInt(readingSpeed.textContent) / 3)}%; left: 50%;"></div>
                <div class="chart-label">Velocidad</div>
                
                <div class="chart-bar" style="height: ${Math.min(100, (correctAnswers / currentStory.questions.length) * 150)}%; left: 80%;"></div>
                <div class="chart-label">Precisión</div>
            </div>
            
            <button class="btn btn-primary btn-lg" onclick="restartTest()">
                <i class="fas fa-redo btn-icon"></i> Realizar otra prueba
            </button>
        </div>
    `;
}

function restartTest() {
    introSection.style.display = 'block';
    storyContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    
    // Desplazarse al inicio
    introSection.scrollIntoView({ behavior: 'smooth' });
    
    showNotification('info', 'Prueba reiniciada', 'Presiona "Comenzar Prueba" para empezar una nueva evaluación.');
}

// Funciones auxiliares
function formatText(text) {
    return text.split('\n\n').map(paragraph => 
        `<p>${paragraph}</p>`
    ).join('');
}

function updateTimerDisplay() {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${secs}`;
}

function showNotification(type, title, message) {
    notification.className = `notification ${type} show`;
    notificationIcon.className = `fas ${
        type === 'success' ? 'fa-check-circle' : 
        type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'
    } notification-icon`;
    notificationMessage.textContent = message;
    
    // Ocultar automáticamente después de 5 segundos
    setTimeout(() => {
        hideNotification();
    }, 5000);
}

function hideNotification() {
    notification.classList.remove('show');
}

function closeModal() {
    instructionModal.style.display = 'none';
}

// Event listeners para tooltips
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('tooltip')) {
        const tooltip = e.target.querySelector('.tooltip-text');
        if (tooltip) {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        }
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('tooltip')) {
        const tooltip = e.target.querySelector('.tooltip-text');
        if (tooltip) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    }
});