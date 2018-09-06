document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleSubmit);
  form.reset();
});

const handleSubmit = function () {
  event.preventDefault();
  const resultMessage = `The title is: ${this.title.value} The Author is: ${this.author.value} The category is : ${this.category.value}`

  const formResult = document.querySelector('#reading-list');
  formResult.textContent = resultMessage;

}
