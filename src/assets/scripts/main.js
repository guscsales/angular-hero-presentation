(function(window, document){

    var initTooltip = function(container){
        //  Initialize tooltip

        if(!container)
            $('[data-toggle="tooltip"]').tooltip();
        else
            $(container + ' [data-toggle="tooltip"]').tooltip();
    }


    var initActiveMenu = function(){

        function setActive(routerLink){
            var $link = $('.main-nav [routerlink="' + routerLink + '"]');

            $('.main-nav [href]').removeClass('active');
            $link.addClass('active');

            if($link.parents('.sub').length > 0)
                $link.parents('.sub').siblings('a').addClass('active');
        }

        $(document).on('click', '[routerlink]', function(){
            setActive($(this).attr('routerlink'));    
        });

        setActive(window.location.pathname);
    }

    var watchMainContent = function(){
        $('.main-content').bind("DOMNodeInserted",function(){
            initTooltip('.main-content');
        });
    }

    this.Main = {
        init: function(){
            initTooltip();
            initActiveMenu();
            watchMainContent();            
        }
    } 
    
})(window, document);