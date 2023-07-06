import './feedback-form.scss';

const anchor = document.querySelector('.feedback-form__anchor');

const onClickAnchor = (evt) => {
  evt.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

if (anchor) {
  anchor.addEventListener('click', onClickAnchor);
}
