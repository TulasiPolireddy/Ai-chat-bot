/**
 * CampusAI - Smart AI College Chatbot
 * Handles NLP intent matching, Telugu/English translation, file analysis simulation, and interactive menus.
 */

let currentLang = 'en';

// Master Knowledge Base covering all 10 College Features
const knowledgeBase = {
    // 1. ADMISSIONS
    admissions: {
        keywords: ['admission', 'admissions', 'apply', 'eligibility', 'documents', 'last date', 'entrance exam', 'seat', 'course offered', 'how to join'],
        en: `🏛️ <strong>Admissions Department:</strong><br>
        • <strong>Courses:</strong> B.Tech (CSE, AI&DS, ECE, MECH), M.Tech, MBA, MCA.<br>
        • <strong>Eligibility:</strong> Minimum 60% in 10+2 / Intermediate with PCM for Engineering.<br>
        • <strong>Entrance Exams:</strong> State EAMCET, JEE Mains, ICET (MBA/MCA).<br>
        • <strong>Required Documents:</strong> 10th & 12th Memo, Transfer Certificate (TC), Study Certificate, Caste & Income Certificate (if applicable), Rank Card.<br>
        • <strong>Important Date:</strong> Phase 1 Registrations close on <strong>July 31st</strong>.`,
        te: `🏛️ <strong>ప్రవేశాల సమాచారం (Admissions):</strong><br>
        • <strong>కోర్సులు:</strong> B.Tech (CSE, AI&DS, ECE), MBA, MCA.<br>
        • <strong>అర్హత:</strong> ఇంటర్మీడియట్/10+2 లో కనీసం 60% మార్కులు ఉండాలి.<br>
        • <strong>దరఖాస్తు గడువు:</strong> మొదటి విడత దరఖాస్తులు జూలై 31 వరకు అందుబాటులో ఉంటాయి.<br>
        • <strong>కావలసిన పత్రాలు:</strong> 10వ, ఇంటర్ మార్కుల మెమో, TC, ఆధార్ కార్డు, ర్యాంక్ కార్డు.`
    },

    // 2. PLACEMENTS & RECRUITMENT
    placements: {
        keywords: ['placement', 'placements', 'tcs', 'infosys', 'jobs', 'salary', 'package', 'drive', 'recruitment', 'internship', 'resume', 'aptitude', 'eligible for placement'],
        en: `💼 <strong>Placements & Career Hub:</strong><br>
        • <strong>Major Recruiters:</strong> TCS, Infosys, Wipro, Amazon, Cognizant, Accenture, Microsoft.<br>
        • <strong>General Eligibility:</strong> Minimum 60% (6.5 CGPA) aggregate with <strong>0 active backlogs</strong>.<br>
        • <strong>TCS Digital/Ninja:</strong> 60% throughout 10th, 12th & B.Tech.<br>
        • <strong>Highest Package:</strong> ₹44.5 LPA | <strong>Average Package:</strong> ₹6.8 LPA.<br>
        • <strong>Support:</strong> Aptitude sessions every Saturday, Mock interviews by alumni, and Resume review on Portal.`,
        te: `💼 <strong>ప్లేస్‌మెంట్స్ వివరాలు:</strong><br>
        • <strong>టాప్ కంపెనీలు:</strong> TCS, Infosys, Wipro, Amazon, Cognizant.<br>
        • <strong>అర్హత:</strong> 60% లేదా 6.5 CGPA కనీసం ఉండాలి, ఎలాంటి యాక్టివ్ బ్యాక్‌లాగ్‌లు ఉండకూడదు.<br>
        • <strong>గరిష్ట ప్యాకేజీ:</strong> ₹44.5 LPA | <strong>సగటు ప్యాకేజీ:</strong> ₹6.8 LPA.`
    },

    // 3. ACADEMICS
    academics: {
        keywords: ['academic', 'timetable', 'exam', 'attendance', 'syllabus', 'faculty', 'assignment', 'results', 'credits', 'sem'],
        en: `📚 <strong>Academics & Examination:</strong><br>
        • <strong>Attendance Rule:</strong> Minimum <strong>75% mandatory</strong> to appear for Semester End Exams (65% with Medical Condonation).<br>
        • <strong>Mid Exams:</strong> Mid-1 is conducted in the 8th week of semester; Mid-2 in the 16th week.<br>
        • <strong>Results:</strong> Published on the student ERP portal within 30 days post-exams.<br>
        • <strong>Syllabus:</strong> Download updated Regulation (R23/R20) syllabi from the Academic section of the portal.`,
        te: `📚 <strong>విద్యా సమాచారం (Academics):</strong><br>
        • <strong>హాజరు నియమం:</strong> సెమిస్టర్ పరీక్షలు రాయడానికి కనీసం 75% హాజరు తప్పనిసరి.<br>
        • <strong>పరీక్షలు:</strong> మిడ్-1 ఎగ్జామ్స్ 8వ వారంలో ఉంటాయి.<br>
        • <strong>ఫలితాలు:</strong> పరీక్షల తర్వాత 30 రోజుల్లో కాలేజీ పోర్టల్‌లో విడుదల చేయబడతాయి.`
    },

    // 4. FEES & SCHOLARSHIPS
    fees: {
        keywords: ['fee', 'tuition', 'scholarship', 'payment', 'due date', 'jvd', 'financial aid', 'cost', 'hostel fee'],
        en: `💰 <strong>Fees & Financial Aid:</strong><br>
        • <strong>Tuition Fee:</strong> ₹85,000 - ₹1,15,000 per annum (depends on branch).<br>
        • <strong>Payment Deadlines:</strong> Odd Sem: by Aug 15 | Even Sem: by Jan 20.<br>
        • <strong>Government Scholarships:</strong> Full fee reimbursement via State ePASS / JVD for eligible students.<br>
        • <strong>Merit Scholarships:</strong> 25% waiver for semester toppers (>9.5 CGPA).<br>
        • <strong>Payment Mode:</strong> Online via SBI Collect or Student ERP Portal.`,
        te: `💰 <strong>ఫీజు & స్కాలర్‌షిప్‌లు:</strong><br>
        • <strong>ట్యూషన్ ఫీజు:</strong> ఏడాదికి ₹85,000 - ₹1,15,000 (బ్రాంచ్ బట్టి మారుతుంది).<br>
        • <strong>స్కాలర్‌షిప్:</strong> అర్హులైన విద్యార్థులకు ప్రభుత్వం ద్వారా పూర్తి ఫీజు రీయింబర్స్‌మెంట్ అందుతుంది.<br>
        • <strong>చెల్లింపు విధానం:</strong> కాలేజీ అధికారిక ERP లేదా SBI Collect ద్వారా చెల్లించవచ్చు.`
    },

    // 5. HOSTEL & CAMPUS FACILITIES
    hostel: {
        keywords: ['hostel', 'room', 'mess', 'food', 'library', 'wifi', 'bus', 'transport', 'gym', 'curfew'],
        en: `🏠 <strong>Hostel & Campus Facilities:</strong><br>
        • <strong>Hostel Fee:</strong> ₹65,000 per academic year (includes 4 meals/day + WiFi + Laundry).<br>
        • <strong>Timings & Curfew:</strong> In-time is strictly <strong>8:30 PM</strong>. Weekend outing pass via ERP.<br>
        • <strong>Central Library:</strong> Open 8:00 AM to 9:00 PM (Digital section with IEEE access).<br>
        • <strong>Transportation:</strong> College buses operate across 32 routes in the city.`,
        te: `🏠 <strong>హాస్టల్ మరియు క్యాంపస్ వసతులు:</strong><br>
        • <strong>హాస్టల్ ఫీజు:</strong> ఏడాదికి ₹65,000 (భోజనం, వైఫై సౌకర్యాలతో కలిపి).<br>
        • <strong>సమయాలు:</strong> రాత్రి 8:30 గంటల లోపు హాస్టల్‌కు చేరుకోవాలి.<br>
        • <strong>లైబ్రరీ:</strong> ఉదయం 8:00 నుండి రాత్రి 9:00 గంటల వరకు తెరిచి ఉంటుంది.`
    },

    // 6. STUDENT SERVICES & CERTIFICATES
    services: {
        keywords: ['bonafide', 'certificate', 'id card', 'leave', 'grievance', 'custodian', 'admin', 'office'],
        en: `📝 <strong>Student Services Desk:</strong><br>
        • <strong>Bonafide / Study Certificate:</strong> Apply online on the portal; issued within 24 working hours at Counter 3.<br>
        • <strong>Lost ID Card:</strong> Pay ₹150 at the cash counter and submit the slip at the Admin office.<br>
        • <strong>Grievance Redressal:</strong> Submit issues directly to grievance@college.edu or to the Women's Protection Cell.`,
        te: `📝 <strong>స్టూడెంట్ సర్వీసెస్ (సర్టిఫికెట్లు):</strong><br>
        • <strong>బోనఫైడ్ సర్టిఫికెట్:</strong> కాలేజీ పోర్టల్‌లో దరఖాస్తు చేసుకోవచ్చు; 24 గంటల్లో ఇవ్వబడుతుంది.<br>
        • <strong>డూప్లికేట్ ID కార్డు:</strong> అడ్మిన్ ఆఫీస్ లో ₹150 చెల్లించి పొందవచ్చు.`
    },

    // 7. CAREER GUIDANCE & SKILLS
    career: {
        keywords: ['career', 'skill', 'programming', 'guidance', 'higher studies', 'gate', 'gre', 'roadmap'],
        en: `🎯 <strong>Career & Skill Guidance:</strong><br>
        • <strong>Software Track:</strong> DSA (C++/Java/Python) + Web Dev (MERN/Django) + Git/Cloud fundamentals.<br>
        • <strong>Core Track:</strong> MATLAB, AutoCAD, VLSI design, Embedded Systems.<br>
        • <strong>Higher Studies Cell:</strong> Free weekly GATE coaching & GRE/TOEFL orientation on alternate Saturdays.`,
        te: `🎯 <strong>కెరీర్ గైడెన్స్ & నైపుణ్యాలు:</strong><br>
        • <strong>సాఫ్ట్‌వేర్ నైపుణ్యాలు:</strong> DSA, Python, జావా, వెబ్ డెవలప్‌మెంట్ నేర్చుకోండి.<br>
        • <strong>ఉన్నత విద్య (GATE/GRE):</strong> శనివారాలలో కాలేజీలో ఉచిత గైడెన్స్ క్లాసులు నిర్వహించబడతాయి.`
    },

    // 8. NOTIFICATIONS & CIRCULARS
    notices: {
        keywords: ['notice', 'notification', 'circular', 'holiday', 'announcement', 'updates'],
        en: `📢 <strong>Latest College Notices:</strong><br>
        1. <strong>Mid-term exams</strong> scheduled from the 12th of next month.<br>
        2. <strong>Amazon Internship Drive</strong> registrations open for 3rd years.<br>
        3. <strong>College declared holiday</strong> this Friday on account of the state festival.`,
        te: `📢 <strong>తాజా నోటీసులు మరియు అప్‌డేట్‌లు:</strong><br>
        1. వచ్చే నెల 12 నుండి మిడ్ పరీక్షలు ప్రారంభం కానున్నాయి.<br>
        2. అమెజాన్ ఇంటర్న్‌షిప్ రిజిస్ట్రేషన్లు ప్రారంభమయ్యాయి.<br>
        3. పండుగ సందర్భంగా ఈ శుక్రవారం కళాశాలకు సెలవు ప్రకటించబడింది.`
    },

    // 9. EVENTS & FESTS
    events: {
        keywords: ['event', 'fest', 'cultural', 'hackathon', 'sports', 'technical fest', 'clubs'],
        en: `🎉 <strong>Campus Events & Fests:</strong><br>
        • <strong>TechNova 2026:</strong> Annual National Hackathon in October (Cash prizes up to ₹2 Lakhs).<br>
        • <strong>Vibrance:</strong> 3-day National Cultural & Sports Fest in March.<br>
        • <strong>Student Clubs:</strong> Robotics, IEEE, Literary, Coding, Drama, and Photography Clubs open recruitments every August.`,
        te: `🎉 <strong>ఈవెంట్స్ & కాలేజ్ ఫెస్ట్:</strong><br>
        • <strong>టెక్ ఫెస్ట్:</strong> జాతీయ స్థాయి హ్యాకథాన్ అక్టోబర్‌లో జరుగుతుంది.<br>
        • <strong>సాంస్కృతిక ఉత్సవాలు (Cultural Fest):</strong> ప్రతి సంవత్సరం మార్చి నెలలో 3 రోజుల పాటు నిర్వహించబడతాయి.`
    }
};

// Default Fallback
const fallbackResponse = {
    en: `🤖 I'm not fully sure about that query yet. You can choose a quick topic from the menu or contact our support desk directly at <strong>support@college.edu</strong> or call <strong>+91 040-23456789</strong>.`,
    te: `🤖 క్షమించండి, దీనిపై నాకు పూర్తి సమాచారం లేదు. దయచేసి ఎడమవైపు ఉన్న మెనూని ఎంచుకోండి లేదా కాలేజ్ ఆఫీస్‌ను సంప్రదించండి: <strong>+91 040-23456789</strong>.`
};

// Initial Welcome
window.addEventListener('DOMContentLoaded', () => {
    showWelcomeMessage();
});

function showWelcomeMessage() {
    const welcome = `🎓 <strong>Welcome to CampusAI Assistant!</strong><br>
    I can assist you with <strong>Admissions, Placements, Fee details, Exams, Hostel life, and Notifications</strong>.<br><br>
    <i>Try asking:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('TCS placement criteria')">💼 TCS Eligibility</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Admission fee and dates')">🏫 Admissions</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Hostel facilities')">🏠 Hostel Info</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Latest notifications')">📢 Circulars</button>
    </div>`;
    appendMessage(welcome, 'bot');
}

// Send Message Flow
function sendMessage() {
    const input = document.getElementById('userInput');
    const text = input.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    input.value = '';

    showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator();
        const botReply = generateAIResponse(text);
        appendMessage(botReply, 'bot');
    }, 600);
}

// Quick Prompt Sender
function sendQuickPrompt(promptText) {
    document.getElementById('userInput').value = promptText;
    sendMessage();
}

// AI Intent Classifier
function generateAIResponse(query) {
    const lowerQuery = query.toLowerCase();

    // Specific eligibility check for TCS/Companies
    if (lowerQuery.includes('tcs') || (lowerQuery.includes('eligible') && lowerQuery.includes('placement'))) {
        return currentLang === 'te' 
            ? `💼 <strong>TCS ప్లేస్‌మెంట్ అర్హత:</strong> కనీసం 60% మార్కులు (10th, 12th, B.Tech) ఉండాలి మరియు ఎలాంటి యాక్టివ్ బ్యాక్‌లాగ్‌లు ఉండకూడదు.`
            : `💼 <strong>TCS Placement Criteria:</strong> Students with a minimum of <strong>60% aggregate</strong> across 10th, Intermediate, and B.Tech with <strong>no active backlogs</strong> are eligible.`;
    }

    // Iterate through Knowledge Base
    for (const category in knowledgeBase) {
        const item = knowledgeBase[category];
        const hasMatch = item.keywords.some(kw => lowerQuery.includes(kw));
        if (hasMatch) {
            return item[currentLang];
        }
    }

    // Default Fallback
    return fallbackResponse[currentLang];
}

// Append Chat Message to UI
function appendMessage(text, sender) {
    const chatBody = document.getElementById('chatBody');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const avatarIcon = sender === 'bot' ? '<i class="fa-solid fa-robot"></i>' : '<i class="fa-solid fa-user"></i>';

    msgDiv.innerHTML = `
        <div class="msg-avatar">${avatarIcon}</div>
        <div class="msg-content">
            <div>${text}</div>
            <span class="msg-time">${timeStr}</span>
        </div>
    `;

    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Typing Indicator helper
function showTypingIndicator() {
    const chatBody = document.getElementById('chatBody');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
        <div class="msg-content">
            <div class="typing-dots">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTypingIndicator() {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
}

// Language Switcher
function changeLanguage() {
    currentLang = document.getElementById('langSelect').value;
    const alertMsg = currentLang === 'te' 
        ? 'భాష తెలుగులోకి మార్చబడింది. నేను మీకు ఎలా సహాయపడగలను?' 
        : 'Language switched to English. How can I help you?';
    appendMessage(alertMsg, 'bot');
}

// Clear Chat Function
function clearChat() {
    document.getElementById('chatBody').innerHTML = '';
    showWelcomeMessage();
}

// Simulated Document Analyzer
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    appendMessage(`📄 <em>Uploaded document: ${file.name}</em>`, 'user');
    showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator();
        const docReply = `📄 <strong>Document Analyzed (${file.name}):</strong><br>
        I have extracted the circular contents. You can now ask questions such as <em>"What is the exam deadline in this circular?"</em> or <em>"Summarize this document"</em>.`;
        appendMessage(docReply, 'bot');
    }, 1200);
}

// Human Handoff Action
function triggerHandoff() {
    appendMessage("Connecting me with college administrative department...", 'user');
    showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator();
        const contactInfo = `👨‍💼 <strong>College Helpdesk & Department Contacts:</strong><br>
        • <strong>Admissions:</strong> +91 040-23456781 | admissions@college.edu<br>
        • <strong>Exam Branch:</strong> +91 040-23456782 | exams@college.edu<br>
        • <strong>Placement Cell:</strong> +91 040-23456783 | placements@college.edu<br>
        • <strong>Working Hours:</strong> Mon - Sat (9:30 AM to 4:30 PM)`;
        appendMessage(contactInfo, 'bot');
    }, 600);
}

// Voice Recognition (Web Speech API)
function toggleSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Speech recognition is not supported in your browser. Please use Chrome/Edge.');
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = currentLang === 'te' ? 'te-IN' : 'en-US';
    recognition.start();

    const micBtn = document.getElementById('micBtn');
    micBtn.style.color = '#ef4444';

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('userInput').value = transcript;
        micBtn.style.color = '';
        sendMessage();
    };

    recognition.onerror = function() {
        micBtn.style.color = '';
    };

    recognition.onend = function() {
        micBtn.style.color = '';
    };
}

// Enter Key Listener
document.getElementById('userInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('chatSidebar').classList.toggle('open');
});
