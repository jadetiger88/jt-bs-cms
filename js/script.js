$(document).ready(function(){
	$("#page-table").tablesorter();
	$("#user-table").tablesorter();
	$("#category-table").tablesorter();

	var $rows = $('tbody tr');
	$(".form-control").keyup(function() {
		var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
		$rows.show().filter(function(){
			var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
			return !~text.indexOf(val);
		}).hide();
	});
});

