document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleSubmit);
});

const handleSubmit = function () {
  event.preventDefault();
  const resultMessage = `The title is: ${this.title.value} The Author is: ${this.author.value} The category is : ${this.category.value}`

  const newListItem = document.createElement('li');
  newListItem.textContent = resultMessage;


  const formResult = document.querySelector('ul');
  formResult.appendChild(newListItem);


}
