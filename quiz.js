document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');
    let startTime = new Date();

    submitBtn.addEventListener('click', function () {
        let correctAnswers = 0;
        let totalQuestions = 10;
        let endTime = new Date();
        let timeTaken = (endTime - startTime) / 1000;

        const answers = {
            q1: "certo",
            q2: "certo",
            q3: "certo",
            q4: "certo",
            q5: "certo",
            q6: "certo",
            q7: "certo",
            q8: "certo",
            q9: "certo",
            q10: "certo"
        };

        let formData = new FormData(form);
        formData.forEach((value, key) => {
            if (value === answers[key]) {
                correctAnswers++;
            }
        });

        let incorrectAnswers = totalQuestions - correctAnswers;

        resultDiv.innerHTML = `
            <p>Você acertou ${correctAnswers} de ${totalQuestions} perguntas.</p>
            <p>Você errou ${incorrectAnswers} perguntas.</p>
            <p>Tempo total: ${timeTaken.toFixed(2)} segundos.</p>
        `;
    });
});