function colorize() {
  var colors = {
    'a': 'rgb(195, 155, 211)',
    'b': 'rgb(231, 76, 60)',
    'c': 'rgb(155, 89, 182)',
    'd': 'rgb(142, 68, 173)',
    'e': 'rgb(41, 128, 185)',
    'f': 'rgb(52, 152, 219)',
    'g': 'rgb(26, 188, 156)',
    'h': 'rgb(22, 160, 133)',
    'i': 'rgb(39, 174, 96)',
    'j': 'rgb(46, 204, 113)',
    'k': 'rgb(241, 196, 15)',
    'l': 'rgb(243, 156, 18)',
    'm': 'rgb(230, 126, 34)',
    'n': 'rgb(211, 84, 0)',
    'o': 'rgb(189, 195, 199)',
    'p': 'rgb(149, 165, 166)',
    'q': 'rgb(127, 140, 141)',
    'r': 'rgb(52, 73, 94)',
    's': 'rgb(44, 62, 80)',
    't': 'rgb(100, 30, 22)',
    'u': 'rgb(74, 35, 90)',
    'v': 'rgb(21, 67, 96)',
    'w': 'rgb(20, 90, 50)',
    'x': 'rgb(125, 102, 8)',
    'y': 'rgb(20, 90, 50)',
    'z': 'rgb(27, 38, 49)'
  };
  $.each($('div.audio_row'), function () {
    var child = $(this).find('div.audio_play');
    var bkg = $(child).css('background');
    if ($(this).attr('data-performer')) {
        bkg = colors[$(this).attr('data-performer').toLowerCase()[1]] + bkg.substr(bkg.indexOf(') ') + 1);
        child.css('background', bkg);
    }
  });
}