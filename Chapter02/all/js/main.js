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
// $(function() {
//   $('#typo')
//     .on('mouseover', function() {
//       $('#typo')
//         .stop(true)
//         .animate(
//           {
//             backgroundColor: '#ae5e9b'
//           },
//           500
//         );
//     })
//     .on('mouseout', function() {
//       $('#typo')
//         .stop(true)
//         .animate(
//           {
//             backgroundColor: '#3498db'
//           },
//           500
//         );
//     });
// });

// オブジェクトを再利用できない
// $('#typo').css({
//   'font-size': '50px',
//   'background-color': '#ae5e9b',
//   color: '#ebc000'
// });
// $('#header').css({
//   'font-size': '50px',
//   'background-color': '#ae5e9b',
//   color: '#ebc000'
// });

// // 変数を用いたデータの再利用
// // 変数の宣言とオブジェクトの格納
// var arg = {
//   'font-size': '50px',
//   'background-color': '#ae5e9b',
//   color: '#ebc000'
// };
// // データの受け渡し
// $('#typo').css(arg);
// $('#header').css(arg);

// 変数に格納されたオブジェクト内のデータの取得
// var obj = { a: 100, b: 200 };
// var data;

// data = obj.a + obj.b; // 変数dataには[300]が格納される
// data = obj['a'] + obj['b']; // 変数dataには[300]が格納される

/*
オブジェクトには上記のようなデータだけでなく後述する「関数」を格納することができます。
オブジェクトに保存されているのが関数の場合は「プロパティ」と言わずに「メソッド」といいます。
つまりオブジェクトに保存されたデータが関数の場合は、それを「オブジェクトのメソッド」といい、
関数以外のデータの場合は「オブジェクトのプロパティ」といいます。
しかし厳密には少し異なる部分もある
*/

// 配列の宣言とデータの格納
// var array = [100, 200, 300];

// // 配列からデータを取得する方法
// // 変数名[順番の数字];

// // 配列へのデータの格納とデータの取得
// var array = [100, 200, 300];
// var sum;

// sum = array[0] + array[2]; // 400が格納される
// sum = array[1] + array[2]; // 500が格納される

// thisとは？
/*
thisは「データの取得専用の変数」のようなものです。thisには何らかのデータが格納されます。
私たちが具体的に格納する値を指定することはできません
*/

// タイミングをコントロールするコード例
// $(function() {
//   $('#typo').on('mouseover', function() {
//     $('#typo').css('color', '#ebc000');
//   });
// });
// // 上記のコードをthisで置き換える
// $(function() {
//   $('#typo').on('mouseover', function() {
//     $(this).css('color', '#ebc000');
//   });
// });

// もう一つ使用例
// $(function() {
//   $('#typo').on('mouseover', function() {
//     $(this).css('color', '#ebc000');
//   });
//   $('#header').on('mouseover', function() {
//     $(this).css('color', '#ebc000');
//   });
// });

// thisを使用する理由
/*
・処理のパフォーマンスを向上できる
・内側のコードを使い回しやすくする
・$()関数に複数のセレクタを指定した場合に処理の切り分けが可能になる
*/

// コードを使い回す例
// $(function () {
//   function ChangeColor() {
//     $(this).css('color', #ebc000);
//   };

//   $('#typo').on('mouseover', ChangeColor);
//   $('#header').on('mouseover', ChangeColor);
// })

// タイミングをコントロールするコード例１
// $(function () {
//   $('#typo').on('mouseover', function () {
//     $('#typo').css('color', #ebc000);
//   });
// });

// // タイミングをコントロールするコード例２
// $(function () {
//   $('#typo').on('mouseover', function () {
//     $(this).css('color', '#ebc000');
//   });
// });

// // $()関数に複数のセレクタを指定した場合のコード例１
// $(function () {
//   $('header, #typo, footer').on('mouseover', function () {
//     $('header, #typo, footer').css(
//       'background-color', '#ac5e9b'
//     );
//   });
// });

// // $()関数に複数のセレクタを指定した老婆のコード例２
// $(function () {
//   $('header, #typo, footer').on('mouseover', function () {
//     $(this).css(
//       'background-color', '#ae5e9b'
//     );
//   });
// });

//

// // 関数の作成例
// function add(num1, num2) {
//   return num1 + num2;
// }

// // 関数の作成例２
// var added1 = add(1, 2);
// var added2 = add(6, 7);
// var added3 = added1 + added2;

// function add(num1, num2) {
//   return num1 + num2;
// }

// 無名関数

// 無名関数の使用例
// $(function() {
//   $('#typo').on('mouseover', function() {
//     $('#typo').css('color', '#ebc000');
//   });
// });

// スコープの概念
// var global = 'This is global'; // 全ての関数の外側で宣言されているので、全関数で利用可能

// function a() {
//   var local_a = 'This is local(a)'; // 変数local_aの宣言
//   global; // 変数globalはグローバルスコープなので利用できる
//   local_a; // 同一関数内で宣言された変数なので、利用できる
//   local_aa; // この記述箇所よりも入れ子内で宣言されている変数なので、利用できない
//   local_b; // 別の関数内で宣言されている変数なので、利用できない

//   // 関数の入れ子
//   function aa() {
//     var local_aa = 'This is local(aa)';
//     global; // 変数globalはグローバルスコープなので利用できる。
//     local_a; // この箇所よりも外側で宣言されている変数なので利用できる。
//     local_aa; // 同一関数内で宣言された変数なので、利用できる
//     local_b; // 別の関数内で宣言されている変数なので利用できない
//   }
// }

// function b() {
//   var local_b = 'This is local(b)';
//   global; // 変数globalはグローバルスコープなので利用できる
//   local_a; // 別の関数内で宣言されている変数なので利用できない
//   local_aa; // 別の関数内で宣言されている変数なので利用できない
//   local_b; // 同一関数内で宣言されて変数なので利用できる
// }
