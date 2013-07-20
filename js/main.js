$(document).ready(function() {
	$('#Grid li').on("click", function() {
		$(this).addClass('active');
		$('#modal').addClass('active');
		$('#modalBG').addClass('active');
	})
	$('#modal').on("click", function() {
		$(this).removeClass('active');
		$('#modalBG').removeClass('active');
	});
});
