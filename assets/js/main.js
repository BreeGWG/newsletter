function addHamburgerListener () {

    document.getElementById("drawer").addEventListener("click",
        function (e){
            var bars = document.getElementsByClassName("fa-bars")[0];
            var times = document.getElementsByClassName("fa-times")[0];
            var menu = document.getElementsByClassName("menu")[0];
            var navItems = document.getElementsByClassName("nav__item");

            if( e.target === bars  || 
                e.target === times ||
                e.target === menu
                ) 
                {
                if (times.classList.contains("hide")){
                    times.classList.remove("hide");
                    times.classList.add("show");
                    bars.classList.remove("show");
                    bars.classList.add("hide");
                    for (var i=0; i < navItems.length; i++) {
                        navItems[i].classList.add("show");
                    }
                }
                else {
                    times.classList.remove("show");
                    times.classList.add("hide");
                    bars.classList.remove("hide");
                    bars.classList.add("show");
                    for (var i=0; i < navItems.length; i++) {
                        navItems[i].classList.remove("show");
                    }
                }  
        
            }         
                    // document.getElementsByClassName("fa-times")[0].toggle("show");
        }, false);
}


document.addEventListener("DOMContentLoaded", function () {
   addHamburgerListener();
});