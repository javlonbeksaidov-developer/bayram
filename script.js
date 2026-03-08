// Classmates Data
const classmates = [
    'Abruyeva E\'zoza',
    'Annaqulova Dilshoda',
    'Bekmamatova Shirin',
    'Bigmamatova Shahrizoda',
    'Elamanova Sevinch',
    'Jabborova Zilola',
    'Mamadullayeva Marvarid',
    'Mamatova Durdona',
    'Musayeva Nafosat',
    'Normurodova Sevinch',
    'O\'ktamova Lobar',
    'Osmonova Sabina',
    'Samandarova Jasmina',
    'Sharipova Ruxshona',
    'Shodiyeva Marjona',
    'Umarova Sabrina'
];

// Greeting Messages
const greetings = [
    'Sizga baxt, omad va go\'zal hayot tilaymiz!',
    'Siz har doim eng yaxshisiz, baxtli bo\'ling!',
    'Sizning tabassumingiz dunyoni yoritadi!',
    'Sizga muvaffaqiyat va omad yo\'l ochsin!',
    'Siz har qanday ishning eng yaxshisiga loyiqsiz!',
    'Sizning quvvatingiz va go\'zalligingizga hayronamiz!',
    'Sizga yorqin kelajak va baxtli kunlar tilaymiz!',
    'Siz sinfimizning bezagisiz, har doim g\'urur bilan eslaymiz!',
    'Sizning orzuingiz amalga ohsin, baxtli bo\'ling!',
    'Sizga sevgi, mehr va do\'stlik tilaymiz!',
    'Siz har doim yorqin bo\'ling, yulduzlardan porlayin!',
    'Sizning ijobiy energiyangiz barchani ilhomlantiradi!',
    'Sizga sog\'liq, baxt va muvaffaqiyat tilaymiz!',
    'Siz har doim eng chiroyli va aqlli bo\'lasiz!',
    'Sizning qalbingizdek toza va go\'zal bo\'ling!',
    'Sizga yaxshilik, xayr-ehson va rahmat tilaymiz!'
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeBackgroundEffects();
    initializeTypingAnimation();
    initializeGridCards();
    initializeSurpriseButton();
    initializeScrollAnimations();
    initializeFireworks();
    initializeParallax();
});

// Create Background Effects
function initializeBackgroundEffects() {
    createStars();
    createFloatingHearts();
    createSakuraPetals();
    createSparkles();
    create3DHearts();
}

// Create Stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create Floating Hearts
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💓', '💞', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 8 + 5) + 's';
        heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 13000);
    }, 800); // Increased frequency
}

// Create Sakura Petals
function createSakuraPetals() {
    const petalsContainer = document.querySelector('.sakura-petals');
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'sakura-petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (Math.random() * 8 + 8) + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';
        petal.style.width = (Math.random() * 20 + 10) + 'px';
        petal.style.height = petal.style.width;
        
        // Random petal colors
        const colors = [
            'linear-gradient(45deg, #ffb6c1, #ffc0cb)',
            'linear-gradient(45deg, #ffc0cb, #ffe4e1)',
            'linear-gradient(45deg, #ffd1dc, #ffb6c1)',
            'linear-gradient(45deg, #fff0f5, #ffd1dc)'
        ];
        petal.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        petalsContainer.appendChild(petal);
        
        setTimeout(() => petal.remove(), 16000);
    }, 600); // Increased frequency
}

// Create Sparkles
function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkle-particles');
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.width = (Math.random() * 6 + 2) + 'px';
        sparkle.style.height = sparkle.style.width;
        
        // Random sparkle colors
        const colors = ['#ffffff', '#fffacd', '#f0e68c', '#ffd700', '#ffeb3b'];
        sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        sparklesContainer.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 4000);
    }, 200); // Much higher frequency
}

// Create 3D Rotating Hearts
function create3DHearts() {
    const hearts3DContainer = document.querySelector('.rotating-hearts-3d');
    const heartSymbols = ['💖', '💕', '💗', '💝'];
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-3d';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 6 + 's';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        hearts3DContainer.appendChild(heart);
    }
}

// Typing Animation
function initializeTypingAnimation() {
    const text = "Aziz sinfdosh qizlarimiz, sizlarni 8-mart bayrami bilan tabriklaymiz!";
    const typingElement = document.getElementById('typingText');
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    
    setTimeout(typeText, 1000);
}

// Create Spiral Names
function initializeSpiralNames() {
    const spiralContainer = document.getElementById('namesSpiral');
    const spiralNames = [...classmates];
    const maxRadius = Math.min(window.innerWidth * 0.4, 200);
    
    spiralNames.forEach((name, index) => {
        const nameElement = document.createElement('div');
        nameElement.className = 'spiral-name';
        nameElement.textContent = name;
        
        // Create spiral positioning
        const angle = (index * 360) / spiralNames.length;
        const radius = (maxRadius / spiralNames.length) * (index + 1);
        const radian = (angle * Math.PI) / 180;
        
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;
        
        nameElement.style.left = `calc(50% + ${x}px - 50%)`;
        nameElement.style.top = `calc(50% + ${y}px - 50%)`;
        nameElement.style.transform = `translate(-50%, -50%)`;
        nameElement.style.animationDelay = `${index * 0.1}s`;
        
        nameElement.addEventListener('click', () => showGreeting(name, nameElement));
        
        spiralContainer.appendChild(nameElement);
    });
}

// Create Interactive Grid Cards
function initializeGridCards() {
    const gridContainer = document.getElementById('classmatesGrid');
    const icons = ['🌸', '💖', '✨', '🌺', '💫', '🎀', '🌹', '💝', '⭐', '🦋', '🌷', '💎', '🌙', '☀️', '🌈', '🎆'];
    const messages = [
        'Sizga 8-mart bayrami bilan chin dildan tabriklaymiz! 🌸',
        'Sizlarga baxt, omad va yaxshi niyatlar tilaymiz! 💝',
        'Siz har doim go\'zal va mehribon qizsiz! ✨',
        'Sizning qalbingizda samimiyat va mehr bor! 🌺',
        'Sizlarga hayotda har doim yorqin kunlar tilaymiz! �',
        'Har kuningiz quvonch va tabassumlar bilan o\'tsin! 🎀',
        'Sizning tabassumingiz atrofingizga nur sochadi! 🌹',
        'Sevgi va mehr siz bilan bo\'lsin, har dam! �',
        'Siz yulduzldek porlaysiz, osmonimizda! ⭐',
        'Sizlarga tinchlik, osoyishta va baxt tilaymiz! 🦋',
        'Hayot siz bilan go\'zal va yorqin bo\'lsin! 🌷',
        'Siz qimmatbaho va noyob insonsiz! 💎',
        'Tunlaringiz tinch va osoyishta bo\'lsin! 🌙',
        'Kunlaringiz quyoshdek yorug\' va iliq bo\'lsin! ☀️',
        'Hayotingiz kamaldek rangli va bayramona bo\'lsin! 🌈',
        '8-mart bayramingiz muborak bo\'lsin! �'
    ];
    
    classmates.forEach((name, index) => {
        const card = document.createElement('div');
        card.className = 'grid-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <span class="grid-card-icon">${icons[index]}</span>
            <h4>${name}</h4>
            <p>${messages[index]}</p>
        `;
        
        card.addEventListener('click', () => {
            showGreeting(name, card);
            createCardBurst(card);
        });
        
        gridContainer.appendChild(card);
    });
}

// Create Card Burst Effect
function createCardBurst(element) {
    const rect = element.getBoundingClientRect();
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '2000';
        
        const angle = (i * 360) / 20;
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos((angle * Math.PI) / 180) * velocity;
        const vy = Math.sin((angle * Math.PI) / 180) * velocity;
        
        document.body.appendChild(particle);
        
        let x = 0, y = 0, opacity = 1;
        const animate = () => {
            x += vx;
            y += vy;
            opacity -= 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
}
function initializeRotatingNames() {
    const namesCircle = document.getElementById('namesCircle');
    const radius = Math.min(window.innerWidth * 0.35, 180);
    const angleStep = 360 / classmates.length;
    
    classmates.forEach((name, index) => {
        const nameElement = document.createElement('div');
        nameElement.className = 'classmate-name';
        nameElement.textContent = name;
        
        const angle = index * angleStep;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;
        
        nameElement.style.left = `calc(50% + ${x}px - 50%)`;
        nameElement.style.top = `calc(50% + ${y}px - 50%)`;
        nameElement.style.transform = `translate(-50%, -50%)`;
        
        nameElement.addEventListener('click', () => showGreeting(name, nameElement));
        
        namesCircle.appendChild(nameElement);
    });
}

// Show Greeting Popup
function showGreeting(name, element) {
    const modal = document.getElementById('popupModal');
    const popupName = document.getElementById('popupName');
    const popupMessage = document.getElementById('popupMessage');
    
    popupName.textContent = name;
    popupMessage.textContent = greetings[Math.floor(Math.random() * greetings.length)];
    
    modal.classList.add('show');
    createFlowerBloom(element);
}

// Create Flower Bloom Animation
function createFlowerBloom(element) {
    const rect = element.getBoundingClientRect();
    const flowerContainer = document.createElement('div');
    flowerContainer.className = 'flower-bloom';
    flowerContainer.style.left = rect.left + rect.width / 2 + 'px';
    flowerContainer.style.top = rect.top + rect.height / 2 + 'px';
    
    const petalCount = 8;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const angle = (i * 360) / petalCount;
        const distance = 30;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;
        
        petal.style.left = x + 'px';
        petal.style.top = y + 'px';
        petal.style.transform = `rotate(${angle}deg)`;
        petal.style.background = `linear-gradient(45deg, hsl(${330 + i * 10}, 70%, 70%), hsl(${340 + i * 10}, 80%, 80%))`;
        
        flowerContainer.appendChild(petal);
    }
    
    document.body.appendChild(flowerContainer);
    setTimeout(() => flowerContainer.remove(), 1000);
}

// Initialize Surprise Button
function initializeSurpriseButton() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    
    surpriseBtn.addEventListener('click', () => {
        // Create falling flowers animation immediately
        createFallingFlowers();
        
        // Button animation
        surpriseBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            surpriseBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Falling Flowers Animation
function createFallingFlowers() {
    const flowers = ['🌸', '🌺', '🌹', '🌷', '🌷', '🌺', '🌸', '🌹'];
    const stars = ['⭐', '✨', '💫', '🌟', '💥', '🎆', '🎇', '🎊'];
    const colors = ['#ffb6c1', '#ffc0cb', '#ffd1dc', '#fff0f5'];
    
    // Create 100 flowers
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.cssText = `
                position: fixed;
                left: ${Math.random() * window.innerWidth}px;
                top: -50px;
                font-size: ${Math.random() * 25 + 15}px;
                z-index: 2500;
                pointer-events: none;
                animation: fallDown ${Math.random() * 3 + 4}s linear forwards;
            `;
            
            // Random petal colors
            const color = colors[Math.floor(Math.random() * colors.length)];
            flower.style.filter = `drop-shadow(0 0 10px ${color})`;
            
            document.body.appendChild(flower);
            
            // Remove after animation
            setTimeout(() => flower.remove(), 7000);
        }, i * 30);
    }
    
    // Create 50 stars
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.textContent = stars[Math.floor(Math.random() * stars.length)];
            star.style.cssText = `
                position: fixed;
                left: ${Math.random() * window.innerWidth}px;
                top: -50px;
                font-size: ${Math.random() * 20 + 10}px;
                z-index: 2500;
                pointer-events: none;
                animation: fallDown ${Math.random() * 2 + 3}s linear forwards;
            `;
            
            // Random star colors
            const starColors = ['#ffffff', '#fffacd', '#ffd700', '#ffeb3b', '#87ceeb'];
            const starColor = starColors[Math.floor(Math.random() * starColors.length)];
            star.style.filter = `drop-shadow(0 0 15px ${starColor})`;
            
            document.body.appendChild(star);
            
            // Remove after animation
            setTimeout(() => star.remove(), 5000);
        }, i * 40);
    }
}

// Gift Box Animation
function createGiftBox() {
    const giftBox = document.createElement('div');
    giftBox.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 150px;
        height: 150px;
        background: linear-gradient(45deg, #ff6b9d, #feca57);
        border: 3px solid #fff;
        border-radius: 10px;
        z-index: 3000;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        transform-style: preserve-3d;
        animation: giftBoxAppear 0.5s ease-out;
    `;
    
    // Create 3D cube faces
    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ff6348'];
    
    faces.forEach((face, index) => {
        const faceDiv = document.createElement('div');
        faceDiv.style.cssText = `
            position: absolute;
            width: 150px;
            height: 150px;
            background: ${colors[index]};
            border: 2px solid rgba(255,255,255,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 60px;
            color: white;
            font-weight: bold;
            opacity: 0.9;
        `;
        
        // Position each face
        switch(face) {
            case 'front':
                faceDiv.style.transform = 'translateZ(75px)';
                faceDiv.textContent = '🎁';
                break;
            case 'back':
                faceDiv.style.transform = 'rotateY(180deg) translateZ(75px)';
                faceDiv.textContent = '🎀';
                break;
            case 'left':
                faceDiv.style.transform = 'rotateY(-90deg) translateZ(75px)';
                faceDiv.textContent = '🌸';
                break;
            case 'right':
                faceDiv.style.transform = 'rotateY(90deg) translateZ(75px)';
                faceDiv.textContent = '💖';
                break;
            case 'top':
                faceDiv.style.transform = 'rotateX(90deg) translateZ(75px)';
                faceDiv.textContent = '✨';
                break;
            case 'bottom':
                faceDiv.style.transform = 'rotateX(-90deg) translateZ(75px)';
                faceDiv.textContent = '🎉';
                break;
        }
        
        giftBox.appendChild(faceDiv);
    });
    
    document.body.appendChild(giftBox);
    
    // Open gift box after 2 seconds
    setTimeout(() => {
        openGiftBox(giftBox);
    }, 2000);
}

// Open Gift Box
function openGiftBox(giftBox) {
    // Box opening animation
    giftBox.style.animation = 'giftBoxOpen 0.8s ease-out forwards';
    
    // Create explosion effects
    setTimeout(() => {
        createFireworks();
        createFlowerExplosion();
        createConfetti();
    }, 400);
    
    // Remove gift box after animation
    setTimeout(() => {
        giftBox.remove();
    }, 2000);
}

// Flower Explosion
function createFlowerExplosion() {
    const flowers = ['🌸', '🌺', '🌹', '🌷', '🌹', '🌺', '🌸', '🌷'];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < 40; i++) {
        const flower = document.createElement('div');
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            font-size: ${Math.random() * 30 + 20}px;
            z-index: 2500;
            pointer-events: none;
        `;
        
        const angle = (Math.PI * 2 * i) / 40;
        const velocity = Math.random() * 8 + 12; // Increased upward velocity
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity - 8; // Stronger upward bias
        
        document.body.appendChild(flower);
        
        let x = 0, y = 0, opacity = 1, rotation = 0, scale = 0;
        const animate = () => {
            x += vx;
            y += vy;
            vy += 0.3; // Less gravity for more upward movement
            opacity -= 0.008;
            rotation += 15;
            scale = Math.min(scale + 0.05, 1.5);
            
            flower.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
            flower.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                flower.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Add falling flowers animation to CSS
const fallingStyle = document.createElement('style');
fallingStyle.textContent = `
    @keyframes fallDown {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(fallingStyle);

// Enhanced Confetti
function createMassiveConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ff6348', '#00d2d3', '#a29bfe'];
    
    // Create 300 confetti pieces
    for (let i = 0; i < 300; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.width = (Math.random() * 15 + 5) + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            container.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 10);
    }
}

// Multiple Fireworks
function createMultipleFireworks() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFireworks();
        }, i * 300);
    }
}

// Heart Explosion
function createHeartExplosion() {
    const colors = ['#ff6b9d', '#ff1744', '#e91e63', '#f06292'];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.zIndex = '2000';
        heart.style.pointerEvents = 'none';
        
        const angle = (Math.PI * 2 * i) / 50;
        const velocity = Math.random() * 10 + 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(heart);
        
        let x = 0, y = 0, opacity = 1, scale = 1;
        const animate = () => {
            x += vx;
            y += vy;
            opacity -= 0.015;
            scale += 0.02;
            
            heart.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
            heart.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                heart.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Star Burst
function createStarBurst() {
    const starSymbols = ['⭐', '✨', '💫', '🌟'];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];
        star.style.position = 'fixed';
        star.style.left = centerX + 'px';
        star.style.top = centerY + 'px';
        star.style.fontSize = (Math.random() * 25 + 15) + 'px';
        star.style.zIndex = '2000';
        star.style.pointerEvents = 'none';
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = Math.random() * 8 + 4;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(star);
        
        let x = 0, y = 0, opacity = 1, rotation = 0;
        const animate = () => {
            x += vx;
            y += vy;
            opacity -= 0.02;
            rotation += 10;
            
            star.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
            star.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                star.remove();
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Ripple Effect
function createRippleEffect(button) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 0.6s ease-out';
    
    const rect = button.getBoundingClientRect();
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Screen Shake Effect
function createScreenShake() {
    document.body.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

// Enhanced Lightning Effect
function createLightningEffect() {
    // Multiple flashes
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const flash = document.createElement('div');
            flash.style.position = 'fixed';
            flash.style.top = '0';
            flash.style.left = '0';
            flash.style.width = '100%';
            flash.style.height = '100%';
            flash.style.background = `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(255,255,255,${0.6 + Math.random() * 0.4}) 0%, rgba(255,255,255,0) 70%)`;
            flash.style.zIndex = '1999';
            flash.style.pointerEvents = 'none';
            
            document.body.appendChild(flash);
            
            setTimeout(() => flash.remove(), 100 + Math.random() * 200);
        }, i * 150);
    }
}

// Add new animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes lightning {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes ripple {
        0% {
            width: 20px;
            height: 20px;
            opacity: 0.6;
        }
        100% {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger final greeting animations
                if (entry.target.id === 'finalGreeting') {
                    setTimeout(() => {
                        createConfetti();
                        createFireworks();
                    }, 500);
                }
            }
        });
    }, observerOptions);
    
    // Observe cards (optional animation enhancement)
    document.querySelectorAll('.greeting-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        // observer.observe(card); // Commented out since cards are now visible by default
    });
    
    // Observe grid cards (optional animation enhancement)
    document.querySelectorAll('.grid-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        // observer.observe(card); // Commented out since cards are now visible by default
    });
    
    // Observe final greeting
    const finalGreeting = document.getElementById('finalGreeting');
    if (finalGreeting) {
        observer.observe(finalGreeting);
    }
}

// Music Feature
function initializeMusic() {
    const musicBtn = document.getElementById('musicBtn');
    let isPlaying = false;
    
    // Create audio element (you'll need to add actual music file)
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmFgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    audio.loop = true;
    audio.volume = 0.3;
    
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            musicBtn.textContent = '🔊 Musiqa O\'chiriq';
        } else {
            audio.play().catch(e => console.log('Audio play failed:', e));
            musicBtn.textContent = '🔇 Musiqa Yoqilgan';
        }
        isPlaying = !isPlaying;
    });
}

// Fireworks
function initializeFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    window.createFireworks = function() {
        const particles = [];
        const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
        
        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.velocity = {
                    x: (Math.random() - 0.5) * 8,
                    y: (Math.random() - 0.5) * 8
                };
                this.life = 100;
                this.gravity = 0.05;
            }
            
            update() {
                this.velocity.y += this.gravity;
                this.x += this.velocity.x;
                this.y += this.velocity.y;
                this.life -= 2;
            }
            
            draw() {
                ctx.save();
                ctx.globalAlpha = this.life / 100;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }
        
        function createFirework() {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height * 0.5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            for (let i = 0; i < 50; i++) {
                particles.push(new Particle(x, y, color));
            }
        }
        
        function animate() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();
                
                if (particle.life <= 0) {
                    particles.splice(index, 1);
                }
            });
            
            if (particles.length > 0) {
                requestAnimationFrame(animate);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
        
        // Create multiple fireworks
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createFirework(), i * 200);
        }
        
        animate();
    };
}

// 3D Parallax Effect
function initializeParallax() {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        const hearts = document.querySelectorAll('.heart-3d');
        hearts.forEach((heart, index) => {
            const speed = (index + 1) * 0.5;
            const x = mouseX * speed * 20;
            const y = mouseY * speed * 20;
            
            heart.style.transform = `translate(${x}px, ${y}px) rotateY(${360 * (index + 1) / hearts.length}deg)`;
        });
    });
    
    // Device orientation for mobile
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (e) => {
            const tiltX = e.gamma / 90; // -1 to 1
            const tiltY = e.beta / 180; // -1 to 1
            
            const hearts = document.querySelectorAll('.heart-3d');
            hearts.forEach((heart, index) => {
                const speed = (index + 1) * 0.5;
                const x = tiltX * speed * 20;
                const y = tiltY * speed * 20;
                
                heart.style.transform = `translate(${x}px, ${y}px) rotateY(${360 * (index + 1) / hearts.length}deg)`;
            });
        });
    }
}

// Close Popup Modal
document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('popupModal').classList.remove('show');
});

document.getElementById('popupModal').addEventListener('click', (e) => {
    if (e.target.id === 'popupModal') {
        document.getElementById('popupModal').classList.remove('show');
    }
});

// Performance optimization
let ticking = false;
function requestTick(callback) {
    if (!ticking) {
        requestAnimationFrame(callback);
        ticking = true;
        setTimeout(() => { ticking = false; }, 100);
    }
}

// Smooth scroll performance
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
