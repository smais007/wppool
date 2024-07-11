// sticky navbar


$(function() {
    $(window).scroll(function() {
        var scrolling = $(window).scrollTop();
        
        if (scrolling > 20) {
            $(".navbar").addClass("bg-gray-100 text-black");
            $(".navbar .text-white").removeClass("text-white").addClass("text-black");
            $(".navbar .border").addClass("border-black").removeClass("border-white");
        } else {
            $(".navbar").removeClass("bg-gray-100 text-black");
            $(".navbar .text-black").removeClass("text-black").addClass("text-white");
            $(".navbar .border").removeClass("border-black").addClass("border-white");
        } 
    });
  });
  