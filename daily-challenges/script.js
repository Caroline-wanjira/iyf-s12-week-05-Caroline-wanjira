function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colorBtn = document.getElementById('colorBtn');
const headings = document.querySelectorAll('h1, h2, h3');

colorBtn.addEventListener('click', () => {
  const randomColor = getRandomColor();
  headings.forEach(heading => {
    heading.style.color = randomColor;
  });
});
const addParaBtn = document.getElementById('addParaBtn');
const container = document.getElementById('paragraph-container');
let counter = 0;

addParaBtn.addEventListener('click', () => {
  counter++;

  // Use <article> as a semantic container for the paragraph and action button
  const article = document.createElement('article');
  article.style.display = 'flex';
  article.style.alignItems = 'center';
  article.style.gap = '10px';
  article.style.marginBottom = '5px';

  const p = document.createElement('p');
  p.textContent = `Paragraph number ${counter}`;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    article.remove();
  });

  article.appendChild(p);
  article.appendChild(deleteBtn);
  container.appendChild(article);
});
const toggleImgBtn = document.getElementById('toggleImgBtn');
const images = document.querySelectorAll('img');
let isHidden = false;

toggleImgBtn.addEventListener('click', () => {
  isHidden = !isHidden;
  images.forEach(img => {
    img.style.display = isHidden ? 'none' : 'block';
  });
  toggleImgBtn.textContent = isHidden ? 'Show Images' : 'Hide Images';
});
const source = document.getElementById('source');
const target = document.getElementById('target');
const copyBtn = document.getElementById('copyBtn');

// 1. Button click copy
copyBtn.addEventListener('click', () => {
  target.innerHTML = source.innerHTML;
});

// 2. Drag and Drop bonus
source.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/html', source.innerHTML);
});

target.addEventListener('dragover', (e) => {
  e.preventDefault(); // Required to allow drop
});

target.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/html');
  target.innerHTML = data;
});
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
  body.classList.add('dark-mode');
}

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});