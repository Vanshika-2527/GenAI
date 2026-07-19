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

const smartReplies = {
    stress: [
        "💙 It sounds like you've been carrying a lot lately. Would you like to tell me what's causing the most stress?",
        "🌿 You're doing your best, and that's enough. Let's take this one step at a time.",
        "🫂 Stress can feel heavy, but you don't have to carry it alone. I'm listening."
    ],

    sad: [
        "💙 I'm really sorry you're feeling this way. Thank you for trusting me enough to share it.",
        "🌸 It's okay to have difficult days. Your feelings are completely valid.",
        "🫂 I'm here with you. What happened today?"
    ],

    happy: [
        "😊 Aww, that made me smile too! What happened today?",
        "🌸 That's wonderful! I hope this happiness stays with you for a long time.",
        "✨ Celebrate even the small happy moments—they matter."
    ],

    angry: [
        "🍃 I understand why you might feel angry. Let's slow down together before reacting.",
        "💙 Your emotions matter. Want to tell me what happened?",
        "🌿 Sometimes talking about it helps more than keeping it inside."
    ],

    anxious: [
        "🌿 Anxiety can make everything feel overwhelming. Take one slow breath with me.",
        "💙 You're safe here. Let's focus on one thing at a time.",
        "🫂 You don't have to figure everything out right now."
    ],

    lonely: [
        "🫂 I'm really glad you reached out today. You're not alone here.",
        "💙 Feeling lonely can be painful. Would you like to talk about what's been on your mind?",
        "🌸 I'm here to listen for as long as you need."
    ],

    tired: [
        "😴 It sounds like you've been giving a lot of yourself lately.",
        "💙 Rest isn't a waste of time—it's part of healing.",
        "🌙 Be kind to yourself today."
    ],

    default: [
        "💙 Thank you for sharing that with me. Tell me a little more.",
        "🌸 I'm listening carefully. What happened next?",
        "🫂 I'm here with you. You don't have to go through this alone.",
        "✨ Your feelings matter. I'm glad you felt comfortable sharing them."
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

if (
    message.includes("stress") ||
    message.includes("exam") ||
    message.includes("pressure")
){
    category = "stress";
}
else if (
    message.includes("sad") ||
    message.includes("cry") ||
    message.includes("hurt")
){
    category = "sad";
}
else if (
    message.includes("happy") ||
    message.includes("great") ||
    message.includes("excited")
){
    category = "happy";
}
else if (
    message.includes("angry") ||
    message.includes("mad")
){
    category = "angry";
}
else if (
    message.includes("anxious") ||
    message.includes("anxiety") ||
    message.includes("nervous")
){
    category = "anxious";
}
else if (
    message.includes("lonely") ||
    message.includes("alone")
){
    category = "lonely";
}
else if (
    message.includes("tired") ||
    message.includes("exhausted")
){
    category = "tired";
}

const list = smartReplies[category];
const reply = list[Math.floor(Math.random() * list.length)];

addBotMessage(reply);

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

