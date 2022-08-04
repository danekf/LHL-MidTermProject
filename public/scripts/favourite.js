
$(document).ready(() => {

  $('.favourite').on('click',
  (event) => {
    // event.preventDefault();
    // let targetLoginId = this.parent('li').find('service_name');
    alert("Marking as favourite");
  })

  $('.removeFavourite').on('click',
  (event) => {
    // event.preventDefault();
    // let targetLoginId = this.parent('li').find('service_name');
    alert("Removing as favourite");
  })
});
