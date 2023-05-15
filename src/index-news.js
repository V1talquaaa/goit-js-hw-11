import { fetchNews } from './api-news';
import Notiflix from 'notiflix';
import LoadMoreBtn from './loadMoreBtn';
import NewsApiService from './api-news';



const form = document.querySelector('.search-form');
const newsWrapper = document.querySelector('.news-wrapper');


const loadMoreBtn = new LoadMoreBtn({
  selector: ".load-more1",
  isHidden: true,
})
const newsApiService = new NewsApiService();


form.addEventListener('submit', onSearch);
loadMoreBtn.button.addEventListener('click', fetchArticles);


async function onSearch(e) {
  e.preventDefault();
  loadMoreBtn.show();
  newsApiService.query = e.currentTarget.elements.searchQuery.value;
  newsApiService.resetPage();
  clearNewsList();
  fetchArticles();
  form.reset();


}

function clearNewsList() {
  newsWrapper.innerHTML = "";
}


async function fetchArticles() {
try {
  const markup = await getArticlesMarkup();
  newsWrapper.insertAdjacentHTML('beforeend', markup);
  loadMoreBtn.enable();
} catch (error) {
  onError();
}

}


async function getArticlesMarkup() {
  try {
    const {articles} = await newsApiService.getNews();

    if(articles.length === 0) throw new Error(onError());
  
    const markup = articles.reduce((acc, article) => acc + createMarkup(article), "");
  
    return markup;
    
  } catch (error) {
    Notiflix.Notify.failure('Помилка запиту з сервера')
  }

}


function createMarkup({title, author, url, urlToImage, description}) {
  return `
          <div class="article-card">
    <h2 class="article-title">${title}</h2>
    <h3 class="article-author">${author || 'Unknown'}</h3>
    <img src=${
      urlToImage ||
      'https://sun9-43.userapi.com/impf/c637716/v637716451/5754/CZa3BJtbJtg.jpg?size=520x0&quality=95&sign=02df8d0cd8ae78099bc1f50938efd60a'
    } class="article-img">
    <p class="article-description">${description}</p>
    <a href=${url} target="_blank" class="article-link">Read more</a>
  </div>
  ` ;
}

function onError() {
  loadMoreBtn.hide();
  Notiflix.Notify.failure('Нажаль по Ващому запиту нічого не знайдено');
}



// infinity scroll

window.addEventListener('scroll', handlescroll);

function handlescroll() {
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

  if(scrollTop + clientHeight >= scrollHeight - 5) {
    fetchArticles();
  }
}

// function createMarkup(articles) {
//   const markup = articles.map((article) => {
//     return `
//         <div class="article-card">
//     <h2 class="article-title">${article.title}</h2>
//     <h3 class="article-author">${article.author || 'Unknown'}</h3>
//     <img src=${
//       article.urlToImage ||
//       'https://sun9-43.userapi.com/impf/c637716/v637716451/5754/CZa3BJtbJtg.jpg?size=520x0&quality=95&sign=02df8d0cd8ae78099bc1f50938efd60a'
//     } class="article-img">
//     <p class="article-description">${article.description}</p>
//     <a href=${article.url} target="_blank" class="article-link">Read more</a>
// </div>
//     `
//   }).join("");

//   return markup;

// }





















// // loadMoreButton.addEventListener('click', onLoadMoreButtonClick);

// async function onSearch(e) {
//   e.preventDefault();
//   const query = e.currentTarget.elements.searchQuery.value.trim();
//   const { articles } = await fetchNews(query);
//   createMarkup(articles);
//   newsWrapper.insertAdjacentHTML('beforeend', createMarkup(articles));

// }

// function createMarkup(articles) {
//   const markup = articles.map(article => {
//     return `
//     <div class="article-card">
//     <h2 class="article-title">${article.title}</h2>
//     <h3 class="article-author">${article.author || 'Unknown'}</h3>
//     <img src=${
//       article.urlToImage ||
//       'https://sun9-43.userapi.com/impf/c637716/v637716451/5754/CZa3BJtbJtg.jpg?size=520x0&quality=95&sign=02df8d0cd8ae78099bc1f50938efd60a'
//     } class="article-img">
//     <p class="article-description">${article.description}</p>
//     <a href=${article.url} target="_blank" class="article-link">Read more</a>
// </div>
//     `
//   }).join("");
//   return markup;
// }
