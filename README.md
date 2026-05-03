# 📚 STUDYMITRA — AI-Powered Exam Analysis Platform

https://study-mitra-sooty.vercel.app/

STUDYMITRA is an AI-driven web application that helps students analyze previous year question papers and generate a smart, data-driven study plan.

Upload multiple PDFs, and the system extracts questions, identifies key topics, analyzes patterns, and suggests how to prioritize your preparation.

Video Link:- https://youtu.be/vKTN6ZwjEgs

🚀 Features
📂 Multi-PDF Upload
Upload multiple question papers at once.
📊 Topic Mapping & Analysis
Detects important topics based on frequency.
📈 Visual Insights Dashboard
Topic frequency charts
Priority distribution
Study planning insights
⏱ Smart Study Planner
Recommends how many hours to spend per topic.
⚡ Real-Time Processing
Fully automated pipeline using n8n workflows.
🏗️ Tech Stack
🔹 Frontend
HTML, CSS, JavaScript
Fetch API for backend integration
🔹 Backend (Automation)
n8n (Self-hosted workflow automation)
OpenRouter / LLM APIs (for AI processing)
🔹 Other Tools
PDF processing APIs
AI-based text analysis
⚙️ How It Works
User uploads one or more PDF files
Files are sent to n8n webhook
System processes each PDF:
Extracts text
Identifies questions
Maps topics using AI
Aggregates all data
Generates:
Topic frequency
Priority levels
Study plan
Returns structured JSON to frontend
Dashboard displays insights

⚠️ File Requirements
Only PDF files allowed
File size must be less than 3MB
PDFs must contain selectable text (not scanned images)
📁 Project Structure
STUDYMITRA/
│
├── index.html

🎯 Use Case
Students preparing for exams
Identifying high-weight topics
Efficient study planning
Reducing preparation time
🔥 Key Highlights
Fully automated AI pipeline
Multi-document analysis
Real-time insights
Clean and simple UI
Scalable architecture
🚀 Future Improvements
User authentication
Personalized study schedules
Support for scanned PDFs (OCR)
Advanced analytics (trend prediction)
Mobile app version
👨‍💻 Author

Developed by Kaushal
AI + Automation Enthusiast 🚀

⭐ Contribute

Feel free to fork, improve, and contribute!
