fetch('https://whatyearisit-backend-ruby-three.vercel.app/year')
.then(response => response.json())
.then(data => {document.querySelector('#year').textContent = data.year})
