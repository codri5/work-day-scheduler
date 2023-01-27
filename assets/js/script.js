'use strict';

// References date
let date = $('#currentDay');

// Current date values
let weekday = moment().format('dddd')
let month = moment().format('MMMM')
let day = moment().format('Do')

date.html(`${weekday}, ${month} ${day}`);

// Color code blocks based on current time
let currentTime = parseInt(moment().format('H'));

$('.color-code').each(function () {
    let hour = parseInt($(this).prop('id'));
        if (hour < currentTime) { $(this).addClass('past'); }
        if (hour === currentTime) { $(this).addClass('present'); }
        if (hour > currentTime) { $(this).addClass('future'); }
    });
  
// Creates submit buttons
 $('.submit').append(
     $(document.createElement('button')).prop({
        type: 'button',
        class: 'btn-block'
    })
);

// Adds icons to buttons
$('button').append('<i class="fas fa-save style"></i>');

// Stores user input in local storage on button click
$('.submit').on('click', function () {
    $('textarea').each(function() {
        let value = $(this).val(),
        id = $(this).attr('id');
        localStorage.setItem(id, value);
    });
  });

// Retrieves values from local storage
$('#h9').val(localStorage.getItem('h9'));
$('#h10').val(localStorage.getItem('h10'));
$('#h11').val(localStorage.getItem('h11'));
$('#h12').val(localStorage.getItem('h12'));
$('#h13').val(localStorage.getItem('h13'));
$('#h14').val(localStorage.getItem('h14'));
$('#h15').val(localStorage.getItem('h15'));
$('#h16').val(localStorage.getItem('h16'));
$('#h17').val(localStorage.getItem('h17'));

// Clears previous day tasks
function clearStorage() {
    if (currentTime === 0) {
        $('#h9').val(localStorage.removeItem('h9'));
        $('#h10').val(localStorage.removeItem('h10'));
        $('#h11').val(localStorage.removeItem('h11'));
        $('#h12').val(localStorage.removeItem('h12'));
        $('#h13').val(localStorage.removeItem('h13'));
        $('#h14').val(localStorage.removeItem('h14'));
        $('#h15').val(localStorage.removeItem('h15'));
        $('#h16').val(localStorage.removeItem('h16'));
        $('#h17').val(localStorage.removeItem('h17'));
    } 
}

clearStorage()