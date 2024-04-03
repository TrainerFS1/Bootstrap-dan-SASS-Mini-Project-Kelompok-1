const scriptURL = 'https://script.google.com/macros/s/AKfycbz9oMIgczc2I-JEHJEaAV3lZ9Fb6cN2Am9t_6BGWh96F0dQYY7ptdFo09PoZ4RUWZO7/exec'
const form = document.forms['submit-to-google-sheet']

$(".x").click(()=>{
  $(".alert").toggleClass("d-none")
})


form.addEventListener('submit', e => {

  $(".buttonload").toggleClass('d-none')
  $(".submit").toggleClass('d-none')

  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      $(".buttonload").toggleClass('d-none')
      $(".submit").toggleClass('d-none')
      $(".alert").toggleClass("d-none")
      form.reset()
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})