const OLLAMA_API_URL = "http://localhost:11434"; // Base API URL

/**
 * Helper function to make HTTP requests using fetch.
 * @param {string} path - The API endpoint path.
 * @param {Object} body - The request body (optional).
 * @returns {Promise<Object>} - The parsed JSON response.
 */
async function makeRequest(path, body = null) {
    const options = {
        method: body ? "POST" : "GET",
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(`${OLLAMA_API_URL}${path}`, options);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return response.json();
}

/**
 * Generate text based on a prompt.
 * @param {string} prompt - The input prompt.
 * @returns {Promise<string>} - The generated response.
 */
export async function generate(prompt) {
    const response = await makeRequest("/api/generate", {
        model: "llama3.2",
        prompt,
        stream: false,
    });
    return response.response;
}

/**
 * Chat with the AI using conversation history.
 * @param {Array} messages - The conversation history (user/assistant messages).
 * @returns {Promise<string>} - The AI's response.
 */
export async function chat(messages) {
    const response = await makeRequest("/api/chat", {
        model: "llama3.2",
        messages,
        stream: false,
    });
    return response.message.content;
}

/**
 * Get text embeddings from the model.
 * @param {string} text - The input text.
 * @returns {Promise<Array<number>>} - The text embeddings.
 */
export async function getEmbeddings(text) {
    const response = await makeRequest("/api/embeddings", {
        model: "llama3.2",
        prompt: text,
    });
    return response.embedding;
}

/**
 * List all installed models on Ollama.
 * @returns {Promise<Array>} - An array of installed models.
 */
export async function listModels() {
    const response = await makeRequest("/api/tags");
    return response.models;
}

/**
 * Download (Pull) a model from the Ollama repository.
 * @param {string} modelName - The name of the model to download.
 * @returns {Promise<boolean>} - True if successful, False otherwise.
 */
async function loadModel(modelName) {
    const response = await makeRequest("/api/pull", { name: modelName });
    return response.status === "success";
}

/**
 * Show metadata about a model.
 * @param {string} modelName - The model name.
 * @returns {Promise<Object>} - Model details.
 */
async function showModel(modelName) {
    return await makeRequest("/api/show", { name: modelName });
}

/**
 * Delete an installed model.
 * @param {string} modelName - The model name.
 * @returns {Promise<boolean>} - True if deleted, False otherwise.
 */
async function deleteModel(modelName) {
    const response = await makeRequest("/api/delete", { name: modelName });
    return response.status === "deleted";
}

/**
 * List models currently running in memory.
 * @returns {Promise<Array>} - List of running models.
 */
async function listRunningModels() {
    const response = await makeRequest("/api/list");
    return response.models;
}

/**
 * Cancel an ongoing request.
 * @returns {Promise<boolean>} - True if canceled successfully.
 */
async function cancelRequest() {
    const response = await makeRequest("/api/cancel");
    return response.status === "canceled";
}

// 🌟 Example Usage