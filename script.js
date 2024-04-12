fetch('https://whatyearisit-backend-ruby-three.vercel.app')
.then(response => response.json())
.then(data => {querySelector('#year').textContent = data.year})
