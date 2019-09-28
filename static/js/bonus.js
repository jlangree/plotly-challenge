function buildGauge(washFreq) {

//   var data = [
//     {
//       type: 'indicator',
//       mode: 'gauge',
//       gauge: {
//         bar: {
//           color: 'darkblue'
//         },
//         axis: {
//           range: [null, 9],
//           tickmode: 'array',
//           tickvals: [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5],
//           ticktext: ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'],
//           ticks: 'inside',
//           tickwidth: 2,
//           tickcolor: 'darkblue',
//         }
//       },
//       value: washFreq
//     }
//   ]

//   var layout = {
//       title: 'Wash Frequency (Per Week)'
//   }

//   Plotly.newPlot('gauge', data, layout);


// var traceGauge = {
//     type: 'pie',
//     showlegend: false,
//     hole: 0.4,
//     rotation: 90,
//     values: [ 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81/9, 81],
//     text: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
//     direction: 'clockwise',
//     textinfo: 'text',
//     textposition: 'inside',
//     marker: {
//       colors: ['','','','','','','','','','white'],
//       labels: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
//       hoverinfo: 'skip'
//     }
//   }

//   // needle
//   var degrees = 50, radius = .9
//   var radians = degrees * Math.PI / 180
//   var x = -1 * radius * Math.cos(radians) * washFreq
//   var y = radius * Math.sin(radians)

//   var gaugeLayout = {
//     shapes: [{
//       type: 'line',
//       x0: 0.5,
//       y0: 0.5,
//       x1: 0.6,
//       y1: 0.6,
//       line: {
//         color: 'black',
//         width: 3
//       }
//     }],
//     title: '<b>Belly Button Wash Frequency</b><br>Per Week',
//     xaxis: {visible: false, range: [-1, 1]},
//     yaxis: {visible: false, range: [-1, 1]}
//   }

//   var dataGauge = [traceGauge]

//   Plotly.plot('gauge', dataGauge, gaugeLayout)


    // Enter a speed between 0 and 180
    var level = 100;
    // Trig to calc meter point
    var degrees = 180 - level,
       radius = .5;
       
    var radians = degrees * Math.PI / 180;
    var aX = 0.025 * Math.cos((degrees - 90) * Math.PI / 180);
    var aY = 0.025 * Math.sin((degrees - 90) * Math.PI / 180);
    var bX = -0.025 * Math.cos((degrees - 90) * Math.PI / 180);
    var bY = -0.025 * Math.sin((degrees - 90) * Math.PI / 180);
    var cX = radius * Math.cos(radians);
    var cY = radius * Math.sin(radians);
    var path = 'M ' + aX + ' ' + aY +
      ' L ' + bX + ' ' + bY +
      ' L ' + cX + ' ' + cY +
      ' Z';
    var data = [
      {
        values: [1, 1, 1, 1, 1, 5],
        rotation: 90,
        text: ['0-1', '2-3', '4-5', '6-7', '8-9', ''],
        textinfo: 'text',
        textposition: 'inside',
        marker: {
          colors: ['rgba(183,28,28, .5)', 'rgba(249, 100, 30, .5)', 'rgba(249, 168, 37, .5)',
          'rgba(110, 154, 22, .5)', 'rgba(14, 127, 0, .5)',
          'rgba(0, 0, 0, 0.5)']
        },
        hoverinfo: 'skip',
        hole: .4,
        type: 'pie',
        showlegend: false
      }
    ];
    var layout = {
        title: '<b>Belly Button Wash Frequency</b><br>Per Week',
        shapes: [{
        type: 'path',
        path: path,
        fillcolor: '850000',
        line: {
          color: '850000'
        }
        }],
        height: 400,
        width: 400,
        xaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false,
                    fixedrange: true,
            range: [-1, 1]
        },
        yaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false,
                    fixedrange: true,
            range: [-1, 1]
        }
    };
    Plotly.newPlot('gauge', data, layout);
}