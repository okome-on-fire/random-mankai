$(document).ready(function() {
    var nameList = [
        '佐久間咲也',
        '碓氷真澄',
        '皆木綴',
        '茅ヶ崎至',
        'シトロン',
        '卯木千景',
        '皇天馬',
        '瑠璃川幸',
        '向坂椋',
        '斑鳩三角',
        '三好一成',
        '兵頭九門',
        '摂津万里',
        '兵頭十座',
        '七尾太一',
        '伏見臣',
        '古市左京',
        '泉田莇',
        '月岡紬',
        '高遠丞',
        '御影密',
        '有栖川誉',
        '雪白東',
        'ガイ'
    ];

    $('.s-choose_button').on('click', function() {
        var random = Math.floor(Math.random() * 24);
        console.log(random);
        $('.s-result').text(nameList[random]);
    });
});