
const input = document.getElementById("userInput");
const messages = document.getElementById("messages");
const welcome = document.getElementById("welcome");

const answers = [
    {
        keys: ["admission", "apply", "eligibility", "documents"],
        answer: "🎓 ADMISSIONS\n\n1. Choose your preferred course.\n2. Check eligibility criteria.\n3. Prepare your certificates and ID proof.\n4. Complete the official application.\n5. Follow the admission office's instructions.\n\nPlease check your college's official website for actual deadlines and requirements."
    },
    {
        keys: ["placement", "recruitment", "company", "companies", "job", "internship"],
        answer: "💼 PLACEMENTS & RECRUITMENT\n\n• Register with your placement cell.\n• Check company eligibility criteria.\n• Prepare your resume.\n• Practise aptitude and technical questions.\n• Attend interviews and assessments.\n\nFor current company visits and job openings, contact your college placement cell."
    },
    {
        keys: ["scholarship", "scholarships", "financial aid"],
        answer: "💰 SCHOLARSHIPS\n\nCheck government scholarships, college financial assistance and private scholarship schemes.\n\nYou may need mark sheets, income certificates and identity documents, depending on the scheme. Verify eligibility and deadlines through official sources."
    },
    {
        keys: ["fee", "fees", "payment", "tuition"],
        answer: "💳 FEES & PAYMENTS\n\nContact the accounts office or check the official fee circular for tuition fees, payment methods, due dates and instalment options. This demo does not contain your college's actual fee records."
    },
    {
        keys: ["exam", "timetable", "time table", "result", "results", "attendance", "syllabus"],
        answer: "📚 ACADEMICS\n\nCheck your student portal or department notice board for exam timetables, results, attendance rules, assignments and syllabus information."
    },
    {
        keys: ["hostel", "mess", "library", "transport", "bus", "campus"],
        answer: "🏫 CAMPUS & HOSTEL\n\nContact the campus office for hostel availability, mess facilities, library timings, transport routes, lab facilities and campus rules."
    },
    {
        keys: ["resume", "interview", "career", "aptitude", "skills"],
        answer: "🚀 CAREER GUIDANCE\n\n1. Choose your target role.\n2. Learn the required skills.\n3. Build a clear resume.\n4. Practise aptitude and interview questions.\n5. Create projects to demonstrate your skills.\n\nTell me your degree and target job for more specific guidance."
    },
    {
        keys: ["event", "events", "workshop", "seminar", "holiday", "notice"],
        answer: "🎉 EVENTS & NOTICES\n\nCheck your college's official notice board, student portal or event calendar for workshops, cultural fests, seminars, holidays and registration deadlines."
    },
    {
        keys: ["bonafide", "certificate", "id card", "helpdesk", "complaint", "grievance"],
        answer: "🛟 STUDENT HELPDESK\n\nFor certificates, ID cards or complaints, contact the relevant college department. You can also describe your issue here, and I can suggest the appropriate office."
    }
];

function addMessage(text, className) {
    const div = document.createElement("div");
    div.className = "message " + className;
    div.textContent = text;
    messages.appendChild(div);
    document.getElementById("chatArea").scrollTop =
        document.getElementById("chatArea").scrollHeight;
}

function sendMessage() {
    const question = input.value.trim();
    if (!question) return;

    welcome.style.display = "none";
    addMessage(question, "user");
    input.value = "";

    const q = question.toLowerCase();

    if (q.includes("hello") || q === "hi" || q.includes("hey")) {
        addMessage(
            "Hello! 👋 Welcome to CampusAI. Ask me about admissions, placements, academics, fees, scholarships or campus services.",
            "bot"
        );
        return;
    }

    if (q.includes("thank")) {
        addMessage("You're welcome! 😊 Feel free to ask another college-related question.", "bot");
        return;
    }

    const match = answers.find(item =>
        item.keys.some(key => q.includes(key))
    );

    if (match) {
        addMessage(match.answer, "bot");
    } else {
        addMessage(
            "I couldn't find a verified answer to that question in this demo. Please try asking about admissions, placements, scholarships, fees, exams, hostel or career guidance. For exact college information, please check an official college source.",
            "bot"
        );
    }
}

function askTopic(topic) {
    input.value = topic;
    sendMessage();
}

function showHelpdesk() {
    const category = prompt(
        "Enter your query category (Admissions, Placements, Academics, Fees or Other):"
    );

    if (!category) return;

    const query = prompt("Briefly describe your query:");
    if (!query) return;

    welcome.style.display = "none";

    const ticketId = "CA-" +
        Math.random().toString(36).substring(2, 8).toUpperCase();

    addMessage(
        "Student Helpdesk\nCategory: " + category +
        "\nYour query: " + query +
        "\nDemo reference number: " + ticketId +
        "\n\nNote: This is a demonstration only. Your query has not been sent to college staff.",
        "bot"
    );
}

function newChat() {
    messages.innerHTML = "";
    welcome.style.display = "block";
    input.value = "";
    input.focus();
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});
