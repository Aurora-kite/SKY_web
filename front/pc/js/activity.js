window.addEventListener('load', function () {
    var cloud = document.querySelector('.cloud');
    var nav = document.querySelector('.nav');
    var lis = nav.querySelectorAll('li');

    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function () {
            animate(cloud, this.offsetLeft + 20);
        });

        lis[i].addEventListener('mouseleave', function () {
            animate(cloud, 204);
        });
    }
})