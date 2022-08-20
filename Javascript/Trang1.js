let cars = ["lamborghini", "audi", "mercedes", "ferrari"];
function init(){
    $("#gototop").hide();

    $(window).scroll(function(){
        
        if($(this).scrollTop() >= 500){
            $("nav").css({
                "position": "fixed",
                "left": 0,
                "right": 0,
                "top": 0,
                "z-index": 999,
                "opacity": 0.8
            })
        } else{
            $("nav").css({
                "position": "relative",
                "left": 0,
                "right": 0,
                "top": 0,
                "z-index": 999,
                "opacity": 1
            })
        }
        
        if($(this).scrollTop() >= 310){
            $("aside").css({
                "display": "block",
                "left": 3,
                "right": 3,
                "top": 30,
                "z-index": 999,
                "opacity": 1
            })
        } else{
            $("aside").css({
                "display": "none",
                
            })
        }


        if($(this).scrollTop() >= 100)
            $("#gototop").show("slow");
        else
            $("#gototop").hide("slow");

    })

    $("#gototop").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })

    $("div.content > figure").addClass("wow animate__flipInY")

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true
    })
    wow.init()

    var index =1;

    changeImage = function(){
            var imgs=["anh/banner1.png","anh/banner2.png",'anh/banner3.png'];
            document.getElementById('banner').src = imgs[index];
            index++;
            if(index === imgs.length)
            index =0;
    }

    setInterval(changeImage,3000);

   $(document).ready(function(){
    $(".show-hide").click(function(){
        $("nav").slideToggle();
    });

    $("#car").keyup(function(){
       let txt = $(this).val();
       let h = '';
       for(let c of cars)
        if(c.toLowerCase().indexOf(txt) >= 0)
            h += `<li><a href="javascript:;">${c}</a></li>`;

        if(h !== ''){
            $("#suggest").show();
            $("#suggest").html(h);
        }
    });

    $("#suggest").on("click", "a", function(){
        let text = $(this).text();
        $("#car").val(text);
        
        $("#suggest").hide();
    })
   })

   
}