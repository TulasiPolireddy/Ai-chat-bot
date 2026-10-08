/**
 * CampusAI - Smart AI College Assistant
 * Languages: English (en), Telugu (te), Hindi (hi), Tamil (ta)
 * Features: Multi-Company Placement Breakdown, NLP Intent Matching, Conversational Fallback
 */

let currentLang = 'en';

// Master Multi-Language Knowledge Base
const knowledgeBase = {
    // 1. COMPREHENSIVE PLACEMENTS HUB (General + 5 Top Companies)
    placements: {
        keywords: [
            'placement', 'placements', 'company', 'companies', 'job', 'jobs', 'salary', 
            'package', 'tcs', 'amazon', 'infosys', 'wipro', 'cognizant', 'eligibility for campus',
            'placement criteria', 'recruitment', 'rounds', 'hiring'
        ],
        en: `💼 <strong>Campus Placement Eligibility & Top Recruiters:</strong><br><br>
        <strong>General Campus Eligibility:</strong><br>
        • Minimum <strong>60% or 6.5 CGPA</strong> aggregate with <strong>0 active backlogs</strong>.<br><br>
        <div class="company-card-grid">
            <div class="company-item">
                <div class="company-header"><span>1. Amazon (SDE / Cloud)</span> <span class="package-tag">₹28 - 45 LPA</span></div>
                • <strong>Criteria:</strong> 7.0+ CGPA, 0 backlogs throughout, B.Tech (CSE/ECE/IT).<br>
                • <strong>Process:</strong> Online Coding (DSA) &rarr; 3-4 Technical Rounds &rarr; Bar Raiser.
            </div>
            <div class="company-item">
                <div class="company-header"><span>2. TCS (Ninja, Digital & Prime)</span> <span class="package-tag">₹3.36 - 9.0 LPA</span></div>
                • <strong>Criteria:</strong> 60% in 10th, 12th & Degree. Max 1 academic gap year allowed.<br>
                • <strong>Process:</strong> TCS NQT (Aptitude + Coding) &rarr; Tech & HR Interview.
            </div>
            <div class="company-item">
                <div class="company-header"><span>3. Infosys (SE, DSE & Specialist Programmer)</span> <span class="package-tag">₹3.6 - 9.5 LPA</span></div>
                • <strong>Criteria:</strong> 65% or 6.8 CGPA throughout, no active backlogs.<br>
                • <strong>Process:</strong> InfyTQ / HackWithInfy & Online Assessment &rarr; Technical Interview.
            </div>
            <div class="company-item">
                <div class="company-header"><span>4. Wipro (Elite & Turbo)</span> <span class="package-tag">₹3.5 - 6.5 LPA</span></div>
                • <strong>Criteria:</strong> 60% aggregate. Max 1 active backlog permitted during initial registration.<br>
                • <strong>Process:</strong> National Talent Hunt (Aptitude, Essay Writing, Coding) &rarr; HR.
            </div>
            <div class="company-item">
                <div class="company-header"><span>5. Cognizant (GenC & GenC Next)</span> <span class="package-tag">₹4.0 - 6.75 LPA</span></div>
                • <strong>Criteria:</strong> 60% or 6.0 CGPA, no pending backlogs at joining time.<br>
                • <strong>Process:</strong> Skill-based Assessment &rarr; Technical Discussion.
            </div>
        </div>`,

        te: `💼 <strong>క్యాంపస్ ప్లేస్‌మెంట్స్ & 5 ప్రముఖ కంపెనీల వివరాలు:</strong><br><br>
        <strong>సాధారణ అర్హత:</strong> 60% లేదా 6.5 CGPA, ఎలాంటి యాక్టివ్ బ్యాక్‌లాగ్‌లు ఉండకూడదు.<br><br>
        <div class="company-card-grid">
            <div class="company-item">
                <div class="company-header"><span>1. Amazon</span> <span class="package-tag">₹28 - 45 LPA</span></div>
                • 7.0+ CGPA, DSA కోడింగ్ రౌండ్లు, టెక్నికల్ ఇంటర్వ్యూలు.
            </div>
            <div class="company-item">
                <div class="company-header"><span>2. TCS (Ninja & Digital)</span> <span class="package-tag">₹3.36 - 9.0 LPA</span></div>
                • 10వ, ఇంటర్, డిగ్రీలో 60% మార్కులు, TCS NQT పరీక్ష.
            </div>
            <div class="company-item">
                <div class="company-header"><span>3. Infosys (SE / Specialist)</span> <span class="package-tag">₹3.6 - 9.5 LPA</span></div>
                • 65% మార్కులు, HackWithInfy లేదా ఆన్‌లైన్ అసెస్‌మెంట్.
            </div>
            <div class="company-item">
                <div class="company-header"><span>4. Wipro (Elite & Turbo)</span> <span class="package-tag">₹3.5 - 6.5 LPA</span></div>
                • 60% మార్కులు, యాప్టిట్యూడ్ మరియు కోడింగ్ రౌండ్.
            </div>
            <div class="company-item">
                <div class="company-header"><span>5. Cognizant (GenC)</span> <span class="package-tag">₹4.0 - 6.75 LPA</span></div>
                • 60% మార్కులు, టెక్నికల్ అసెస్‌మెంట్ మరియు HR రౌండ్.
            </div>
        </div>`,

        hi: `💼 <strong>कैंपस प्लेसमेंट पात्रता और 5 प्रमुख कंपनियाँ:</strong><br><br>
        <strong>सामान्य पात्रता:</strong> न्यूनतम <strong>60% या 6.5 CGPA</strong> और <strong>0 एक्टिव बैकलाग</strong>.<br><br>
        <div class="company-card-grid">
            <div class="company-item">
                <div class="company-header"><span>1. Amazon</span> <span class="package-tag">₹28 - 45 LPA</span></div>
                • 7.0+ CGPA, कोई बैकलाग नहीं, कोडिंग (DSA) और 3-4 टेक्निकल राउंड।
            </div>
            <div class="company-item">
                <div class="company-header"><span>2. TCS (Ninja, Digital & Prime)</span> <span class="package-tag">₹3.36 - 9.0 LPA</span></div>
                • 10वीं, 12वीं और डिग्री में न्यूनतम 60% अंक, TCS NQT टेस्ट।
            </div>
            <div class="company-item">
                <div class="company-header"><span>3. Infosys (SE & Specialist)</span> <span class="package-tag">₹3.6 - 9.5 LPA</span></div>
                • 65% अंक, ऑनलाइन असेसमेंट और टेक्निकल इंटरव्यू।
            </div>
            <div class="company-item">
                <div class="company-header"><span>4. Wipro (Elite & Turbo)</span> <span class="package-tag">₹3.5 - 6.5 LPA</span></div>
                • 60% अंक, एप्टीट्यूड और कोडिंग टेस्ट।
            </div>
            <div class="company-item">
                <div class="company-header"><span>5. Cognizant (GenC)</span> <span class="package-tag">₹4.0 - 6.75 LPA</span></div>
                • 60% या 6.0 CGPA, स्किल टेस्ट और टेक्निकल डिस्कशन।
            </div>
        </div>`,

        ta: `💼 <strong>வளாக வேலைவாய்ப்பு (Placements) மற்றும் 5 முன்னணி நிறுவனங்கள்:</strong><br><br>
        <strong>பொதுவான தகுதி:</strong> குறைந்தபட்சம் <strong>60% அல்லது 6.5 CGPA</strong>, அரியர்ஸ் (Backlogs) இருக்கக்கூடாது.<br><br>
        <div class="company-card-grid">
            <div class="company-item">
                <div class="company-header"><span>1. Amazon</span> <span class="package-tag">₹28 - 45 LPA</span></div>
                • 7.0+ CGPA, DSA கோடிங் மற்றும் தொழில்நுட்ப நேர்காணல்.
            </div>
            <div class="company-item">
                <div class="company-header"><span>2. TCS (Ninja & Digital)</span> <span class="package-tag">₹3.36 - 9.0 LPA</span></div>
                • 10, 12 மற்றும் டிகிரியில் 60% மதிப்பெண்கள், TCS NQT தேர்வு.
            </div>
            <div class="company-item">
                <div class="company-header"><span>3. Infosys</span> <span class="package-tag">₹3.6 - 9.5 LPA</span></div>
                • 65% மதிப்பெண்கள், ஆன்லைன் தேர்வு மற்றும் தொழில்நுட்ப நேர்காணல்.
            </div>
            <div class="company-item">
                <div class="company-header"><span>4. Wipro</span> <span class="package-tag">₹3.5 - 6.5 LPA</span></div>
                • 60% மதிப்பெண்கள், Aptitude மற்றும் Coding தேர்வுகள்.
            </div>
            <div class="company-item">
                <div class="company-header"><span>5. Cognizant</span> <span class="package-tag">₹4.0 - 6.75 LPA</span></div>
                • 60% மதிப்பெண்கள், தொழில்நுட்ப மதிப்பீடு.
            </div>
        </div>`
    },

    // 2. ADMISSIONS
    admissions: {
        keywords: ['admission', 'apply', 'seat', 'documents', 'deadline', 'eligibility', 'btech', 'mba', 'mca', 'entrance'],
        en: `🏛️ <strong>Admissions Office:</strong><br>
        • <strong>Courses:</strong> B.Tech (CSE, AI&DS, ECE, MECH), M.Tech, MBA, MCA.<br>
        • <strong>Eligibility:</strong> Minimum 60% in 10+2 with PCM.<br>
        • <strong>Entrance Exams:</strong> State EAMCET, JEE Main, ICET.<br>
        • <strong>Required Documents:</strong> 10th & 12th Memos, Transfer Certificate (TC), Study Certificate, Caste/Income Certificate (if applicable), Rank Card.<br>
        • <strong>Deadline:</strong> Phase-1 Registrations close on <strong>July 31st</strong>.`,
        te: `🏛️ <strong>ప్రవేశాల సమాచారం:</strong><br>
        • B.Tech, M.Tech, MBA మరియు MCA కోర్సులు అందుబాటులో ఉన్నాయి.<br>
        • ఇంటర్‌లో 60% మార్కులు తప్పనిసరి.<br>
        • దరఖాస్తు గడువు: జూలై 31.`,
        hi: `🏛️ <strong>प्रवेश विवरण (Admissions):</strong><br>
        • B.Tech, M.Tech, MBA और MCA कोर्स उपलब्ध हैं।<br>
        • 10+2 में न्यूनतम 60% अंक आवश्यक हैं।<br>
        • महत्वपूर्ण दस्तावेज: 10वीं/12वीं अंकतालिका, TC, जाति/आय प्रमाण पत्र, रैंक कार्ड।`,
        ta: `🏛️ <strong>சேர்க்கை விவரங்கள் (Admissions):</strong><br>
        • B.Tech, M.Tech, MBA மற்றும் MCA படிப்புகள் உள்ளன.<br>
        • பிளஸ் 2 தேர்வில் குறைந்தபட்சம் 60% மதிப்பெண்கள் அவசியம்.<br>
        • தேவையான ஆவணங்கள்: 10, 12 மதிப்பெண் சான்றிதழ்கள், TC, சாதி சான்றிதழ்.`
    },

    // 3. FEES & SCHOLARSHIPS
    fees: {
        keywords: ['fee', 'tuition', 'scholarship', 'payment', 'due', 'jvd', 'epass', 'cost', 'money'],
        en: `💰 <strong>Fees & Financial Aid:</strong><br>
        • <strong>Tuition Fee:</strong> ₹85,000 - ₹1,15,000 per year (depending on branch).<br>
        • <strong>Payment Mode:</strong> Online via SBI Collect or Student ERP Portal.<br>
        • <strong>Scholarships:</strong> Full government fee reimbursement via State ePASS / JVD; 25% Merit Scholarship for semester toppers (>9.5 CGPA).`,
        te: `💰 <strong>ఫీజులు మరియు స్కాలర్‌షిప్‌లు:</strong><br>
        • ట్యూషన్ ఫీజు: సంవత్సరానికి ₹85,000 నుండి ₹1,15,000.<br>
        • ప్రభుత్వం ద్వారా అర్హులైన విద్యార్థులకు పూర్తి ఫీజు రీయింబర్స్‌మెంట్ లభిస్తుంది.`,
        hi: `💰 <strong>फीस और छात्रवृत्ति:</strong><br>
        • ट्यूशन फीस: ₹85,000 - ₹1,15,000 प्रति वर्ष।<br>
        • सरकारी स्कॉलरशिप (ePASS) और मेरिट स्कॉलरशिप (टॉपर्स के लिए 25% छूट) उपलब्ध है।`,
        ta: `💰 <strong>கட்டணம் மற்றும் கல்வி உதவித்தொகை:</strong><br>
        • ஆண்டுக் கட்டணம்: ₹85,000 முதல் ₹1,15,000 வரை.<br>
        • தகுதியுள்ள மாணவர்களுக்கு அரசு கல்வி உதவித்தொகை மற்றும் தகுதி அடிப்படையிலான உதவித்தொகை உண்டு.`
    },

    // 4. ACADEMICS & EXAMS
    academics: {
        keywords: ['exam', 'academic', 'attendance', 'syllabus', 'mid', 'semester', 'results', 'timetable'],
        en: `📚 <strong>Academics & Regulations:</strong><br>
        • <strong>Attendance:</strong> Minimum <strong>75% mandatory</strong> for exams (65% with Medical Condonation).<br>
        • <strong>Mid Exams:</strong> Mid-1 at the 8th week; Mid-2 at the 16th week.<br>
        • <strong>Results:</strong> Published on student ERP within 30 days of exams.`,
        te: `📚 <strong>విద్యా మరియు పరీక్షల వివరాలు:</strong><br>
        • సెమిస్టర్ పరీక్షలు రాయడానికి 75% హాజరు తప్పనిసరి.<br>
        • ఫలితాలు 30 రోజుల్లో విద్యార్థి ERP పోర్టల్‌లో విడుదల చేయబడతాయి.`,
        hi: `📚 <strong>अकादमिक और परीक्षा:</strong><br>
        • परीक्षा में बैठने के लिए कम से कम 75% उपस्थिति अनिवार्य है।<br>
        • मिड-टर्म परीक्षाएं 8वें और 16वें सप्ताह में होती हैं।`,
        ta: `📚 <strong>கல்வி மற்றும் தேர்வுகள்:</strong><br>
        • தேர்வு எழுத குறைந்தபட்சம் 75% வருகைப்பதிவு கட்டாயம்.<br>
        • முடிவுகள் 30 நாட்களில் மாணவர் போர்ட்டலில் வெளியிடப்படும்.`
    },

    // 5. HOSTEL & CAMPUS
    hostel: {
        keywords: ['hostel', 'mess', 'food', 'library', 'curfew', 'bus', 'room', 'wifi'],
        en: `🏠 <strong>Hostel & Campus Life:</strong><br>
        • <strong>Hostel Fee:</strong> ₹65,000 / year (Includes 4 meals/day + WiFi + Laundry).<br>
        • <strong>Curfew:</strong> Gate closes strictly at 8:30 PM.<br>
        • <strong>Library:</strong> Open 8:00 AM to 9:00 PM with IEEE digital access.`,
        te: `🏠 <strong>హాస్టల్ మరియు క్యాంపస్ వసతులు:</strong><br>
        • హాస్టల్ ఫీజు: ₹65,000 / సంవత్సరం.<br>
        • రాత్రి 8:30 గంటల లోపు హాస్టల్‌కి చేరుకోవాలి. లైబ్రరీ ఉదయం 8 నుండి రాత్రి 9 వరకు తెరిచి ఉంటుంది.`,
        hi: `🏠 <strong>हॉस्टल और कैंपस सुविधाएं:</strong><br>
        • हॉस्टल फीस: ₹65,000 प्रति वर्ष (भोजन और वाई-फाई सहित)।<br>
        • इन-टाइम: रात 8:30 बजे तक। लाइब्रेरी सुबह 8 से रात 9 बजे तक खुली रहती है।`,
        ta: `🏠 <strong>விடுதி மற்றும் வளாக வசதிகள்:</strong><br>
        • விடுதிக் கட்டணம்: ஆண்டுக்கு ₹65,000 (உணவு மற்றும் வைஃபை உட்பட).<br>
        • இரவு 8:30 மணிக்குள் விடுதிக்கு திரும்ப வேண்டும்.`
    },

    // 6. STUDENT SERVICES
    services: {
        keywords: ['bonafide', 'id card', 'certificate', 'leave', 'grievance', 'admin'],
        en: `📝 <strong>Student Helpdesk & Services:</strong><br>
        • <strong>Bonafide Certificate:</strong> Apply on ERP; generated in 24 hours at Counter 3.<br>
        • <strong>Duplicate ID:</strong> Pay ₹150 at the cash counter and collect from the Admin desk.<br>
        • <strong>Grievances:</strong> Mail to <em>grievance@college.edu</em>.`,
        te: `📝 <strong>విద్యార్థి సేవలు:</strong><br>
        • బోనఫైడ్ సర్టిఫికెట్ ERP ద్వారా దరఖాస్తు చేసుకోవచ్చు (24 గంటల్లో లభిస్తుంది).`,
        hi: `📝 <strong>छात्र सेवाएं:</strong><br>
        • बोनाफाइड प्रमाणपत्र: ERP पोर्टल पर आवेदन करें; 24 घंटे में काउंटर 3 से प्राप्त करें।`,
        ta: `📝 <strong>மாணவர் சேவைகள்:</strong><br>
        • போனஃபைட் சான்றிதழ்: போர்ட்டல் மூலம் விண்ணப்பிக்கலாம் (24 மணி நேரத்தில் கிடைக்கும்).`
    },

    // 7. CAREER & SKILLS
    career: {
        keywords: ['career', 'skill', 'programming', 'dsa', 'gate', 'gre', 'coding', 'web dev'],
        en: `🎯 <strong>Career & Skills Development:</strong><br>
        • <strong>Software Track:</strong> DSA (C++/Java/Python) + MERN or SpringBoot + Git.<br>
        • <strong>Higher Studies:</strong> Free weekly GATE & GRE orientation sessions every Saturday.`,
        te: `🎯 <strong>కెరీర్ & స్కిల్స్ గైడెన్స్:</strong><br>
        • DSA, పైథాన్, జావా మరియు వెబ్ డెవలప్‌మెంట్ నేర్చుకోండి. గేట్ (GATE) కోచింగ్ శనివారాలలో ఉచితంగా లభిస్తుంది.`,
        hi: `🎯 <strong>करियर और कौशल मार्गदर्शन:</strong><br>
        • सॉफ्टवेयर ट्रैक: DSA, Python, Java और फुल स्टैक वेब डेवलपमेंट।<br>
        • उच्च शिक्षा: प्रत्येक शनिवार को मुफ्त GATE और GRE मार्गदर्शन सत्र।`,
        ta: `🎯 <strong>தொழில் மற்றும் திறன் வழிகாட்டுதல்:</strong><br>
        • DSA, Python, Java மற்றும் Web Development திறன்களை வளர்த்துக்கொள்ளுங்கள். GATE பயிற்சிகளும் உண்டு.`
    },

    // 8. EVENTS & NOTICES
    events: {
        keywords: ['event', 'fest', 'cultural', 'hackathon', 'circular', 'notice', 'holiday'],
        en: `📢 <strong>Events & Notifications:</strong><br>
        • <strong>TechNova Hackathon:</strong> Coming up in October with ₹2 Lakhs in prizes!<br>
        • <strong>Vibrance Fest:</strong> Annual Cultural Fest held in March.<br>
        • <strong>Holiday Circular:</strong> Campus closed on upcoming government holiday.`,
        te: `📢 <strong>నోటీసులు మరియు ఈవెంట్స్:</strong><br>
        • వార్షిక టెక్ హ్యాకథాన్ అక్టోబర్‌లో మరియు కల్చరల్ ఫెస్ట్ మార్చిలో నిర్వహించబడతాయి.`,
        hi: `📢 <strong>इवेंट्स और सूचनाएं:</strong><br>
        • टेकनोवा हैकथॉन अक्टूबर में आयोजित होगा।<br>
        • वाइब्रेंस कल्चरल फेस्ट मार्च महीने में होगा।`,
        ta: `📢 <strong>நிகழ்வுகள் மற்றும் சுற்றறிக்கைகள்:</strong><br>
        • ஆண்டு தொழில்நுட்ப ஹேக்கத்தான் அக்டோபரிலும், கலாச்சார விழா மார்ச்சிலும் நடைபெறும்.`
    }
};

// Conversational / Chit-Chat Responses (Handles "Anything Else")
const conversationalIntents = {
    greeting: {
        keywords: ['hi', 'hello', 'hey', 'namaste', 'namaskaram', 'vanakkam', 'good morning', 'good afternoon', 'good evening'],
        en: "👋 Hello! I am your AI College Assistant. You can ask me anything about college admissions, placements, companies, hostel rules, or fees. How can I help you today?",
        te: "👋 నమస్కారం! నేను మీ కాలేజ్ AI అసిస్టెంట్‌ని. అడ్మిషన్లు, ప్లేస్‌మెంట్స్, కంపెనీలు, హాస్టల్ లేదా ఫీజుల గురించి నన్ను ఏదైనా అడగవచ్చు.",
        hi: "👋 नमस्ते! मैं आपका कॉलेज AI असिस्टेंट हूँ। आप मुझसे प्रवेश, प्लेसमेंट, कट-ऑफ, फीस या हॉस्टल से संबंधित कुछ भी पूछ सकते हैं।",
        ta: "👋 வணக்கம்! நான் உங்கள் கல்லூரி AI உதவியாளர். சேர்க்கை, பிளேஸ்மென்ட், நிறுவனங்கள், கட்டணம் பற்றி நீங்கள் எது வேண்டுமானாலும் கேட்கலாம்."
    },
    identity: {
        keywords: ['who are you', 'your name', 'who created you', 'what can you do', 'what are you'],
        en: "🤖 I am <strong>CampusAI</strong>, an intelligent assistant built to help college students and applicants with cutoffs, company requirements, academic rules, and campus life!",
        te: "🤖 నేను <strong>CampusAI</strong>. విద్యార్థులకు కాలేజీ వివరాలు, కంపెనీ ప్లేస్‌మెంట్స్ మరియు క్యాంపస్ సమాచారాన్ని అందించడానికి రూపొందించబడ్డాను.",
        hi: "🤖 मैं <strong>CampusAI</strong> हूँ, जो छात्रों को कॉलेज की जानकारी, प्लेसमेंट नियम और कैंपस सहायता प्रदान करने के लिए बना हूँ।",
        ta: "🤖 நான் <strong>CampusAI</strong>, கல்லூரி மற்றும் வேலைவாய்ப்பு தகவல்களை வழங்க வடிவமைக்கப்பட்ட AI உதவியாளர்."
    },
    canteen: {
        keywords: ['canteen', 'food', 'cafeteria', 'lunch', 'biryani', 'snacks', 'coffee'],
        en: "☕ The campus cafeteria is open from 7:30 AM to 8:30 PM. We have fresh south Indian, north Indian meals, coffee, and quick snacks at student-friendly prices!",
        te: "☕ క్యాంపస్ క్యాంటీన్ ఉదయం 7:30 నుండి రాత్రి 8:30 వరకు అందుబాటులో ఉంటుంది. మంచి భోజనం మరియు స్నాక్స్ లభిస్తాయి.",
        hi: "☕ कॉलेज कैंटीन सुबह 7:30 से रात 8:30 तक खुली रहती है। यहाँ स्वादिष्ट भोजन और स्नैक्स उपलब्ध हैं।",
        ta: "☕ கல்லூரி கேண்டீன் காலை 7:30 முதல் இரவு 8:30 வரை திறந்திருக்கும். நல்ல உணவுகள் நியாயமான விலையில் கிடைக்கும்."
    },
    stress: {
        keywords: ['stress', 'tension', 'tired', 'depressed', 'anxious', 'worried', 'help me study', 'scared of exam'],
        en: "💙 Take a deep breath! Exam stress and placement tension are normal. Break your syllabus into small 25-minute study sessions, get 7 hours of sleep, and talk to your mentor or friends. You got this!",
        te: "💙 ఆందోళన చెందకండి! పరీక్షల లేదా ప్లేస్‌మెంట్ ఒత్తిడి సహజం. కొద్దిసేపు విశ్రాంతి తీసుకోండి, మీ ఫ్యాకల్టీ లేదా స్నేహితులతో మాట్లాడండి. మీరు ఖచ్చితంగా విజయం సాధిస్తారు!",
        hi: "💙 चिंता न करें! परीक्षाओं और प्लेसमेंट का तनाव होना स्वाभाविक है। अपनी पढ़ाई को छोटे-छोटे भागों में बांटें और पर्याप्त नींद लें। आप अवश्य सफल होंगे!",
        ta: "💙 கவலைப்பட வேண்டாம்! தேர்வு மற்றும் பிளேஸ்மென்ட் மன அழுத்தத்தை சமாளிக்க ஓய்வெடுத்து திட்டமிட்டு படியுங்கள். உங்களால் சாதிக்க முடியும்!"
    },
    joke: {
        keywords: ['joke', 'funny', 'bored', 'make me laugh', 'laugh'],
        en: "😄 <em>Why do computer science students wear glasses?</em><br>Because they don't C#!",
        te: "😄 <em>ఎగ్జామ్ ముందు ఇంజనీరింగ్ స్టూడెంట్ సూపర్ పవర్ ఏంటో తెలుసా?</em><br>ఒక్క రాత్రిలో 5 యూనిట్లు చదివేయడం!",
        hi: "😄 <em>इंजीनियरिंग छात्र की सबसे बड़ी सुपरपावर क्या है?</em><br>एक रात में पूरा सिलेबस पढ़कर पास हो जाना!",
        ta: "😄 <em>கம்ப்யூட்டர் சயின்ஸ் மாணவர்களின் மிகப்பெரிய திறமை என்ன தெரியுமா?</em><br>பரீட்சைக்கு முந்தைய ஒரே இரவில் 5 யூனிட்டுகளையும் படித்து முடிப்பது!"
    },
    thanks: {
        keywords: ['thanks', 'thank you', 'dhanyawad', 'shukriya', 'nandri', 'super', 'awesome'],
        en: "🌟 You're very welcome! Feel free to ask anytime if you have more questions. All the best for your campus journey!",
        te: "🌟 ధన్యవాదాలు! ఇంకేమైనా సందేహాలు ఉంటే ఎప్పుడైనా అడగండి. ఆల్ ది బెస్ట్!",
        hi: "🌟 आपका स्वागत है! यदि आपके कोई और प्रश्न हैं, तो कभी भी पूछें। शुभकामनाएं!",
        ta: "🌟 மிக்க நன்றி! மேலும் சந்தேகங்கள் இருந்தால் எப்போது வேண்டுமானாலும் கேளுங்கள். வாழ்த்துக்கள்!"
    }
};

// General fallback if no keyword matches at all
const generalFallbacks = {
    en: (query) => `🤖 I understand you're asking about "<strong>${query}</strong>". While that might not be in my standard circulars, here are helpful options:<br>
    • Check the <strong>Placements Hub</strong> for company eligibility (TCS, Amazon, etc.).<br>
    • Contact the administrative desk at <strong>+91 040-23456789</strong> or <strong>admin@college.edu</strong>.<br>
    • Or ask about hostel, exams, syllabus, fees, or bonafide certificates!`,
    te: (query) => `🤖 మీరు "<strong>${query}</strong>" గురించి అడిగారు. దీనిపై మరింత సమాచారం కోసం కాలేజీ ఆఫీస్‌ను సంప్రదించవచ్చు: <strong>+91 040-23456789</strong> లేదా ప్లేస్‌మెంట్స్, అడ్మిషన్లు, హాస్టల్ గురించి అడగండి.`,
    hi: (query) => `🤖 आपने "<strong>${query}</strong>" के बारे में पूछा। इसके संबंध में विस्तृत सहायता के लिए प्रशासनिक कार्यालय से <strong>+91 040-23456789</strong> पर संपर्क करें या प्लेसमेंट/फीस विवरण पूछें।`,
    ta: (query) => `🤖 நீங்கள் "<strong>${query}</strong>" பற்றி கேட்கிறீர்கள். இதன் முழு விவரங்களுக்கு கல்லூரி அலுவலகத்தை <strong>+91 040-23456789</strong> என்ற எண்ணில் தொடர்பு கொள்ளலாம்.`
};

// Welcome Messages per Language
const welcomeMessages = {
    en: `🎓 <strong>Welcome to CampusAI Assistant!</strong><br>
    I am ready to help you with <strong>Placement Cutoffs (TCS, Amazon, Infosys, Wipro, Cognizant)</strong>, Admissions, Exams, Fees, Hostel life, or general campus queries.<br><br>
    <i>Try asking:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and companies')">💼 Placements & Companies</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Admission process and dates')">🏫 Admissions</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Hostel fee and facilities')">🏠 Hostel & Life</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Tell me a joke')">😄 Tell a Joke</button>
    </div>`,
    te: `🎓 <strong>CampusAI అసిస్టెంట్‌కి స్వాగతం!</strong><br>
    నేను మీకు <strong>ప్లేస్‌మెంట్స్ (Amazon, TCS, Infosys, Wipro, Cognizant)</strong>, అడ్మిషన్లు, ఫీజులు, పరీక్షలు మరియు క్యాంపస్ వివరాలలో సహాయం చేయగలను.<br><br>
    <i>ప్రశ్నించండి:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and companies')">💼 ప్లేస్‌మెంట్స్ వివరాలు</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Admission process and dates')">🏫 అడ్మిషన్లు</button>
    </div>`,
    hi: `🎓 <strong>CampusAI असिस्टेंट में आपका स्वागत है!</strong><br>
    मैं आपको <strong>प्लेसमेंट (Amazon, TCS, Infosys, Wipro, Cognizant)</strong>, प्रवेश, फीस, हॉस्टल और परीक्षाओं के बारे में सभी जानकारी दे सकता हूँ।<br><br>
    <i>पूछें:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and companies')">💼 प्लेसमेंट कट-ऑफ</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Admission process and dates')">🏫 प्रवेश प्रक्रिया</button>
    </div>`,
    ta: `🎓 <strong>CampusAI உதவியாளருக்கு வரவேற்கிறோம்!</strong><br>
    <strong>வேலைவாய்ப்பு (TCS, Amazon, Infosys, Wipro, Cognizant)</strong>, சேர்க்கை, கட்டணம் மற்றும் தேர்வுகள் பற்றி நான் உங்களுக்கு உதவ முடியும்.<br><br>
    <i>கேட்கவும்:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and companies')">💼 வேலைவாய்ப்பு விவரங்கள்</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Admission process and dates')">🏫 சேர்க்கை விவரங்கள்</button>
    </div>`
};

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
    showWelcomeMessage();
});

function showWelcomeMessage() {
    appendMessage(welcomeMessages[currentLang], 'bot');
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
    }, 500);
}

// Quick Chip Action
function sendQuickPrompt(promptText) {
    document.getElementById('userInput').value = promptText;
    sendMessage();
}

// Comprehensive NLP & Conversational Matcher
function generateAIResponse(query) {
    const cleanQuery = query.toLowerCase().trim();

    // 1. Check Conversational Intents (Greetings, jokes, canteen, thanks, identity)
    for (const intentKey in conversationalIntents) {
        const item = conversationalIntents[intentKey];
        if (item.keywords.some(kw => cleanQuery.includes(kw))) {
            return item[currentLang];
        }
    }

    // 2. Check College Knowledge Base (Placements, Admissions, Fees, etc.)
    for (const category in knowledgeBase) {
        const item = knowledgeBase[category];
        const matchFound = item.keywords.some(kw => cleanQuery.includes(kw));
        if (matchFound) {
            return item[currentLang];
        }
    }

    // 3. Fallback for any other arbitrary input
    return generalFallbacks[currentLang](escapeHTML(query));
}

// Helper to escape characters in user questions
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// Append Message to Chat Window
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

// Typing Indicator
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

// Language Switcher (En, Te, Hi, Ta)
function changeLanguage() {
    currentLang = document.getElementById('langSelect').value;
    const switchMessages = {
        en: 'Language set to <strong>English</strong>. How can I assist you?',
        te: 'భాష <strong>తెలుగు</strong> లోకి మార్చబడింది. నేను మీకు ఎలా సహాయపడగలను?',
        hi: 'भाषा <strong>हिन्दी</strong> में बदल दी गई है। मैं आपकी क्या मदद कर सकता हूँ?',
        ta: 'மொழி <strong>தமிழ்</strong>க்கு மாற்றப்பட்டது. நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?'
    };
    appendMessage(switchMessages[currentLang], 'bot');
}

// Clear Chat Function
function clearChat() {
    document.getElementById('chatBody').innerHTML = '';
    showWelcomeMessage();
}

// Document Upload Simulation
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    appendMessage(`📄 <em>Uploaded document: ${file.name}</em>`, 'user');
    showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator();
        const responses = {
            en: `📄 <strong>Document Analyzed (${file.name}):</strong><br>Contents extracted. You can now ask questions about cutoff dates, fee policies, or rules mentioned in this file.`,
            te: `📄 <strong>పత్రం విశ్లేషించబడింది (${file.name}):</strong><br>వివరాలు సేకరించబడ్డాయి. మీరు ఈ పత్రం గురించి ఏవైనా ప్రశ్నలు అడగవచ్చు.`,
            hi: `📄 <strong>दस्तावेज़ का विश्लेषण किया गया (${file.name}):</strong><br>सामग्री प्राप्त कर ली गई है। अब आप इस दस्तावेज़ से संबंधित प्रश्न पूछ सकते हैं।`,
            ta: `📄 <strong>ஆவணம் பகுப்பாய்வு செய்யப்பட்டது (${file.name}):</strong><br>தகவல்கள் பெறப்பட்டன. இந்த ஆவணம் தொடர்பாக நீங்கள் கேள்விகளைக் கேட்கலாம்.`
        };
        appendMessage(responses[currentLang], 'bot');
    }, 1200);
}

// Human Handoff Function
function triggerHandoff() {
    appendMessage("Connecting to administrative office desk...", 'user');
    showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator();
        const contactInfo = `👨‍💼 <strong>College Official Contact Directory:</strong><br>
        • <strong>Training & Placements:</strong> +91 040-23456781 | placements@college.edu<br>
        • <strong>Admissions Cell:</strong> +91 040-23456782 | admissions@college.edu<br>
        • <strong>Examination Branch:</strong> +91 040-23456783 | exams@college.edu<br>
        • <strong>Administrative Timings:</strong> Mon - Sat: 9:30 AM – 4:30 PM`;
        appendMessage(contactInfo, 'bot');
    }, 600);
}

// Voice Recognition with Multi-Language Locales
function toggleSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Speech recognition is not supported in this browser. Please try Google Chrome or MS Edge.');
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    const localeMap = {
        en: 'en-US',
        te: 'te-IN',
        hi: 'hi-IN',
        ta: 'ta-IN'
    };
    recognition.lang = localeMap[currentLang] || 'en-US';

    const micBtn = document.getElementById('micBtn');
    micBtn.style.color = '#ef4444';

    recognition.start();

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

// Enter Key Trigger
document.getElementById('userInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Mobile Sidebar Toggle
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('chatSidebar').classList.toggle('open');
});
