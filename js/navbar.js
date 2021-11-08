window.onscroll = function() {
    scrollDown();
};

function scrollDown() {
    if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
        document.getElementById("test").className = "test_scroll";
    } else {
        document.getElementById("test").className = "";
    }
}