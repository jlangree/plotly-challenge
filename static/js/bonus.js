function buildGauge(washFreq) {

  var data = [
    {
      type: 'indicator',
      mode: 'gauge+number',
      gauge: {
        bar: {
          color: 'lightskyblue',
          width: 120
        },
        borderwidth: 4,
        bordercolor: 'grey',
        bgcolor: 'lightgrey',
        axis: {
          range: [null, 9],
          tickmode: 'array',
          tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          ticktext: ['<b>0</b>', '<b>1</b>', '<b>2</b>', '<b>3</b>', '<b>4</b>', '<b>5</b>', '<b>6</b>', '<b>7</b>', '<b>8</b>', '<b>9</b>'],
          ticks: 'inside',
          tickwidth: 2,
          ticklen: 45,
          tickcolor: 'grey',
          tickfont: {
            color: 'dimgrey',
            size: 15
          }
        },
        steps: [
          { range: [0, washFreq], color: 'grey' },
          // { range: [3, 6], color: 'darkgrey' },
          // { range: [0, 9], color: 'lightgrey' },
        ]
      },
      value: washFreq
    }
  ]

  var layout = {
      title: '<b>Wash Frequency (Per Week)</b>',
      width: 450,
      height: 450,
      margin: {
        l: 50,
        r: 50,
        b: 10,
        t: 100,
        pad: 4
      },
  }

  Plotly.newPlot('gauge', data, layout);

}