var basic = `drawBarChart([
    {
      columnLabel: 'Apples',
      value: 22,
      description: 'Germany'
    },
    {
      columnLabel: 'Bananas',
      value: 31,
      description: 'Brasil'
    },
    {
      columnLabel: 'Cherries',
      value: 27,
      description: 'Canada'
    },
    {
      columnLabel: 'Durians',
      value: 15,
      description: 'Tailand'
    },
    {
      columnLabel: 'Pears',
      value: 38,
      description: 'China'
    },
    {
      columnLabel: 'Mangos',
      value: 9,
      description: 'Phillipine'
    },
    {
      columnLabel: 'Madarins',
      value: 29,
      description: 'Japan'
    }
  ], {
    title: 'Barchart Project',
    gridlineSpacingY: 5,
    dataLabelVerticalAlign: 'center',
  }, 'barchart-basic');`

var colored = `drawBarChart([
    {
      columnLabel: 'Aquaman',
      value: 15,
      color: 'orange'
    },
    {
      columnLabel: 'Batman',
      value: 53,
      color: 'rgba(0,64,128,0.8)'
    },
    {
      columnLabel: 'Captain America',
      value: 45,
      color: 'linear-gradient(red,white,blue)'
    },
  ], {
    title: 'Colored Barchart',
    titleFontColor: 'hsl(128,100%,40%)',
    titleFontSize: '32px',
    dataLabelFontColor: '#0FF',
    dataLabelBgColor: 'rgba(128,0,0,0.3)',
    gridlineSpacingY: 10,
    dataLabelVerticalAlign: 'bottom'
  }, 'barchart-colored');`

var multi = `drawBarChart([
    {
      columnLabel: 'Germanic',
      multiValues: [
        {
          value: 5,
          description: 'English'
        },{
          value: 3,
          color: '#FA0',
          description: 'German'
        }
      ]
    },
    {
      columnLabel: 'Romantic',
      multiValues: [
        {
          value: 2,
          description: 'French'
        },{
          value: 1,
          color: '#0FA',
          description: 'Italian'
        },{
          value: 3,
          color: '#FA0',
          description: 'Spanish'
        }
      ]
    },
    {
      columnLabel: 'Made-up',
      value: 3,
      description: 'Pig Latin'
    }
  ], {
    title: 'Multi-bar chart',
    dataLabelVerticalAlign: 'center',
  }, 'barchart-multi');`

var nolabel = `drawBarChart([
  {
    columnLabel: 'MTL', value: 24
  },
  {
    columnLabel: 'TOR', value: 13
  },
  {
    columnLabel: 'DET', value: 11
  },
  {
    columnLabel: 'BOS', value: 6
  },
  {
    columnLabel: 'CHI', value: 6
  },
  {
    columnLabel: 'PIT', value: 5
  },
  {
    columnLabel: 'EDM', value: 5
  }
], {
  title: 'Unlabelled Barchart',
  gridlineSpacingY: 5,
  showDataValueLabels: false,
  showDataDescriptions: false,
  barSpacing: '1px',
}, 'barchart-nolabel');`
var full = `drawBarChart([{
    columnLabel: 'Alpha',
    value: 1
  },
  {
    columnLabel: 'Bravo',
    multiValues: [{
      value: 1,
      color: '#0FA',
      description: 'I am green'
    },
    {
      value: 1,
      color: '#A0F',
      description: 'Je suis violet'
    },
    {
      value: 1,
      color: '#FA0',
      description: 'Ich bin gelb'
    }
    ]
  },
  {
    columnLabel: 'Charlie',
    value: 6,
    color: '#0AF',
    description: 'Sono azuro'
  },
  {
    columnLabel: 'Delta',
    value: 2,
    color: '#AF0'
  },
  {
    columnLabel: 'Echo',
    multiValues: [{
      value: 1
    },
    {
      value: 1
    },
    {
      value: 1
    },
    {
      value: 1
    }
    ]
  }
  ], {
    title: 'Bar chart with Options',
    titlePosition: 'top',
    gridlineSpacingY: 1,
    dataLabelVerticalAlign: 'center',
    barSpacing: '30px',
    showDataValueLabels: true,
    showDataDescriptions: true,
    dataLabelFontColor: '#DDF',
    dataLabelBgColor: 'rgba(0,0,0,0.3)',
    titleFontColor: '#0AF',
    titleFontSize: '20px'
  },
  'barchart-full');`

// Render the sample code and charts

eval(basic);
$('#barchart-basic-code').text(basic);

//eval(colored);
//$('#barchart-colored-code').text(colored);

//eval(multi);
//$('#barchart-multi-code').text(multi);

//eval(nolabel);
//$('#barchart-nolabel-code').text(nolabel);

// Draw Option Bar
var optionBar = `drawOptionBar([
  {
    optionId: 'title',
    optionText: 'Change Title'
  },
  {
    optionId: 'tFontSize',
    optionText: 'Title Font Size'
  },
  {
    optionId: 'changeLabel',
    optionText: 'Remove Label'
  },
  {
    optionId: 'chartAxis',
    optionText: 'Chart Axis'
  },
  {
    optionId: 'smallWindow',
    optionText: 'Alter Items'
  }
]);`
eval(optionBar);
