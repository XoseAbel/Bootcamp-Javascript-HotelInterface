import { showElements } from '../../components/show-elements';
import { getNews } from './components/get-news';
import { hideElements } from '../../components/hide-elements';
const news = () => {
  const selectNews = document.querySelector('#selectNews');
  const newYorkTimesResult = document.querySelector('#newYorkTimesResult');
  hideElements([newYorkTimesResult]);
  selectNews?.addEventListener('change', () => {
    const newNews = getNews(selectNews.value);
    newNews.then(data => {
      newYorkTimesResult?.innerHTML = '';
      showElements([newYorkTimesResult]);
      for (let i = 0; i < 4; i++) {
        newYorkTimesResult.insertAdjacentHTML(
          'beforeend',
          `<h6>${data.results[i].title}</h6>`
        );
        newYorkTimesResult.insertAdjacentHTML(
          'beforeend',
          `<a class="pb-3"href="${data.results[i].url}">Link</a>`
        );
      }
    });
  });
};
export { news };
