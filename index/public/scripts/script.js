function marquee(tagName, speed) {
    var tag0 = document.getElementById(tagName);
    var tag1 = document.getElementById(tagName + "1");
    var tag2 = document.getElementById(tagName + "2");
    tag2.innerHTML = tag1.innerHTML;
    var myMar = setInterval(scrolling, speed);
    var scrollingLeft = true;
    tag0.onmouseover = function () {
        clearInterval(myMar);
    }
    tag0.onmouseout = function () {
        myMar = setInterval(scrolling, speed);
    }

    function scrolling() {
        if (scrollingLeft) {
            if (tag0.scrollLeft > tag2.offsetWidth)
                tag0.scrollLeft -= tag1.offsetWidth;
            else
                tag0.scrollLeft++;
        }
    }
}
var mar = new marquee("scroll", 5);
mar = null;