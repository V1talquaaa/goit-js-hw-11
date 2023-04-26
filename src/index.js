import Notiflix from 'notiflix';
import axios from "axios";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import ImagesApiService from './api';
import LoadMoreBtn from './loadMoreBtn';

const KEY = '35656259-7e2fced7102c9b310ac9ede3a';
const URL = 'https://pixabay.com/api/';

const form = document.querySelector('.search-form');
const imagesWrapper = document.querySelector('.images-wrapper');


const imagesApiService = new ImagesApiService();


const loadMoreBtn = new LoadMoreBtn({
  selector: ".load-more",
  isHidden: true,
});


loadMoreBtn.button.addEventListener('click', fetchNewImages);

form.addEventListener('submit', onSurmitBtnClick);



function onSurmitBtnClick(e) {
    e.preventDefault();

    loadMoreBtn.show();

    const form = e.currentTarget;
    const query = form.elements.searchQuery.value;
    imagesApiService.query = query;
    
    imagesApiService.resetPage();
    clearImagesList();
    fetchNewImages().finally(() => form.reset());
    
 }

async function fetchNewImages() {
  loadMoreBtn.disable();
 
  try {
    const markup = await fetchImagesMarkup();
    updateImagesList(markup);
    loadMoreBtn.enable();
  } catch (err) {
    onError(err);
  }


}

async function fetchImagesMarkup() {

  try {
    const { hits } = await imagesApiService.fetchImages();

    // if(hits.length === 0) throw new Error('No data!');

    if(hits.length < 40 && hits.length > 1) {
      loadMoreBtn.hide();
  
      Notiflix.Notify.warning('We are sorry, but you have reached the end of search results')
    } else if(hits.length === 0) throw new Error('No data!');

    return hits.reduce((acc, hit) => acc + createMarkup(hit), "");

  } catch (err) {
    onError(err);
  }
  
}

function createMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
    return `
    <div class="photo-card">
  <img src=${largeImageURL} alt=${tags} loading="lazy" width=360 height=280>
  <div class="info">
    <p class="info-item">
      <br>Likes</br>
      ${likes}
    </p>
    <p class="info-item">
      <br>Views</br>
      ${views}
    </p>
    <p class="info-item">
      <br>Comments</br>
      ${comments}
    </p>
    <p class="info-item">
      <br>Downloads</br>
      ${downloads}
    </p>
  </div>
</div>
    `
}

function updateImagesList(markup) {
    if (markup !== undefined)
    imagesWrapper.insertAdjacentHTML('beforeend', markup);
    
}

function clearImagesList() {
  imagesWrapper.innerHTML = "";
}

function onError(err) {
    loadMoreBtn.hide();
    clearImagesList();
    console.error(err);
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    
};

