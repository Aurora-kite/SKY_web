
window.addEventListener('load', function () {
    var cloud = document.querySelector('.cloud');
    var nav = document.querySelector('.nav');
    var lis = nav.querySelectorAll('li');

    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function () {
            animate(cloud, this.offsetLeft + 20);
        });

        lis[i].addEventListener('mouseleave', function () {
            animate(cloud, 40);
        });

    }
})

window.onload = function () {
    let timer = setInterval(get_next, 3000);
    let sz = new Array();
    let szdiv = new Array();
    let cur_ul = document.getElementById("banner");
    for (let i = 1; i <= 4; i++) {
        var cur_li = document.createElement("li");
        var cur_img = document.createElement("img");

        cur_img.src = "upload/communication" + i + ".jpg";
        cur_img.style.width = "500px";
        cur_img.style.height = "380px";
        cur_li.appendChild(cur_img);

        cur_li.onmouseenter = function () {
            clearInterval(timer);
        }
        cur_li.onmouseleave = function () {
            timer = setInterval(get_next, 3000);
        }

        if (i != 4) {
            cur_li.id = 4 - i;
        } else {
            cur_li.id = 4;
        }

        cur_ul.appendChild(cur_li)
        sz.push(cur_li);
        sz[sz.length - 1].style.left = "0px";

        let bottom_div = document.createElement("div");
        bottom_div.style.left = 125 * i + "px";
        bottom_div.name = i;
        szdiv.push(bottom_div);
        cur_ul.appendChild(bottom_div);
    }
    // 按钮
    let pre_span = document.createElement("span");
    pre_span.innerHTML = '';
    pre_span.style.top = 140 + "px";
    pre_span.style.left = -50 + "px";
    pre_span.style.position = "absolute";
    pre_span.style.zIndex = 100;
    cur_ul.appendChild(pre_span);

    let nex_span = document.createElement("span");
    nex_span.innerHTML = "";
    nex_span.style.top = 140 + "px";
    nex_span.style.right = -250 + "px";
    nex_span.style.position = "absolute";
    nex_span.style.zIndex = 100;
    cur_ul.appendChild(nex_span);

    pre_span.onclick = function () {
        clearInterval(timer);
        get_pre();
        timer = setInterval(get_next, 3000);
    }

    nex_span.onclick = function () {
        clearInterval(timer);
        get_next();
        timer = setInterval(get_next, 3000);
    }

    let len = sz.length - 1;
    sz[len - 2].style.left = "0px";
    sz[len - 1].style.zIndex = 100;
    sz[len - 1].style.left = "250px";
    sz[len - 1].style.transform = "scale(1.3)";
    sz[len].style.left = "500px";

    szdiv[0].style.background = "#71246b";

    for (let i = 0; i < szdiv.length; i++) {
        szdiv[i].onmouseenter = function () {
            clearInterval(timer);
            let len1 = sz[len - 1].id;
            let len2 = szdiv[i].name;
            let dis = Math.max(len1, len2) - Math.min(len1, len2);
            if (len1 > len2) {
                while (dis--)
                    get_pre();
            } else {
                while (dis--)
                    get_next();
            }
            timer = setInterval(get_next, 3000);
        }
    }


    function get_pre() {
        let give_up = sz[0];
        sz.shift();
        sz.push(give_up);

        for (let i = 0; i < sz.length; i++) {
            sz[i].style.zIndex = i;
            sz[i].style.transform = "scale(1)";

        }
        sz[len - 2].style.left = "0px";
        sz[len - 1].style.zIndex = 100;
        sz[len - 1].style.left = "250px";
        sz[len - 1].style.transform = "scale(1.3)"
        sz[len - 1].style.opacity = 1;
        sz[len].style.left = "500px";
        sync_szdiv();


    }

    function get_next() {
        let give_up = sz[len];
        sz.pop()
        sz.unshift(give_up)

        for (let i = 0; i < sz.length; i++) {
            sz[i].style.zIndex = i;
            sz[i].style.transform = "scale(1)"

        }
        sz[len - 2].style.left = "0px";
        sz[len - 1].style.zIndex = 100
        sz[len - 1].style.left = "250px";
        sz[len - 1].style.transform = "scale(1.3)"
        sz[len - 1].style.opacity = 1;
        sz[len].style.left = "500px";
        sync_szdiv();


    }

    function sync_szdiv() {
        for (let i = 0; i < szdiv.length; i++) {
            if (szdiv[i].name == sz[len - 1].id)
                szdiv[i].style.background = "#71246b";
            else
                szdiv[i].style.background = "#666";
        }
    }

}