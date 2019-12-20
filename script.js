var tinderGoldInterval = null;

var tinderGoldInterval = setInterval(getMatchList, 2000);

window.addEventListener('wheel', function (e) {
    if (e.deltaY > 0) {
        getMatchList();
        changeResolution('mouseover');
    }
});

function getMatchList() {
    var matchDOM = document.querySelector('.likesYou__scroller');
    if (matchDOM != null && window.location.href.includes('/app/likes-you')) {
        var node = document.createElement('button');
        node.type = 'button';
        node.setAttribute('class', 'btn btn-tinder');
        node.setAttribute('onclick', 'changeResolution("click");');
        node.textContent = 'Click here to see clearly people who already liked you.';
        matchDOM.prepend(node);
        if (tinderGoldInterval)
            clearInterval(tinderGoldInterval);
    }
}

function changeResolution(event) {
    let nodeList = document.querySelectorAll('.likesYou__scroller .StretchedBox');
    let background = null;
    nodeList.forEach(function (el, index) {
        switch (event) {
            case "mouseover":
                el.addEventListener(event, function () {
                    clear(el);
                }, false);
                break;
            case "click":
                clear(el);
                break;
        }
    });
    function clear(el) {
        if (el && (background = el.style.backgroundImage) != null) {
            if (background.includes('preview.gotinder.com') && !background.includes('320x')) {
                el.style.backgroundImage = background.allReplace({ '84x106': '320x400', '84x84': '320x320' });
            }
        }
    }
}

String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};
