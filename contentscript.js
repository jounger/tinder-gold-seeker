injectCss();
injectScript();

function injectCss() {
    var s = document.createElement('link');
    s.href = chrome.extension.getURL('inject.css');
    s.rel = 'stylesheet';
    s.type = 'text/css';
    (document.head || document.documentElement).appendChild(s);
}

function injectScript() {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('script.js');
    (document.head || document.documentElement).appendChild(s);
    s.onload = function () {
        s.parentNode.removeChild(s);
    };
}