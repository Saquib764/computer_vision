'use strict';
	
function $(selector, parent){
	if(!parent) parent = document;
	return parent.querySelectorAll(selector)
}

var option = {
	mode:  "python",
	// lineNumbers: true,
	indentWithTabs: true,
	indentUnit: 4,
	tabSize: 4,
	tabMode: 'shift'
}

$('.code').forEach(function(el){
	CodeMirror.fromTextArea(el, option)
})

//	Highlight link

$('.content a').forEach(function(a){
	if(a.href == location.href){
		// console.log(a)
		a.classList.add('current')
	}
})