async function generateText(prompt) {
  const response = await fetch("https://9202aea62de0.ngrok-free.app/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true"
    },
    body: JSON.stringify({
      model: "llama3.1:8b",
      prompt: prompt,
      stream: false
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}: ${await response.text()}`);
  }

  const data = await response.json();
  console.log("Ollama raw response:", data);
  return data;
}
