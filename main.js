
var circularList = data.reduce(function(acc, val, indx, arr) {
	acc[indx] = val;
	return acc;
}, {current: 0, length: data.length })

circularList.next = function() {
	if (this.current === this.length - 1){
		this.current = 0;
	} else {
		this.current++;
	}
}

circularList.currVal = function() {
	console.log('Curr val', this.current);
	return this[this.current];
}

function generatePins() {
		for(var x = 1; x <= 5; x++) {
			var newPin = createPin(circularList.currVal());
		$('#pin-container').append(newPin);
			circularList.next();
		}
	}

$(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
            generatePins();
        }
    });

generatePins();

