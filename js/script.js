const scriptURL = "https://script.google.com/macros/s/AKfycbz9oMIgczc2I-JEHJEaAV3lZ9Fb6cN2Am9t_6BGWh96F0dQYY7ptdFo09PoZ4RUWZO7/exec";
const form = document.forms["submit-to-google-sheet"];

$(".x").click(() => {
  $(".alert").toggleClass("d-none");
});

form.addEventListener("submit", (e) => {
  $(".buttonload").toggleClass("d-none");
  $(".submit").toggleClass("d-none");

  e.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.open("POST", scriptURL);
  xhr.onload = function () {
    $(".buttonload").toggleClass("d-none");
    $(".submit").toggleClass("d-none");
    $(".alert").toggleClass("d-none");
    form.reset();
    console.log("Success!", xhr.responseText);
  };
  xhr.onerror = function () {
    console.error("Error!", xhr.statusText);
  };
  xhr.send(new FormData(form));
});
