$(document).ready(function() {
    var dataJson = $.getJSON('https://raw.githubusercontent.com/okome-on-fire/random-mankai/main/performance/data.json');

    // ランダム選択
    $('.s-choose_button').on('click', function() {
        dataJson.done(function(dataList) { // jsonの読み込みに成功した時
            var dataNum = Object.keys(dataList).length;
            console.log(dataNum);

            let randomNum = Math.floor(Math.random() * dataNum);
            let resultName = dataList[randomNum].name;
            let resultPerformance = dataList[randomNum].performance;
            let resultCharacter = dataList[randomNum].character;
            $('.s-resultName').text(resultName);
            $('.s-resultPerformance').text(resultPerformance);
            $('.s-resultCharacter span').text(resultCharacter);

            // tweet
            var tweet = '選ばれたのは「' + resultName + '/' + resultPerformance + '」です';
            $('.s-tweet_button').attr('href', 'http://twitter.com/intent/tweet?url=https://okome-on-fire.github.io/random-mankai/performance/&text=' + tweet + '&hashtags=ランダム公演キャラお題');
        });
    });
});