/**
 * Created by root on 25/8/16.
 */

$('.post').find('.interaction').find('a').eq(2).on('click', function () {
    $('#edit-modal').modal();
});