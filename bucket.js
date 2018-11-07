var strikethrough = document.getElementsByClassName('animate-strikethrough');

var i = 0;

function strike() {
    setTimeout(function () {
        strikethrough[i].firstChild.classList.add('strike');
        i++;
        if (i < strikethrough.length) {
            strike();
        }
    }, 300)
}

strike();