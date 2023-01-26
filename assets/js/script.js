'use strict';

// reference date
let date = $('#currentDay');

// get current date
let weekday = moment().format('dddd')
let month = moment().format('MMMM')
let day = moment().format('Do')

date.html(`${weekday}, ${month} ${day}`);

// color code blocks based on current time
let colorCode = $('.color-code');
let currentTime = parseInt(moment().format('H'));

colorCode.each(function() {
    let hour = parseInt($(this).prop('id'));
    if (hour > currentTime && hour < currentTime + 6 ) { $(this).css('background-color','lightgrey'); } 
    else if (hour < currentTime && hour > currentTime - 6) { $(this).css('background-color','green'); } 
    else if (hour === currentTime) { $(this).css('background-color', 'red'); } 
    else { $(this).css('background-color','lightpink'); }
});

// create submit buttons
$(document).ready(function() {
    $('.submit').append(
        $(document.createElement('button')).prop({
            type: 'button',
            class: 'btn-block'
        })
    );
    $('button').append('<i class="fas fa-save style"></i>');
});