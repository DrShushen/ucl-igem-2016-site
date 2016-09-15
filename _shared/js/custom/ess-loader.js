function onReady_UCLiGem(callback) {
    var intervalID = window.setInterval(checkReady, 300);
    function checkReady() {
        console.log("Checking Ready");
        if (document.getElementsByTagName('body')[0] !== undefined && document.getElementById('body-loaded') !== null) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show_UCLiGem(id, value) {
    console.log("Show: " + id);
    if (document.getElementById(id) !== null && document.getElementById(id).style !== null) {
        document.getElementById(id).style.display = value ? 'block' : 'none';
    }
}

onReady_UCLiGem(function () {
    show_UCLiGem('body-loaded', true);
    show_UCLiGem('ess-loader-holder', false);
});