const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
.typeString('Liceo Industrial Hardware')
.pauseFor(200)
.start();