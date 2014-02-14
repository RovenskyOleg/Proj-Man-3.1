window.onload = function() {

    function orange() {
        document.body.style.background = "#FF6600";
    }

    function red() {
        document.body.style.background = "#CC6666";
    }

    function blue_1() {
        document.body.style.background = "#66CCCC";
    }

    function blue_2() {
        document.body.style.background = "#99CCCC";
    }

    function green() {
        document.body.style.background = "#33CC99";
    }

    function yellow_1() {
        document.body.style.background = "#CCCC99";
    }

    function yellow_2() {
        document.body.style.background = "#CCCC33";
    }



    document.getElementById('color_1').onclick = orange;
    document.getElementById('color_2').onclick = red;
    document.getElementById('color_3').onclick = blue_1;
    document.getElementById('color_4').onclick = blue_2;
    document.getElementById('color_5').onclick = green;
    document.getElementById('color_6').onclick = yellow_1;
    document.getElementById('color_7').onclick = yellow_2;
};