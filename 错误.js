function  redirectHandle(xhr) {
    var enable = xhr.getResponseHeader("enableRedirect");
    if((enable == "true")){
        var url = xhr.getResponseHeader("redirectUrl");
        if(url != ""){
            var win = window;
            while(win != win.top){
                win = win.top;
            }
            win.location.href = url;
        }
    }
}
function addScriptTag(src) {
    var script = document.createElement('script');
    script.src = src;
    if(document.body){
        document.body.appendChild(script);
    }
}