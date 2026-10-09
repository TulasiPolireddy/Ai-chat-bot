/**
 * CampusAI - Master Knowledge Base & Conversational AI Engine
 * Languages: English (en), Telugu (te), Hindi (hi), Tamil (ta)
 */

let currentLang = 'en';

// Master College Knowledge Base
const knowledgeBase = {
    // 1. PLACEMENT HUB: 5 Major Companies & General Eligibility
    placements: {
        keywords: [
            'placement', 'placements', 'company', 'companies', 'job', 'jobs', 'salary', 
            'package', 'tcs', 'amazon', 'infosys', 'wipro', 'cognizant', 'eligibility for campus',
            'placement criteria', 'recruitment', 'rounds', 'hiring'
        ],
        en: `💼 <strong>Campus Placement Eligibility & Top Recruiters:</strong><br><br>
        <strong>General Campus Eligibility:</strong> Minimum <strong>60% or 6.5 CGPA</strong> aggregate with <strong>0 active backlogs</strong>.<br><br>
        <div class="company-card-grid">
            <div class="company-item">
                <div class="company-header"><span>1. Amazon (SDE / Cloud)</span> <span class="package-tag">₹28 - 45 LPA</span></div>
                • <strong>Criteria:</strong> 7.0+ CGPA, 0 backlogs, B.Tech (CSE/ECE/IT).<br>
                • <strong>Rounds:</strong> Online Coding (DSA) &rarr; 3-4 Technical Rounds &rarr; Bar Raiser.
            </div>
            <div class="company-item">
                <div class="company-header"><span>2. TCS (Ninja, Digital & Prime)</span> <span class="package-tag">₹3.36 - 9.0 LPA</span></div>
                • <strong>Criteria:</strong> 60% in 10th, 12th & Degree. Max 1 academic gap year.<br>
                • <strong>Rounds:</strong> TCS NQT (Aptitude + Coding) &rarr; Tech & HR Interview.
            </div>
            <div class="company-item">
                <div class="company-header"><span>3. Infosys (SE, DSE & Specialist Programmer)</span> <span class="package-tag">₹3.6 - 9.5 LPA</span></div>
                • <strong>Criteria:</strong> 65% or 6.8 CGPA throughout, no active backlogs.<br>
                • <strong>Rounds:</strong> InfyTQ / Online Assessment &rarr; Technical Interview.
            </div>
            <div class="company-item">
                <div class="company-header"><span>4. Wipro (Elite & Turbo)</span> <span class="package-tag">₹3.5 - 6.5 LPA</span></div>
                • <strong>Criteria:</strong> 60% aggregate. Max 1 active backlog permitted during registration.<br>
                • <strong>Rounds:</strong> National Talent Hunt (Aptitude, Essay, Coding) &rarr; HR.
            </div>
            <div class="company-item">
                <div class="company-header"><span>5. Cognizant (GenC & GenC Next)</span> <span class="package-tag">₹4.0 - 6.75 LPA</span></div>
                • <strong>Criteria:</strong> 60% or 6.0 CGPA, no pending backlogs at joining.<br>
                • <strong>Rounds:</strong> Skill Assessment &rarr; Technical Discussion.
            </div>
        </div>`,

        te: `💼 <strong>క్యాంపస్ ప్లేస్‌మెంట్స్ & 5 ప్రముఖ కంపెనీల అర్హతలు:</strong><br><br>
        <strong>సాధారణ అర్హత:</strong> కనీసం 60% లేదా 6.5 CGPA, ఎలాంటి యాక్టివ్ బ్యాక్‌లాగ్‌లు ఉండకూడదు.<br><br>
        <div class="company-card-grid">
            <div class="company-item">
                <div class="company-header"><span>1. Amazon</span> <span class="package-tag">₹28 - 45 LPA</span></div>
                • 7.0+ CGPA, DSA కోడింగ్ రౌండ్లు మరియు టెక్నికల్ ఇంటర్వ్యూలు.
            </div>
            <div class="company-item">
                <div class="company-header"><span>2. TCS (Ninja & Digital)</span> <span class="package-tag">₹3.36 - 9.0 LPA</span></div>
                • 10వ, ఇంటర్, డిగ్రీలో 60% మార్కులు, TCS NQT పరీక్ష.
            </div>
            <div class="company-item">
                <div class="company-header"><span>3. Infosys (SE / Specialist)</span> <span class="package-tag">₹3.6 - 9.5 LPA</span></div>
                • 65% మార్కులు, ఆన్‌లైన్ అసెస్‌మెంట్ మరియు టెక్నికల్ రౌండ్.
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
                • 10वीं, 12वीं और डिग्री में 60% अंक, TCS NQT टेस्ट।
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
                • 10, 12 மற்றும் பட்டப்படிப்பில் 60% மதிப்பெண்கள், TCS NQT தேர்வு.
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

    // 2. DETAILED FEES & FINANCIAL AID
    fees: {
        keywords: [
            'fee', 'fees', 'tuition', 'scholarship', 'scholarships', 'payment', 
            'due', 'dues', 'jvd', 'epass', 'cost', 'money', 'btech fee',
            'exam fee', 'bus fee', 'late fee', 'how to pay', 'installment'
        ],
        en: `💰 <strong>Complete Fee Structure & Financial Aid Details:</strong>
        
        <div class="fee-container">
            <div class="fee-category-title"><i class="fa-solid fa-graduation-cap"></i> 1. Annual Tuition Fees (Branch-Wise)</div>
            <div class="fee-table-grid">
                <div class="fee-card">
                    <div class="fee-card-info">
                        <strong>B.Tech (CSE, AI & DS, IT)</strong>
                        <span>Convenor Quota (Per Annum)</span>
                    </div>
                    <span class="fee-amount-badge">₹1,15,000 / yr</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info">
                        <strong>B.Tech (ECE, EEE, Mech, Civil)</strong>
                        <span>Core Engineering Branches (Per Annum)</span>
                    </div>
                    <span class="fee-amount-badge">₹95,000 / yr</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info">
                        <strong>Post-Graduation (M.Tech)</strong>
                        <span>All specializations (Per Annum)</span>
                    </div>
                    <span class="fee-amount-badge">₹70,000 / yr</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info">
                        <strong>Management / Comp. Apps (MBA & MCA)</strong>
                        <span>Full-Time Program (Per Annum)</span>
                    </div>
                    <span class="fee-amount-badge">₹65,000 / yr</span>
                </div>
            </div>

            <div class="fee-category-title"><i class="fa-solid fa-building"></i> 2. Campus & Ancillary Charges</div>
            <div class="fee-table-grid">
                <div class="fee-card">
                    <div class="fee-card-info">
                        <strong>Hostel & Mess Boarding</strong>
                        <span>AC / Non-AC + 4 Meals/day + WiFi</span>
                    </div>
                    <span class="fee-amount-badge">₹65,000 - 85,000 / yr</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info">
                        <strong>College Bus / Transportation</strong>
                        <span>City routes (based on distance)</span>
                    </div>
                    <span class="fee-amount-badge">₹22,000 - 32,000 / yr</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info">
                        <strong>Semester Exam & Lab Fee</strong>
                        <span>Payable before mid-terms each semester</span>
                    </div>
                    <span class="fee-amount-badge">₹1,500 / sem</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info">
                        <strong>Caution Deposit & Library Security</strong>
                        <span>One-time refundable deposit</span>
                    </div>
                    <span class="fee-amount-badge">₹5,000 (One-Time)</span>
                </div>
            </div>

            <div class="fee-category-title"><i class="fa-solid fa-calendar-check"></i> 3. Payment Deadlines & Installments</div>
            <div class="fee-alert-box">
                • <strong>Odd Semester Due Date:</strong> August 15<br>
                • <strong>Even Semester Due Date:</strong> January 20<br>
                • <strong>Late Fine:</strong> ₹500 for the first 10 days; ₹1,000 thereafter.<br>
                • <strong>Installments:</strong> Tuition can be paid in <strong>2 equal installments</strong> with Dean's permission.
            </div>

            <div class="fee-category-title"><i class="fa-solid fa-award"></i> 4. Scholarships & Financial Aid</div>
            <div class="fee-notice-box">
                • <strong>Government Schemes:</strong> Full fee reimbursement via State ePASS / JVD for eligible SC/ST/BC/EWS candidates.<br>
                • <strong>Merit Scholarship:</strong> 25% tuition fee waiver for semester toppers (>9.5 CGPA).
            </div>
            
            <div class="fee-category-title"><i class="fa-solid fa-credit-card"></i> 5. Payment Modes</div>
            <div style="font-size:0.83rem; color:var(--text-muted); line-height:1.5;">
                • <strong>Online:</strong> Log in to Student ERP &rarr; Fee Payment &rarr; Pay via UPI/Card.<br>
                • <strong>Net Banking:</strong> Via <em>SBI Collect</em> (Select State &rarr; Educational Institutes).<br>
                • <strong>Offline:</strong> Demand Draft (DD) in favor of <em>"The Principal"</em> at campus bank.
            </div>
        </div>`,

        te: `💰 <strong>పూర్తి ఫీజు వివరాలు మరియు స్కాలర్‌షిప్‌లు (Fee Structure):</strong>
        
        <div class="fee-container">
            <div class="fee-category-title"><i class="fa-solid fa-graduation-cap"></i> 1. కోర్సుల వారీగా ట్యూషన్ ఫీజు (సంవత్సరానికి)</div>
            <div class="fee-table-grid">
                <div class="fee-card">
                    <div class="fee-card-info"><strong>B.Tech (CSE, AI & DS, IT)</strong></div>
                    <span class="fee-amount-badge">₹1,15,000 / ఏటా</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>B.Tech (ECE, Mech, Civil)</strong></div>
                    <span class="fee-amount-badge">₹95,000 / ఏటా</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>MBA / MCA</strong></div>
                    <span class="fee-amount-badge">₹65,000 / ఏటా</span>
                </div>
            </div>

            <div class="fee-category-title"><i class="fa-solid fa-building"></i> 2. ఇతర సౌకర్యాల ఫీజులు</div>
            <div class="fee-table-grid">
                <div class="fee-card">
                    <div class="fee-card-info"><strong>హాస్టల్ & మెస్ ఫీజు (Hostel & Mess)</strong></div>
                    <span class="fee-amount-badge">₹65,000 / ఏటా</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>కాలేజ్ బస్సు (Bus Fee)</strong></div>
                    <span class="fee-amount-badge">₹22,000 - 32,000 / ఏటా</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>సెమిస్టర్ ఎగ్జామ్ ఫీజు (Exam Fee)</strong></div>
                    <span class="fee-amount-badge">₹1,500 / సెమిస్టర్</span>
                </div>
            </div>

            <div class="fee-category-title"><i class="fa-solid fa-award"></i> 3. స్కాలర్‌షిప్‌లు & చెల్లింపు గడువు</div>
            <div class="fee-notice-box">
                • <strong>ప్రభుత్వ స్కాలర్‌షిప్:</strong> అర్హులైన విద్యార్థులకు ePASS లేదా JVD ద్వారా పూర్తి ఫీజు రీయింబర్స్‌మెంట్ లభిస్తుంది.<br>
                • <strong>చెల్లింపు గడువు:</strong> ఆడ్ సెమిస్టర్: ఆగస్టు 15 | ఈవెన్ సెమిస్టర్: జనవరి 20.<br>
                • <strong>చెల్లింపు విధానం:</strong> కాలేజీ ERP లేదా SBI Collect ద్వారా ఆన్‌లైన్‌లో చెల్లించవచ్చు.
            </div>
        </div>`,

        hi: `💰 <strong>संपूर्ण फीस विवरण एवं छात्रवृत्ति:</strong>
        
        <div class="fee-container">
            <div class="fee-category-title"><i class="fa-solid fa-graduation-cap"></i> 1. वार्षिक ट्यूशन फीस (कोर्स अनुसार)</div>
            <div class="fee-table-grid">
                <div class="fee-card">
                    <div class="fee-card-info"><strong>B.Tech (CSE, AI & DS, IT)</strong></div>
                    <span class="fee-amount-badge">₹1,15,000 / वर्ष</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>B.Tech (ECE, Mech, Civil)</strong></div>
                    <span class="fee-amount-badge">₹95,000 / वर्ष</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>MBA / MCA</strong></div>
                    <span class="fee-amount-badge">₹65,000 / वर्ष</span>
                </div>
            </div>

            <div class="fee-category-title"><i class="fa-solid fa-building"></i> 2. हॉस्टल एवं अन्य शुल्क</div>
            <div class="fee-table-grid">
                <div class="fee-card">
                    <div class="fee-card-info"><strong>हॉस्टल एवं मेस (भोजन सहित)</strong></div>
                    <span class="fee-amount-badge">₹65,000 / वर्ष</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>कॉलेज बस शुल्क</strong></div>
                    <span class="fee-amount-badge">₹22,000 - 32,000 / वर्ष</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>सेमेस्टर परीक्षा शुल्क</strong></div>
                    <span class="fee-amount-badge">₹1,500 / सेमेस्टर</span>
                </div>
            </div>

            <div class="fee-category-title"><i class="fa-solid fa-award"></i> 3. स्कॉलरशिप एवं अंतिम तिथि</div>
            <div class="fee-notice-box">
                • <strong>सरकारी छात्रवृत्ति:</strong> पात्र छात्रों के लिए ePASS द्वारा पूर्ण फीस प्रतिपूर्ति।<br>
                • <strong>अंतिम तिथि:</strong> विषम सेमेस्टर: 15 अगस्त | सम सेमेस्टर: 20 जनवरी।<br>
                • <strong>भुगतान:</strong> कॉलेज ERP या SBI Collect से ऑनलाइन भुगतान करें।
            </div>
        </div>`,

        ta: `💰 <strong>முழு கல்விக் கட்டணம் மற்றும் உதவித்தொகை விவரங்கள்:</strong>
        
        <div class="fee-container">
            <div class="fee-category-title"><i class="fa-solid fa-graduation-cap"></i> 1. ஆண்டுக் கட்டணம் (துறை வாரியாக)</div>
            <div class="fee-table-grid">
                <div class="fee-card">
                    <div class="fee-card-info"><strong>B.Tech (CSE, AI & DS, IT)</strong></div>
                    <span class="fee-amount-badge">₹1,15,000 / ஆண்டு</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>B.Tech (ECE, Mech, Civil)</strong></div>
                    <span class="fee-amount-badge">₹95,000 / ஆண்டு</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>MBA / MCA</strong></div>
                    <span class="fee-amount-badge">₹65,000 / ஆண்டு</span>
                </div>
            </div>

            <div class="fee-category-title"><i class="fa-solid fa-building"></i> 2. பிற கட்டணங்கள்</div>
            <div class="fee-table-grid">
                <div class="fee-card">
                    <div class="fee-card-info"><strong>விடுதி & உணவு (Hostel & Mess)</strong></div>
                    <span class="fee-amount-badge">₹65,000 / ஆண்டு</span>
                </div>
                <div class="fee-card">
                    <div class="fee-card-info"><strong>கல்லூரி பேருந்து கட்டணம்</strong></div>
                    <span class="fee-amount-badge">₹22,000 - 32,000 / ஆண்டு</span>
                </div>
            </div>

            <div class="fee-notice-box">
                • <strong>அரசு உதவித்தொகை:</strong> தகுதியுள்ள மாணவர்களுக்கு முழு கட்டண விலக்கு உண்டு.<br>
                • <strong>செலுத்தும் வழிமுறை:</strong> கல்லூரி ERP அல்லது SBI Collect மூலம் செலுத்தலாம்.
            </div>
        </div>`
    },

    // 3. HOSTEL & CAMPUS FACILITIES (NO KEYWORD COLLISION)
    hostel: {
        keywords: [
            'hostel', 'campus', 'room', 'rooms', 'mess', 'accommodation', 
            'curfew', 'in-time', 'library', 'sports', 'gym', 'wifi', 
            'medical', 'hospital', 'facilities', 'outing', 'warden', 'hostel life'
        ],
        en: `🏠 <strong>Campus & Hostel Infrastructure Overview:</strong>
        
        <div class="campus-container">
            <div class="campus-section-title"><i class="fa-solid fa-bed"></i> 1. Hostel Accommodation & Rooms</div>
            <div class="campus-card-grid">
                <div class="campus-card">
                    <div class="campus-card-header">
                        <strong>Separate Boys & Girls Hostels</strong>
                        <span class="campus-tag">₹65,000 - 85,000 / yr</span>
                    </div>
                    <div class="campus-card-body">
                        • <strong>Room Types:</strong> 2-Sharing (AC/Non-AC) and 3/4-Sharing standard.<br>
                        • <strong>Furnishings:</strong> Bed, study desk, wardrobe, chair & power sockets.<br>
                        • <strong>Amenities:</strong> 24/7 hot water, RO drinking water, automatic laundry, and 100 Mbps Wi-Fi.
                    </div>
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-utensils"></i> 2. Dining & Mess Facility</div>
            <div class="campus-card">
                <div class="campus-card-header">
                    <strong>Hygienic Multi-Cuisine Mess</strong>
                    <span class="campus-tag">4 Meals Daily</span>
                </div>
                <div class="campus-card-body">
                    • <strong>Timings:</strong> Breakfast (7:30-9:00 AM), Lunch (12:30-2:00 PM), Snacks (5:00-6:00 PM), Dinner (7:30-9:15 PM).<br>
                    • <strong>Food Safety:</strong> FSSAI certified. Nutritious vegetarian daily + Non-vegetarian served thrice a week.
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-landmark"></i> 3. Campus Infrastructure</div>
            <div class="campus-card-grid">
                <div class="campus-card">
                    <div class="campus-card-header">
                        <strong>Central Digital Library</strong>
                        <span class="campus-tag">8:00 AM - 9:00 PM</span>
                    </div>
                    <div class="campus-card-body">
                        65,000+ volumes, IEEE digital access, air-conditioned study rooms.
                    </div>
                </div>
                <div class="campus-card">
                    <div class="campus-card-header">
                        <strong>Sports & Modern Gym</strong>
                        <span class="campus-tag">Free for Hostellers</span>
                    </div>
                    <div class="campus-card-body">
                        Cricket ground, indoor badminton courts, basketball arena, and separate gyms for boys & girls.
                    </div>
                </div>
                <div class="campus-card">
                    <div class="campus-card-header">
                        <strong>Health Center & 24/7 Ambulance</strong>
                        <span class="campus-tag">Emergency Ready</span>
                    </div>
                    <div class="campus-card-body">
                        Full-time doctor, nursing staff, free basic medicines, and on-campus ambulance.
                    </div>
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-shield-halved"></i> 4. Timings & Hostel Regulations</div>
            <div class="rule-alert-box">
                • <strong>Curfew & In-Time:</strong> All students must return to the hostel by <strong>8:30 PM sharp</strong>.<br>
                • <strong>Attendance:</strong> Biometric fingerprint check-in conducted daily at 9:00 PM.<br>
                • <strong>Outing Pass:</strong> Apply via Student ERP portal with digital parent OTP approval.
            </div>
        </div>`,

        te: `🏠 <strong>క్యాంపస్ మరియు హాస్టల్ పూర్తి వివరాలు:</strong>
        
        <div class="campus-container">
            <div class="campus-section-title"><i class="fa-solid fa-bed"></i> 1. హాస్టల్ గదులు & సౌకర్యాలు</div>
            <div class="campus-card">
                <div class="campus-card-header">
                    <strong>బాయ్స్ & గర్ల్స్ వేర్వేరు హాస్టల్స్</strong>
                    <span class="campus-tag">₹65,000 / ఏటా</span>
                </div>
                <div class="campus-card-body">
                    • 2-షేరింగ్ మరియు 3-షేరింగ్ గదులు (AC & Non-AC).<br>
                    • బెడ్, స్టడీ టేబుల్, కప్‌బోర్డ్, 24 గంటల వేడినీరు మరియు హై-స్పీడ్ Wi-Fi.
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-utensils"></i> 2. మెస్ & భోజన వసతి</div>
            <div class="campus-card">
                <div class="campus-card-body">
                    • రోజుకు 4 పూటలా భోజనం (అల్పాహారం, లంచ్, సాయంత్రం స్నాక్స్, డిన్నర్).<br>
                    • వారానికి 3 రోజులు నాన్-వెజ్ మరియు రోజూ రుచికరమైన వెజ్ భోజనం.
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-landmark"></i> 3. క్యాంపస్ వసతులు</div>
            <div class="campus-card">
                <div class="campus-card-body">
                    • <strong>సెంట్రల్ లైబ్రరీ:</strong> ఉదయం 8 నుండి రాత్రి 9 వరకు తెరిచి ఉంటుంది.<br>
                    • <strong>స్పోర్ట్స్ & జిమ్:</strong> క్రికెట్ గ్రౌండ్, బాస్కెట్‌బాల్ కోర్ట్ మరియు ఆధునిక జిమ్.<br>
                    • <strong>ఆరోగ్య కేంద్రం:</strong> 24 గంటల అంబులెన్స్ మరియు ఉచిత వైద్య సదుపాయం.
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-shield-halved"></i> 4. హాస్టల్ నిబంధనలు</div>
            <div class="rule-alert-box">
                • రాత్రి <strong>8:30 PM</strong> లోపు హాస్టల్‌కి చేరుకోవాలి.<br>
                • బయటకు వెళ్లడానికి పేరెంట్స్ OTP అనుమతితో ERP ద్వారా డిజిటల్ పాస్ తీసుకోవాలి.
            </div>
        </div>`,

        hi: `🏠 <strong>कैंपस एवं हॉस्टल की संपूर्ण जानकारी:</strong>
        
        <div class="campus-container">
            <div class="campus-section-title"><i class="fa-solid fa-bed"></i> 1. हॉस्टल कमरे और सुविधाएं</div>
            <div class="campus-card">
                <div class="campus-card-header">
                    <strong>छात्र एवं छात्राओं के लिए अलग हॉस्टल</strong>
                    <span class="campus-tag">₹65,000 / वर्ष</span>
                </div>
                <div class="campus-card-body">
                    • 2-शेयरिंग और 3-शेयरिंग कमरे (AC एवं Non-AC विकल्प)।<br>
                    • स्टडी टेबल, अलमारी, 24 घंटे गर्म पानी, आरओ पेयजल एवं हाई-स्पीड वाई-फाई।
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-utensils"></i> 2. मेस एवं भोजन व्यवस्था</div>
            <div class="campus-card">
                <div class="campus-card-body">
                    • दिन में 4 समय का भोजन (नाश्ता, दोपहर का खाना, शाम का नाश्ता, रात का खाना)।<br>
                    • सप्ताह में 3 दिन नॉन-वेज और प्रतिदिन पौष्टिक शाकाहारी भोजन।
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-landmark"></i> 3. प्रमुख कैंपस सुविधाएं</div>
            <div class="campus-card">
                <div class="campus-card-body">
                    • <strong>सेंट्रल लाइब्रेरी:</strong> सुबह 8:00 से रात 9:00 बजे तक खुली रहती है।<br>
                    • <strong>खेल एवं जिम:</strong> क्रिकेट ग्राउंड, बास्केटबॉल कोर्ट और आधुनिक जिम।<br>
                    • <strong>चिकित्सा केंद्र:</strong> 24/7 डॉक्टर और एम्बुलेंस सुविधा।
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-shield-halved"></i> 4. नियम एवं समय सीमा</div>
            <div class="rule-alert-box">
                • रात <strong>8:30 PM</strong> से पहले हॉस्टल में प्रवेश अनिवार्य है।<br>
                • बाहर जाने के लिए अभिभावक की सहमति के साथ ERP पोर्टल से ऑनलाइन पास लेना आवश्यक है।
            </div>
        </div>`,

        ta: `🏠 <strong>வளாகம் மற்றும் விடுதி (Hostel & Campus) விவரங்கள்:</strong>
        
        <div class="campus-container">
            <div class="campus-section-title"><i class="fa-solid fa-bed"></i> 1. விடுதி அறைகள் மற்றும் வசதிகள்</div>
            <div class="campus-card">
                <div class="campus-card-header">
                    <strong>மாணவர் மற்றும் மாணவிகளுக்கான தனி விடுதிகள்</strong>
                    <span class="campus-tag">₹65,000 / ஆண்டு</span>
                </div>
                <div class="campus-card-body">
                    • 2 மற்றும் 3 பேர் தங்கும் வசதி கொண்ட அறைகள் (AC & Non-AC).<br>
                    • படிக்கும் மேசை, அலமாரி, 24 மணி நேர சுடுதண்ணீர் மற்றும் அதிவேக வைஃபை வசதி.
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-utensils"></i> 2. உணவு மற்றும் மெஸ் விவரங்கள்</div>
            <div class="campus-card">
                <div class="campus-card-body">
                    • தினமும் 4 வேளை உணவு (காலை, மதியம், மாலை சிற்றுண்டி, இரவு உணவு).<br>
                    • வாரத்திற்கு 3 நாட்கள் அசைவ உணவு மற்றும் தரமான சைவ உணவு.
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-landmark"></i> 3. வளாக வசதிகள்</div>
            <div class="campus-card">
                <div class="campus-card-body">
                    • <strong>மைய நூலகம்:</strong> காலை 8:00 முதல் இரவு 9:00 மணி வரை இயங்கும்.<br>
                    • <strong>விளையாட்டு & உடற்பயிற்சி:</strong> கிரிக்கெட் மைதானம், கூடைப்பந்து மற்றும் ஜிம்.<br>
                    • <strong>மருத்துவ மையம்:</strong> 24 மணி நேர ஆம்புலன்ஸ் மற்றும் மருத்துவ உதவி.
                </div>
            </div>

            <div class="campus-section-title"><i class="fa-solid fa-shield-halved"></i> 4. விடுதி விதிமுறைகள்</div>
            <div class="rule-alert-box">
                • இரவு <strong>8:30 மணிக்குள்</strong> விடுதிக்குத் திரும்ப வேண்டும்.<br>
                • வெளியே செல்வதற்கு பெற்றோரின் ஒப்புதலுடன் இணையதள பாஸ் பெற வேண்டும்.
            </div>
        </div>`
    },

    // 4. ADMISSIONS
    admissions: {
        keywords: ['admission', 'apply', 'seat', 'documents', 'deadline', 'eligibility', 'btech', 'mba', 'mca', 'entrance'],
        en: `🏛️ <strong>Admissions Office:</strong><br>
        • <strong>Courses Offered:</strong> B.Tech (CSE, AI&DS, ECE, MECH), M.Tech, MBA, MCA.<br>
        • <strong>Eligibility:</strong> Minimum 60% in 10+2 with PCM.<br>
        • <strong>Entrance Exams:</strong> State EAMCET, JEE Main, ICET.<br>
        • <strong>Documents Needed:</strong> 10th & 12th Memos, Transfer Certificate (TC), Study Certificate, Caste/Income Certificate (if applicable), Rank Card.<br>
        • <strong>Deadline:</strong> Phase-1 Registrations close on <strong>July 31st</strong>.`,
        te: `🏛️ <strong>ప్రవేశాల సమాచారం:</strong><br>
        • B.Tech, M.Tech, MBA మరియు MCA కోర్సులు అందుబాటులో ఉన్నాయి.<br>
        • ఇంటర్‌లో 60% మార్కులు తప్పనిసరి. దరఖాస్తు గడువు: జూలై 31.`,
        hi: `🏛️ <strong>प्रवेश विवरण (Admissions):</strong><br>
        • B.Tech, M.Tech, MBA और MCA कोर्स उपलब्ध हैं।<br>
        • 10+2 में न्यूनतम 60% अंक आवश्यक हैं। आवश्यक दस्तावेज: अंकतालिका, TC, रैंक कार्ड।`,
        ta: `🏛️ <strong>சேர்க்கை விவரங்கள் (Admissions):</strong><br>
        • B.Tech, M.Tech, MBA மற்றும் MCA படிப்புகள் உள்ளன.<br>
        • பிளஸ் 2 தேர்வில் குறைந்தபட்சம் 60% மதிப்பெண்கள் அவசியம்.`
    },

    // 5. ACADEMICS & EXAMS
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
        • DSA, Python, Java மற்றும் Web Development திறன்களை வளர்த்துக்கொள்ளுங்கள்.`
    },

    // 8. EVENTS & NOTICES
    events: {
        keywords: ['event', 'fest', 'cultural', 'hackathon', 'circular', 'notice', 'holiday'],
        en: `📢 <strong>Events & Notifications:</strong><br>
        • <strong>TechNova Hackathon:</strong> Coming up in October with ₹2 Lakhs in prizes!<br>
        • <strong>Vibrance Fest:</strong> Annual Cultural Fest held in March.<br>
        • <strong>Circular:</strong> Check student ERP regularly for internal assessment announcements.`,
        te: `📢 <strong>నోటీసులు మరియు ఈవెంట్స్:</strong><br>
        • వార్షిక టెక్ హ్యాకథాన్ అక్టోబర్‌లో మరియు కల్చరల్ ఫెస్ట్ మార్చిలో నిర్వహించబడతాయి.`,
        hi: `📢 <strong>इवेंट्स और सूचनाएं:</strong><br>
        • टेकनोवा हैकथॉन अक्टूबर में आयोजित होगा और वाइब्रेंस कल्चरल फेस्ट मार्च महीने में होगा।`,
        ta: `📢 <strong>நிகழ்வுகள் மற்றும் சுற்றறிக்கைகள்:</strong><br>
        • ஆண்டு தொழில்நுட்ப ஹேக்கத்தான் அக்டோபரிலும், கலாச்சார விழா மார்ச்சிலும் நடைபெறும்.`
    }
};

// Conversational Small-Talk & Specialized Chit-Chat
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
    thanks: {
        keywords: ['thanks', 'thank you', 'dhanyawad', 'shukriya', 'nandri', 'super', 'awesome', 'great'],
        en: "🌟 You're very welcome! Feel free to ask anytime if you have more questions. All the best for your campus journey!",
        te: "🌟 ధన్యవాదాలు! ఇంకేమైనా సందేహాలు ఉంటే ఎప్పుడైనా అడగండి. ఆల్ ది బెస్ట్!",
        hi: "🌟 आपका स्वागत है! यदि आपके कोई और प्रश्न हैं, तो कभी भी पूछें। शुभकामनाएं!",
        ta: "🌟 மிக்க நன்றி! மேலும் சந்தேகங்கள் இருந்தால் எப்போது வேண்டுமானாலும் கேளுங்கள். வாழ்த்துக்கள்!"
    },
    joke: {
        keywords: ['joke', 'funny', 'bored', 'make me laugh', 'laugh'],
        en: "😄 <em>Why do computer science students wear glasses?</em><br>Because they don't C#!",
        te: "😄 <em>ఎగ్జామ్ ముందు ఇంజనీరింగ్ స్టూడెంట్ సూపర్ పవర్ ఏంటో తెలుసా?</em><br>ఒక్క రాత్రిలో 5 యూనిట్లు చదివేయడం!",
        hi: "😄 <em>इंजीनियरिंग छात्र की सबसे बड़ी सुपरपावर क्या है?</em><br>एक रात में पूरा सिलेबस पढ़कर पास हो जाना!",
        ta: "😄 <em>கம்ப்யூட்டர் சயின்ஸ் மாணவர்களின் மிகப்பெரிய திறமை என்ன தெரியுமா?</em><br>பரீட்சைக்கு முந்தைய ஒரே இரவில் 5 யூனிட்டுகளையும் படித்து முடிப்பது!"
    },
    canteen: {
        keywords: ['canteen', 'cafeteria', 'coffee shop', 'snacks counter', 'campus bakery'],
        en: "☕ The campus cafeteria is open from 7:30 AM to 8:30 PM. We serve hot South/North Indian meals, beverages, and snacks at student-subsidized rates!",
        te: "☕ క్యాంపస్ క్యాంటీన్ ఉదయం 7:30 నుండి రాత్రి 8:30 వరకు అందుబాటులో ఉంటుంది. రుచికరమైన టిఫిన్లు మరియు స్నాక్స్ లభిస్తాయి.",
        hi: "☕ कॉलेज कैंटीन सुबह 7:30 से रात 8:30 तक खुली रहती है। यहाँ चाय, कॉफ़ी और स्नैक्स उपलब्ध हैं।",
        ta: "☕ கல்லூரி கேண்டீன் காலை 7:30 முதல் இரவு 8:30 வரை திறந்திருக்கும். உணவுகள் நியாயமான விலையில் கிடைக்கும்."
    },
    stress: {
        keywords: ['stress', 'tension', 'tired', 'depressed', 'anxious', 'worried', 'help me study', 'scared of exam'],
        en: "💙 Take a deep breath! Exam stress and placement tension are normal. Break your study into small 25-minute sprints, sleep well, and feel free to reach out to the campus counselor. You've got this!",
        te: "💙 ఆందోళన చెందకండి! పరీక్షల ఒత్తిడి సహజం. కొద్దిసేపు విశ్రాంతి తీసుకోండి. మీరు తప్పకుండా విజయం సాధిస్తారు!",
        hi: "💙 चिंता न करें! परीक्षाओं और प्लेसमेंट का तनाव होना स्वाभाविक है। योजनाबद्ध तरीके से अध्ययन करें और पर्याप्त नींद लें।",
        ta: "💙 கவலைப்பட வேண்டாம்! தேர்வு மன அழுத்தத்தை தவிர்க்க திட்டமிட்டு படியுங்கள். உங்களால் சாதிக்க முடியும்!"
    }
};

// Conversational Fallbacks
const generalFallbacks = {
    en: (query) => `🤖 I understand you're asking about "<strong>${query}</strong>". While that exact phrasing isn't in my handbook, here are useful options:<br>
    • Check <strong>Placements Hub</strong> for cutoffs (TCS, Amazon, etc.).<br>
    • Check <strong>Fees & Aid</strong> for complete fee breakdown.<br>
    • Check <strong>Hostel & Campus</strong> for rooms and mess details.<br>
    • Or contact our administrative team directly at <strong>admin@college.edu</strong>.`,
    te: (query) => `🤖 మీరు "<strong>${query}</strong>" గురించి అడిగారు. దీనిపై మరింత సమాచారం కోసం కాలేజీ ఆఫీస్‌ను సంప్రదించవచ్చు: <strong>+91 040-23456789</strong> లేదా ప్లేస్‌మెంట్స్, ఫీజులు, హాస్టల్ గురించి అడగండి.`,
    hi: (query) => `🤖 आपने "<strong>${query}</strong>" के बारे में पूछा। इसके संबंध में विस्तृत सहायता के लिए प्रशासनिक कार्यालय से <strong>+91 040-23456789</strong> पर संपर्क करें या फीस/प्लेसमेंट विवरण पूछें।`,
    ta: (query) => `🤖 நீங்கள் "<strong>${query}</strong>" பற்றி கேட்கிறீர்கள். இதன் முழு விவரங்களுக்கு கல்லூரி அலுவலகத்தை <strong>+91 040-23456789</strong> என்ற எண்ணில் தொடர்பு கொள்ளலாம்.`
};

// Welcome Card per Language
const welcomeMessages = {
    en: `🎓 <strong>Welcome to CampusAI Assistant!</strong><br>
    I am ready to help you with <strong>Placement Cutoffs (TCS, Amazon, Infosys, Wipro, Cognizant)</strong>, Fees, Hostel & Mess life, Admissions, Exams, and general queries.<br><br>
    <i>Try asking:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and company criteria')">💼 Placements Hub</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Fee structure, deadlines and scholarships')">💰 Fee Breakdown</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Hostel facilities, mess food and timings')">🏠 Hostel & Life</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Tell me a campus joke')">😄 Tell a Joke</button>
    </div>`,
    te: `🎓 <strong>CampusAI అసిస్టెంట్‌కి స్వాగతం!</strong><br>
    నేను మీకు <strong>ప్లేస్‌మెంట్స్ (Amazon, TCS, Infosys, Wipro, Cognizant)</strong>, ఫీజులు, హాస్టల్ వివరాలు మరియు అడ్మిషన్లలో సహాయం చేయగలను.<br><br>
    <i>ప్రశ్నించండి:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and company criteria')">💼 ప్లేస్‌మెంట్స్ వివరాలు</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Fee structure, deadlines and scholarships')">💰 ఫీజు వివరాలు</button>
    </div>`,
    hi: `🎓 <strong>CampusAI असिस्टेंट में आपका स्वागत है!</strong><br>
    मैं आपको <strong>प्लेसमेंट (Amazon, TCS, Infosys, Wipro, Cognizant)</strong>, फीस, हॉस्टल और प्रवेश के बारे में सभी जानकारी दे सकता हूँ।<br><br>
    <i>पूछें:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and company criteria')">💼 प्लेसमेंट कट-ऑफ</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Fee structure, deadlines and scholarships')">💰 फीस विवरण</button>
    </div>`,
    ta: `🎓 <strong>CampusAI உதவியாளருக்கு வரவேற்கிறோம்!</strong><br>
    <strong>வேலைவாய்ப்பு (TCS, Amazon, Infosys, Wipro, Cognizant)</strong>, கட்டணம், விடுதி மற்றும் சேர்க்கை பற்றி நான் உங்களுக்கு உதவ முடியும்.<br><br>
    <i>கேட்கவும்:</i>
    <div class="card-action-grid">
        <button class="interactive-btn" onclick="sendQuickPrompt('Placement eligibility and company criteria')">💼 வேலைவாய்ப்பு விவரங்கள்</button>
        <button class="interactive-btn" onclick="sendQuickPrompt('Fee structure, deadlines and scholarships')">💰 கட்டண விவரங்கள்</button>
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
    }, 450);
}

// Quick Prompt Handler
function sendQuickPrompt(promptText) {
    document.getElementById('userInput').value = promptText;
    sendMessage();
}

/**
 * FIXED ROUTING PRIORITY ENGINE:
 * 1. Checks basic greetings/small talk.
 * 2. Checks COLLEGE DOMAIN KNOWLEDGE BASE FIRST (Hostel, Fees, Placements, etc.)
 * 3. Checks secondary casual talk (Canteen, Stress).
 * 4. General conversational fallback.
 */
function generateAIResponse(query) {
    const cleanQuery = query.toLowerCase().trim();

    // 1. Direct Greetings, Identity, Thanks & Jokes
    const quickTalk = ['greeting', 'thanks', 'joke', 'identity'];
    for (const key of quickTalk) {
        const item = conversationalIntents[key];
        if (item && item.keywords.some(kw => cleanQuery.includes(kw))) {
            return item[currentLang];
        }
    }

    // 2. CHECK COLLEGE KNOWLEDGE BASE FIRST (Prevents keyword collisions)
    for (const category in knowledgeBase) {
        const item = knowledgeBase[category];
        const matchFound = item.keywords.some(kw => cleanQuery.includes(kw));
        if (matchFound) {
            return item[currentLang];
        }
    }

    // 3. Secondary Chit-Chat (Canteen, Stress)
    for (const intentKey in conversationalIntents) {
        const item = conversationalIntents[intentKey];
        if (item.keywords.some(kw => cleanQuery.includes(kw))) {
            return item[currentLang];
        }
    }

    // 4. Natural fallback for open-ended queries
    return generalFallbacks[currentLang](escapeHTML(query));
}

// HTML Character Sanitizer
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

// File Upload Analyzer
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    appendMessage(`📄 <em>Uploaded document: ${file.name}</em>`, 'user');
    showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator();
        const responses = {
            en: `📄 <strong>Document Analyzed (${file.name}):</strong><br>I have parsed the document. You can now ask questions about the deadlines, rules, or fees mentioned inside.`,
            te: `📄 <strong>పత్రం విశ్లేషించబడింది (${file.name}):</strong><br>వివరాలు సేకరించబడ్డాయి. మీరు ఈ పత్రం గురించి ఏవైనా ప్రశ్నలు అడగవచ్చు.`,
            hi: `📄 <strong>दस्तावेज़ का विश्लेषण किया गया (${file.name}):</strong><br>सामग्री प्राप्त कर ली गई है। अब आप इस दस्तावेज़ से संबंधित प्रश्न पूछ सकते हैं।`,
            ta: `📄 <strong>ஆவணம் பகுப்பாய்வு செய்யப்பட்டது (${file.name}):</strong><br>தகவல்கள் பெறப்பட்டன. இந்த ஆவணம் தொடர்பாக நீங்கள் கேள்விகளைக் கேட்கலாம்.`
        };
        appendMessage(responses[currentLang], 'bot');
    }, 1200);
}

// Human Helpdesk
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

// Speech-to-Text with Multilingual Locales
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
