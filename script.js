fetch('https://whatyearisit-backend-ruby-three.vercel.app')
.then(response => response.json())
.then(data => {
  document.querySelector('#msg').textContent = data.message;
});