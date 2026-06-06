// Initialize default data structure with all 20 questions
const DEFAULT_DATA = {
    timer: {
        duration: 10,
        enabled: true
    },
    quiz: {
        title: "HTML Revision MCQ Test",
        passingMarks: 60
    },
    questions: [
        {
            id: 1,
            question: "HTML फ़ाइल किस tag से शुरू होती है?",
            options: {
                A: "<body>",
                B: "<html>",
                C: "<head>",
                D: "<title>"
            },
            correct: "B"
        },
        {
            id: 2,
            question: "Browser Tab का नाम कहाँ लिखा जाता है?",
            options: {
                A: "<title>",
                B: "<body>",
                C: "<h1>",
                D: "<form>"
            },
            correct: "A"
        },
        {
            id: 3,
            question: "बड़ी Heading के लिए कौन सा tag प्रयोग होता है?",
            options: {
                A: "<h6>",
                B: "<p>",
                C: "<h2>",
                D: "<br>"
            },
            correct: "A"
        },
        {
            id: 4,
            question: "नई लाइन के लिए कौन सा tag प्रयोग होता है?",
            options: {
                A: "<br>",
                B: "<hr>",
                C: "<input>",
                D: "<span>"
            },
            correct: "A"
        },
        {
            id: 5,
            question: "Text Input Box बनाने के लिए कौन सा code सही है?",
            options: {
                A: '<input type="number">',
                B: '<input type="text">',
                C: '<input type="file">',
                D: '<input type="date">'
            },
            correct: "B"
        },
        {
            id: 6,
            question: "Number Input Box बनाने के लिए कौन सा type प्रयोग होता है?",
            options: {
                A: "text",
                B: "date",
                C: "file",
                D: "number"
            },
            correct: "D"
        },
        {
            id: 7,
            question: "Photo Upload के लिए कौन सा input type प्रयोग होता है?",
            options: {
                A: "text",
                B: "number",
                C: "file",
                D: "range"
            },
            correct: "C"
        },
        {
            id: 8,
            question: "Date चुनने के लिए कौन सा input type है?",
            options: {
                A: "text",
                B: "date",
                C: "file",
                D: "range"
            },
            correct: "B"
        },
        {
            id: 9,
            question: "Form Submit करने के लिए कौन सा type प्रयोग होता है?",
            options: {
                A: "reset",
                B: "button",
                C: "submit",
                D: "text"
            },
            correct: "C"
        },
        {
            id: 10,
            question: "required attribute का क्या काम है?",
            options: {
                A: "Color बदलना",
                B: "Input को जरूरी बनाना",
                C: "Font बदलना",
                D: "Page Reload करना"
            },
            correct: "B"
        },
        {
            id: 11,
            question: "Slider बनाने के लिए कौन सा input type प्रयोग होता है?",
            options: {
                A: "file",
                B: "text",
                C: "range",
                D: "date"
            },
            correct: "C"
        },
        {
            id: 12,
            question: 'इस code में minimum value क्या है?\n<input type="range" min="0" max="100">',
            options: {
                A: "100",
                B: "50",
                C: "10",
                D: "0"
            },
            correct: "D"
        },
        {
            id: 13,
            question: 'इस code में maximum value क्या है?\n<input type="range" min="0" max="100">',
            options: {
                A: "0",
                B: "50",
                C: "100",
                D: "10"
            },
            correct: "C"
        },
        {
            id: 14,
            question: 'value="50" का मतलब क्या है?',
            options: {
                A: "Maximum Value",
                B: "Initial Value",
                C: "Minimum Value",
                D: "Step Value"
            },
            correct: "B"
        },
        {
            id: 15,
            question: 'step="10" का क्या मतलब है?',
            options: {
                A: "10px Width",
                B: "10 Color Change",
                C: "10-10 की Jump",
                D: "10 Sliders"
            },
            correct: "C"
        },
        {
            id: 16,
            question: "Background Color बदलने के लिए कौन सी CSS Property प्रयोग होती है?",
            options: {
                A: "color",
                B: "font-size",
                C: "background-color",
                D: "width"
            },
            correct: "C"
        },
        {
            id: 17,
            question: "Form के कोनों को गोल करने के लिए कौन सी CSS Property प्रयोग होती है?",
            options: {
                A: "margin",
                B: "border-radius",
                C: "padding",
                D: "height"
            },
            correct: "B"
        },
        {
            id: 18,
            question: "width: 300px; का क्या काम है?",
            options: {
                A: "Height सेट करना",
                B: "Width सेट करना",
                C: "Color बदलना",
                D: "Border बनाना"
            },
            correct: "B"
        },
        {
            id: 19,
            question: "<center> tag का काम क्या है?",
            options: {
                A: "Text Delete करना",
                B: "Content को Center में लाना",
                C: "Color बदलना",
                D: "Font बदलना"
            },
            correct: "B"
        },
        {
            id: 20,
            question: "HTML Document Type Declaration कौन सा है?",
            options: {
                A: "<html>",
                B: "<body>",
                C: "<!DOCTYPE html>",
                D: "<head>"
            },
            correct: "C"
        }
    ]
};

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
    
    if (data.questions.length === 0) {
        questionList.innerHTML = '<p style="text-align: center; color: #999;">No questions added yet.</p>';
        return;
    }
    
    questionList.innerHTML = data.questions.map((q, index) => `
        <div class="question-item">
            <div class="question-text">
                <strong>Q${index + 1}.</strong> ${q.question.replace(/\n/g, '<br>')}<br>
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

// Reset to default 20 questions
function resetToDefault() {
    if (confirm('This will reset all questions to the default 20 HTML questions. Continue?')) {
        localStorage.setItem('quizData', JSON.stringify(DEFAULT_DATA));
        loadSettings();
        alert('Reset to default 20 questions successfully!');
    }
}

// Initialize on page load
window.onload = function() {
    loadSettings();
};
