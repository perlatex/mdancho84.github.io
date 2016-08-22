
$( document ).ready(function() {
    // Table scripts to achieve responsiveness
	$('table').wrap('<div class="table-responsive"></div>');
	$('table').addClass('table table-bordered table-striped table-hover');

	// Centers blog images
	$('#blog p > img').addClass('img-responsive center-block');
	$('#blog_content').find('img').addClass('shadow');

	//Show / Hide button
    var $topLinkBlock = $('#top-link-block');
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {    //Check to see if the window is top if not then display button
            $topLinkBlock.affix({
                offset: {top:-20} //needed for the affix to work, must be negative otherwise fadeout does not work
            });
            TweenMax.to($topLinkBlock, 0.5, {
                right: "2%",
                x: 0
            });
        } else {
            TweenMax.to($topLinkBlock, 2.0, {
                right: "-50%",
                x: 0
            });
        }
    });

    //Scale on Hover
    $topLinkBlock.hover(
            function(){
                TweenMax.to($(this), 0.5, {scale: 1.1});
            },
            function(){
                TweenMax.to($(this), 0.5, {scale: 1.0});
            }
    );

});


