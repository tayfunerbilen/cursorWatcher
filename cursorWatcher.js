/**
 * @author Tayfun Erbilen
 * @blog http://www.erbilen.net
 * @mail tayfunerbilen@gmail.com
 * @param options
 * @returns {*}
 */
jQuery.fn.cursorWatcher = function (options) {

    var option = jQuery.extend({
        always: function () {
        },
        center: function () {
        },
        top: function () {
        },
        bottom: function () {
        },
        left: function () {
        },
        right: function () {
        },
        topLeft: function () {
        },
        topRight: function () {
        },
        bottomLeft: function () {
        },
        bottomRight: function () {
        },
    }, options);

    return this.each(function () {

        var target = $(this)
            , width = target.width()
            , height = target.height();

        $(document).on('mousemove', function (e) {

            var offset = target.offset();

            option.always(target);

            if (e.pageY < offset.top && e.pageX >= offset.left && e.pageX <= offset.left + width)
                option.top(target);
            else if (e.pageY >= offset.top && e.pageY <= offset.top + height && e.pageX > offset.left + width)
                option.right(target);
            else if (e.pageX < offset.left && e.pageY > offset.top && e.pageY < offset.top + height)
                option.left(target);
            else if (e.pageX >= offset.left && e.pageX <= offset.left + width && e.pageY > offset.top + height)
                option.bottom(target);
            else if (e.pageX < offset.left && e.pageY < offset.top)
                option.topLeft(target);
            else if (e.pageX > offset.left + width && e.pageY < offset.top)
                option.topRight(target);
            else if (e.pageX < offset.left && e.pageY > offset.top + height)
                option.bottomLeft(target);
            else if (e.pageX > offset.left + width && e.pageY > offset.top + height)
                option.bottomRight(target);
            else if (e.pageX >= offset.left && e.pageX <= offset.left + width && e.pageY >= offset.top && e.pageY <= offset.top + height)
                option.center(target);

        });

    });

}
