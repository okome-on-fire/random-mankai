$(document).ready(function() {
    var dataJson = $.getJSON('https://raw.githubusercontent.com/okome-on-fire/random-mankai/main/performance/data.json');

    // ランダム選択
    $('.s-choose_button').on('click', function() {
        var troupe = $('.choose_box select').val();
        console.log(troupe);
        dataJson.done(function(dataList) { // jsonの読み込みに成功した時
            console.log(dataJson);
            switch (troupe) {
                case '全部':
                    // 全部同じ配列に入れたい
                    var troupeNum = Math.floor(Math.random() * 4);
                    switch (troupeNum) {
                        case 0:
                            var troupeName = "春組";
                            break;
                        case 1:
                            var troupeName = "夏組";
                            break;
                        case 2:
                            var troupeName = "秋組";
                            break;
                        case 3:
                            var troupeName = "冬組";
                            break;

                    }
                    var dataNum = Object.keys(dataList[0][troupeName]).length;
                    console.log(dataNum);
                    var randomNum = Math.floor(Math.random() * dataNum);
                    var resultName = dataList[0][troupeName][randomNum].name;
                    var resultPerformance = dataList[0][troupeName][randomNum].performance;
                    var resultCharacter = dataList[0][troupeName][randomNum].character;
                    break;

                case '春組':
                    var dataNum = Object.keys(dataList[0]["春組"]).length;
                    console.log(dataNum);
                    var randomNum = Math.floor(Math.random() * dataNum);
                    var resultName = dataList[0]["春組"][randomNum].name;
                    var resultPerformance = dataList[0]["春組"][randomNum].performance;
                    var resultCharacter = dataList[0]["春組"][randomNum].character;

                    break;
                case '夏組':
                    var dataNum = Object.keys(dataList[0]["夏組"]).length;
                    console.log(dataNum);
                    var randomNum = Math.floor(Math.random() * dataNum);
                    var resultName = dataList[0]["夏組"][randomNum].name;
                    var resultPerformance = dataList[0]["夏組"][randomNum].performance;
                    var resultCharacter = dataList[0]["夏組"][randomNum].character;
                    break;
                case '秋組':
                    var dataNum = Object.keys(dataList[0]["秋組"]).length;
                    console.log(dataNum);
                    var randomNum = Math.floor(Math.random() * dataNum);
                    var resultName = dataList[0]["秋組"][randomNum].name;
                    var resultPerformance = dataList[0]["秋組"][randomNum].performance;
                    var resultCharacter = dataList[0]["秋組"][randomNum].character;
                    break;
                case '冬組':
                    var dataNum = Object.keys(dataList[0]["冬組"]).length;
                    console.log(dataNum);
                    var randomNum = Math.floor(Math.random() * dataNum);
                    var resultName = dataList[0]["冬組"][randomNum].name;
                    var resultPerformance = dataList[0]["冬組"][randomNum].performance;
                    var resultCharacter = dataList[0]["冬組"][randomNum].character;
                    break;
            }

            // 各文字代入
            $('.s-resultName').text(resultName);
            $('.s-resultPerformance').text(resultPerformance);
            $('.s-resultCharacter span').text(resultCharacter);

            // tweet
            var tweet = 'お題は「' + resultName + '/' + resultPerformance + '」です';
            $('.s-tweet_button').attr('href', 'http://twitter.com/intent/tweet?url=https://okome-on-fire.github.io/random-mankai/performance/&text=' + tweet + '&hashtags=ランダム公演キャラお題');
        });
    });
});