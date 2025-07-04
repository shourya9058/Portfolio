document.addEventListener('DOMContentLoaded', function() {
    // Hero section effects
    const hero = document.querySelector('.hero');
    if (hero) {
        createHeroEffects(hero);
    }
    
    // Education section effects
    const educationSection = document.getElementById('education');
    if (educationSection) {
        createEducationEffects(educationSection);
    }

    // Create floating elements with different shapes
    function createFloatingElements() {
        const elementCount = 20;
        const container = document.createElement('div');
        container.className = 'floating-elements';
        hero.appendChild(container);

        for (let i = 0; i < elementCount; i++) {
            const element = document.createElement('div');
            const isCircle = Math.random() > 0.5;
            element.className = `floating-element ${isCircle ? 'circle' : 'square'}`;
            
            // Random properties
            const size = Math.random() * 10 + 5; // 5-15px
            const posX = Math.random() * 100; // 0-100%
            const posY = Math.random() * 120 - 10; // -10% to 110%
            const duration = Math.random() * 40 + 40; // 40-80s
            const delay = Math.random() * -40; // Start at different times
            const opacity = Math.random() * 0.1 + 0.05; // 0.05-0.15
            const scale = Math.random() * 0.5 + 0.5; // 0.5-1.0
            const rotation = Math.random() * 360; // 0-360 degrees
            
            // Set styles
            element.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${posX}%;
                top: ${posY}%;
                opacity: ${opacity};
                transform: rotate(${rotation}deg) scale(${scale});
                animation: float ${duration}s ease-in-out ${delay}s infinite;
                will-change: transform, opacity;
            `;
            
            container.appendChild(element);
        }
    }

    // Create interactive particles
    function createInteractiveParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'interactive-particles';
        hero.appendChild(particlesContainer);

        const particleCount = 30;
        let particles = [];
        let mouseX = 0;
        let mouseY = 0;
        let mouseRadius = 100;

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 4 + 1; // 1-5px
            const posX = Math.random() * 100; // 0-100%
            const posY = Math.random() * 100; // 0-100%
            
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${posX}%;
                top: ${posY}%;
                opacity: ${Math.random() * 0.3 + 0.1};
                animation: float ${Math.random() * 20 + 10}s ease-in-out ${Math.random() * -20}s infinite;
            `;
            
            particles.push({
                element: particle,
                x: posX,
                y: posY,
                vx: Math.random() * 2 - 1,
                vy: Math.random() * 2 - 1,
                size: size
            });
            
            particlesContainer.appendChild(particle);
        }

        // Mouse move interaction
        document.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width) * 100;
            mouseY = ((e.clientY - rect.top) / rect.height) * 100;
        });

        // Animation loop
        function animate() {
            particles.forEach(particle => {
                // Mouse interaction
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouseRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (mouseRadius - distance) / mouseRadius * 0.5;
                    particle.vx -= Math.cos(angle) * force;
                    particle.vy -= Math.sin(angle) * force;
                }
                
                // Update position
                particle.x += particle.vx * 0.1;
                particle.y += particle.vy * 0.1;
                
                // Bounce off edges
                if (particle.x < 0 || particle.x > 100) particle.vx *= -0.8;
                if (particle.y < 0 || particle.y > 100) particle.vy *= -0.8;
                
                // Apply friction
                particle.vx *= 0.98;
                particle.vy *= 0.98;
                
                // Update DOM
                particle.element.style.left = `${Math.max(-10, Math.min(110, particle.x))}%`;
                particle.element.style.top = `${Math.max(-10, Math.min(110, particle.y))}%`;
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    // Create connecting lines
    function createConnectingLines() {
        const linesContainer = document.createElement('div');
        linesContainer.className = 'connecting-lines';
        hero.appendChild(linesContainer);
        
        // Add some fixed points
        for (let i = 0; i < 8; i++) {
            const point = document.createElement('div');
            point.className = 'connection-point';
            point.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                opacity: ${Math.random() * 0.2 + 0.05};
                animation: pulse ${Math.random() * 10 + 5}s ease-in-out infinite;
            `;
            linesContainer.appendChild(point);
        }
    }

function createHeroEffects(hero) {
    createFloatingElements(hero);
    createInteractiveParticles(hero);
    createConnectingLines(hero);
}

function createEducationEffects(educationSection) {
    // Create particles container if it doesn't exist
    let particlesContainer = document.getElementById('education-particles');
    if (!particlesContainer) {
        particlesContainer = document.createElement('div');
        particlesContainer.id = 'education-particles';
        educationSection.insertBefore(particlesContainer, educationSection.firstChild);
    }

    // Particle configuration
    const particleCount = 30;
    const colors = ['#8a2be2', '#4b0082', '#c084fc', '#b388ff', '#c9a8ff'];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'education-particle';
        
        // Random properties
        const size = Math.random() * 5 + 2; // 2-7px
        const posX = Math.random() * 100; // 0-100%
        const posY = Math.random() * 100; // 0-100%
        const duration = Math.random() * 15 + 15; // 15-30s
        const delay = Math.random() * -15; // Start at different times
        const opacity = Math.random() * 0.4 + 0.1; // 0.1-0.5
        const color = colors[Math.floor(Math.random() * colors.length)];
        const blur = Math.random() * 5 + 2; // 2-7px
        
        // Set styles
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}%;
            top: ${posY}%;
            opacity: ${opacity};
            background: ${color};
            box-shadow: 0 0 ${blur}px ${blur}px ${color};
            animation: float-education ${duration}s ease-in-out ${delay}s infinite;
            will-change: transform, opacity;
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add connecting lines between particles
    function updateConnections() {
        const particles = document.querySelectorAll('.education-particle');
        const maxDistance = 150; // Maximum distance for connection
        
        // Clear previous connections
        const existingLines = document.querySelectorAll('.education-connection-line');
        existingLines.forEach(line => line.remove());
        
        // Create new connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i].getBoundingClientRect();
                const p2 = particles[j].getBoundingClientRect();
                
                const x1 = p1.left + p1.width / 2;
                const y1 = p1.top + p1.height / 2;
                const x2 = p2.left + p2.width / 2;
                const y2 = p2.top + p2.height / 2;
                
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                
                if (distance < maxDistance) {
                    const line = document.createElement('div');
                    line.className = 'education-connection-line';
                    
                    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                    const length = distance;
                    const opacity = 1 - (distance / maxDistance) * 0.9; // Fade out as distance increases
                    
                    line.style.cssText = `
                        position: absolute;
                        left: ${x1}px;
                        top: ${y1}px;
                        width: ${length}px;
                        height: 1px;
                        background: linear-gradient(90deg, rgba(138, 43, 226, ${opacity * 0.3}), rgba(192, 132, 252, ${opacity * 0.3}));
                        transform-origin: 0 0;
                        transform: rotate(${angle}deg);
                        z-index: 0;
                        pointer-events: none;
                    `;
                    
                    document.body.appendChild(line);
                }
            }
        }
    }
    
    // Update connections on scroll and resize
    let isUpdating = false;
    function handleUpdate() {
        if (!isUpdating) {
            isUpdating = true;
            requestAnimationFrame(() => {
                updateConnections();
                isUpdating = false;
            });
        }
    }
    
    window.addEventListener('scroll', handleUpdate, { passive: true });
    window.addEventListener('resize', handleUpdate);
    
    // Initial connection update
    setTimeout(updateConnections, 1000);
}
});
