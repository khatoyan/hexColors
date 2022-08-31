let b = document.querySelector('.but');
let text = document.querySelector('.hex-code')
let m = document.querySelector('.main')
text.textContent = '#2f7134';


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    m.style.background = color;
    text.textContent = color;
}
  

b.onclick = () => getRandomColor();