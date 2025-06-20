const planets = {
    mercury: { radius: 30, speed: 0.02 },
    venus: { radius: 50, speed: 0.015 },
    earth: { radius: 80, speed: 0.01 },
    mars: { radius: 110, speed: 0.008 },
    jupiter: { radius: 150, speed: 0.005 },
    saturn: { radius: 180, speed: 0.004 },
    uranus: { radius: 220, speed: 0.003 },
    neptune: { radius: 250, speed: 0.002 }
};

const sun = document.getElementById('sun');
const planetsElements = document.querySelectorAll('.planet');

// Orbital Movement
function movePlanets() {
    const time = Date.now() / 1000; // Get current time in seconds

    Object.keys(planets).forEach(planetName => {
        const planet = document.getElementById(planetName);
        const planetData = planets[planetName];

        const angle = time * planetData.speed;
        const x = planetData.radius * Math.cos(angle);
        const y = planetData.radius * Math.sin(angle);

        planet.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(movePlanets);
}

movePlanets();

// Mouse interaction for rotating the Sun
document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (e.clientX - centerX) / 1000;
    const deltaY = (e.clientY - centerY) / 1000;

    sun.style.transform = `translate(-50%, -50%) rotate(${deltaX * 360}deg)`;
});
