async function sendPrompt() {
    const prompt = document.getElementById('prompt').value;
    const answerDiv = document.getElementById('answer');
    
    if (!prompt.trim()) {
        answerDiv.textContent = "Please enter a question";
        return;
    }

    answerDiv.textContent = "Thinking...";
    
    try {
        const response = await fetch('/ollama-api/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true'
            },
            body: JSON.stringify({
                model: "llama3.1:8b",
                prompt: prompt,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        answerDiv.textContent = data.response || "No response generated";
    } catch (error) {
        console.error('Error:', error);
        answerDiv.textContent = `Error: ${error.message}`;
    }
}
