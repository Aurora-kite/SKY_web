function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 5)
}

var btn = document.querySelector('.span');
var box = document.querySelector('.box1');
btn.onclick = function () {
    box.style.display = 'none';
}