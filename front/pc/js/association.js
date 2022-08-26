window.addEventListener('load', function () {
    var cloud = document.querySelector('.cloud');
    var nav = document.querySelector('.nav');
    var lis = nav.querySelectorAll('li');

    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function () {
            animate(cloud, this.offsetLeft + 20);
        });

        lis[i].addEventListener('mouseleave', function () {
            animate(cloud, 784);
        });
    }
})

var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');
var items = document.querySelectorAll('.item');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        this.className = 'current';
        var index = this.getAttribute('index');
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[index].style.display = 'block';
    }
}