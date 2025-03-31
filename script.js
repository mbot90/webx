// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initGlitchCanvas();
    initParticles();
    initCustomCursor();
    initMobileMenu();
    initRandomDare();
    initDareGallery();
    initLeaderboard();
    initFormSubmission();
    initCounterAnimation();
    initAudio();
});

// Glitch Background Canvas
function initGlitchCanvas() {
    const canvas = document.getElementById('glitchCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Glitch animation
    function glitchEffect() {
        // Clear canvas
        ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw glitch lines
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const width = Math.random() * 300 + 10;
            const height = Math.random() * 2 + 1;
            
            const colors = ['rgba(255, 0, 255, 0.3)', 'rgba(0, 255, 255, 0.3)', 'rgba(0, 255, 0, 0.3)'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            ctx.fillStyle = color;
            ctx.fillRect(x, y, width, height);
        }
        
        // Draw glitch blocks
        if (Math.random() > 0.7) {
            const blockSize = Math.random() * 100 + 50;
            const x = Math.random() * (canvas.width - blockSize);
            const y = Math.random() * (canvas.height - blockSize);
            
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(x, y, blockSize, blockSize);
        }
        
        requestAnimationFrame(glitchEffect);
    }
    
    glitchEffect();
    
    // Resize handler
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Particle Background
function initParticles() {
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#ff00ff", "#00ffff", "#00ff00"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {