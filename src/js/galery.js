import filmCard from '../templates/film-card.hbs';
import { fetchMovies } from './api';

const refs = {
  gallery: document.querySelector('.library__list'),
  modal: document.querySelector('.card'),
  closeModal: document.querySelector('.close-button'),
};

export function getColection() {
  fetchMovies().then(data => {
    renderGalery(data);
  });
}

function renderGalery({ results }) {
  const markup = results.map(filmCard);
  refs.gallery.insertAdjacentHTML('beforeend', markup.join(''));
}
