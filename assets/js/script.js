'use strict';

// reference date
let date = $('#currentDay');

// get current date
let weekday = moment().format('dddd')
let month = moment().format('MMMM')
let day = moment().format('Do')

date.html(`${weekday}, ${month} ${day}`);