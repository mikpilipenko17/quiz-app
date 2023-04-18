const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0

const startQuiz = () => {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = 'Next'
    showQuestion()
}

const showQuestion = () => {
resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNumber = currentQuestionIndex + 1
    questionElement.innerHTML = questionNumber + '.' + currentQuestion.questions

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButton.appendChild(button)

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

const resetState = () => {
    nextButton.style.display = 'none'
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

const selectAnswer = (e) => {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if (isCorrect) {
        selectedBtn.classList.add('correct')
        score++
    } else {
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct')
        }
        button.disabled = true
    })
    nextButton.style.display = 'block'
}

const showScore = () => {
    resetState()
    questionElement.innerHTML = `Твой счет ${score} из ${questions.length}`
    nextButton.innerHTML = 'Играть снова'
    nextButton.style.display = 'block'
}

const handleNextButton = () => {
    currentQuestionIndex ++
    if(currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextButton.addEventListener('click',() => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton()
    } else {
        startQuiz()
    }
})

const questions = [
    {
        questions: 'Из какой страны родом Джастин Бибер?',
        answers: [
            { text: 'США', correct: true },
            { text: 'Франция', correct: false },
            { text: 'Англия', correct: false },
            { text: 'Украина', correct: false },
        ]
    },
    {
        questions: 'В сиквеле какого праздничного фильма снялся Дональд Трамп?',
        answers: [
            { text: 'Один дома', correct: true },
            { text: 'Воронины', correct: false },
            { text: 'Букины', correct: false },
            { text: 'Маленькие негодяи', correct: false },
        ]
    },
    {
        questions: 'Какой герой мультфильма живет в ананасе под водой?',
        answers: [
            { text: 'Спанч Боб', correct: true },
            { text: 'Человек Паук', correct: false },
            { text: 'Чип и Дейл', correct: false },
            { text: 'Рик и Морти', correct: false },
        ]
    },
    {
        questions: 'Что является национальным животным Шотландии?',
        answers: [
            { text: 'Лошадь', correct: false },
            { text: 'Единорог', correct: true },
            { text: 'Волк', correct: false },
            { text: 'Корова', correct: false },
        ]
    },
    {
        questions: 'Какая страна производит больше всего кофе в мире?',
        answers: [
            { text: 'Колумбия', correct: true },
            { text: 'Бразилия', correct: false },
            { text: 'Вьетнам', correct: false },
            { text: 'Африка', correct: false },
        ]
    },
    {
        questions: 'Как называются четыре Факультета Хогвартса?',
        answers: [
            { text: 'Гриффиндор, Пуффендуй, Когтевран и Слизерин', correct: true },
            { text: 'Грифон, Ворон, Слон и Змея', correct: false },
            { text: 'Север, Восток, Запад и Юг', correct: false },
            { text: 'Красный, Синий, Зеленый и Оранжевый', correct: false },
        ]
    },
    {
        questions: 'Как называется колокол часов Вестминстерского дворца в Лондоне?',
        answers: [
            { text: 'Биг Бен', correct: true },
            { text: 'Броненосец', correct: false },
            { text: 'Калабаш', correct: false },
            { text: 'Мумия', correct: false },
        ]
    },
    {
        questions: 'Как называется еврейский Новый год?',
        answers: [
            { text: 'Ханука', correct: true },
            { text: 'Йом Кипур', correct: false },
            { text: 'Кванза', correct: false },
            { text: 'Рош ха-Шана', correct: false },
        ]
    },
    {
        questions: 'Сколько синих полос на флаге США?',
        answers: [
            { text: '6', correct: true },
            { text: '7', correct: false },
            { text: '13', correct: false },
            { text: '8', correct: false },
        ]
    },
    {
        questions: 'Какое животное не фигурирует в китайском зодиаке?',
        answers: [
            { text: 'Дракон', correct: false },
            { text: 'Кролик', correct: false },
            { text: 'Собака', correct: false },
            { text: 'Колибри', correct: true },
        ]
    },
    {
        questions: 'В какой стране проходили летние Олимпийские игры 2016 года?',
        answers: [
            { text: 'Китай', correct: true },
            { text: 'Ирландия', correct: false },
            { text: 'Бразилия', correct: false },
            { text: 'Италия', correct: false },
        ]
    },
    {
        questions: 'Какая планета самая горячая?',
        answers: [
            { text: 'Венера', correct: false },
            { text: 'Сатурн', correct: true },
            { text: 'Меркурий', correct: false },
            { text: 'Марс', correct: false },
        ]
    }
]

startQuiz()