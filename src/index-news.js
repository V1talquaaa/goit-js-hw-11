import { fetchNews } from "./api-news";

const form = document.querySelector('.search-form');
const newsWrapper = document.querySelector('.news-wrapper');
const loadMoreButton = document.querySelector('.load-more1');

form.addEventListener('submit', onSearch);
loadMoreButton.addEventListener('click', onLoadMoreButtonClick);

function onLoadMoreButtonClick(e) {
    console.log('this is click');
    // const {articles} = await fetchNews(query);
    // markup(articles);
    // newsWrapper.insertAdjacentHTML("beforeend", markup);
  }

async function onSearch(e) {
    e.preventDefault();
    const query = e.currentTarget.elements.searchQuery.value;

    const {articles} = await fetchNews(query);

    if(articles.length === 0) throw new Error(err);
    console.log(articles);

   markup(articles);

    newsWrapper.insertAdjacentHTML('beforeend', markup);
    
  }

  
function markup(articles) {
    const markup = articles.map((article) => {
        return `
        <div class="article-card">
        <h2 class="article-title">${article.title}</h2>
        <h3 class="article-author">${article.author || "Unknown"}</h3>
        <img src=${
            article.urlToImage ||
          "https://sun9-43.userapi.com/impf/c637716/v637716451/5754/CZa3BJtbJtg.jpg?size=520x0&quality=95&sign=02df8d0cd8ae78099bc1f50938efd60a"
        } class="article-img">
        <p class="article-description">${article.description}</p>
        <a href=${article.url} target="_blank" class="article-link">Read more</a>
    </div>
        `
    }).join("");
}

