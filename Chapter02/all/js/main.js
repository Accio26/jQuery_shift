// $(function() {
//   $('#typo').css('color', '#ebc000');
// });

// $(function() {
//   $('#typo .inner').css('transform', 'rotate(5deg)');
// });

// $(function() {
//   $('.page-main > div:nth-child(1) .inner').css('opacity', 0.5);
// });

// 基本的な構文
// $('#typo').css('color', #ebc000);

// 複数のプロパティの変更
// $(function() {
//   $('#typo').css({
//     'font-size': '50px',
//     'background-color': '#ae5e9b',
//     color: '#ebc000'
//   });
// });

// 複数のプロパティの変更⓶
// $(function() {
//   $('#typo').css({
//     fontSize: '50px',
//     backgroundColor: '#ae5e9b',
//     color: '#ebc000'
//   });
// });

// タイミングをコントロールする(マウスオーバーすると色が変わるよ)
// $(function() {
//   $('#typo').on('mouseover', function() {
//     $('#typo').css('color', '#ebc000');
//   });
// });

// $(function() {
//   $('#typo').click(function() {
//     $('#typo').css('color', '#ddd');
//   });
// });

// $(function() {
//   $('#typo').on('click', function() {
//     $('#typo').css('color', '#ebc000');
//   });
// });

// $(function() {
//   $('#typo').on('click', function() {
//     $('#typo').css('background-color', '#ae5e9b');
//     $('header').css('color', '#ae5e9b');
//   });
// });

// on()メソッドを複数指定する
// $(function() {
//   $('#typo').on('mouseover', function() {
//     $('#typo').css({
//       color: '#ebc000',
//       backgroundColor: '#ae5e9b'
//     });
//   });
//   $('#typo').on('mouseout', function() {
//     $('#typo').css({
//       color: '',
//       backgroundColor: ''
//     });
//   });
// });

// メソッドチェーンとは
// $(function() {
//   $('#typo')
//     .on('mouseover', function() {
//       $('#typo').css({
//         color: '#ebc000',
//         backgroundColor: '#ae5e9b'
//       });
//     })
//     .on('mouseout', function() {
//       $('#typo').css({
//         color: '',
//         backgroundColor: ''
//       });
//     });
// });

/*
メソッドチェーンのメリットは$()関数の記述が一回で済むためコードがシンプルになる
プログラムの処理速度が向上する
非常に短いコードであればそれほど差は出ないがプログラムが大きくなればなるほど、メソッドチェーンの有用性は増す。
*/

// アニメーションの実装
// $(function() {
//   $('#typo').on('click', function() {
//     $('#typo .inner').animate(
//       {
//         opacity: 0,
//         fontSize: '0px'
//       },
//       1500
//     );
//   });
// });

// 変更例
// $(function() {
//   $('#typo .inner').on('click', function() {
//     $('#typo .inner').animate(
//       {
//         color: '#ebc000'
//       },
//       1500
//     );
//   });
// });

// // イージングの例
// $(function() {
//   $('#typo .inner')
//     .css('top', '-100px')
//     .on('click', function() {
//       $('#typo .inner').animate(
//         {
//           top: '100px'
//         },
//         1500,
//         'linear'
//       );
//     });
// });

// アニメーション終了時に実行する処理の記述例
// $(function() {
//   $('#typo .inner')
//     .css('top', '-100px')
//     .on('click', function() {
//       $('#typo .inner').animate(
//         {
//           top: '100px'
//         },
//         1500,
//         function() {
//           $('#typo .inner').animate({ top: '0px' }, 500);
//         }
//       );
//     });
// });

// animate()メソッドはアニメーション中の同じ要素に対して、別のanimate()メソッドを実行しても
// 途中段階のアニメーションをキャンセルされず、順番待ちをする仕様になっている

// 仕様を確認するためのコード
// $(function() {
//   $('#typo')
//     .on('mouseover', function() {
//       $('#typo').animate(
//         {
//           backgroundColor: '#ae5e9b'
//         },
//         500
//       );
//     })
//     .on('mouseout', function() {
//       $('#typo').animate(
//         {
//           backgroundColor: '#3498db'
//         },
//         500
//       );
//     });
// });

// 仕様を確認するためのコード⓶
$(function() {
  $('#typo')
    .on('mouseover', function() {
      $('#typo')
        .stop(true)
        .animate(
          {
            backgroundColor: '#ae5e9b'
          },
          500
        );
    })
    .on('mouseout', function() {
      $('#typo')
        .stop(true)
        .animate(
          {
            backgroundColor: '#3498db'
          },
          500
        );
    });
});
