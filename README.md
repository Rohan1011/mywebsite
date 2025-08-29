# 🌐 My Personal Website

This is my personal website, hosted on **Cloudflare Pages** and powered by a mix of APIs and self-hosted AI.  
It contains dynamic content, including a **News page** that fetches real-time articles, and a **Chat tab** that connects to a locally run AI model via a secure Cloudflare Tunnel.

---

## 🚀 Features

### 📰 News Aggregator
- Fetches news from multiple sources:
  - **NewsAPI**
  - **Currents API**
  - **The Guardian API**
- Summarizes articles using **Latent Semantic Analysis (LSA)**.
- Ensures each news post has an image (fallback to **SerpAPI** or **Unsplash**).
- Automatically updates `news.html` with fresh articles.
- Changes are committed and pushed to this repo to keep the site updated.

> 🔑 All API keys are stored securely and are **not exposed** in this repository.

---

### 💬 AI Chat
- Accessible via **[chat.rohan-reddy.com](https://chat.rohan-reddy.com)**.
- Powered by:
  - **OpenWebUI** (Dockerized web interface).
  - **LM Studio** running a local AI model.
  - **Cloudflare Tunnel** for secure remote access.
- Lets visitors interact with my self-hosted AI assistant.

---

## 🛠️ Tech Stack
- **Frontend Hosting:** Cloudflare Pages  
- **APIs:** NewsAPI, Currents API, Guardian API, SerpAPI, Unsplash  
- **Backend Processing:** Python (BeautifulSoup, Sumy, Requests, NLTK)  
- **Version Control:** GitHub with automated push updates  
- **AI Chat:** OpenWebUI + LM Studio + Cloudflare Tunnel  

---

---

## ⚡ How It Works
1. `News.py` fetches the latest articles from multiple APIs.
2. Summarizes them with **LSA Summarizer**.
3. Updates `news.html` with fresh news cards.
4. Commits and pushes changes back to GitHub.
5. Cloudflare Pages automatically deploys the updated site.

---

## 🔒 Security
- API keys are hidden and never exposed in public code.  
- Chat access is tunneled securely through **Cloudflare Tunnel**.

---

## 🌍 Live Website
👉 [https://rohan1011.github.io/mywebsite](https://rohan1011.github.io/mywebsite)  
👉 Website: [https://rohan-reddy.com](https://rohan-reddy.com)  
👉 Chat: [https://chat.rohan-reddy.com](https://chat.rohan-reddy.com)

---

## 📜 License
This project is licensed under the **MIT License** – feel free to fork and adapt!
