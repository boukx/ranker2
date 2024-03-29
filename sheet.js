const bracket_data = [
  [1, 0, 1, , , , 0],
  [2, 2000, 1, , 180000, "=MIN(MAX(F1-MIN(F1*$A$16,$B$16), INDEX($B$1:$B$14, MIN(MAX(1,G1),14))) + MAX((MIN(E2/$C$16,1)*65000-MAX(F1-MIN(F1*$A$16,$B$16), INDEX($B$1:$B$14, MIN(MAX(1,G1),14))))*INDEX($C$1:$C$14,MIN(MAX(1,G1),14)), 0), INDEX($B$1:$B$14,MIN(G1+4,14)))", "=MAX(IF(F2 >= 5000, MIN(INT(F2/5000) + 2, 14), IF(F2 >=2000, 2, 1)), G1)"],
  [3, 5000, 1, , 690000],
  [4, 10000, .8, , 750000],
  [5, 15000, .8, , 750000],
  [6, 20000, .8, , 750000],
  [7, 25000, .7, , 750000],
  [8, 30000, .7, , 750000],
  [9, 35000, .6],
  [10, 40000, .5],
  [11, 45000, .5],
  [12, 50000, .4],
  [13, 55000, .4],
  [14, 60000, .34],
  [],
  [.2, 2500, 750000],
];

for (let i = 2; i < 13; i++) {
    bracket_data[i][5] = bracket_data[1][5].replaceAll('F1', 'F' + i).replaceAll('E2', 'E' + (i + 1)).replaceAll('G1', 'G' + i)
    bracket_data[i][6] = bracket_data[1][6].replaceAll('F2', 'F' + (i + 1)).replaceAll('G1', 'G' + i)
}

const hfInstance = HyperFormula.buildEmpty({
    licenseKey: 'gpl-v3',
});

const bracket_container = document.getElementById('ranker');
const hot1 = new Handsontable(bracket_container, {
  data: bracket_data,
  formulas: {
    engine: hfInstance,
  },
  colHeaders: ['Rank', 'Req CP', 'Keep Coef', ' ','Honor', 'CP', 'Standing'],
  height: 'auto',
  licenseKey: 'non-commercial-and-evaluation',
  fillHandle: {
   autoInsertRow: true
    },
    customBorders: [
      {
        range: {
          from: {
            row: 1,
            col: 4
          },
          to: {
            row: 12,
            col: 4
          }
        },
        top: {
          width: 2,
          color: 'magenta'
        },
        left: {
          width: 2,
          color: 'orange'
        },
        bottom: {
          width: 2,
          color: 'red'
        },
        right: {
          width: 2,
          color: '#5292F7'
        }
      },
      {
        range: {
          from: {
            row: 0,
            col: 6
          },
          to: {
            row: 0,
            col: 6
          }
        },
        top: {
          width: 2,
          color: 'magenta'
        },
        left: {
          width: 2,
          color: 'orange'
        },
        bottom: {
          width: 2,
          color: 'red'
        },
        right: {
          width: 2,
          color: '#5292F7'
        }
      }
    ]
});
