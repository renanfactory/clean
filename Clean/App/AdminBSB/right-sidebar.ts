import * as $ from 'jquery';

/* Right Sidebar - Function ================================================================================================
*  You can manage the right sidebar menu options
*  
*/
export class RightSidebarClass {

    public Activate() {
        var _this = this;
        var $sidebar = $('#rightsidebar');
        var $overlay = $('.overlay');

        //Close sidebar
        $(window).click(function (e) {
            var $target = $(e.target);
            if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent(); }

            if (!$target.hasClass('js-right-sidebar') && _this.IsOpen() && $target.parents('#rightsidebar').length === 0) {
                if (!$target.hasClass('bars')) $overlay.fadeOut();
                $sidebar.removeClass('open');
            }
        });

        $('.js-right-sidebar').on('click', function () {
            $sidebar.toggleClass('open');
            if (_this.IsOpen()) { $overlay.fadeIn(); } else { $overlay.fadeOut(); }
        });
    }

    private IsOpen() {
        return $('.right-sidebar').hasClass('open');
    }
}