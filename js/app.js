// Slider Home
    !function(a,b,c){a.fn.responsiveSlides=function(d){var e=a.extend({auto:!0,speed:800,timeout:4e3,pager:!1,nav:!0,random:!1,pause:!1,pauseControls:!0,prevText:"A",nextText:"S",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:a.noop,after:a.noop},d);return this.each(function(){c++;var g,h,i,j,k,l,f=a(this),m=0,n=f.children(),o=n.size(),p=parseFloat(e.speed),q=parseFloat(e.timeout),r=parseFloat(e.maxwidth),s=e.namespace,t=s+c,u=s+"_nav "+t+"_nav",v=s+"_here",w=t+"_on",x=t+"_s",y=a("<ul class='"+s+"_tabs "+t+"_tabs' />"),z={float:"left",position:"relative",opacity:1,zIndex:2},A={float:"none",position:"absolute",opacity:0,zIndex:1},B=function(){var a=document.body||document.documentElement,b=a.style,c="transition";if("string"==typeof b[c])return!0;g=["Moz","Webkit","Khtml","O","ms"],c=c.charAt(0).toUpperCase()+c.substr(1);var d;for(d=0;d<g.length;d++)if("string"==typeof b[g[d]+c])return!0;return!1}(),C=function(b){e.before(b),B?(n.removeClass(w).css(A).eq(b).addClass(w).css(z),m=b,setTimeout(function(){e.after(b)},p)):n.stop().fadeOut(p,function(){a(this).removeClass(w).css(A).css("opacity",1)}).eq(b).fadeIn(p,function(){a(this).addClass(w).css(z),e.after(b),m=b})};if(e.random&&(n.sort(function(){return Math.round(Math.random())-.5}),f.empty().append(n)),n.each(function(a){this.id=x+a}),f.addClass(s+" "+t),d&&d.maxwidth&&f.css("max-width",r),n.hide().css(A).eq(0).addClass(w).css(z).show(),B&&n.show().css({"-webkit-transition":"opacity "+p+"ms ease-in-out","-moz-transition":"opacity "+p+"ms ease-in-out","-o-transition":"opacity "+p+"ms ease-in-out",transition:"opacity "+p+"ms ease-in-out"}),n.size()>1){if(q<p+100)return;if(e.pager&&!e.manualControls){var D=[];n.each(function(a){var b=a+1;D+="<li><a href='#' class='"+x+b+"'>"+b+"</a></li>"}),y.append(D),d.navContainer?a(e.navContainer).append(y):f.after(y)}if(e.manualControls&&(y=a(e.manualControls),y.addClass(s+"_tabs "+t+"_tabs")),(e.pager||e.manualControls)&&y.find("li").each(function(b){a(this).addClass(x+(b+1))}),(e.pager||e.manualControls)&&(l=y.find("a"),h=function(a){l.closest("li").removeClass(v).eq(a).addClass(v)}),e.auto&&(i=function(){k=setInterval(function(){n.stop(!0,!0);var a=m+1<o?m+1:0;(e.pager||e.manualControls)&&h(a),C(a)},q)})(),j=function(){e.auto&&(clearInterval(k),i())},e.pause&&f.hover(function(){clearInterval(k)},function(){j()}),(e.pager||e.manualControls)&&(l.bind("click",function(b){b.preventDefault(),e.pauseControls||j();var c=l.index(this);m===c||a("."+w).queue("fx").length||(h(c),C(c))}).eq(0).closest("li").addClass(v),e.pauseControls&&l.hover(function(){clearInterval(k)},function(){j()})),e.nav){var E="<a href='#' class='"+u+" prev'>"+e.prevText+"</a><a href='#' class='"+u+" next'>"+e.nextText+"</a>";d.navContainer?a(e.navContainer).append(E):f.after(E);var F=a("."+t+"_nav"),G=F.filter(".prev");F.bind("click",function(b){b.preventDefault();var c=a("."+w);if(!c.queue("fx").length){var d=n.index(c),f=d-1,g=d+1<o?m+1:0;C(a(this)[0]===G[0]?f:g),(e.pager||e.manualControls)&&h(a(this)[0]===G[0]?f:g),e.pauseControls||j()}}),e.pauseControls&&F.hover(function(){clearInterval(k)},function(){j()})}}if("undefined"==typeof document.body.style.maxWidth&&d.maxwidth){var H=function(){f.css("width","100%"),f.width()>r&&f.css("width",r)};H(),a(b).bind("resize",function(){H()})}})}}(jQuery,this,0);

    $(function () {
        //__Slideshow 1
        $("#slider1").responsiveSlides({
            speed: 800,
            pager: true,
            nav: true,
            prevText: "<",
            nextText: ">",
            pauseControls: "true"
        });
    });

    /* Scroll */
    $(function() {
        $(".up").bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /* Scroll Up */
    jQuery(document).ready(function() { 
    var offset = 100;
    var duration = 800;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
        jQuery('.up').fadeIn(duration);
        } else {
        jQuery('.up').fadeOut(duration);
        }
    });
    });

    //Movimiento Parallx
    // $(document).ready(function(){
    //     $('article[data-type="parallax_section"]').each(function(){
    //         var $bgobj = $(this); // Variable para asignacion de objeto
    //         $(window).scroll(function() {
    //             $window = $(window);
    //             var yPos = -($window.scrollTop() / $bgobj.data('speed'));
    //             // cordinadas del background
    //             var coords = '50% '+ yPos + 'px';
    //             // moviendo el background
    //             $bgobj.css({ backgroundPosition: coords });
    //         });
    //     });
    // });