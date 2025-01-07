const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('bg-gray-900');
  body.classList.toggle('text-white');
  body.classList.toggle('text-gray-800');
});