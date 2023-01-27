'use strict';

// reference date
let date = $('#currentDay');

// get current date
let weekday = moment().format('dddd')
let month = moment().format('MMMM')
let day = moment().format('Do')

date.html(`${weekday}, ${month} ${day}`);

// color code blocks based on current time
let currentTime = parseInt(moment().format('H'));

$('.color-code').each(function () {
    let hour = parseInt($(this).prop('id'));
        if (hour < currentTime) { $(this).addClass('past'); }
        if (hour === currentTime) { $(this).addClass('present'); }
        if (hour > currentTime) { $(this).addClass('future'); }
    });
  
// create submit buttons
 $('.submit').append(
     $(document.createElement('button')).prop({
        type: 'button',
        class: 'btn-block'
    })
);
$('button').append('<i class="fas fa-save style"></i>');

// store user input in local storage on save button click
$('.submit').on('click', function () {
    $('textarea').each(function() {
        let value = $(this).val(),
        id = $(this).attr('id');
        localStorage.setItem(id, value);
    });
  });

// get local storage values on refresh
$('#h9').val(localStorage.getItem('h9'));
$('#h10').val(localStorage.getItem('h10'));
$('#h11').val(localStorage.getItem('h11'));
$('#h12').val(localStorage.getItem('h12'));
$('#h13').val(localStorage.getItem('h13'));
$('#h14').val(localStorage.getItem('h14'));
$('#h15').val(localStorage.getItem('h15'));
$('#h16').val(localStorage.getItem('h16'));
$('#h17').val(localStorage.getItem('h17'));