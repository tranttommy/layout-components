import styles from './index.css';

const root = document.getElementById('root');

const dogs = ['Spot', 'Rover', 'Bingo', 'Joe'];

// const ul = document.createElement('ul');
// ul.className = styles.dogs
// dogs.forEach(dog => {
//   const li = document.createElement('li');
//   li.textContent = dog;
//   ul.appendChild(li);
// });
// root.appendChild(ul);

const template = document.createElement('template');
template.innerHTML = `
  <ul class="${styles.dogs}">
    ${dogs.map(dog => `<li>${dog}</li>`).join('')}
  </ul>
`;
root.appendChild(template.content);
