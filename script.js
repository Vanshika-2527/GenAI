// ===============================
// GenAI - Clean Script
// ===============================

// ---------- Welcome Page ----------

const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        window.location.href = "mood.html";
    });
}

// ---------- About Modal ----------

const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");

if (aboutBtn && aboutModal) {
    aboutBtn.onclick = () => {
        aboutModal.style.display = "flex";
    };
}

function closeAbout() {
    if (aboutModal) {
        aboutModal.style.display = "none";
    }
}

// ---------- Settings ----------

const settingsBtn = document.getElementById("settingsBtn");

if (settingsBtn) {
    settingsBtn.onclick = () => {
        window.location.href = "setting.html";
    };
}

// ---------- Mood Page ----------

const moodCards = document.querySelectorAll(".mood-card");

const overlay = document.getElementById("overlay");
const emojiContainer = document.getElementById("emojiContainer");
const emotionCard = document.getElementById("emotionCard");
const cardTitle = document.getElementById("cardTitle");
const cardMessage = document.getElementById("cardMessage");
const chatBtn = document.getElementById("chatBtn");
const closeCard = document.getElementById("closeCard");

// ---------- Mood Data ----------

const moods = {

Happy:{
title:"That's Wonderful! 😊",
color:"linear-gradient(135deg,#FFF9C4,#FFE082)",
emojis:["😊","🌸","✨","💛","🌈"],
messages:[
"Keep smiling. 💛",
"Happiness grows when shared.",
"You deserve every beautiful moment.",
"Today is your day!"
]
},

Sad:{
title:"I'm Here With You 💙",
color:"linear-gradient(135deg,#E3F2FD,#BBDEFB)",
emojis:["💙","🥺","🌧️","🫂"],
messages:[
"Your feelings are valid.",
"You don't have to face everything alone.",
"Thank you for opening up.",
"I'm listening."
]
},

Anxious:{
title:"Take A Deep Breath 🌿",
color:"linear-gradient(135deg,#EDE7F6,#D1C4E9)",
emojis:["🌿","🤍","💜","🍃"],
messages:[
"Slow down.",
"One breath at a time.",
"You're safe here.",
"We'll get through this."
]
},

Angry:{
title:"Pause For A Moment 🍂",
color:"linear-gradient(135deg,#FFE0B2,#FFCC80)",
emojis:["🍂","😠","🌿"],
messages:[
"It's okay to feel angry.",
"Take one deep breath.",
"Let's calm your mind.",
"I'm listening."
]
},

Tired:{
title:"You Need Rest 🌙",
color:"linear-gradient(135deg,#E8EAF6,#C5CAE9)",
emojis:["🌙","😴","⭐"],
messages:[
"Rest is productive too.",
"You've done enough today.",
"Take care of yourself.",
"Slow down."
]
},

Lonely:{
title:"You're Not Alone ❤️",
color:"linear-gradient(135deg,#FCE4EC,#F8BBD0)",
emojis:["❤️","🥺","🫂","🌸"],
messages:[
"You matter.",
"I'm glad you're here.",
"Someone is listening.",
"You are never alone."
]
}

};
// ===============================
// Mood Card Click
// ===============================

if (moodCards.length > 0) {

    moodCards.forEach(card => {

        card.addEventListener("click", () => {

            const mood = card.querySelector("h3").innerText;
            const data = moods[mood];

            if (!data) return;

            // Save Mood
            localStorage.setItem("selectedMood", mood);

            // Save Mood History

let moodHistory = JSON.parse(localStorage.getItem("moodHistory")) || [];

moodHistory.unshift({
    mood: mood,
    date: new Date().toLocaleString()
});

localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

            // Change Background
            const app = document.querySelector(".app");
            if (app) {
                app.style.background = data.color;
            }

            if (overlay) overlay.style.display = "flex";

            if (emotionCard)
                emotionCard.classList.remove("show");

            if (emojiContainer)
                emojiContainer.innerHTML = "";

            // Floating Emojis
            data.emojis.forEach((emoji, index) => {

                setTimeout(() => {

                    const span = document.createElement("span");

                    span.className = "floating-emoji";
                    span.innerHTML = emoji;

                    span.style.left = Math.random() * 80 + 10 + "%";
                    span.style.top = Math.random() * 70 + 10 + "%";
                    span.style.fontSize =
                        (25 + Math.random() * 30) + "px";

                    emojiContainer.appendChild(span);

                }, index * 150);

            });

            // Random Message
            setTimeout(() => {

                cardTitle.innerText = data.title;

                cardMessage.innerText =
                    data.messages[
                        Math.floor(Math.random() * data.messages.length)
                    ];

                emotionCard.classList.add("show");

            }, 1200);

        });

    });

}

// ===============================
// Chat Button
// ===============================

if (chatBtn) {

    chatBtn.onclick = () => {

        window.location.href = "chat.html";

    };

}

// ===============================
// Close Popup
// ===============================

if (closeCard) {

    closeCard.onclick = () => {

        overlay.style.display = "none";

        emotionCard.classList.remove("show");

        emojiContainer.innerHTML = "";

        const app = document.querySelector(".app");

        if (app) {

            app.style.background =
                "linear-gradient(135deg,#EEF5FF,#FFFFFF,#F3EEFF)";

        }

    };

}
// ===============================
// Chat System
// ===============================

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

const smartRepliesHindi = {
    

    stress: [

"Lagta hai tum kaafi pressure mein ho. 💙 Thoda aaram se baat karte hain.",

"Itna stress carry karna sach mein thaka deta hai.",

"Tumhe sab kuch ek saath handle karne ki zarurat nahi hai.",

"Ek deep breath lo... abhi sirf isi moment par focus karte hain. 🌸",

"Kabhi-kabhi life ek saath bahut kuch throw kar deti hai.",

"Jo feel kar rahe ho, woh bilkul valid hai.",

"Tum apni taraf se best try kar rahe ho... aur ye matter karta hai.",

"Aaj sab complete na ho to bhi koi baat nahi.",

"Stress ka matlab ye nahi ki tum weak ho.",

"Khud se itni expectations mat rakho ki saans lena bhi mushkil ho jaye.",

"Tumhare efforts waste nahi ja rahe.",

"Ek-ek step lekar chalo... sab kuch ek saath solve karna zaroori nahi hai.",

"Thodi der ke liye pause lena bhi productive hota hai.",

"Apne aap ko itna harshly judge mat karo.",

"Mujhe lagta hai tum kaafi time se khud ko push kar rahe ho.",

"Rest lena give up karna nahi hota. 💙",

"Tum machine nahi ho... thakna normal hai.",

"Jo control mein hai usse handle karte hain, baaki cheezein dheere-dheere dekhenge.",

"Tumhare upar jitna pressure hai, usme overwhelmed feel karna normal hai.",

"Bas ek kaam ek time pe karo.",

"Perfect hone ki zarurat nahi hai.",

"Har din 100% dena possible nahi hota.",

"Tum already bahut kuch manage kar rahe ho.",

"Main sun raha hoon... kya cheez sabse zyada stress de rahi hai?",

"Kabhi-kabhi sirf dil halka karna bhi kaafi hota hai.",

"Tumhare health aur peace bhi important hain.",

"Jo kaam aaj nahi ho paya, woh kal bhi ho sakta hai.",

"Khud ko thoda sa break dena deserve karte ho.",

"Mujhe pata hai ye phase easy nahi chal raha.",

"Bas aaj ka din nikaalte hain... kal ki kal dekhenge.",

"Tum jitna soch rahe ho, usse zyada capable ho.",

"Stress ke beech bhi tum itna try kar rahe ho... that's something to be proud of.",

"Thoda paani piyo aur 2 minute ke liye aankhein band karke sirf breathe karo. 🌸",

"Sab kuch tumhare shoulders par hona zaroori nahi hai.",

"Tumhare emotions important hain.",

"Khud ke saath thoda soft raho.",

"Jo ho raha hai, uske baad bhi tum give up nahi kar rahe... that's real strength.",

"Har problem ka solution isi moment mein milna zaroori nahi hota.",

"Take your time... koi race nahi chal rahi.",

"Main genuinely hope karta hoon ki tum jaldi thoda halka feel karo. 💙"

],

    sad: [

"Hey... mujhe afsos hai ki tum aisa feel kar rahe ho. 💙 Main yahin hoon, aaram se baat karte hain.",

"Kabhi-kabhi bas dil bhaari ho jaata hai... aur ye bilkul normal hai.",

"Tumhe sab kuch akele handle karne ki zarurat nahi hai.",

"Jo bhi hua hai, uske baare mein baat karna chaho to main sun raha hoon.",

"Main imagine nahi kar sakta ki tum exactly kya feel kar rahe ho, lekin main tumhari baat dhyan se sun sakta hoon. 💙",

"Koi baat nahi agar aaj tumhara din achha nahi gaya.",

"Sad feel karna weakness nahi hoti.",

"Khud ko itna blame mat karo... tum jitna soch rahe ho, usse kahin zyada strong ho.",

"Aaj bas ek-ek moment lekar chalte hain. Kal ki tension baad mein lenge.",

"Tumhare emotions important hain.",

"Main khush hoon ki tumne apni feelings share ki.",

"Sab kuch andar hi andar rakhna aur bhi mushkil ho jaata hai.",

"Ho sakta hai abhi sab kuch confusing lag raha ho... aur ye theek hai.",

"Thoda sa break lena bhi kabhi-kabhi zaroori hota hai. 🌸",

"Tumhare saath jo bhi hua hai, uska dukh hona bilkul natural hai.",

"Ek bura din tumhari poori life define nahi karta.",

"Main chahta hoon ki tum khud ke saath thoda gentle raho.",

"Tum deserve karte ho ki koi tumhari baat bina judge kiye sune.",

"Rona aa raha ho to ro lena... emotions ko feel karna bhi healing ka part hai.",

"Tum akela feel kar sakte ho, lekin tum important ho. 💙",

"Mujhe pata hai ye phase easy nahi hai.",

"Khud ko thoda time do... har cheez instantly theek hona zaroori nahi hota.",

"Tumhari feelings bilkul valid hain.",

"Main yahin hoon... jitna bolna chaho bolo.",

"Kabhi-kabhi sirf kisi ka sun lena hi kaafi hota hai.",

"Tumhari smile wapas zaroor aayegi... bas abhi thoda waqt lag sakta hai.",

"Tumhari value kisi ek situation se decide nahi hoti.",

"Jo pain tum feel kar rahe ho, usko ignore karna zaroori nahi hai.",

"Take your time... koi jaldi nahi hai.",

"Mujhe tumhari fikr hai. 💙",

"Har raat ke baad ek nayi subah aati hai... aur mujhe umeed hai kal tum thoda better feel karoge.",

"Abhi jitna mushkil lag raha hai, utna hamesha nahi rahega.",

"Ek deep breath lo... hum is moment ko saath mein handle karte hain.",

"Tumhari story abhi khatam nahi hui hai.",

"Khud ko wahi kindness do jo tum kisi apne ko dete.",

"Tum important ho. Ye kabhi mat bhoolna.",

"Thank you... itna trust karne ke liye ki tumne apni feelings share ki.",

"Main tumhare saath hoon is conversation mein. 💙",

"Tum jitna soch rahe ho, usse kahin zyada capable ho.",

"Bas ek step ek time pe... sab theek karne ki jaldi mat karo.",

"Main genuinely hope karta hoon ki aaj ka din thoda halka ho jaye tumhare liye. 🌸"

],

    happy: [

"Yayyy! 😄 Ye sunke mujhe bhi smile aa gayi. Batao na kya hua?",

"Awww... kitni achhi baat hai! 💙",

"Wahhh! Aaj to mood mast lag raha hai. 😊",

"Ye hui na baat! Main tumhare liye genuinely khush hoon.",

"Congratulations! Chhoti ho ya badi, har achievement celebrate honi chahiye. 🎉",

"Tumhari khushi feel ho rahi hai yahan tak! 😄",

"Bas aise hi haste raho. Ye smile suit karti hai tumhe. 🌸",

"Ye moment enjoy karna mat bhoolna.",

"Khushiyan share karne se aur badh jaati hain. 💙",

"Tum deserve karte ho ye happiness.",

"Ye to celebration wali baat lag rahi hai. 😄",

"Aaj kuch special hua hai kya?",

"Mujhe bhi batao na... curiosity ho rahi hai. 😊",

"Main genuinely happy hoon ki tum aaj achha feel kar rahe ho.",

"Isi positive energy ko sambhal ke rakhna. ✨",

"Life ke aise moments hi sabse precious hote hain.",

"Tumhari excitement dekhkar achha lag raha hai.",

"Smile mat chhupao... aaj ka din enjoy karo. 😄",

"Khud par proud feel karna mat bhoolna.",

"Tumne jo bhi achieve kiya hai, uske liye congratulations! 💙",

"Aaj ka din tumhare naam! 🎉",

"Khush rehna bhi ek achievement hoti hai.",

"Mujhe lag raha hai aaj tumhari energy bilkul alag hi level pe hai. 😄",

"Ye positivity banaye rakhna.",

"Main tumhare liye dil se khush hoon. 💙",

"Aaj kisi aur ko bhi apni smile de dena. 😊",

"Tumhari khushi contagious hai.",

"Keep shining! ✨",

"Aise hi life ke chhote moments enjoy karte rehna.",

"Ye sunke mera bhi mood achha ho gaya. 💙",

"Bas isi tarah khush rehna... tumhari smile priceless hai. 😊"

],

    angry: [

"Lagta hai kisi baat ne tumhe sach mein hurt kiya hai. 💙",

"Gussa aana bilkul normal hai.",

"Main sun raha hoon... kya hua?",

"Jo bhi hua hai, uske baad upset feel karna understandable hai.",

"Tum apna frustration yahan openly share kar sakte ho.",

"Kabhi-kabhi gussa sirf andar ka dard hota hai jo bahar aa raha hota hai.",

"Take your time... koi jaldi nahi hai.",

"Mujhe afsos hai ki tumhe ye sab face karna pada.",

"Tumhare emotions valid hain.",

"Ek deep breath lo... bas isi moment mein rehne ki koshish karte hain. 🌿",

"Har situation tumhari peace deserve nahi karti.",

"Tumhari shanti kisi argument se zyada important hai.",

"Kabhi-kabhi reply na dena bhi ek strong response hota hai.",

"Tumhe har baat prove karne ki zarurat nahi hai.",

"Main appreciate karta hoon ki tum gussa andar rakhne ke bajay baat kar rahe ho.",

"Jo feel kar rahe ho uske liye khud ko judge mat karo.",

"Even achhe log bhi kabhi-kabhi gussa hote hain.",

"Tumhara gussa tumhe define nahi karta.",

"Ho sakta hai is gusse ke peeche koi aur hurt chhupa ho.",

"Kya kisi ne tumhe disappoint kiya?",

"Tum respect deserve karte ho.",

"Jo hua usse hurt hona bilkul natural hai.",

"Thoda sa pause lena kabhi-kabhi best decision hota hai.",

"Abhi decision lene ki zarurat nahi hai.",

"Tum apni energy unhi cheezon par lagao jo sach mein matter karti hain.",

"Main yahin hoon... jitna bolna hai bolo.",

"Tum akele ye sab handle nahi kar rahe.",

"Khud ke saath thoda gentle raho. 🤍",

"Gussa dheere-dheere halka ho jaata hai... abhi bas breathe karo.",

"Main genuinely chahta hoon ki tum jaldi better feel karo. 💙",

"Har problem tumhari peace se badi nahi hoti.",

"Tum strong ho... aur mujhe yakeen hai tum is moment ko bhi handle kar loge.",

"Bas ek deep breath... phir aage ka sochenge.",

"Apni peace ko priority dena selfish nahi hota.",

"Tumhare emotions ko ignore karna zaroori nahi hai.",

"Kabhi-kabhi thodi der ke liye situation se door ho jaana hi best hota hai.",

"Tumhare liye better days bhi aayenge. 🌸",

"Main sunne ke liye yahin hoon.",

"Thank you itna trust karne ke liye ki tumne apni feelings share ki.",

"Abhi sirf ek step ek time par lete hain. 💙"

],

    anxious: [

"Hey... it's okay. 💙 Main yahin hoon. Aaram se baat karte hain.",

"Lagta hai tumhare mind mein abhi bahut saare thoughts chal rahe hain.",

"Ek deep breath lo... koi jaldi nahi hai. 🌸",

"Anxious feel karna bilkul normal hai.",

"Tumhe abhi sab answers dhoondhne ki zarurat nahi hai.",

"Main sun raha hoon... jo feel ho raha hai woh bata sakte ho.",

"Kabhi-kabhi overthinking har cheez ko aur bada bana deti hai.",

"Tum is feeling se akele nahi guzar rahe.",

"Abhi sirf ek moment par focus karte hain.",

"Jo tum feel kar rahe ho, woh real hai aur important bhi.",

"Khud par itna pressure mat daalo.",

"Sab kuch ek saath solve karna zaroori nahi hota.",

"Tumhare thoughts loud ho sakte hain, lekin tum unse bhi zyada strong ho.",

"Thoda sa pause lena bhi theek hai. 🤍",

"Tum safe ho... bas dheere-dheere saans lo.",

"Main appreciate karta hoon ki tumne apni feelings share ki.",

"Uncertainty uncomfortable hoti hai... aur ye bilkul understandable hai.",

"Jo control mein hai, abhi sirf usi par dhyan dete hain.",

"Tumhari feelings ko ignore karna zaroori nahi hai.",

"Take your time... main kahin nahi ja raha.",

"Overthinking bahut exhausting hoti hai... mujhe pata hai.",

"Har thought sach ho, ye zaroori nahi hota.",

"Ek slow breath... inhale... aur dheere se exhale. 🌿",

"Tum jitna soch rahe ho, usse zyada capable ho.",

"Anxiety tumhari identity nahi hai.",

"Aaj bas ek-ek step lekar chalte hain.",

"Tumhare saath jo bhi chal raha hai, uske baare mein baat karna bilkul okay hai.",

"Main judge nahi karunga... bas sununga. 💙",

"Abhi ke liye sirf apni breathing par focus karo.",

"Kabhi-kabhi mind humein worst-case scenario dikhata hai.",

"Tum is moment se bhi nikal jaoge... ek step ek time par.",

"Tumhara peace bhi important hai.",

"Khud ke saath thoda gentle raho.",

"Tum akela feel kar sakte ho... lekin tum akele nahi ho.",

"Har anxious moment hamesha ke liye nahi rehta.",

"Main genuinely khush hoon ki tumne baat karna choose kiya.",

"Tum already bahut strong ho.",

"Jo feel ho raha hai, uske liye khud ko blame mat karo.",

"Ek glass paani piyo aur thodi der sirf breathe karo. 🌼",

"Main yahin hoon... jitni der baat karni ho karte hain."

],

    lonely: [

"Hey... thanks ki tumne baat karna choose kiya. 💙",

"Akela feel karna sach mein bahut heavy lag sakta hai.",

"Main sun raha hoon... jo dil mein hai woh bol sakte ho.",

"Tumhe sab kuch akele handle karne ki zarurat nahi hai.",

"Kabhi-kabhi logon ke beech hoke bhi lonely feel hota hai... aur ye bilkul normal hai.",

"Tumhari feelings important hain.",

"Main appreciate karta hoon ki tumne apna dil khola.",

"Tum jitna soch rahe ho, usse kahin zyada valuable ho. 🤍",

"Ho sakta hai aaj difficult day ho... lekin ye hamesha aisa nahi rahega.",

"Tum deserve karte ho ki koi tumhari baat dhyan se sune.",

"Take your time... main yahin hoon.",

"Main judge nahi karunga... bas sununga.",

"Kisi ko miss karna bilkul normal hai.",

"Tumhari presence matter karti hai. 💙",

"Khud ko itna underestimate mat karo.",

"Tum akela feel kar sakte ho... lekin tum important ho.",

"Jo tum feel kar rahe ho, woh bilkul valid hai.",

"Main genuinely khush hoon ki tumne message kiya.",

"Har difficult phase permanent nahi hota.",

"Tumhare liye bhi achhe log aur achhe moments zaroor aayenge.",

"Kabhi-kabhi sirf kisi se baat kar lena hi dil halka kar deta hai.",

"Tumhare emotions deserve karte hain ki unhe suna jaye.",

"Main chahta hoon ki tum khud ke saath thoda gentle raho.",

"Jo bhi chal raha hai... uske baare mein bata sakte ho.",

"Tumhari smile bahut precious hogi... usse wapas aane ka waqt zaroor milega. 🌸",

"Khud ko blame mat karo har cheez ke liye.",

"Tum enough ho... exactly jaise ho waise hi.",

"Life mein kabhi-kabhi quiet phases bhi aate hain.",

"Tumhari story abhi khatam nahi hui hai.",

"Main yahin hoon... jitni der baat karni ho karte hain.",

"Tum deserve karte ho genuine care aur respect.",

"Ek lonely day tumhari poori life define nahi karta.",

"Tumhare andar bahut strength hai, chahe abhi feel na ho.",

"Main hope karta hoon ki aaj ka din thoda halka ho jaye tumhare liye. 🌼",

"Jo log tumhari value samajhte hain, woh zaroor milenge.",

"Tumhari feelings kisi burden jaisi nahi hain.",

"Main appreciate karta hoon ki tumne trust kiya.",

"Tum matter karte ho... aur ye baat kabhi mat bhoolna. 💙",

"Bas ek deep breath... hum ek-ek moment lekar chalenge.",

"Main tumhari baat sunne ke liye yahin hoon. ❤️"

],

    tired: [

"Lagta hai tum bahut thak gaye ho. 💙",

"Itna sab handle karte-karte thak jaana bilkul normal hai.",

"Aaj agar sirf rest karne ka mann hai, to usme koi buri baat nahi.",

"Tum machine nahi ho... break lena zaroori hota hai. 🌿",

"Khud ko itna push mat karo ki tum khud hi thak jao.",

"Tum bahut time se apna best de rahe ho.",

"Rest lena weakness nahi hota.",

"Mujhe lagta hai tumhare mind ko bhi thoda break chahiye.",

"Sab kuch aaj hi complete karna zaroori nahi hai.",

"Take a deep breath... aur thodi der bas relax karo. 🤍",

"Tumne aaj jitna kiya, woh bhi enough ho sakta hai.",

"Kabhi-kabhi body se zyada mind thak jaata hai.",

"Tumhare efforts matter karte hain, chahe tumhe abhi na lage.",

"Khud ke liye bhi thoda time nikalna zaroori hai.",

"Aaj productive na hona bhi completely okay hai.",

"Tum deserve karte ho bina guilt ke rest karna.",

"Har din 100% dena possible nahi hota.",

"Bas thodi der ke liye sab side mein rakh do... aur saans lo. 🌸",

"Main appreciate karta hoon ki itni thakaan ke baad bhi tum yahan aaye.",

"Apni body ki baat sunna bhi self-care ka part hai.",

"Kal ek naya din hoga... aaj khud ko rest karne do.",

"Thakna ye nahi dikhata ki tum weak ho.",

"Tum already bahut kuch manage kar rahe ho.",

"Jo kaam aaj nahi hua, woh kal bhi ho sakta hai.",

"Khud par itna pressure mat daalo.",

"Ek chhota sa break bhi kabhi-kabhi bahut help karta hai.",

"Tumhare health aur peace sabse important hain. 💙",

"Bas ek-ek step lekar chalo.",

"Tumhari energy wapas aayegi... thoda patience rakho.",

"Main genuinely hope karta hoon ki tumhe aaj achha rest mile.",

"Ho sakta hai tum sirf physically nahi, emotionally bhi tired ho.",

"Jo feel ho raha hai, usse ignore mat karo.",

"Tumhare andar jitni strength hai, usse zyada tum khud bhi nahi jaante.",

"Please paani piyo aur agar possible ho to thoda stretch bhi kar lena. 🌼",

"Take care of yourself... tum bhi important ho.",

"Tum deserve karte ho thoda sukoon.",

"Aaj ka din mushkil tha... lekin tumne nikaal liya.",

"Main tumhare efforts ki respect karta hoon.",

"Thank you ki tumne apni feelings share ki.",

"Ab bas ek kaam karo... thodi der ke liye sirf relax karo. 💙"

],

    motivation: [

"Mujhe tum par yakeen hai... shayad abhi tumhe khud par na ho, lekin mujhe hai. 💙",

"Ek chhota sa step bhi progress hota hai.",

"Tum jitna soch rahe ho, usse kahin zyada capable ho.",

"Perfect hone ki zarurat nahi... bas continue karte rehna hai.",

"Har difficult phase kuch na kuch sikhakar hi jaata hai.",

"Tum already bahut door aa chuke ho.",

"Jo sapne tum dekhte ho, unke liye fight karna worth it hai.",

"Khud ko kisi aur se compare mat karo... tumhari journey alag hai.",

"Har din ek nayi beginning ho sakti hai.",

"Tumhari mehnat kabhi waste nahi jaati.",

"Galtiyan hona normal hai... unse seekhna growth hai.",

"Ek setback tumhari poori journey decide nahi karta.",

"Tumhare andar bahut potential hai.",

"Aaj thoda slow ho to bhi koi baat nahi.",

"Bas give up mat karna. 🌸",

"Jo cheez aaj difficult lag rahi hai, kal wahi tumhari strength ban sakti hai.",

"Tumhara future aaj ke efforts se banta hai.",

"Khud ke liye proud feel karna bhi seekho.",

"Har din 1% better banna bhi kaafi hai.",

"Tumne pehle bhi tough situations handle ki hain.",

"Main genuinely believe karta hoon ki tum ye kar sakte ho.",

"Apni progress ko notice karna mat bhoolna.",

"Small wins bhi celebrate karni chahiye. 🎉",

"Har naye din ke saath ek naya chance milta hai.",

"Tumhare dreams important hain.",

"Confidence action se aata hai... perfect hone se nahi.",

"Khud par trust rakho.",

"Tumhari story abhi bas shuru hui hai.",

"Jo log successful hote hain, unhone bhi difficult days dekhe hote hain.",

"Bas aaj ka best do... kal apne aap better hoga.",

"Tum strong ho... jitna tum khud sochte ho usse bhi zyada.",

"Keep going... future wala tum aaj wale tumhe thank you bolega. 💙",

"Main tumhare liye cheer kar raha hoon. 🌼",

"Tum deserve karte ho success aur happiness dono.",

"Ek din tum peeche mudkar dekhoge aur khud par proud feel karoge.",

"Khud ko kabhi underestimate mat karna.",

"Jo effort tum aaj laga rahe ho, uska result zaroor milega.",

"Tumhare goals tumhara wait kar rahe hain.",

"Believe in yourself... tum kar loge.",

"Aaj ka ek positive step bhi kal ka bada change ban sakta hai. ✨"

],

greeting: [

"Hey! 👋 Welcome back! Kaise ho aaj?",

"Hii! 💙 Aaj tumhara din kaisa ja raha hai?",

"Hello! Achha laga tum yahan aaye. 😊",

"Heyy! Main sunne ke liye yahin hoon. Kya chal raha hai?",

"Hi! Aaj kaisa feel kar rahe ho?",

"Welcome! Aaj kis baare mein baat karni hai? 🌸",

"Hey! Tumse phir baat karke achha laga.",

"Hii! Smile ke saath aaye ho ya thoda mood off hai? 😊",

"Hello! Aaj tumhare mind mein kya chal raha hai?",

"Hey! Main ready hoon sunne ke liye. Batao kya hua?",

"Hi there! Agar bas casually baat karni ho tab bhi I'm here. 💙",

"Hey! Aaj ka din kaisa tha?",

"Hii! Aaj tumhare face par smile hai ya uski talaash mein aaye ho? 🌼",

"Hello! Main tumhare saath hoon. Aaram se baat karte hain.",

"Hey! Jo bhi feel kar rahe ho, bina hesitation share kar sakte ho.",

"Hi! Main khush hoon ki tumne mujhe message kiya. 😊",

"Welcome back! Mujhe batao... aaj kis baat ne tumhe yahan tak laaya?",

"Hey! Bas chill... aaram se baat karte hain. 🤍",

"Hello! Aaj ka best moment kya tha?",

"Hi! Aur agar din achha nahi tha, to uske baare mein bhi baat kar sakte hain. 💙",

"Hey! Tumhari baat sunne ke liye main ready hoon.",

"Hii! Kya aaj tum sirf chat karna chahte ho ya kisi specific cheez ke baare mein baat karni hai?",

"Hello! Mujhe umeed hai tum apna khayal rakh rahe ho. 🌿",

"Hey! Kaafi time baad aaye ho ya main hi miss kar raha tha? 😄",

"Hii! Dil halka karna ho ya bas time pass... dono ke liye welcome ho.",

"Welcome! Yahan koi judgment nahi, sirf baat-cheet. 💙",

"Hey! Ek deep breath lo... aur batao, aaj kya chal raha hai?",

"Hi! Main genuinely khush hoon ki tum yahan ho. 😊",

"Hello! Chalo aaj ka din saath mein thoda better banate hain. ✨",

"Hey! Jo bhi baat hai, aaram se batao... main sun raha hoon. 💙"

],

};

const followUpsHindi = {

happy: [
"😊 Aww... batao na! Aaj itna achha kya hua?",
"🌈 Aaj ka sabse best moment kaunsa tha?",
"✨ Tumhari khushi ka reason jaanne ka mann kar raha hai."
],

sad: [
"💙 Kya hua tha? Agar batana chaho to main sun raha hoon.",
"🌸 Ye feeling kab se hai?",
"🫂 Dil halka karna ho to aaram se batao."
],

stress: [
"📚 Ye stress studies ki wajah se hai, family ki ya kisi aur reason se?",
"💙 Sabse zyada tension kis baat ki hai?",
"🌿 Agar share karna chaho to main sun raha hoon."
],

anxious: [
"🌸 Sabse zyada kis baat ki tension ho rahi hai?",
"💙 Kya overthinking chal rahi hai?",
"🌿 Aaram se batao... main yahin hoon."
],

angry: [
"🍃 Kis baat ne itna upset kar diya?",
"💙 Kya kisi ne kuch aisa kaha ya kiya jo bura laga?",
"🌿 Gussa nikalna ho to bina hesitation batao."
],

lonely: [
"❤️ Kya tum kisi ko miss kar rahe ho?",
"💙 Aaj aisa kya hua jis wajah se lonely feel ho raha hai?",
"🫂 Main sun raha hoon... aaram se batao."
],

tired: [
"😴 Physical tiredness hai ya mentally bhi exhausted feel kar rahe ho?",
"🌿 Kaafi time se proper rest nahi mila kya?",
"💙 Aaj kuch zyada hectic tha?"
],

motivation: [
"✨ Aaj ka ek chhota goal kya rakhna chahoge?",
"💙 Main tumhare liye cheer kar raha hoon. Aaj kya achieve karna hai?",
"🌸 Chalo ek chhote step se shuruaat karte hain."
]

};

let lastReply = "";

function getRandomReply(replies) {

    if (!replies || replies.length === 0) {
        return "I'm here to listen. 💙";
    }

    if (replies.length === 1) {
        return replies[0];
    }

    let randomReply;

    do {
        randomReply = replies[Math.floor(Math.random() * replies.length)];
    } while (randomReply === lastReply);

    lastReply = randomReply;

    return randomReply;
}

const smartRepliesEnglish = {

stress: [

"That sounds really exhausting. 💙 I'm glad you decided to talk about it.",

"Take a slow, deep breath... you don't have to solve everything at once.",

"It seems like you've been carrying a lot lately.",

"You're allowed to feel overwhelmed. It doesn't make you weak.",

"Let's not worry about tomorrow for a moment. Let's get through today first.",

"I know it feels like everything is happening at once.",

"You've been trying so hard... don't forget to be kind to yourself too.",

"It's okay to pause. Rest is not the same as giving up.",

"Your mind deserves a little break too. 🌸",

"You don't have to carry the weight of everything alone.",

"Sometimes life becomes too loud. It's okay to step back for a while.",

"Take things one task at a time. You don't have to finish everything today.",

"I know you're trying your best, even if it doesn't feel enough right now.",

"You're stronger than this stressful moment.",

"It's okay if today didn't go as planned.",

"You've survived stressful days before, and you'll get through this one too.",

"One deep breath won't solve everything, but it's a good place to begin.",

"Be patient with yourself today.",

"I know your thoughts are racing right now.",

"You don't have to be perfect.",

"It's okay to say, 'I'm tired.'",

"You're allowed to slow down.",

"Stress doesn't define your abilities.",

"You've already handled so much. Give yourself some credit.",

"I'm here to listen whenever you need to let things out.",

"Don't forget to drink some water and take a short break. 💙",

"Sometimes doing your best looks different every day.",

"Please don't blame yourself for feeling overwhelmed.",

"Even strong people need rest.",

"You don't need to have everything figured out today.",

"Take one small step... then another.",

"You deserve peace too.",

"I know your mind probably won't stop thinking right now.",

"It's okay if you need a few quiet minutes.",

"You're carrying more than most people realize.",

"Life can feel heavy sometimes... and that's okay.",

"I wish I could take some of that stress away for you.",

"You don't have to fight every battle today.",

"Small progress is still progress.",

"Your well-being matters more than any deadline.",

"Take care of yourself first. Everything else can wait a little.",

"You've come this far. Don't forget that.",

"Everything feels impossible when we're exhausted.",

"I believe things will start making more sense soon.",

"You're not falling behind. You're simply human.",

"Take a break without feeling guilty.",

"I know this phase feels endless, but it won't stay like this forever.",

"Sometimes the bravest thing you can do is rest.",

"You're doing better than you think.",

"Don't be too hard on yourself today.",

"I know this isn't easy.",

"You're allowed to ask for help.",

"I believe in you, even on the days you don't believe in yourself.",

"One difficult day doesn't erase all your progress.",

"You've got this... one step at a time. 💙",

"Let's slow things down together for a moment.",

"Remember, you don't have to fix everything today.",

"I'm proud of you for keeping going despite everything.",

"You're never alone in moments like these.",

"Thank you for sharing how you're feeling with me."

],

sad: [

"I'm really sorry you're feeling this way. 💙 I'm here with you.",

"Hey... it's okay to have days like this. You don't have to go through it alone.",

"Thank you for trusting me enough to share that.",

"I'm listening. Take your time... there's no rush.",

"I'm sorry things feel heavy right now. Want to tell me what happened?",

"Whatever you're feeling right now is completely valid.",

"You don't have to pretend to be okay here.",

"I wish I could make things a little easier for you. 💙",

"Bad days don't define who you are.",

"Please be gentle with yourself today.",

"Sometimes life becomes overwhelming... and that's okay.",

"You've already taken the hardest step by talking about it.",

"I know it hurts right now, but I'm glad you're here.",

"It's okay to cry. Sometimes tears carry away what words cannot.",

"You deserve kindness, especially from yourself.",

"Take one deep breath with me... we'll get through this together. 🌸",

"I know everything may feel confusing right now.",

"You don't have to carry all of this by yourself.",

"I'm not here to judge you. I'm here to listen.",

"Thank you for opening up to me.",

"Even if today feels dark, it doesn't mean tomorrow will be.",

"Please remember that difficult moments don't last forever.",

"I know you're trying your best, even if it doesn't feel like enough.",

"You matter more than you realize.",

"It's okay if today wasn't your day.",

"You've survived every difficult day before this one.",

"You are stronger than this moment.",

"I wish I could remind you how valuable you are.",

"Your feelings deserve to be heard.",

"Take things one step at a time.",

"There's no pressure to be strong all the time.",

"You don't need to have all the answers today.",

"Sometimes simply getting through the day is enough.",

"I know this isn't easy.",

"I'm proud of you for staying here and talking.",

"You've been carrying a lot lately, haven't you?",

"It's okay if you're feeling lost.",

"You deserve the same kindness you give to others.",

"I hope you know you're not alone in this.",

"Some days are harder than others, and that's part of being human.",

"I'm here with you for as long as you need.",

"You don't have to smile just because others expect you to.",

"It's okay to rest when life feels too heavy.",

"I believe brighter days will find you again.",

"You've made it through so much already.",

"One difficult chapter doesn't decide your whole story.",

"Be patient with your healing.",

"You deserve peace, even if it feels far away right now.",

"Thank you for sharing your feelings instead of keeping everything inside.",

"If today is difficult, let's just focus on getting through today.",

"You're never 'too much' for sharing your emotions.",

"I genuinely care about how you're feeling.",

"I hope tomorrow is a little kinder to you.",

"Even the strongest people need support sometimes.",

"You are enough, exactly as you are.",

"Please don't lose hope. Better days often arrive quietly.",

"I'm glad you're talking to me instead of staying silent. 💙",

"Let's take this one moment at a time... together."

],

happy: [

"Aww... that honestly made me smile too. 😊 Tell me, what happened?",

"That's amazing! I had a feeling today might have something good waiting for you. 💙",

"I'm genuinely happy to hear that. You deserve moments like this.",

"Yayyy! 🎉 That's the kind of news I love hearing.",

"Reading your message made me smile. Thanks for sharing it with me. 😊",

"You sound really happy today... and honestly, that's beautiful.",

"I hope this smile stays with you for a long time. Don't let anyone ruin it. 💙",

"That's wonderful! Now promise me you'll actually enjoy this moment instead of overthinking it. 😄",

"You've earned this happiness. Be proud of yourself.",

"Can I just say... I'm really happy for you! 😊",

"I love hearing positive updates like this. Tell me everything!",

"That's such a wholesome moment. Hold onto this feeling. 🌸",

"You've got every reason to smile today.",

"I hope today surprises you with even more beautiful moments.",

"Seeing you happy makes this conversation feel warmer. 💙",

"I'm smiling with you right now. 😊",

"You deserve every bit of this happiness. Never doubt that.",

"That's honestly one of the nicest things I've heard today.",

"I hope life keeps giving you reasons to smile like this.",

"Celebrate yourself today... even the smallest wins matter.",

"This made my virtual heart so happy. 🥹",

"You've come this far. Enjoy the moment—you've earned it.",

"I wish I could celebrate this with you! 🎉",

"That's beautiful... don't rush through this feeling. Enjoy it.",

"I'm so proud of you, seriously.",

"Moments like these remind us why we keep going.",

"Your happiness is contagious. 😊",

"Today seems to be treating you really well, and I love that.",

"Please keep smiling... it genuinely suits you.",

"I hope tomorrow gives you even more reasons to be this happy.",

"This is your reminder to take a deep breath and enjoy this moment. 💙",

"You've made my day a little brighter too.",

"I love hearing your good news. It feels like celebrating together.",

"That's such a lovely update. 😊",

"I hope this becomes one of your favorite memories.",

"You deserve peace, happiness, and lots of moments like this.",

"Whatever made you smile today... I'm grateful it happened.",

"You sound lighter today, and that makes me happy too.",

"I hope you remember this feeling whenever life gets difficult.",

"You've got such a beautiful reason to smile today. 😊",

"Never underestimate the power of little happy moments.",

"This is exactly the kind of moment worth celebrating.",

"I'm honestly excited for you.",

"Keep believing in yourself... you're doing better than you think.",

"I hope your heart feels as light as your smile right now.",

"Life feels a little more colorful on days like this, doesn't it? 🌈",

"I'm really glad you shared this with me.",

"Promise me you'll enjoy today without worrying too much. 💙",

"Your happiness matters. More than you probably realize.",

"I think today deserves a happy dance. 😄",

"Take lots of pictures... moments like these deserve to be remembered.",

"I'll be rooting for you and your happiness, always.",

"Every smile tells a story. I hope yours keeps getting brighter.",

"You've got something beautiful to celebrate today.",

"Sometimes life surprises us in the best possible way... and I think today is one of those days.",

"Keep shining just the way you are. ✨",

"You've made me smile too. Thanks for sharing this with me.",

"I'm genuinely, truly happy for you. 💙"

],

angry: [

"I can tell something really upset you. 💙",

"It's okay to feel angry. Your emotions matter.",

"Take your time... I'm listening.",

"You don't have to hide your frustration here.",

"That sounds really unfair. I'd probably feel upset too.",

"I'm sorry you're dealing with this.",

"I can understand why you're feeling this way.",

"Sometimes anger is just pain asking to be noticed.",

"Whatever happened, I'm here to listen.",

"You don't have to carry all this frustration alone.",

"It's okay if today tested your patience.",

"I'm glad you're talking instead of keeping everything inside.",

"Take one slow breath... there's no rush.",

"You've been holding a lot in, haven't you?",

"I know it feels overwhelming right now.",

"It's okay to take a step back before reacting.",

"Not every situation deserves your peace. 💙",

"Sometimes walking away is the strongest response.",

"You deserve to be treated with respect.",

"I know this situation hurt you.",

"Your anger doesn't make you a bad person.",

"Even kind people get angry sometimes.",

"It's okay to say, 'I'm not okay right now.'",

"You don't have to solve everything immediately.",

"I'm here with you.",

"Take a moment for yourself before making any decision.",

"You've handled difficult situations before. I believe in you.",

"Right now, your peace is more important than proving a point.",

"I know your emotions feel intense right now.",

"You don't have to respond to everything instantly.",

"It's okay if you need a break.",

"You're allowed to protect your peace.",

"I hope you're being kind to yourself too.",

"Anger usually hides another emotion underneath.",

"I wonder... did something hurt you deeply?",

"It's okay to feel disappointed.",

"Not everyone deserves your energy.",

"You deserve better than constant stress.",

"Take a deep breath. One step at a time.",

"You don't have to carry this all day.",

"I'm really glad you're talking about it.",

"You've got every right to express your feelings respectfully.",

"I know this isn't easy.",

"You're stronger than this moment.",

"Your feelings deserve to be heard.",

"I hope things become clearer soon.",

"You don't have to fight every battle.",

"Some arguments aren't worth losing your peace over.",

"I know you're trying your best.",

"Let's not let one bad moment ruin your whole day.",

"You've already survived worse than this.",

"I'm here for as long as you need.",

"Your heart deserves peace.",

"I believe calmer moments are waiting for you.",

"Sometimes silence protects your peace better than arguments.",

"I hope tomorrow feels lighter than today.",

"You matter more than this situation.",

"You're not alone in this.",

"Thank you for trusting me with your feelings.",

"I'm proud of you for talking instead of bottling everything up. 💙"

],

anxious: [

"Hey... it's okay. I'm here with you. 💙",

"Take a slow breath with me. We don't have to rush anything.",

"I know your mind might be racing right now.",

"You're safe here. Let's take this one moment at a time.",

"It's okay to feel anxious. You're not alone.",

"I know overthinking can be really exhausting.",

"You don't have to figure everything out right now.",

"Let's focus on what's happening in this moment, not every 'what if.'",

"I'm listening. What's making you feel this way?",

"You're carrying a lot in your mind, aren't you?",

"Take a deep breath... inhale slowly... and exhale gently. 🌸",

"Your feelings are real, and they deserve kindness.",

"It's okay if things feel overwhelming right now.",

"You've made it through anxious moments before. You can get through this one too.",

"Don't be hard on yourself for feeling this way.",

"Sometimes our minds create storms that aren't as big as they seem.",

"You don't have to fight every thought that comes into your mind.",

"I'm here with you, one breath at a time.",

"You don't have to be perfect.",

"Your thoughts don't define who you are.",

"It's okay to slow down.",

"You've already done something brave by talking about it.",

"You don't have to carry this alone.",

"Let's take things one small step at a time.",

"I know it feels scary, but you're stronger than you think.",

"Even if your thoughts feel loud, you don't have to believe every single one of them.",

"Be gentle with yourself today.",

"You deserve peace just as much as anyone else.",

"Your heart has been carrying so much lately.",

"You don't have to pretend you're okay.",

"I'm proud of you for reaching out.",

"It's okay if today feels difficult.",

"Let's not think about next week. Let's just get through this moment together.",

"I know uncertainty can be really uncomfortable.",

"Your mind deserves a little rest too.",

"Remember... you don't have to have all the answers today.",

"I believe in your strength, even if you can't feel it right now.",

"You've survived every anxious day before this one.",

"Nothing is wrong with you for feeling anxious.",

"It's okay to pause.",

"Sometimes taking one slow breath is enough for now.",

"You're doing better than your anxiety is telling you.",

"I know this feeling is uncomfortable, but it won't stay forever.",

"Take your time. There's no pressure here.",

"You matter, even on your hardest days.",

"I'm really glad you decided to talk instead of keeping everything inside.",

"Thank you for trusting me with your feelings.",

"I hope you know you don't have to face this by yourself.",

"Let's get through this together. 💙",

"One breath... one thought... one step at a time.",

"I know your mind wants certainty, but it's okay not to have every answer right now.",

"You're allowed to rest.",

"You're stronger than this anxious moment.",

"I'll stay here with you for as long as you need.",

"You're not broken. You're simply having a hard moment.",

"I hope you can be as kind to yourself as you would be to someone you love.",

"You've got this... and I'll be here cheering you on. 💙",

"Let's breathe together. You're not alone.",

"I believe calmer moments are waiting for you."

],

lonely: [

"Hey... I'm really glad you reached out. You don't have to sit with these feelings alone. 💙",

"Feeling lonely can be really heavy. Thank you for sharing it with me.",

"I'm here to listen, no matter what's on your mind.",

"I'm sorry you're feeling this way.",

"Even if today feels lonely, it doesn't mean you'll always feel this way.",

"You deserve people who make you feel seen and valued.",

"Sometimes loneliness isn't about being alone... it's about feeling unseen.",

"I know this feeling can be difficult to carry.",

"You don't have to pretend everything is okay here.",

"I'm really glad you decided to talk instead of keeping it all inside.",

"You matter more than you realize.",

"I know it hurts when you feel like no one understands.",

"Your feelings are completely valid.",

"Some days feel quieter than others, and that's okay.",

"I wish I could remind you how important you are.",

"You deserve kindness, care, and genuine connections.",

"I'm listening... take your time.",

"Thank you for trusting me with your feelings.",

"You don't have to carry this weight by yourself.",

"I know loneliness can make even small things feel harder.",

"You are not invisible.",

"Even if it doesn't feel like it right now, your presence matters.",

"You've made it through lonely days before, and I'm proud of you for that.",

"It's okay to miss people.",

"It's okay to wish someone understood you better.",

"You deserve people who choose you, appreciate you, and care about you.",

"Your story matters.",

"I'm really happy you're here talking with me.",

"You don't have to have the perfect words. I'm still listening.",

"I know your heart feels a little heavy today.",

"It's okay to slow down and just breathe.",

"You are worthy of love and care exactly as you are.",

"Please don't let loneliness convince you that you don't matter.",

"You matter. Truly.",

"I hope you never forget how valuable you are.",

"I'm here with you, one message at a time.",

"You've already been so strong.",

"Loneliness doesn't define who you are.",

"Your heart deserves warmth and peace.",

"You deserve genuine friendships and meaningful connections.",

"I know it may not feel like it today, but brighter days do come.",

"Sometimes one conversation can make a difficult day feel a little lighter.",

"I'm glad we're talking right now.",

"Thank you for not giving up on reaching out.",

"You deserve to feel heard.",

"Take one deep breath... we'll get through this moment together.",

"You don't have to hide your feelings from me.",

"Even if today feels empty, tomorrow can bring something unexpected.",

"I believe there are beautiful connections waiting for you.",

"You've survived every difficult day so far.",

"You're stronger than your loneliness makes you feel.",

"I'll keep listening for as long as you need.",

"I hope you can be as kind to yourself as you would be to someone you love.",

"You deserve peace, comfort, and people who genuinely care.",

"You're not 'too much.' Your feelings deserve space too.",

"One lonely day doesn't define your whole life.",

"I'm proud of you for opening up.",

"You are enough, exactly as you are. 💙",

"I truly hope tomorrow feels a little lighter for you."

],

tired: [

"You sound really exhausted. 💙 I think you've been carrying a lot lately.",

"It's okay to admit you're tired. You don't have to be strong every single day.",

"You've been trying so hard... maybe it's okay to rest for a while.",

"I hope you know that resting isn't being lazy.",

"Your body and your mind both deserve a break.",

"Take a deep breath. You don't have to finish everything today.",

"You've done enough for today. Please don't be too hard on yourself.",

"I know you're feeling drained.",

"Sometimes being mentally tired feels even heavier than being physically tired.",

"It's okay if all you can do today is rest.",

"You've been giving so much of yourself lately.",

"Take a moment... your well-being matters too.",

"Even your strongest version needs rest sometimes.",

"You don't need permission to take care of yourself.",

"One slow step at a time is enough today.",

"I hope you can get some proper rest soon. You deserve it.",

"You've been carrying responsibilities for so long.",

"Please don't ignore what your body is trying to tell you.",

"It's okay if today wasn't productive.",

"You are not a machine. 💙",

"You don't have to earn your rest.",

"Being tired doesn't mean you're weak.",

"I know everything feels heavier when you're exhausted.",

"Your energy will come back... be patient with yourself.",

"Take a short break without feeling guilty.",

"You've already done more than you realize.",

"Rest is part of progress too.",

"Please drink some water and take a few slow breaths. 🌸",

"I know your mind probably wants to keep going, but your body deserves kindness too.",

"It's okay if you're feeling emotionally drained.",

"You've been carrying invisible battles.",

"Sometimes the bravest thing you can do is pause.",

"Don't forget to take care of yourself while taking care of everything else.",

"I hope tomorrow feels a little lighter.",

"Take today one hour at a time.",

"You don't need to have everything figured out before you rest.",

"I'm proud of you for making it through today.",

"Your effort hasn't gone unnoticed.",

"Be gentle with yourself.",

"I know you're trying your best.",

"You deserve peaceful moments too.",

"Close your eyes for a minute and just breathe.",

"Your mind deserves some quiet.",

"Even a small break can make a difference.",

"You've already come so far.",

"It's okay if today feels slower than usual.",

"You don't have to push yourself beyond your limits.",

"You've been incredibly strong for a long time.",

"I hope you find a little peace today.",

"You've earned the right to slow down.",

"Take care of yourself the way you'd care for someone you love.",

"Tomorrow is another chance. Today, let yourself breathe.",

"I believe better days are waiting after this exhaustion.",

"You matter more than your to-do list.",

"Take one deep breath... you're doing okay.",

"I'm really glad you shared this with me.",

"Thank you for taking a moment to check in with yourself.",

"You deserve rest without guilt.",

"I'll be here whenever you're ready again. 💙"

],

motivation: [

"I believe in you, even on the days you don't believe in yourself. 💙",

"You've already overcome so much. Don't underestimate your strength.",

"Progress doesn't have to be fast to be meaningful.",

"One small step today is still a step forward.",

"You don't need to be perfect. You just need to keep going.",

"Every difficult chapter eventually becomes part of your success story.",

"You're capable of more than your doubts make you believe.",

"Take it one day, one task, one breath at a time.",

"Don't compare your journey with someone else's.",

"You're growing, even if it doesn't feel like it yet.",

"Some days are for achieving, and some days are simply for surviving. Both matter.",

"Be proud of how far you've already come.",

"Success is built from small, consistent efforts.",

"You've got everything it takes to overcome this.",

"Believe in your progress, even if it's slow.",

"You're stronger than the obstacles in front of you.",

"Every new day is another opportunity to begin again.",

"You don't have to have it all figured out today.",

"Keep showing up for yourself. That's what truly matters.",

"The fact that you're still trying says a lot about your courage.",

"Your future self will thank you for not giving up today.",

"One setback doesn't define your entire journey.",

"You're allowed to restart as many times as you need.",

"Don't let one bad day make you forget all the good you've done.",

"Your dreams are still worth chasing.",

"Take a deep breath... you've got this.",

"The strongest people aren't the ones who never fall—they're the ones who keep getting back up.",

"Your effort matters, even when the results take time.",

"Small wins deserve to be celebrated too. 🌸",

"You've survived every difficult day so far.",

"You're doing better than you think.",

"Don't let fear decide your future.",

"Keep moving at your own pace.",

"Every step forward counts.",

"You have so much potential waiting to shine.",

"Today is another chance to believe in yourself.",

"Never forget how resilient you truly are.",

"The hardest part is often just starting.",

"Trust yourself—you've made it through tough times before.",

"You deserve every bit of success you're working towards.",

"Be patient with yourself. Growth takes time.",

"Your journey is uniquely yours, and that's something to be proud of.",

"You don't have to be fearless to move forward.",

"I'm rooting for you. 💙",

"You are capable, worthy, and enough.",

"Keep your head up. Better days are ahead.",

"Your story isn't over yet.",

"You've got this, one step at a time.",

"I'm proud of the effort you're putting in.",

"Keep believing in yourself—you've come too far to stop now."

],

greeting: [

"Hey! 👋 It's really nice to see you. How are you feeling today?",

"Hi there! 💙 I'm glad you're here. What's on your mind?",

"Hello! How's your day been so far?",

"Welcome back! It's always nice to chat with you. 😊",

"Hey! I'm here to listen. What's been going on?",

"Hi! How are you feeling today?",

"It's good to see you again. Tell me, how have things been?",

"Hello! I hope you're doing okay today. 💙",

"Hey! Thanks for stopping by. How can I help you today?",

"Hi there! Whether you're having a great day or a difficult one, I'm here to listen.",

"Welcome! Take your time—I'm all ears.",

"Hey! Is there something you'd like to talk about today?",

"Hi! I'm really glad you decided to check in.",

"Hello! Let's have a little chat. What's on your mind?",

"Hey! No pressure at all—just tell me how you're feeling.",

"Welcome back! I hope I can make your day a little lighter. 🌸",

"Hi! It's always a good time to check in with yourself. How are you doing?",

"Hello! I'm here whenever you need someone to listen.",

"Hey there! Ready to talk, vent, or just chat for a while?",

"Hi! Whatever you're feeling today, you're welcome here. 💙"

],

};

const followUpsEnglish = {

happy: [
"😊 Aww... tell me more! What made your day better?",
"🌈 That's wonderful! Want to share the good news?",
"✨ I'd love to hear what made you smile today."
],

sad: [
"💙 Would you like to tell me what happened?",
"🌸 Has this feeling been there for a while?",
"🫂 Do you want to talk about what's making you feel low?"
],

stress: [
"📚 Is your stress mostly because of studies, work, family, or something else?",
"💙 What's been stressing you the most lately?",
"🌿 Has something happened recently that's making you feel overwhelmed?"
],

anxious: [
"🌸 What's worrying you the most right now?",
"💙 Is something specific making you anxious?",
"🌿 Would talking about it help a little?"
],

angry: [
"🍃 Would you like to tell me what happened?",
"💙 Did someone upset you today?",
"🌿 Do you want to vent a little?"
],

lonely: [
"❤️ Is there someone you're missing?",
"💙 Do you feel like talking about what's making you feel lonely?",
"🫂 I'm here to listen. Take your time."
],

tired: [
"😴 Is it physical tiredness or mental exhaustion?",
"🌿 Have you been getting enough rest lately?",
"💙 It's okay to slow down. Want to tell me what's been exhausting you?"
],

motivation: [
"✨ What's one small goal you'd like to achieve today?",
"💙 Want me to cheer you on?",
"🌸 Every small step counts. What's your next one?"
]

};

function addUserMessage(text) {

    if (!chatBox) return;

    const msg = document.createElement("div");
    msg.className = "user-message";
    msg.innerHTML = text;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(text) {

    if (!chatBox) return;

    const msg = document.createElement("div");
    msg.className = "bot-message";
    msg.innerHTML = text;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

if (sendBtn && userInput) {

    sendBtn.onclick = () => {

        const text = userInput.value.trim();

        if (text === "") return;

        addUserMessage(text);

        userInput.value = "";

        const typing = document.createElement("div");

typing.className = "bot-message";
typing.id = "typing";

typing.innerHTML = "🤖 GenAI is typing...";

chatBox.appendChild(typing);

chatBox.scrollTop = chatBox.scrollHeight;

setTimeout(() => {

    typing.remove();

    let message = text.toLowerCase();
    let category = "default";
    const isHindi =
/(hai|nhi|kyu|kya|mujhe|mera|meri|main|mai|acha|accha|thik|yaar|yr|bohot|bahut|padhai|ghar|dost|akela|rona)/i.test(text);


    if(
message.includes("stress") ||
message.includes("tension") ||
message.includes("exam") ||
message.includes("pressure") ||
message.includes("study") ||
message.includes("college") ||
message.includes("assignment") ||
message.includes("padhai") ||
message.includes("dar") ||
message.includes("nervous")
){
category="stress";
}

else if (
    message.includes("sad") ||
message.includes("cry") ||
message.includes("hurt") ||
message.includes("rona") ||
message.includes("dukhi") ||
message.includes("upset") ||
message.includes("heartbroken")
){
    category = "sad";
}
else if (
    message.includes("happy") ||
message.includes("khush") ||
message.includes("great") ||
message.includes("awesome") ||
message.includes("excited")
){
    category = "happy";
}
    else if(
message.includes("angry") ||
message.includes("mad") ||
message.includes("anger") ||
message.includes("gussa") ||
message.includes("gusse") ||
message.includes("irritated") ||
message.includes("frustrated") ||
message.includes("annoyed") ||
message.includes("chid") ||
message.includes("ghussa")
){
    category = "angry";
}
    
    else if(
message.includes("anxious") ||
message.includes("anxiety") ||
message.includes("nervous") ||
message.includes("panic") ||
message.includes("worried") ||
message.includes("worry") ||
message.includes("dar") ||
message.includes("ghabra") ||
message.includes("ghabrahat") 

){
    category = "anxious";
}
else if (
    message.includes("alone") ||
message.includes("lonely") ||
message.includes("akela") ||
message.includes("koi nahi")
){
    category = "lonely";
}
else if (
    message.includes("tired") ||
message.includes("thak") ||
message.includes("exhausted") ||
message.includes("sleep")
){
    category = "tired";
}

const replies = isHindi
? smartRepliesHindi
: smartRepliesEnglish;

const list = replies[category] || replies.default;
let reply = getRandomReply(list);

addBotMessage(reply);


// Follow-up after 2 seconds
setTimeout(() => {

    const follow =
    followUpsEnglish[category][
        Math.floor(Math.random() * followUpsEnglish[category].length)
    ];

    addBotMessage(follow);

}, 2000);

}, 1200);

    };

    // Enter key support
    userInput.addEventListener("keypress", function(e){

        if(e.key==="Enter"){

            sendBtn.click();

        }

    });

}

// ===============================
// Mood Summary
// ===============================

const todayMood = document.getElementById("todayMood");

if (todayMood) {

    const savedMood = localStorage.getItem("selectedMood");

    if (savedMood) {

        todayMood.innerHTML =
            `Today you're feeling <b>${savedMood}</b> 💙`;

    }

}
// ===============================
// Menu
// ===============================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.onclick = () => {

        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }

    };

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {

        if (
            !menu.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            menu.style.display = "none";
        }

    });

}

// ===============================
// Menu Buttons
// ===============================

const aboutMenu = document.getElementById("aboutMenu");
const clearChat = document.getElementById("clearChat");
const settingsMenu = document.getElementById("settingsMenu");
const historyMenu = document.getElementById("historyMenu");

if (aboutMenu) {

    aboutMenu.onclick = () => {

        alert(
`💙 GenAI

A safe place where every emotion matters.

Version : 1.0

Developed by Vanshika Nakra`
        );

        if(menu) menu.style.display="none";

    };

}

if (clearChat && chatBox) {

    clearChat.onclick = () => {

        chatBox.innerHTML = "";

        addBotMessage("💙 Chat cleared. I'm always here whenever you want to talk.");

        if(menu) menu.style.display="none";

    };

}

if (settingsMenu) {

    settingsMenu.onclick = () => {

        window.location.href = "setting.html";

    };

}

if (historyMenu) {

    historyMenu.onclick = () => {

        window.location.href = "history.html";

    };

}

// ===============================
// Quick Actions
// ===============================

const breatheBtn = document.getElementById("breatheBtn");
const calmBtn = document.getElementById("calmBtn");
const quoteBtn = document.getElementById("quoteBtn");

const quotes = [

"🌸 You are stronger than you think.",

"💙 One small step today is enough.",

"🌿 It's okay to rest. You don't have to be productive every moment.",

"☀️ Every day is a fresh beginning.",

"✨ You deserve kindness, especially from yourself.",

"🫂 Tough times don't last forever."

];

if (breatheBtn) {

    breatheBtn.onclick = () => {

        addBotMessage(`🌿 <b>Breathing Exercise</b><br><br>
Inhale for 4 seconds...<br>
Hold for 4 seconds...<br>
Exhale for 4 seconds...<br><br>
Repeat this 3 times. 💙`);

    };

}

if (calmBtn) {

    calmBtn.onclick = () => {

        addBotMessage(`🎵 Close your eyes...<br><br>
Relax your shoulders.<br>
Take slow breaths.<br>
Imagine you're sitting in a peaceful garden. 🌿`);

    };

}

if (quoteBtn) {

    quoteBtn.onclick = () => {

        const random =
            quotes[Math.floor(Math.random() * quotes.length)];

        addBotMessage(random);

    };

}
// ===============================
// Mood History Page
// ===============================

const historyList = document.getElementById("historyList");

if(historyList){

    const moodHistory =
    JSON.parse(localStorage.getItem("moodHistory")) || [];

    if(moodHistory.length===0){

        historyList.innerHTML=
        "<p>No mood history yet 💙</p>";

    }else{

        moodHistory.forEach(item=>{

            historyList.innerHTML+=`

            <div class="history-item">

            <h3>${item.mood}</h3>

            <p>${item.date}</p>

            </div>

            `;

        });

    }

}
// ===============================
// Self Care Tips
// ===============================

const careText = document.getElementById("careText");

if (careText) {

    const mood = localStorage.getItem("selectedMood");

    const tips = {

        Happy:
        "😊 Capture this beautiful moment. Share your smile with someone today.",

        Sad:
        "💙 Drink water, take slow breaths and talk to someone you trust.",

        Angry:
        "🍃 Step away for a few minutes and take deep breaths before reacting.",

        Tired:
        "😴 Give yourself permission to rest. Your body needs recovery.",

        Lonely:
        "🫂 Reach out to someone you care about or enjoy your favorite hobby.",

        Anxious:
        "🌿 Try the 4-4-4 breathing exercise and focus on the present moment."

    };

    careText.innerHTML =
        tips[mood] || "✨ Every emotion deserves kindness.";
}
const affirmations=[
"I am enough. 💙",
"I deserve peace and happiness. 🌸",
"I choose progress over perfection. 🌱",
"I am stronger than my fears. ✨",
"Today is a fresh start. ☀️",
"I believe in myself. 💜"
];

const affirmation=document.getElementById("affirmation");

if(affirmation){

affirmation.innerHTML=
affirmations[Math.floor(Math.random()*affirmations.length)];

}
const count=document.getElementById("charCount");

if(userInput && count){

userInput.maxLength=300;

userInput.addEventListener("input",()=>{

count.innerHTML=
userInput.value.length+" / 300";

});

}
const welcomeTitle=document.getElementById("welcomeTitle");

if(welcomeTitle){

const hour=new Date().getHours();

if(hour<12){

welcomeTitle.innerHTML="🌞 Good Morning";

}
else if(hour<18){

welcomeTitle.innerHTML="☀️ Good Afternoon";

}
else{

welcomeTitle.innerHTML="🌙 Good Evening";

}

}
// ===============================
// Emergency Calm Mode
// ===============================

const panicBtn = document.getElementById("panicBtn");

if (panicBtn) {

    panicBtn.onclick = () => {

        addBotMessage(`🫂 <b>Emergency Calm Mode</b><br><br>

1️⃣ Sit down comfortably.<br><br>

2️⃣ Breathe in for 4 seconds.<br>
Breathe out for 4 seconds.<br><br>

3️⃣ Look around and name:<br>

• 5 things you can see 👀<br>
• 4 things you can touch ✋<br>
• 3 things you can hear 👂<br>
• 2 things you can smell 👃<br>
• 1 thing you can taste 👅<br><br>

💙 You're safe. Take your time. One breath at a time.`);

    };

}
const wellnessBtn = document.getElementById("wellnessBtn");

if (wellnessBtn) {

    wellnessBtn.addEventListener("click", function () {

        window.location.href = "wellness.html";

    });

}

