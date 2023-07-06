import './faq.scss';

const onAccordion = document.getElementsByClassName('faq__accordion');
let i;

for (i = 0; i < onAccordion.length; i++) {
  onAccordion[i].addEventListener('click', function () {
    this.classList.toggle('active');

    let panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
