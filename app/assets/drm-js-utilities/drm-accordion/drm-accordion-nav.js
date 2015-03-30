(function($) {
    window.drmAccordionNav = function(params) {
        var self = {};
        var spec = params || {};
        var speed = spec.speed || 300;
        var containerClass = spec.containerClass || 'drm-accordion-nav';
        var expandIconClass = spec.expandIconClass  || 'fa-plus';
        var collapseIconClass = spec.collapseIconClass  || 'fa-minus';
        var iconClass = spec.iconClass || 'drm-accordion-icon';
        var contentHolderClass = contentHolderClass || 'drm-accordion-nav-inner';
        var container = $('.' + containerClass);

        var showDefaultContent = function() {
            var expandedContent = $(container).find('.' + contentHolderClass +'[data-state=expanded]');

            content.hide();
            expandedContent.show();
        };

        var toggle = function(speed, openContent) {
            var that = $(this);
            var nextContent = that.next();

                openContent.slideUp(speed);
                
                if (nextContent.is(':hidden')) {
                    nextContent.slideDown(speed);
                } else {
                    nextContent.slideUp(speed);
                }
        };

        var replaceIcons = function(openContent, iconClass, expandIconClass, collapseIconClass) {
            var that = $(this);
            var icon = that.find('.' + iconClass);
            var openContentIcons = openContent.prev().find('.' + iconClass);
            
            if ( icon.hasClass(expandIconClass) ) {
                icon.removeClass(expandIconClass).addClass(collapseIconClass);
            } else {
                icon.removeClass(collapseIconClass).addClass(expandIconClass);
            }

            openContentIcons.removeClass(collapseIconClass).addClass(expandIconClass);
        };

        if ( container.length ) {
            var label = container.children('ul').children('li').children('a');
            var content = label.next('ul');

            showDefaultContent();

            label.on('click', function(e) {
                var openContent = $(content).not(':hidden');
                
                toggle.call(this, speed, openContent);
                replaceIcons.call(this, openContent, iconClass, expandIconClass, collapseIconClass);
                e.stopPropagation();
                e.preventDefault();
            });
        }

        return self;
    };
})(jQuery);