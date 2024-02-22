document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    let previousColor = '';

    document.getElementById('plus').addEventListener('click', function () {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        
        previousColor = body.style.backgroundColor;

        body.style.backgroundColor = randomColor;
    });

    document.getElementById('minus').addEventListener('click', function () {
        body.style.backgroundColor = previousColor;
    });
});
