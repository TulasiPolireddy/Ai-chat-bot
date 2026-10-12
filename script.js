/**
 * CampusAI - Master Knowledge Base & Conversational AI Engine
 * Languages: English (en), Telugu (te), Hindi (hi), Tamil (ta)
 */

let currentLang = 'en';

// Master College Knowledge Base
const knowledgeBase = {
    // 1. COMPLETE & TRANSPARENT FEE STRUCTURE
    fees: {
        keywords: [
            'fee', 'fees', 'tuition', 'scholarship', 'scholarships', 'payment', 
            'due', 'dues', 'jvd', 'epass', 'cost', 'money', 'btech fee',
            'exam fee', 'bus fee', 'late fee', 'how to pay', 'installment', 
            'financial aid', 'fee structure', 'fee details', 'hostel fee'
        ],
        en: `💰 <strong>Complete College Fee Structure & Scholarship Details:</strong><br><br>
        
        <div class="fee-block">
            <div class="fee-block-title">🎓 1. Annual Tuition Fees (Branch-Wise)</div>
            • <strong>B.Tech (CSE, AI & DS, IT):</strong> ₹1,15,000 / year<br>
            • <strong>B.Tech (ECE, EEE, Mech, Civil):</strong> ₹95,000 / year<br>
            • <strong>M.Tech (All Specializations):</strong> ₹70,000 / year<br>
            • <strong>MBA / MCA Programs:</strong> ₹65,000 / year
        </div>

        <div class="fee-block">
            <div class="fee-block-title">🏠 2. Hostel, Mess & Transport Charges</div>
            • <strong>Hostel & Mess (Non-AC):</strong> ₹65,000 / year (Includes 4 meals/day, WiFi, Laundry)<br>
            • <strong>Hostel & Mess (AC 2-Sharing):</strong> ₹85,000 / year<br>
            • <strong>College Bus / Transportation:</strong> ₹22,000 – ₹32,000 / year (distance-based)<br>
            • <strong>Semester Exam Fee:</strong> ₹1,500 / semester<br>
            • <strong>Caution Deposit:</strong> ₹5,000 (One-time, 100% refundable after graduation)
        </div>

        <div class="warning-box">
            📅 <strong>Payment Deadlines & Fine Policy:</strong><br>
            • <strong>Odd Semesters:</strong> Due on or before <strong>August 15</strong><br>
            • <strong>Even Semesters:</strong> Due on or before <strong>January 20</strong><br>
            • <strong>Late Fine:</strong> ₹500 for first 10 days delay; ₹1,000 thereafter.<br>
            • <strong>Installment Option:</strong> Tuition can be paid in <strong>2 equal installments</strong> with Dean's permission.
        </div>

        <div class="notice-box">
            🏆 <strong>Scholarships & Financial Aid:</strong><br>
            • <strong>Government Schemes:</strong> 100% tuition reimbursement via State ePASS / Jagananna Vidya Deevena (JVD) for eligible SC/ST/BC/EWS students.<br>
            • <strong>Merit Scholarship:</strong> 25% tuition fee waiver for semester toppers with CGPA > 9.5.<br>
            • <strong>Sports / Special Quota:</strong> Up to 30% concession for state/national players.
        </div>

        <div class="fee-block" style="margin-top:8px;">
            <div class="fee-block-title">💳 3. How to Pay</div>
            • <strong>Online:</strong> Student ERP Portal &rarr; Fee Payment (UPI / Cards / Net Banking)<br>
            • <strong>SBI Collect:</strong> Educational Institutions &rarr; College Name &rarr; Roll Number<br>
            • <strong>Offline:</strong> Demand Draft (DD) favoring <em>"The Principal"</em> at campus bank.
        </div>`,

        te: `💰 <strong>పూర్తి ఫీజు వివరాలు మరియు స్కాలర్‌షిప్‌లు (Fee Structure):</strong><br><br>
        
        <div class="fee-block">
            <div class="fee-block-title">🎓 1. వార్షిక ట్యూషన్ ఫీజు (సంవత్సరానికి)</div>
            • <strong>B.Tech (CSE, AI&DS, IT):</strong> ₹1,15,000 / ఏటా<br>
            • <strong>B.Tech (ECE, Mech, Civil):</strong> ₹95,000 / ఏటా<br>
            • <strong>M.Tech:</strong> ₹70,000 / ఏటా | <strong>MBA / MCA:</strong> ₹65,000 / ఏటా
        </div>

        <div class="fee-block">
            <div class="fee-block-title">🏠 2. హాస్టల్ మరియు ఇతర ఖర్చులు</div>
            • <strong>హాస్టల్ & మెస్ (Non-AC):</strong> ₹65,000 / ఏటా (భోజనం, వైఫై, లాండ్రీతో కలిపి)<br>
            • <strong>హాస్టల్ (AC 2-షేరింగ్):</strong> ₹85,000 / ఏటా<br>
            • <strong>కాలేజ్ బస్సు:</strong> ₹22,000 – ₹32,000 / ఏటా (దూరాన్ని బట్టి)<br>
            • <strong>ఎగ్జామ్ ఫీజు:</strong> ₹1,500 / సెమిస్టర్ | <strong>కాషన్ డిపాజిట్:</strong> ₹5,000 (రీఫండబుల్)
        </div>

        <div class="warning-box">
            📅 <strong>చెల్లింపు గడువు:</strong> ఆడ్ సెమిస్టర్: ఆగస్టు 15 | ఈవెన్ సెమిస్టర్: జనవరి 20. (ఆలస్యమైతే ₹500 ఫైన్). 2 విడతల్లో చెల్లించే సదుపాయం కలదు.
        </div>

        <div class="notice-box">
            🏆 <strong>స్కాలర్‌షిప్‌లు:</strong> అర్హులైన SC/ST/BC/EWS విద్యార్థులకు ePASS లేదా JVD ద్వారా 100% పూర్తి ఫీజు రీయింబర్స్‌మెంట్ లభిస్తుంది. 9.5 CGPA సాధించిన టాపర్లకు 25% మెరిట్ స్కాలర్‌షిప్ ఉంటుంది.
        </div>`,

        hi: `💰 <strong>कॉलेज फीस संरचना और छात्रवृत्ति (Fees & Scholarships):</strong><br><br>
        
        <div class="fee-block">
            <div class="fee-block-title">🎓 1. वार्षिक ट्यूशन फीस (कोर्स अनुसार)</div>
            • <strong>B.Tech (CSE, AI & DS, IT):</strong> ₹1,15,000 / वर्ष<br>
            • <strong>B.Tech (ECE, Mech, Civil):</strong> ₹95,000 / वर्ष<br>
            • <strong>M.Tech:</strong> ₹70,000 / वर्ष | <strong>MBA / MCA:</strong> ₹65,000 / वर्ष
        </div>

        <div class="fee-block">
            <div class="fee-block-title">🏠 2. हॉस्टल, ट्रांसपोर्ट एवं अन्य शुल्क</div>
            • <strong>हॉस्टल और मेस (Non-AC):</strong> ₹65,000 / वर्ष (4 समय का भोजन + वाई-फाई)<br>
            • <strong>हॉस्टल (AC):</strong> ₹85,000 / वर्ष<br>
            • <strong>कॉलेज बस शुल्क:</strong> ₹22,000 – ₹32,000 / वर्ष<br>
            • <strong>सेमेस्टर परीक्षा शुल्क:</strong> ₹1,500 / सेमेस्टर | <strong>कॉशन मनी:</strong> ₹5,000 (रिफंडेबल)
        </div>

        <div class="warning-box">
            📅 <strong>अंतिम तिथि:</strong> विषम सेमेस्टर: 15 अगस्त | सम सेमेस्टर: 20 जनवरी। फीस 2 किस्तों (Installments) में भी दी जा सकती है।
        </div>

        <div class="notice-box">
            🏆 <strong>छात्रवृत्ति (Scholarships):</strong> पात्र छात्रों के लिए सरकारी ePASS योजना द्वारा 100% फीस प्रतिपूर्ति (Reimbursement)। टॉपर्स को 25% मेरिट छूट।
        </div>`,

        ta: `💰 <strong>முழு கல்விக் கட்டணம் மற்றும் உதவித்தொகை (Fees & Scholarships):</strong><br><br>
        
        <div class="fee-block">
            <div class="fee-block-title">🎓 1. ஆண்டுக் கட்டணம் (துறை வாரியாக)</div>
            • <strong>B.Tech (CSE, AI & DS, IT):</strong> ₹1,15,000 / ஆண்டு<br>
            • <strong>B.Tech (ECE, Mech, Civil):</strong> ₹95,000 / ஆண்டு<br>
            • <strong>M.Tech:</strong> ₹70,000 / ஆண்டு | <strong>MBA / MCA:</strong> ₹65,000 / ஆண்டு
        </div>

        <div class="fee-block">
            <div class="fee-block-title">🏠 2. விடுதி மற்றும் பிற கட்டணங்கள்</div>
            • <strong>விடுதி மற்றும் உணவு:</strong> ₹65,000 / ஆண்டு (உணவு மற்றும் வைஃபை உட்பட)<br>
            • <strong>பேருந்துக் கட்டணம்:</strong> ₹22,000 – ₹32,000 / ஆண்டு<br>
            • <strong>பருவத் தேர்வு கட்டணம்:</strong> ₹1,500 / பருவம்
        </div>

        <div class="notice-box">
            🏆 <strong>உதவித்தொகை:</strong> தகுதியுள்ள மாணவர்களுக்கு அரசு கல்வி உதவித்தொகை மூலம் முழு கட்டண விலக்கு மற்றும் 9.5 CGPA எடுக்கும் மாணவர்களுக்கு 25% கட்டணச் சலுகை உண்டு.
        </div>`
    },

    // 2. PLACEMENTS: 5 Major Companies
    placements: {
        keywords: [
            'placement', 'placements', 'company', 'companies', 'job', 'jobs', 'salary', 
            'package', 'tcs', 'amazon', 'infosys', 'wipro', 'cognizant', 'eligibility for campus',
            'placement criteria', 'recruitment', 'rounds', 'hiring'
        ],
        en: `💼 <strong>Campus Placement Eligibility & Top Recruiters:</strong><br><br>
        <strong>General Eligibility:</strong> Minimum <strong>60% or 6.5 CGPA</strong> aggregate with <strong>0 active backlogs</strong>.<br><br>
        <div class="fee-block">
            • <strong>1. Amazon:</strong> ₹28 - 45 LPA | 7.0+ CGPA | DSA Coding + 3 Tech Rounds.<br>
            • <strong>2. TCS (Ninja & Prime):</strong> ₹3.36 - 9.0 LPA | 60% in 10th, 12th & B.Tech.<br>
            • <strong>3. Infosys (SE & Specialist):</strong> ₹3.6 - 9.5 LPA | 65% aggregate.<br>
            • <strong>4. Wipro (Elite & Turbo):</strong> ₹3.5 - 6.5 LPA | 60% aggregate.<br>
            • <strong>5. Cognizant (GenC):</strong> ₹4.0 - 6.75 LPA | 60% aggregate.
        </div>`,

        te: `💼 <strong>క్యాంపస్ ప్లేస్‌మెంట్స్ & 5 ప్రముఖ కంపెనీల వివరాలు:</strong><br><br>
        <strong>సాధారణ అర్హత:</strong> 60% లేదా 6.5 CGPA, ఎలాంటి యాక్టివ్ బ్యాక్‌లాగ్‌లు ఉండకూడదు.<br><br>
        • <strong>Amazon:</strong> ₹28 - 45 LPA (7.0+ CGPA)<br>
        • <strong>TCS:</strong> ₹3.36 - 9.0 LPA (60% మార్కులు)<br>
        • <strong>Infosys:</strong> ₹3.6 - 9.5 LPA (65% మార్కులు)<br>
        • <strong>Wipro:</strong> ₹3.5 - 6.5 LPA (60% మార్కులు)<br>
        • <strong>Cognizant:</strong> ₹4.0 - 6.75 LPA (60% మార్కులు)`,

        hi: `💼 <strong>कैंपस प्लेसमेंट पात्रता और 5 प्रमुख कंपनियाँ:</strong><br><br>
        <strong>सामान्य पात्रता:</strong> न्यूनतम 60% या 6.5 CGPA, 0 एक्टिव बैकलाग।<br><br>
        • <strong>Amazon:</strong> ₹28 - 45 LPA (7.0+ CGPA, DSA राउंड)<br>
        • <strong>TCS:</strong> ₹3.36 - 9.0 LPA (60% अंक)<br>
        • <strong>Infosys:</strong> ₹3.6 - 9.5 LPA (65% अंक)<br>
        • <strong>Wipro:</strong> ₹3.5 - 6.5 LPA (60% अंक)<br>
        • <strong>Cognizant:</strong> ₹4.0 - 6.75 LPA (60% अंक)`,

        ta: `💼 <strong>வளாக வேலைவாய்ப்பு (Placements) மற்றும் 5 முன்னணி நிறுவனங்கள்:</strong><br><br>
        <strong>பொதுவான தகுதி:</strong> 60% அல்லது 6.5 CGPA, அரியர்ஸ் இருக்கக்கூடாது.<br><br>
        • <strong>Amazon:</strong> ₹28 - 45 LPA | <strong>TCS:</strong> ₹3.36 - 9.0 LPA<br>
        • <strong>Infosys:</strong> ₹3.6 - 9.5 LPA | <strong>Wipro:</strong> ₹3.5 - 6.5 LPA<br>
        • <strong>Cognizant:</strong> ₹4.0 - 6.75 LPA`
    },

    // 3. HOSTEL & CAMPUS
    hostel: {
        keywords: [
            'hostel', 'campus', 'room', 'rooms', 'mess', 'accommodation', 
            'curfew', 'in-time', 'library', 'sports', 'gym', 'wifi', 
            'medical', 'hospital', 'facilities', 'outing', 'warden'
        ],
        en: `🏠 <strong>Campus & Hostel Infrastructure Overview:</strong><br><br>
        • <strong>Hostel Rooms:</strong> 2-Sharing & 3-Sharing (₹65,000/yr Non-AC, ₹85,000/yr AC). Includes study desk, hot water, and laundry.<br>
        • <strong>Mess & Dining:</strong> 4 times daily hygienic meals. Veg daily + Non-Veg 3 days a week.<br>
        • <strong>Library:</strong> Central Digital Library open 8:00 AM - 9:00 PM.<br>
        • <strong>Sports & Health:</strong> Cricket ground, basketball arena, gym, and 24/7 on-campus ambulance.<br>
        • <strong>Curfew:</strong> Hostel gate closes at <strong>8:30 PM</strong>. Outings require ERP digital approval.`,

        te: `🏠 <strong>క్యాంపస్ మరియు హాస్టల్ పూర్తి వివరాలు:</strong><br><br>
        • <strong>హాస్టల్ గదులు:</strong> 2-షేరింగ్ మరియు 3-షేరింగ్ (₹65,000 / ఏటా).<br>
        • <strong>మెస్ భోజనం:</strong> రోజుకు 4 పూటలా భోజనం (వారానికి 3 రోజులు నాన్-వెజ్).<br>
        • <strong>సమయం:</strong> రాత్రి 8:30 లోపు హాస్టల్‌కి చేరుకోవాలి.<br>
        • <strong>వసతులు:</strong> లైబ్రరీ (ఉదయం 8 - రాత్రి 9), జిమ్, 24/7 అంబులెన్స్ సదుపాయం కలదు.`,

        hi: `🏠 <strong>कैंपस एवं हॉस्टल की संपूर्ण जानकारी:</strong><br><br>
        • <strong>कमरे और फीस:</strong> ₹65,000 / वर्ष (भोजन, वाई-फाई और लॉन्ड्री सहित)।<br>
        • <strong>मेस:</strong> दिन में 4 समय का भोजन।<br>
        • <strong>समय:</strong> रात 8:30 बजे से पहले हॉस्टल में प्रवेश अनिवार्य है।<br>
        • <strong>सुविधाएं:</strong> लाइब्रेरी (सुबह 8 से रात 9), जिम और 24/7 मेडिकल केयर।`,

        ta: `🏠 <strong>வளாகம் மற்றும் விடுதி (Hostel & Campus) விவரங்கள்:</strong><br><br>
        • <strong>விடுதி கட்டணம்:</strong> ஆண்டுக்கு ₹65,000 (உணவு மற்றும் வைஃபை உட்பட).<br>
        • <strong>நேரம்:</strong> இரவு 8:30 மணிக்குள் விடுதிக்குத் திரும்ப வேண்டும்.<br>
        • <strong>வசதிகள்:</strong> நூலகம், விளையாட்டு மைதானம், ஜிம் மற்றும் மருத்துவ மையம் உள்ளன.`
    },

    // 4. ADMISSIONS
    admissions: {
        keywords: ['admission', 'apply', 'seat', 'documents', 'deadline', 'eligibility', 'btech', 'mba', 'mca', 'entrance'],
        en: `🏛️ <strong>Admissions Office:</strong><br>
        • <strong>Courses:</strong> B.Tech (CSE, AI&DS, ECE, MECH), M.Tech, MBA, MCA.<br>
        • <strong>Eligibility:</strong> Minimum 60% in 10+2 with PCM.<br>
        • <strong>Entrance Exams:</strong> State EAMCET, JEE Main, ICET.<br>
        • <strong>Documents Needed:</strong> 10th & 12th Memos, Transfer Certificate (TC), Study Certificate, Caste/Income Certificate (if applicable), Rank Card.<br>
        • <strong>Deadline:</strong> Phase-1 Registrations close on <strong>July 31st</strong>.`,
        te: `🏛️ <strong>ప్రవేశాల సమాచారం:</strong><br>
        • B.Tech, M.Tech, MBA మరియు MCA కోర్సులు అందుబాటులో ఉన్నాయి.<br>
        • ఇంటర్‌లో 60% మార్కులు తప్పనిసరి. దరఖాస్తు గడువు: జూలై 31.`,
        hi: `🏛️ <strong>प्रवेश विवरण (Admissions):</strong><br>
        • B.Tech, M.Tech, MBA और MCA कोर्स उपलब्ध हैं। 10+2 में 60% अंक आवश्यक हैं।`,
        ta: `🏛️ <strong>சேர்க்கை விவரங்கள்:</strong><br>
        • B.Tech, M.Tech, MBA மற்றும் MCA படிப்புகள் உள்ளன. பிளஸ் 2 தேர்வில் 60% மதிப்பெண்கள் அவசியம்.`
    },

    // 5. ACADEMICS
    academics: {
        keywords: ['exam', 'academic', 'attendance', 'syllabus', 'mid', 'semester', 'results', 'timetable'],
        en: `📚 <strong>Academics & Regulations:</strong><br>
        • <strong>Attendance:</strong> Minimum <strong>75% mandatory</strong> for exams.<br>
        • <strong>Mid Exams:</strong> Mid-1 at the 8th week; Mid-2 at the 16th week.<br>
        • <strong>Results:</strong> Published on student ERP within 30 days of exams.`,
        te: `📚 <strong>విద్యా మరియు పరీక్షల వివరాలు:</strong><br>
        • సెమిస్టర్ పరీక్షలు రాయడానికి 75% హాజరు తప్పనిసరి. ఫలితాలు 30 రోజుల్లో పోర్టల్‌లో విడుదలవుతాయి.`,
        hi: `📚 <strong>अकादमिक और परीक्षा:</strong> कम से कम 75% उपस्थिति अनिवार्य है।`,
        ta: `📚 <strong>கல்வி மற்றும் தேர்வுகள்:</strong> தேர்வு எழுத குறைந்தபட்சம் 75% வருகைப்பதிவு கட்டாயம்.`
    },

    // 6. STUDENT SERVICES
    services: {
        keywords: ['bonafide', 'id card', 'certificate', 'leave', 'grievance', 'admin'],
        en: `📝 <strong>Student Helpdesk & Services:</strong><br>
        • <strong>Bonafide Certificate:</strong> Apply on ERP; generated in 24 hours at Counter 3.<br>
        • <strong>Duplicate ID:</strong> Pay ₹150 at the cash counter and collect from Admin desk.<br>
        • <strong>Grievances:</strong> Mail to <em>grievance@college.edu</em>.`,
        te: `📝 <strong>విద్యార్థి సేవలు:</strong> బోనఫైడ్ సర్టిఫికెట్ ERP ద్వారా దరఖాస్తు చేసుకోవచ్చు.`,
        hi: `📝 <strong>छात्र सेवाएं:</strong> बोनाफाइड प्रमाणपत्र ERP पोर्टल पर 24 घंटे में प्राप्त करें।`,
        ta: `📝 <strong>மாணவர் சேவைகள்:</strong> போனஃபைட் சான்றிதழ் போர்ட்டல் மூலம் 24 மணி நேரத்தில் பெறலாம்.`
    },

    // 7. CAREER & SKILLS
    career: {
        keywords: ['career', 'skill', 'programming', 'dsa', 'gate', 'gre', 'coding', 'web dev'],
        en: `🎯 <strong>Career & Skills Development:</strong><br>
        • <strong>Software Track:</strong> DSA (C++/Java/Python) + MERN or SpringBoot + Git.<br>
        • <strong>Higher Studies:</strong> Free weekly GATE & GRE orientation sessions every Saturday.`,
        te: `🎯 <strong>కెరీర్ గైడెన్స్:</strong> DSA, పైథాన్, జావా నేర్చుకోండి. గేట్ కోచింగ్ శనివారాలలో లభిస్తుంది.`,
        hi: `🎯 <strong>करियर मार्गदर्शन:</strong> DSA, Python, Java और फुल स्टैक वेब डेवलपमेंट पर ध्यान दें।`,
        ta: `🎯 <strong>தொழில் வழிகாட்டுதல்:</strong> DSA, Python, Java திறன்களை வளர்த்துக்கொள்ளுங்கள்.`
    },

    // 8. EVENTS & NOTICES
    events: {
        keywords: ['event', 'fest', 'cultural', 'hackathon', 'circular', 'notice', 'holiday'],
        en: `📢 <strong>Events & Notifications:</strong><br>
        • <strong>TechNova Hackathon:</strong> Annual National Hackathon in October with ₹2 Lakhs in prizes!<br>
        • <strong>Vibrance Fest:</strong> Annual Cultural Fest held in March.<br>
        • <strong>Circulars:</strong> Check the student ERP notice board for regular updates.`,
        te: `📢 <strong>నోటీసులు మరియు ఈవెంట్స్:</strong> వార్షిక టెక్ హ్యాకథాన్ అక్టోబర్‌లో మరియు కల్చరల్ ఫెస్ట్ మార్చిలో జరుగుతాయి.`,
        hi: `📢 <strong>इवेंट्स और सूचनाएं:</strong> टेकनोवा हैकथॉन अक्टूबर में आयोजित होगा और वाइब्रेंस फेस्ट मार्च में होगा।`,
        ta: `📢 <strong>நிகழ்வுகள்:</strong> தொழில்நுட்ப ஹேக்கத்தான் அக்டோபரிலும், கலாச்சார விழா மார்ச்சிலும் நடைபெறும்.`
    }
};

// Conversational Small-Talk Intents
const conversationalIntents = {
    greeting: {
        keywords: ['hi', 'hello', 'hey', 'namaste', 'namaskaram', 'vanakkam', 'good morning', 'good afternoon', 'good evening'],
        en: "👋 Hello! I am your AI College Assistant. You can ask me anything about fees, scholarships, placements, companies, hostel rules, or admissions. How can I help you today?",
        te: "👋 నమస్కారం! నేను మీ కాలేజ్ AI అసిస్టెంట్‌ని. ఫీజులు, స్కాలర్‌షిప్‌లు, ప్లేస్‌మెంట్స్, హాస్టల్ వివరాలపై నన్ను ఏదైనా అడగవచ్చు.",
        hi: "👋 नमस्ते! मैं आपका कॉलेज AI असिस्टेंट हूँ। आप मुझसे फीस, स्कॉलरशिप, प्लेसमेंट या हॉस्टल के बारे में कुछ भी पूछ सकते हैं।",
        ta: "👋 வணக்கம்! நான் உங்கள் கல்லூரி AI உதவியாளர். கட்டணம், வேலைவாய்ப்பு, விடுதி பற்றி எது வேண்டுமானாலும் கேட்கலாம்."
    },
    identity: {
        keywords: ['who are you', 'your name', 'who created you', 'what can you do', 'what are you'],
        en: "🤖 I am <strong>CampusAI</strong>, an intelligent assistant built to help college students and applicants with fees, scholarships, cutoffs, company requirements, and campus life!",
        te: "🤖 నేను <strong>CampusAI</strong>. కాలేజీ ఫీజులు, కంపెనీ ప్లేస్‌మెంట్స్ మరియు క్యాంపస్ సమాచారాన్ని అందించడానికి రూపొందించబడ్డాను.",
        hi: "🤖 मैं <strong>CampusAI</strong> हूँ, जो छात्रों को कॉलेज फीस, प्लेसमेंट नियम और कैंपस सहायता देने के लिए बना हूँ।",
        ta: "🤖 நான் <strong>CampusAI</strong>, கல்லூரி மற்றும் வேலைவாய்ப்பு தகவல்களை வழங்க வடிவமைக்கப்பட்ட AI உதவியாளர்."
    },
    thanks: {
        keywords: ['thanks', 'thank you', 'dhanyawad', 'shukriya', 'nandri', 'super', 'awesome', 'great'],
        en: "🌟 You're very welcome! Feel free to ask anytime if you have more questions. All the best for your campus journey!",
        te: "🌟 ధన్యవాదాలు! ఇంకేమైనా సందేహాలు ఉంటే ఎప్పుడైనా అడగండి. ఆల్ ది బెస్ట్!",
        hi: "🌟 आपका स्वागत है! यदि आपके कोई और प्रश्न हैं, तो कभी भी पूछें। शुभकामनाएं!",
        ta: "🌟 மிக்க நன்றி! மேலும் சந்தேகங்கள் இருந்தால் எப்போது வேண்டுமானாலும் கேளுங்கள்."
    },
    joke: {
        keywords: ['joke', 'funny', 'bored', 'make me laugh', 'laugh'],
        en: "😄 <em>Why do computer science students wear glasses?</em><br>Because they don't C#!",
        te: "😄 <em>ఎగ్జామ్ ముందు ఇంజనీరింగ్ స్టూడెంట్ సూపర్ పవర్ ఏంటో తెలుసా?</em><br>ఒక్క రాత్రిలో 5 యూనిట్లు చదివేయడం!",
        hi: "😄 <em>इंजीनियरिंग छात्र की सबसे बड़ी सुपरपावर क्या है?</em><br>एक रात में पूरा सिलेबस पढ़कर पास हो जाना!",
        ta: "😄 <em>கம்ப்யூட்டர் சயின்ஸ் மாணவர்களின் மிகப்பெரிய திறமை என்ன தெரியுமா?</em><br>பரீட்சைக்கு முந்தைய இரவில் 5 யூனிட்டுகளையும் படித்து முடிப்பது!"
    },
    canteen: {
        keywords: ['canteen', 'cafeteria', 'coffee shop', 'snacks counter'],
        en: "☕ The campus cafeteria is open from 7:30 AM to 8:30 PM. We serve hot South/North Indian meals, beverages, and snacks at student-friendly prices!",
        te: "☕ క్యాంపస్ క్యాంటీన్ ఉదయం 7:30 నుండి రాత్రి 8:30 వరకు తెరిచి ఉంటుంది.",
        hi: "☕ कॉलेज कैंटीन सुबह 7:30 से रात 8:30 तक खुली रहती है।",
        ta: "☕ கல்லூரி கேண்டீன் காலை 7:30 முதல் இரவு 8:30 வரை திறந்திருக்கும்."
    },
    stress: {
        keywords: ['stress', 'tension', 'tired', 'depressed', 'anxious', 'worried', 'help me study', 'scared of exam'],
        en: "💙 Take a deep breath! Exam stress and placement tension are normal. Break your study into 25-minute sprints, sleep well, and feel free to reach out to the campus counselor. You've got this!",
        te: "💙 ఆందోళన చెందకండి! పరీక్షల ఒత్తిడి సహజం. కొద్దిసేపు విశ్రాంతి తీసుకోండి. మీరు తప్పకుండా విజయం సాధిస్తారు!",
        hi: "💙 चिंता न करें! परीक्षाओं का तनाव होना स्वाभाविक है। योजना बनाकर पढ़ें और पर्याप्त नींद लें।",
        ta: "💙 கவலைப்பட வேண்டாம்! தேர்வு மன அழுத்தத்தை தவிர்க்க திட்டமிட்டு படியுங்கள்."
    }
};

// Conversational Fallbacks
const generalFallbacks = {
    en: (query) => `🤖 I understand you're asking about "<strong>${query}</strong>". Here are direct topics you can explore:<br>
    • Click <strong>Fees & Scholarships</strong> for complete fee details.<br>
    • Click <strong>Placements</strong> for top company cutoffs (TCS, Amazon, etc.).<br>
    • Click <strong>Hostel & Campus</strong> for rooms and mess details.<br>
    • Or reach out to our desk at <strong>admin@college.edu</strong>.`,
    te: (query) => `🤖 మీరు "<strong>${query}</strong>" గురించి అడిగారు. మరింత సమాచారం కోసం కాలేజీ ఆఫీస్‌ను సంప్రదించండి: <strong>+91 040-23456789</strong> లేదా ఫీజులు, ప్లేస్‌మెంట్స్, హాస్టల్ గురించి అడగండి.`,
    hi: (query) => `🤖 आपने "<strong>${query}</strong>" के बारे में पूछा। इसके संबंध में कॉलेज कार्यालय से <strong>+91 040-23456789</strong> पर संपर्क करें या फीस/प्लेसमेंट विकल्प चुनें।`,
    ta: (query) => `🤖 நீங்கள் "<strong>${query}</strong>" பற்றி கேட்கிறீர்கள். இதன் விவரங்களுக்கு கல்லூரி அலுவலகத்தை <strong>+91 040-23456789</strong> என்ற எண்ணில் தொடர்பு கொள்ளலாம்.`
};

// Welcome Card per Language
const welcomeMessages = {
    en: `🎓 <strong>Welcome to CampusAI Assistant!</strong><br>
    I can assist you with <strong>Fees & Scholarships</strong>, <strong>Placements (TCS, Amazon, Infosys, Wipro, Cognizant)</strong>, Hostel living, Admissions, and Exams.<br><br>
    <i>Try asking:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('college fee details and scholarships')">💰 Fees & Scholarships</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and company criteria')">💼 Placements Hub</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Hostel facilities, mess food and timings')">🏠 Hostel & Life</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('College admission process and dates')">🏫 Admissions</button>
    </div>`,
    te: `🎓 <strong>CampusAI అసిస్టెంట్‌కి స్వాగతం!</strong><br>
    నేను మీకు <strong>ఫీజులు & స్కాలర్‌షిప్‌లు</strong>, <strong>ప్లేస్‌మెంట్స్ (Amazon, TCS, Infosys)</strong> మరియు హాస్టల్ వివరాలలో సహాయం చేయగలను.<br><br>
    <i>ప్రశ్నించండి:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('college fee details and scholarships')">💰 ఫీజులు & స్కాలర్‌షిప్‌లు</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and company criteria')">💼 ప్లేస్‌మెంట్స్ వివరాలు</button>
    </div>`,
    hi: `🎓 <strong>CampusAI असिस्टेंट में आपका स्वागत है!</strong><br>
    मैं आपको <strong>कॉलेज फीस, स्कॉलरशिप</strong>, <strong>प्लेसमेंट (Amazon, TCS, Infosys)</strong> और हॉस्टल के बारे में सभी जानकारी दे सकता हूँ।<br><br>
    <i>पूछें:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('college fee details and scholarships')">💰 फीस एवं छात्रवृत्ति</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and company criteria')">💼 प्लेसमेंट कट-ऑफ</button>
    </div>`,
    ta: `🎓 <strong>CampusAI உதவியாளருக்கு வரவேற்கிறோம்!</strong><br>
    <strong>கல்விக் கட்டணம் & உதவித்தொகை</strong>, <strong>வேலைவாய்ப்பு (TCS, Amazon, Infosys)</strong> மற்றும் விடுதி பற்றி நான் உங்களுக்கு உதவ முடியும்.<br><br>
    <i>கேட்கவும்:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('college fee details and scholarships')">💰 கல்விக் கட்டணம்</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and company criteria')">💼 வேலைவாய்ப்பு விவரங்கள்</button>
    </div>`
};

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
    showWelcomeMessage();
});

function showWelcomeMessage() {
    appendMessage(welcomeMessages[currentLang], 'bot');
}

// Send Message Handler
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
    }, 400);
}

// Quick Prompt Handler
function sendQuickPrompt(promptText) {
    document.getElementById('userInput').value = promptText;
    sendMessage();
}

/**
 * HIGH-PRECISION ROUTING LOGIC:
 * 1. Checks Fee keywords with TOP PRIORITY so fee questions never get overridden.
 * 2. Checks Greetings, Identity, Jokes, Thanks.
 * 3. Checks other College Topics (Placements, Hostel, Admissions).
 * 4. Conversational Fallback.
 */
function generateAIResponse(query) {
    const cleanQuery = query.toLowerCase().trim();

    // 1. TOP PRIORITY: FEE & SCHOLARSHIP QUERIES
    const feeWords = ['fee', 'fees', 'tuition', 'scholarship', 'scholarships', 'payment', 'due', 'dues', 'cost', 'money', 'jvd', 'epass'];
    const isFeeQuery = feeWords.some(word => cleanQuery.includes(word));
    if (isFeeQuery) {
        return knowledgeBase.fees[currentLang];
    }

    // 2. Direct Greetings, Identity, Thanks & Jokes
    const quickTalk = ['greeting', 'thanks', 'joke', 'identity'];
    for (const key of quickTalk) {
        const item = conversationalIntents[key];
        if (item && item.keywords.some(kw => cleanQuery.includes(kw))) {
            return item[currentLang];
        }
    }

    // 3. Check College Knowledge Base (Placements, Hostel, Admissions, etc.)
    for (const category in knowledgeBase) {
        const item = knowledgeBase[category];
        const matchFound = item.keywords.some(kw => cleanQuery.includes(kw));
        if (matchFound) {
            return item[currentLang];
        }
    }

    // 4. Secondary Chit-Chat (Canteen, Stress)
    for (const intentKey in conversationalIntents) {
        const item = conversationalIntents[intentKey];
        if (item.keywords.some(kw => cleanQuery.includes(kw))) {
            return item[currentLang];
        }
    }

    // 5. Fallback for open-ended queries
    return generalFallbacks[currentLang](escapeHTML(query));
}

// HTML Sanitizer
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// Append Message to UI
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

// Language Switcher
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

// Reset Conversation
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
            en: `📄 <strong>Document Analyzed (${file.name}):</strong><br>Contents extracted. You can now ask questions about the deadlines, fee amounts, or rules mentioned inside.`,
            te: `📄 <strong>పత్రం విశ్లేషించబడింది (${file.name}):</strong><br>వివరాలు సేకరించబడ్డాయి. మీరు ఈ పత్రం గురించి ప్రశ్నలు అడగవచ్చు.`,
            hi: `📄 <strong>दस्तावेज़ का विश्लेषण किया गया (${file.name}):</strong><br>सामग्री प्राप्त कर ली गई है। अब आप इससे संबंधित प्रश्न पूछ सकते हैं।`,
            ta: `📄 <strong>ஆவணம் பகுப்பாய்வு செய்யப்பட்டது (${file.name}):</strong><br>இந்த ஆவணம் தொடர்பாக நீங்கள் கேள்விகளைக் கேட்கலாம்.`
        };
        appendMessage(responses[currentLang], 'bot');
    }, 1200);
}

// Official Desk Handoff
function triggerHandoff() {
    appendMessage("Connecting to administrative office desk...", 'user');
    showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator();
        const contactInfo = `👨‍💼 <strong>College Official Contact Directory:</strong><br>
        • <strong>Accounts & Fee Counter:</strong> +91 040-23456780 | accounts@college.edu<br>
        • <strong>Training & Placements:</strong> +91 040-23456781 | placements@college.edu<br>
        • <strong>Admissions Cell:</strong> +91 040-23456782 | admissions@college.edu<br>
        • <strong>Administrative Timings:</strong> Mon - Sat: 9:30 AM – 4:30 PM`;
        appendMessage(contactInfo, 'bot');
    }, 600);
}

// Voice Recognition Support
function toggleSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Speech recognition is not supported in this browser. Please use Chrome or Edge.');
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

// Enter Key Listener
document.getElementById('userInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Mobile Sidebar Toggle
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('chatSidebar').classList.toggle('open');
});
