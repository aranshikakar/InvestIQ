InvestIQ – AI Investment Research Agent
Overview

InvestIQ is an AI-powered investment research platform that analyzes publicly traded companies and provides investment insights using Google's Gemini Large Language Model (LLM).

The application generates a structured investment report including:

AI-generated company summary
Investment score
BUY / HOLD / AVOID recommendation
Financial metrics
Revenue visualization
Risk distribution charts

The objective is to simplify preliminary investment research by combining AI-powered analysis with an interactive dashboard.

Features
AI-powered company analysis
Google Gemini LLM integration
Interactive financial dashboard
Revenue trend visualization
Risk analysis charts
Investment recommendation
Responsive user interface
Tech Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
Backend
Next.js API Routes
AI
Google Gemini
@google/genai SDK
Charts
Recharts
Deployment
Vercel
Project Architecture
User

↓

Company Search

↓

Next.js Frontend

↓

API Route (/api/analyze)

↓

Gemini LLM

↓

Structured JSON

↓

Dashboard Components

↓

Charts + Recommendation
How to Run
Clone the repository
git clone https://github.com/aranshikakar/InvestIQ.git
Install dependencies
npm install
Create a .env.local file
GEMINI_API_KEY=YOUR_API_KEY
Run
npm run dev

Open

http://localhost:3000
Environment Variables
GEMINI_API_KEY

Required to access Google's Gemini API.

How It Works
User enters a company name.
The frontend sends the request to the Next.js API.
The API prompts the Gemini LLM to generate structured investment insights.
Gemini returns JSON containing:
Company summary
Investment score
Recommendation
Financial information
Revenue trend
Risk distribution
The frontend renders the data using React components and Recharts.
Key Design Decisions
Why Gemini?

Gemini provides high-quality natural language reasoning and structured JSON generation, making it suitable for AI-powered financial summaries.

Why Next.js API Routes?

API routes keep the Gemini API key secure and prevent exposing credentials in the browser.

Why TypeScript?

Type safety reduces runtime errors and improves maintainability.

Why Recharts?

Recharts integrates well with React and enables responsive, interactive visualizations.

Trade-offs

Current limitations include:

AI-generated insights are based on prompts and are not connected to live financial APIs.
Revenue and risk visualizations rely on structured AI responses rather than real-time market data.
No user authentication or portfolio tracking is included.

These choices kept the project focused, lightweight, and suitable for the assignment timeline.

Example Runs
Microsoft

Recommendation: BUY

Score: 92/100

Summary:

Microsoft demonstrates strong revenue growth, diversified business segments, and leadership in cloud computing and AI, making it a favorable long-term investment.

Tesla

Recommendation: HOLD

Score: 76/100

Summary:

Tesla has strong growth potential but faces increased competition, valuation concerns, and execution risks.

Nokia

Recommendation: AVOID

Score: 48/100

Summary:

Nokia faces slower growth, intense market competition, and limited upside compared to industry leaders.

Future Improvements

With additional development time, I would:

Integrate real-time financial APIs
Add historical stock price analysis
Implement Retrieval-Augmented Generation (RAG)
Support PDF annual report analysis
Add user authentication and watchlists
Improve dashboard customization
Deploy with CI/CD and automated testing
AI Usage

This project uses Google Gemini as the Large Language Model (LLM) to generate structured investment analysis.

The frontend communicates with a secure Next.js API route, which prompts Gemini and returns structured JSON for visualization.

Repository
https://github.com/aranshikakar/InvestIQ
Deployment
https://invest-iq-d6md.vercel.app/
Author

Aranshika Kar
