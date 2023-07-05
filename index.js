const {hash} = window.location;
const encryptedText = hash.replace('#', '');

if(encryptedText) {
  document.querySelector('#msg-form').classList.add('hide');
  document.querySelector('#result').classList.remove('hide');

  document.querySelector('#result h1').textContent = atob(encryptedText);
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#msg-form').classList.add('hide');
  document.querySelector('#link-result').classList.remove('hide');

  const input = document.querySelector('.message-input');
  const decryptedValue = btoa(input.value);

  const linkInput = document.querySelector('.link-input');
  linkInput.value = `${window.location}#${decryptedValue}`;
  linkInput.select();

})