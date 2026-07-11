function load_unread_count(){
	span = $('.unread-count');
	span.load(span.data('unread-count-url'));
}

$(function() {
    load_unread_count();
});
