const API_KEY = 'cb0a1a550fa040898fd088d54c2f7a16';
const API_URL = 'https://newsapi.org/v2/everything?q=apple&from=2024-03-06&to=2024-03-06&sor';

fetch(`${API_URL}&apiKey=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;

    const haberListesiElementi = document.getElementById('news-list');

    articles.forEach(article => {
      const haberElementi = document.createElement('div');
      haberElementi.classList.add('news');

      const haberBaslikElementi = document.createElement('h2');
      haberBaslikElementi.textContent = article.title;

      const haberAciklamaElementi = document.createElement('p');
      haberAciklamaElementi.textContent = article.description;

      const haberResimElementi = document.createElement('img');
      haberResimElementi.src = article.urlToImage;
      haberResimElementi.alt = article.title;

      const haberLinkElementi = document.createElement('a');
      haberLinkElementi.textContent = 'Read more';
      haberLinkElementi.href = article.url;
      haberLinkElementi.target = '_blank';

      haberElementi.appendChild(haberBaslikElementi);
      haberElementi.appendChild(haberResimElementi);
      haberElementi.appendChild(haberAciklamaElementi);
      haberElementi.appendChild(haberLinkElementi);

      haberListesiElementi.appendChild(haberElementi);
    });
  })
  .catch(error => {
    console.error('Error not found 404', error);
  });
