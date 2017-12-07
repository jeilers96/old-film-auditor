$(function(){
		var includes = $('[data-include]');
		jQuery.each(includes, function(){
		var file = 'tiles/' + $(this).data('include') + '.html';
		$(this).load(file);
	});
});