window.onload = function () {
    var lid = document.querySelector(".lidTieContainer");
    var light = document.querySelector(".lightPlaceholder");

    /*  Set Timeouts */
    // Hide  the box lid after animation ends
    setTimeout(function () {
        lid.style.visibility = "hidden";
    }, 5000);
    // Set light background and Confetti when box opens 
    setTimeout(function () {
        light.innerHTML = "<div class='light'></div>";
        // light.innerHTML = "<div class='confettiBox'></div>";

        addConfetti();
    }, 3200);

    function addConfetti() {
        // Add confetti
        for (var i = 0; i < 600; i++) {
            create(i);
        }
        function create(i) {
            var width = Math.random() * 8;
            var height = width * 0.4;
            var colourIdx = Math.ceil(Math.random() * 3);
            var colour = "red";
            switch (colourIdx) {
                case 1:
                    colour = "yellow";
                    break;
                case 2:
                    colour = "blue";
                    break;
                default:
                    colour = "red";
            }
            $('<div class="confetti-' + i + ' ' + colour + '"></div>').css({
                "width": width + "px",
                "height": height + "px",
                "top": -Math.random() * 20 + "%",
                "left": Math.random() * 100 + "%",
                "opacity": Math.random() + 0.5,
                "transform": "rotate(" + Math.random() * 360 + "deg)"
            }).appendTo('.confettiBox');

            drop(i);
        }

        function drop(x) {
            $('.confetti-' + x).animate({
                top: "100%",
                left: "+=" + Math.random() * 15 + "%"
            }, Math.random() * 3000 + 3000
                , function () {
                    return;
                }
            );
        }
    }
}