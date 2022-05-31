// キャンバス
var canvas = null;
var g = null;

class ArcRandom {
    // コンストラクタ
    constructor() {
            this.x = Math.floor(Math.random() * canvas.width); // x座標
            this.y = Math.floor(Math.random() * canvas.height); // y座標
            this.r = Math.floor(Math.random() * 50) + 20; // 半径
            console.log("x: " + this.x + " y: " + this.y + " r=" + this.r);
        }
        // 描画メソッド
    draw() {
        g.beginPath();
        g.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        g.stroke();
    }
}

function resetCanvas() {
    g.clearRect(0, 0, g.canvas.clientWidth, g.canvas.clientHeight);
    console.log('リセット！');
}

// キャンバス
var canvas = null;
var g = null;

$(document).ready(function() {
    // キャンバス取得
    canvas = document.getElementById("canvas");
    g = canvas.getContext("2d");
    console.log("キャンバスのサイズ: " + canvas.width + " x " + canvas.height);

    $('.s-makeCircle').on('click', function() {
        resetCanvas();
        var pNum = $('#num').val();
        console.log(pNum);
        if (pNum != null && pNum < 25) {
            $('.p-numArea_attention').hide();
            let arc = new ArcRandom();
            arc.draw();
        } else {
            $('.p-numArea_attention').show();
        }

    });
});