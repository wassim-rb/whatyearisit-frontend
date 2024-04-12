


fetch('https://whatyearisit-backend-ruby-three.vercel.app')
.then(response => response.json())

const now = new Date();

document.querySelector('#year').textContent = now.getFullYear()