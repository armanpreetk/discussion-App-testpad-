const questionForm = document.getElementById('question-form');
const questionsList = document.getElementById('questions-list');
const rightPane = document.getElementById('question-form-section');

// Event listener for question form submission
questionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const subject = document.getElementById('subject').value;
    const question = document.getElementById('question').value;
    
    // Create a new question item
    const questionItem = document.createElement('li');
    questionItem.textContent = subject;
    questionItem.classList.add('question-item');
    
    // Add click event to display question in the right pane
    questionItem.addEventListener('click', function() {
        displayQuestion(subject, question);
    });
    
    // Append question to the list
    questionsList.appendChild(questionItem);
    
    // Clear the form
    questionForm.reset();
});

function displayQuestion(subject, question) {
    rightPane.innerHTML = `
        <h2>${subject}</h2>
        <p>${question}</p>
        <form id="response-form">
            <label for="name">Name</label>
            <input type="text" id="name" required>
            <label for="comment">Comment</label>
            <textarea id="comment" rows="4" required></textarea>
            <button type="submit">Submit Response</button>
        </form>
        <h3>Previous Responses:</h3>
        <ul id="response-list"></ul>
        <button id="resolve-btn">Resolve</button>
    `;
    
    const responseForm = document.getElementById('response-form');
    
    responseForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get response data
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;
        
        // Append response to the list
        const responseList = document.getElementById('response-list');
        const responseItem = document.createElement('li');
        responseItem.innerHTML = `<strong>${name}:</strong> ${comment}`;
        responseList.appendChild(responseItem);
        
        // Clear the form
        responseForm.reset();
    });
    
    document.getElementById('resolve-btn').addEventListener('click', function() {
        rightPane.innerHTML = `<p>This question has been resolved.</p>`;
    });
}
