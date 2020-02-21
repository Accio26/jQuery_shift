$(function () {
    var duration = 300;

    $('#buttons1 button:nth-child(-n+4)') // 要素内の1~4番目の要素
        .on('mouseover', function () {
            $(this).stop(true).animate({
                backgroundColor: '#ae5e9b',
                color: '#fff'
            }, duration);
        })
        .on('mouseout', function () {
            $(this).stop(true).animate({
                backgroundColor: '#fff',
                color: '#ebc000'
            }, duration);
        });
    // 2行目のボタン
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)') // 要素内の5番目から8番目の要素
        .on('mouseover', function () {
            $(this).stop(true).animate({
                borderWidth: '12px',
                color: '#ae5e9b'
            }, duration, 'easeOutSine');
        })
        .on('mouseout', function () {
            $(this).stop(true).animate({
                borderWidth: '0px',
                color: '#ebc000'
            }, duration, 'easeOutSine');
        });
    // 3行目のボタン
    $('#buttons1 button:nth-child(n+9)')
        .on('mouseenter', function () {
            $(this).find('> span').stop(true).animate({
                width: '100%'
            }, duration, 'easeOutQuad');
        })
        .on('mouseleave', function () {
            $(this).find('> span').stop(true).animate({
                width: '0%'
            }, duration, 'easeOutQuad');
        });
});
