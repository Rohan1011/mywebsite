async function sendPrompt() {
    const prompt = document.getElementById("prompt").value.trim();
    if (!prompt) return;

    document.getElementById("answer").innerText = "Thinking...";

    try {
        const response = await fetch('/ollama-api/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: 'llama3.1:8b', prompt, stream: false })
        });

        const data = await response.json();
        document.getElementById("answer").innerText = data.response || "No response from Ollama.";
    } catch (error) {
        document.getElementById("answer").innerText = "Error: " + error;
    }
}
