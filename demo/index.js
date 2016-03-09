FastClick.attach(document.body);

var $date = $('#date');

$date.timePicker({
	delay: 15,
	day: {
		len: 7,
		filter: ['今天', '明天', '后天'],
		format: 'M月d日'
	}
});

$date.on('click', function () {
	$(this).timePicker('show')
		.on('timePicker.select', function (e, selectedTime, selectedText) {
			$(this).text(selectedText);
		});
});



