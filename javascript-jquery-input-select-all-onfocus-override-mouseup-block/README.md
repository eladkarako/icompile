easy hack.

<pre>
/* 
Select all text in field upon focus.

Chrome's mouseup event prevents select() from working without this hack.
Add "selectAll" class to input fields or modify to work with any input field 
Select all text in field upon focus. Chrome's mouseup event prevents select() from working without this quirk-solution...
*/

$(function(){
	$('body').on('focus', 'input:text.selectAll', function(){
		$(this).one('mouseup', function(e){
			e.preventDefault();
		}).select();
	});
});
</pre>