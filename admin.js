
// Load or initialize data
function loadData() {
    let data = localStorage.getItem('quizData');
    if (data) {
        return JSON.parse(data);
    } else {
        localStorage.setItem('quizData', JSON.stringify(DEFAULT_DATA));
        return DEFAULT_DATA;
    }
}

// Save data to localStorage
function saveData(data) {
    localStorage.setItem('quizData', JSON.stringify(data));
}

// Load settings into form
function loadSettings() {
    const data = loadData();
    
    // Timer settings
    document.getElementById('timerDuration').value = data.timer.duration;
    document.getElementById('timerEnabled').value = data.timer.enabled.toString();
    
    // Quiz settings
    document.getElementById('quizTitle').value = data.quiz.title;
    document.getElementById('passingMarks').value = data.quiz.passingMarks;
    
    // Load questions
    displayQuestions();
}

// Update timer settings
function updateTimer() {
    const data = loadData();
    data.timer.duration = parseInt(document.getElementById('timerDuration').value);
    data.timer.enabled = document.getElementById('timerEnabled').value === 'true';
    saveData(data);
    alert('Timer settings updated successfully!');
}

// Update quiz settings
function updateQuizSettings() {
    const data = loadData();
    data.quiz.title = document.getElementById('quizTitle').value;
    data.quiz.passingMarks = parseInt(document.getElementById('passingMarks').value);
    saveData(data);
    alert('Quiz settings updated successfully!');
}

// Add new question
function addQuestion() {
    const questionText = document.getElementById('questionText').value.trim();
    const optionA = document.getElementById('optionA').value.trim();
    const optionB = document.getElementById('optionB').value.trim();
    const optionC = document.getElementById('optionC').value.trim();
    const optionD = document.getElementById('optionD').value.trim();
    const correctAnswer = document.getElementById('correctAnswer').value;
    
    if (!questionText || !optionA || !optionB || !optionC || !optionD) {
        alert('Please fill all fields!');
        return;
    }
    
    const data = loadData();
    const newQuestion = {
        id: Date.now(),
        question: questionText,
        options: {
            A: optionA,
            B: optionB,
            C: optionC,
            D: optionD
        },
        correct: correctAnswer
    };
    
    data.questions.push(newQuestion);
    saveData(data);
    displayQuestions();
    clearForm();
    alert('Question added successfully!');
}

// Delete question
function deleteQuestion(id) {
    if (confirm('Are you sure you want to delete this question?')) {
        const data = loadData();
        data.questions = data.questions.filter(q => q.id !== id);
        saveData(data);
        displayQuestions();
    }
}

// Edit question
function editQuestion(id) {
    const data = loadData();
    const question = data.questions.find(q => q.id === id);
    
    if (question) {
        document.getElementById('questionText').value = question.question;
        document.getElementById('optionA').value = question.options.A;
        document.getElementById('optionB').value = question.options.B;
        document.getElementById('optionC').value = question.options.C;
        document.getElementById('optionD').value = question.options.D;
        document.getElementById('correctAnswer').value = question.correct;
        
        // Delete old question
        deleteQuestion(id);
        
        // Scroll to form
        document.getElementById('questionText').scrollIntoView({ behavior: 'smooth' });
    }
}

// Display all questions
function displayQuestions() {
    const data = loadData();
    const questionList = document.getElementById('questionList');
    const questionCount = document.getElementById('questionCount');
    
    questionCount.textContent = data.questions.length;
    
    questionList.innerHTML = data.questions.map((q, index) => `
        <div class="question-item">
            <div class="question-text">
                <strong>Q${index + 1}.</strong> ${q.question}<br>
                <small>
                    A: ${q.options.A} | B: ${q.options.B} | C: ${q.options.C} | D: ${q.options.D}<br>
                    <span style="color: green;">✓ Correct: ${q.correct}</span>
                </small>
            </div>
            <div class="question-actions">
                <button class="btn btn-primary" onclick="editQuestion(${q.id})">✏️ Edit</button>
                <button class="btn btn-danger" onclick="deleteQuestion(${q.id})">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
}

// Clear form
function clearForm() {
    document.getElementById('questionText').value = '';
    document.getElementById('optionA').value = '';
    document.getElementById('optionB').value = '';
    document.getElementById('optionC').value = '';
    document.getElementById('optionD').value = '';
    document.getElementById('correctAnswer').value = 'A';
}

// Export data
function exportData() {
    const data = loadData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Import data
function importData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                if (importedData.questions && importedData.timer && importedData.quiz) {
                    if (confirm('This will replace all current data. Continue?')) {
                        saveData(importedData);
                        loadSettings();
                        alert('Data imported successfully!');
                    }
                } else {
                    alert('Invalid file format!');
                }
            } catch (error) {
                alert('Error reading file!');
            }
        };
        reader.readAsText(file);
    }
}

// Initialize on page load
window.onload = function() {
    loadSettings();
};
