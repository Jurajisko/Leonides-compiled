(function($){

    $('section').each( function() {
        let id = $(this).attr('id');
        //console.log( id );
        let href = id + '.html';
        //console.log( id + '.html' );  //console.log( { id: id + '.html'} );   //console.log( href )
        let request = $.ajax({
            url: 'inc/'+ href
        });
        //console.log( request )
        request.done( function(data) {
            //console.log( data )
            $('#'+id).html(data);
        });
    });

    setTimeout( function() {

    // How Many Scroll from Top?
    // $(window).scroll(function(){var newhe = $(window).scrollTop();console.log(newhe);});
        
        // Variable of Window
        let win = $(window);
        
        $('#nav').find('a').on('click', function(event) {
            event.preventDefault();
            // let  a = $(this);
            //     let li = a.parent(); 
            //     console.log(li);
            // li.addClass('selected').siblings('li').removeClass('selected');
            $('html,body').animate({ scrollTop: $(this.hash).offset().top+300 }, 2000);
        });

        $('.title-href').find('a').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top - 100 }, 1500);	
        });
           
        $('.menu-circles-group').find('a').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 2000);	
        });

        // Show & Hide Menu bars
        let nav = $('#nav');
        let menu = $('#menu');
        let menuRot = $('.menu-rot');
        let openMenu = $('.open-menu');
        let menuFix = $('.menu-fix');
        let circleMenu = $('.menu-single-circle');

        // Hidden Side Menu If Shown
        win.resize(function(){
            var newWidth = win.innerWidth();
            if ( newWidth < 684 ) { nav.animate({ top: '0' }, 800); }
        });

        // After Click on Middle Symbol of Top Navigation
        openMenu.on('click', function(event){
            event.preventDefault();

            nav.animate({ top: '-50px' }, 800 ); // TOP NAVIGATION

            if ( win.width() < 684 ) {
                menu.show(10);
                $('.menu-fix').animate({ left: '100%' }, 800);
            } else {
                menu.show();
                menuFix.animate({ left: '100%' }, 1000);
            }
        });

        // After Click on Corner Symbol of Side Bar
            function closeMenu() {
                nav.animate({ top: '0' }, 800 ); // TOP NAVIGATION
                if ( win.width() < 684 ) {
                    menuFix.animate({ left: '0%'}, 1000);
                    setTimeout( function() { menu.hide() }, 800);
                } else {
                    menu.show();
                    $('hidden-menu').show();
                    menuFix.animate({ left: '0%'}, 1000);
                }
            };

            menuRot.on('click', function(event){
                event.preventDefault();
                closeMenu();
            });

            circleMenu.on('click', function(event){
                event.preventDefault();
                closeMenu();
            });

        // Variables of Sections
        let offset = '50';
        let about = $('#about').offset().top + 70;
        let offer = $('#offer').offset().top + offset;
        let needs = $('#needs').offset().top + offset;
        let transform = $('#transform').offset().top + offset;
        let partners = $('#partners').offset().top + offset;
        let contact = $('#contact').offset().top + offset;

            // Show & Hide Social-media icons after scrolling 
            // & add Class Selection ID Section on Page if we're right now here
            let sm = $('.social-media');

            win.scroll( function() {
                if ( win.scrollTop() < 458 ) { sm.hide(20); };
                if ( win.scrollTop() >= 458 ) { sm.slideDown(40); }; 
                if ( win.scrollTop() < about ) { $('#nav').find('li').removeClass('selected') };
                if ( win.scrollTop() >= about ) { $('#nav').find('li:nth-child(1)').addClass('selected').siblings('li').removeClass('selected') }; 
                if ( win.scrollTop() >= offer ) { $('#nav').find('li:nth-child(2)').addClass('selected').siblings('li').removeClass('selected') };
                if ( win.scrollTop() >= needs ) { $('#nav').find('li:nth-child(3)').addClass('selected').siblings('li').removeClass('selected') };
                if ( win.scrollTop() >= transform ) { $('#nav').find('li:nth-child(5)').addClass('selected').siblings('li').removeClass('selected') };
                if ( win.scrollTop() >= partners ) { $('#nav').find('li:nth-child(6)').addClass('selected').siblings('li').removeClass('selected') };
                if ( win.scrollTop() >= contact ) { $('#nav').find('li:nth-child(7)').addClass('selected').siblings('li').removeClass('selected') };  
            });

        // FadeIn & SlideIn Images of Sections
        win.scroll( function() {
            if ( win.scrollTop() >= about ) 
            { 
                setTimeout( function() {
                    $('.about-img-1').addClass('js-slidein-visible');}, 10) && 
                setTimeout( function() {
                    $('.about-img-2').addClass('js-slidein-visible');}, 300) && 
                setTimeout( function() {
                    $('.about-img-3').addClass('js-slidein-visible');}, 600); 
            };
            if ( win.scrollTop() >= offer ) 
            { 
                setTimeout( function() {
                    $('.offer-img-1').addClass('js-slidein-visible');}, 10) && 
                setTimeout( function() {
                    $('.offer-img-2').addClass('js-slidein-visible');}, 300) && 
                setTimeout( function() {
                    $('.offer-img-3').addClass('js-slidein-visible');}, 600);
            };
            if ( win.scrollTop() >= needs) 
            { 
                setTimeout( function() {
                    $('.needs-img-1').addClass('js-slidein-visible');}, 10) && 
                setTimeout( function() {
                    $('.needs-img-2').addClass('js-slidein-visible');}, 300) && 
                setTimeout( function() {
                    $('.needs-img-3').addClass('js-slidein-visible');}, 600) &&
                setTimeout( function() {
                    $('.needs-img-4').addClass('js-slidein-visible');}, 800)
            };
            if ( win.scrollTop() >= transform ) 
            { 
                setTimeout( function() {
                    $('.transform-img-1').addClass('js-slidein-visible');}, 0) && 
                setTimeout( function() {
                    $('.transform-img-2').addClass('js-slidein-visible');}, 300) && 
                setTimeout( function() {
                    $('.transform-img-3').addClass('js-slidein-visible');}, 600)
            };
            if ( win.scrollTop() >= contact ) 
            { 
                setTimeout( function() {
                    $('.contact-slide-1').css({top:'5%', opacity: '100%'});}, 10) && 
                setTimeout( function() {
                    $('.contact-slide-2').css({top:'28%', opacity: '100%'});}, 300) && 
                setTimeout( function() {
                    $('.contact-slide-3').css({top:'73%', opacity: '100%'});}, 600);
            };

            // Partners FadeIn & SlideIn Boxes
            if ( win.width() < 684 ) {
                return;
            } else {
                $('.partners-group-1 a:nth-child(1)').css({ left: '-30%' }).addClass('partners-opacity');
                $('.partners-group-1 a:nth-child(2)').css({ left: '-100%' }).addClass('partners-opacity');
                $('.partners-group-1 a:nth-child(3)').css({ left: '-150%' }).addClass('partners-opacity');

                $('.partners-group-2 a:nth-child(1)').css({ top: '100%' }).addClass('partners-opacity');
                $('.partners-group-2 a:nth-child(2)').css({ top: '200%' }).addClass('partners-opacity');
                $('.partners-group-2 a:nth-child(3)').css({ top: '300%' }).addClass('partners-opacity');

                $('.partners-group-3 a:nth-child(1)').css({ left: '30%' }).addClass('partners-opacity');
                $('.partners-group-3 a:nth-child(2)').css({ left: '100%' }).addClass('partners-opacity');
                $('.partners-group-3 a:nth-child(3)').css({ left: '150%' }).addClass('partners-opacity');

                win.scroll( function() {
                    if ( win.scrollTop() >= partners ) {
                            $('.partners-group-1 a').css({ left: '0%', opacity: '100%' })
                        && $('.partners-group-2 a:nth-child(1)').css({ top: '0%', opacity: '100%' })
                        && $('.partners-group-2 a:nth-child(2)').css({ top: '50%', opacity: '100%' })
                        && $('.partners-group-2 a:nth-child(3)').css({ top: '100%', opacity: '100%' })
                        && $('.partners-group-3 a').css({ left: '0%', opacity: '100%' })
                    }
                });
            };
        });

        // Mouse hover over Images
        $('.scale-book').addClass('scale-book-scaleX');

        $('.images-up')
        .mouseenter(function() {
            $( 'p', this ).animate({ opacity: '100%'}, 800);
            $( 'article', this ).css({transform: 'scaleX(1)'});
        })
        .mouseleave(function() {
            $( 'p', this ).animate({ opacity: '0%'}, 100);
            $( 'article', this ).css({transform: 'scaleX(0)'});
        });

        $('.images-left')
        .mouseenter(function() {
            $( 'p', this ).animate({ opacity: '100%'}, 800);
            $( 'article', this ).css({transform: 'scaleX(1)'});
        })
        .mouseleave(function() {
            $( 'p', this ).animate({ opacity: '0%'}, 100);
            $( 'article', this ).css({transform: 'scaleX(0)'});
        });

        $('.images-right-up')
        .mouseenter(function() {
            $( 'p', this ).animate({ opacity: '100%'}, 800);
            $( 'article', this ).css({transform: 'scaleX(1)'});
        })
        .mouseleave(function() {
            $( 'p', this ).animate({ opacity: '0%'}, 100);
            $( 'article', this ).css({transform: 'scaleX(0)'});
        });
        
        $('.images-right-down')
        .mouseenter(function() {
            $( 'p', this ).animate({ opacity: '100%'}, 800);
            $( 'article', this ).css({transform: 'scaleX(1)'});
        })
        .mouseleave(function() {
            $( 'p', this ).animate({ opacity: '0%'}, 100);
            $( 'article', this ).css({transform: 'scaleX(0)'});
        });

        
        // Initialize and add the map
        function initMap() {
          // The location of
          const Presov = { lat: 49.0010546387734, lng: 21.237340021558353 };
          // The map, centered at
          const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: Presov,
          });
          // The marker, positioned at Uluru
          const marker = new google.maps.Marker({
            position: { lat: 49.0010546387734, lng: 21.237340021558353 }, 
            map: map,
            icon : "./img/marker.png"
          });
        };

        
    }, 1500);

})(jQuery)