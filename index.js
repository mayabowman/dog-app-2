'use strict';

function getDogImages(numInput) {
  if (numInput == 0) {
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
  } else if (numInput > 50) {
    return alert('Please choose a number less than or equal to 50');
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later!'));
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').html('');
  $('.results').append(`<h2>Dog Pic Time!</h2>`);
  responseJson.message.forEach(fetchedImg => {
    $('.results').append(`<img src="${fetchedImg}" class="results">`);
  })
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userInput = $('#dog-number').val();
    getDogImages(userInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for input and submit!');
  watchForm();
});