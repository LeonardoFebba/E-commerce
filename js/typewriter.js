const texts = [
    "Conectando decisões à excelência",
    "Moldando o futuro através de tecnologia",
    "Conectamos escolhas a oportunidades ilimitadas",
];

let currentTextIndex = 0; 
let currentIndex = 0;
const speed = 50; 
const repeatDelay = 2000; 

function typeWriter() {
    if (currentTextIndex < texts.length) {
        const currentText = texts[currentTextIndex];
        if (currentIndex < currentText.length) {
            document.getElementById("content").innerHTML += currentText.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                currentIndex = 0;
                currentTextIndex++;
                document.getElementById("content").innerHTML = "";
                typeWriter();
            }, repeatDelay);
        }
    } else {
        currentTextIndex = 0;
        typeWriter(); 
    }
}
window.onload = function () {
    typeWriter();
};