document.getElementById('generateButton').addEventListener('click', generateQuestion);

let questions = [];

fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        console.log("data",data);
        questions = data.questions;
    })
    .catch(error => console.error('Error fetching questions:', error));

function generateQuestion() {
    if (questions.length === 0) {
        document.getElementById('questionDisplay').innerText = 'No questions available';
        return;
    }
    const randomIndex = Math.floor(Math.random() * questions.length);
    document.getElementById('questionDisplay').innerText = questions[randomIndex];
}
