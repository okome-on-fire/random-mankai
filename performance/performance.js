$(document).ready(function() {
    var dataJson = $.getJSON('./data.json');
    dataJson.done(function(dataList) { // jsonの読み込みに成功した時
        var dataNum = Object.keys(dataList.data).length;
        console.log(dataNum);
    })

    // ランダム選択
    $('.s-choose_button').on('click', function() {
        var i = 0;
    });
});