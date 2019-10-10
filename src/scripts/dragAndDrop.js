var dragStart = function (e) {
	e.dataTransfer.setData('text/plain', e.target.id);
};

var cancel = function(e){
	if(e.preventDefault) e.preventDefault();
	return false;
};

var dropped = function (e) {
	cancel(e);

	var id;

	id = e.dataTransfer.getData('text/plain');
	e.target.appendChild(document.querySelector('#' + id));	
};



var blueDot = document.querySelector('#blue-dot');
var blueDotTarget = document.querySelector('#blue-dot-target');

blueDot.addEventListener('dragstart', dragStart, false);

blueDotTarget.addEventListener('drop', dropped, false);
blueDotTarget.addEventListener('dragenter', cancel, false);
blueDotTarget.addEventListener('dragover', cancel, false);