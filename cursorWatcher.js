/**
 * @author Tayfun Erbilen
 * @blog http://www.erbilen.net
 * @mail tayfunerbilen@gmail.com
 * @param options
 * @returns {*}
 */
jQuery.fn.cursorWatcher = function (option) {

    return this.each(function () {

        // Get elements & values.
        var target  = this, // Target should be pure dom element.
            $target = $(target),
            width = $target.width(),
            height = $target.height();

        // Listen document mousemove event.
        $(document).on('mousemove', function (e) {

            // Get offset.
            var offset = $target.offset();

            // Edges
            var topEdge    = offset.top,
                leftEdge   = offset.left,
                rightEdge  = leftEdge + width,
                bottomEdge = topEdge + height;

            // Mouse pos.
            var mouseX   = e.pageX,
                mouseY   = e.pageY
                position = null;

            // Find positions so make code more readable.
            var onTop              = mouseY < topEdge,
                onLeft             = mouseX < leftEdge,
                onRight            = mouseX > rightEdge,
                onBottom           = mouseY > bottomEdge,
                horizontallyInside = mouseX >= leftEdge && mouseX <= rightEdge,
                verticallyInside   = mouseY >= topEdge && mouseY <= bottomEdge;

            // Switch true.
            switch (true){

                // Top
                case onTop && horizontallyInside:
                    position = "top";
                    break;

                // Left
                case onLeft && verticallyInside:
                    position = "left";
                    break;

                // Right
                case verticallyInside && onRight:
                    position = "right";
                    break;

                // Bottom
                case horizontallyInside && onBottom:
                    position = "bottom";
                    break;

                // TopLeft
                case onLeft && onTop:
                    position = "topLeft";
                    break;

                // TopRight
                case onRight && onTop:
                    position = "topRight";
                    break;

                // BottomLeft
                case onLeft && onBottom:
                    position = "bottomLeft";
                    break;

                // BottomRight
                case onRight && onBottom:
                    position = "bottomRight";
                    break;

                // Center
                case horizontallyInside && verticallyInside:
                    position = "center";
                    break;
            }

            // Call position-assigned function with target context and pass target also as jQuery object.
            if (position !== null && typeof option[position] === "function") option[position].call(target, $target)

            // Call always with position info with same style.
            option.always.call(target, $target, position);

        });

    });

}
