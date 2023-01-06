const testData = [
  {
    'Time': "52:50",
    'Place': 100,
    'Seconds': 3170,
    'Name': 'Gary',
    'Year': 2019,
    'Nationality': 'International man of mystery',
    'Doping': '',
    'URL': 'www.example.com/gary'
  },
  {
    'Time': "56:14",
    'Place': 110,
    'Seconds': 3374,
    'Name': 'Cycling man',
    'Year': 2010,
    'Nationality': 'Global citizen',
    'Doping': 'Allegations of widespread doping throughout his entire career',
    'URL': 'www.example.com/cyclingman'
  },
  {
    'Time': "59:25",
    'Place': 120,
    'Seconds': 3565,
    'Name': 'Mr Test Case',
    'Year': 2020,
    'Nationality': 'Testonian',
    'Doping': '2020 Failed test for testosterone',
    'URL': 'www.example.com/mrtestcase'
  },
];

const confirmedDopingPhrases = [
  "2004 Tour de France title stripped by UCI in 2012",
  "Admitted to using epo and amphetamines",
  "Confessed later in his career to doping",
  "1994 Failed test for salbutemol, not a banned drug at that time",
  "Failed doping test in 2007 tour de France",
  "In 2000 confessed to doping during his career",
  "Positive testosterone test in 1998",
  "Stripped of 2006 Tour de France title",
  "Tested positive for Salbutemol in 1994, suspended for one month",
  "Testified in 2012 to doping during his time with US Postal Service",
];

const unconfirmedDopingPhrases = [
  "Alleged drug use during 1995 due to high hematocrit levels",
  "Alleged use of illegal blood transfusions in 2006",
  "Alleged doping during 2006 Tour de France",
  "Associated with Mantova investigation, charges dropped",
  "High hematocrit during 2005 season, removed by team management",
  "Implicated in the Operación Puerto doping case",
  "Implicated in Giardini Margherita Raid in 1998 as a 'victim'",
  "Made payments to Ferrari, but no charges filed",
];

// All tests are for the methods and properties of the ScatterPlot class unless otherwise stated

QUnit.test("Test 1: The makeSvgElem method creates an SVG element", assert => {
  const graph = new ScatterPlot(testData);

  graph.makeSvgElem();

  assert.equal(document.getElementsByTagName('svg').length, 1);
});

QUnit.test("Test 2: The makeSvgElem method sets the width of the SVG element to the browser window's innerwidth or 600px (whichever is the greater)", assert => {
  const graph = new ScatterPlot(testData);

  graph.makeSvgElem();

  const firstSvgElem = document.getElementsByTagName('svg')[0];
  svgWidth = window.getComputedStyle(firstSvgElem).getPropertyValue('width');
  if (window.innerWidth < 600) {
    console.info("Running small screen tests");
    assert.equal(svgWidth, '600px');
  } else {
    assert.equal(svgWidth, `${window.innerWidth}px`);
  }
});

QUnit.test("Test 3: makeSvgElem sets the height of the SVG element to the floor of 85% of the window height or 300px (whichever is the greater)", assert => {
  const graph = new ScatterPlot(testData);

  graph.makeSvgElem();

  const firstSvgElem = document.getElementsByTagName('svg')[0];
  svgHeight = window.getComputedStyle(firstSvgElem).getPropertyValue('height');
  if (window.innerHeight < (300 / 0.85)) {
    console.info("Running small screen tests");
    assert.equal(svgHeight, '300px');
  } else {
    assert.equal(svgHeight, `${Math.floor(0.85 * window.innerHeight)}px`);
  }
});

QUnit.test("Test 4: The getTimeFromObject method returns a Date object equal to the Seconds property of the function's argument converted into a time", assert => {
  const graph = new ScatterPlot(testData);

  const testTime = new Date(0);
  testTime.setSeconds(testData[0].Seconds);
  assert.deepEqual(graph.getTimeFromDataObject(testData[0]), testTime);
});

QUnit.test("Test 5: The xScale property accepts a year (formatted as a date object) and converts it into a value that is in the range of the ScatterPlot's MARGINS.left and svgWidth - MARGINS.right", assert => {
  const graph = new ScatterPlot(testData);

  testData.forEach(dataObj => {
    testYear = new Date(dataObj.Year, 0);
    assert.true(graph.xScale(testYear) >= graph.MARGINS.left);
    assert.true(graph.xScale(testYear) <= graph.svgWidth - graph.MARGINS.right);
  });
});

QUnit.test("Test 6: The yScale property accepts a time (formatted as a date object) and converts it into a value that is in the range of the ScatterPlot's MARGINS.bottom and svgHeight - MARGINS.top", assert => {
  const graph = new ScatterPlot(testData);

  testData.forEach(dataObj => {
    testTime = graph.getTimeFromDataObject(dataObj);
    assert.true(graph.yScale(testTime) >= graph.MARGINS.top);
    assert.true(graph.yScale(testTime) <= graph.svgHeight - graph.MARGINS.bottom);
  });
});

QUnit.test("Test 7: A ScatterPlot instance's yScale property accepts a time (formatted as a date object) and converts it into a value that is in the range of the ScatterPlot's MARGINS.bottom and svgHeight - MARGINS.top", assert => {
  const graph = new ScatterPlot(testData);

  testData.forEach(dataObj => {
    testTime = graph.getTimeFromDataObject(dataObj);
    assert.true(graph.yScale(testTime) >= graph.MARGINS.top);
    assert.true(graph.yScale(testTime) <= graph.svgHeight - graph.MARGINS.bottom);
  });
});

QUnit.test("Test 8: The drawAxes method creates several two elements with a class of 'axis'", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawAxes(svg);

  assert.equal(document.getElementsByClassName('axis').length, 2);
});

QUnit.test("Test 9: The drawAxes method creates two elements with a class of label", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawAxes(svg);

  assert.equal(document.getElementsByClassName('label').length, 2);
});

QUnit.test("Test 10: The drawDataPoints method creates one element with a class of dot for each element in the dataset", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawDataPoints(svg);

  assert.equal(document.getElementsByClassName('dot').length, testData.length);
});

QUnit.test("Test 11: each dot element has a data-xvalue attribute that is equal to the value of the 'Year' property of the corresponding object in the dataset", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawDataPoints(svg);

  const dotClassElems = document.getElementsByClassName('dot');
  for (let i = 0; i < testData.length; i++) {
    assert.equal(dotClassElems[i].getAttribute('data-xvalue'), new Date(testData[i].Year, 0));
  }
});

QUnit.test("Test 12: each dot element has a data-yvalue attribute that is equal to the value returned by getTimeFromString for the corresponding object's Time property", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawDataPoints(svg);

  const dotClassElems = document.getElementsByClassName('dot');
  for (let i = 0; i < testData.length; i++) {
    assert.equal(dotClassElems[i].getAttribute('data-yvalue'), graph.getTimeFromDataObject(testData[i]));
  }
});

QUnit.test("Test 13: the dot elements have different cx and cy attributes if the corresponding Object properties in the dataset are not the same", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawDataPoints(svg);

  const dotClassElems = document.getElementsByClassName('dot');
  assert.notEqual(testData[0].Year, testData[1].Year);
  assert.notEqual(testData[0].Seconds, testData[1].Seconds);
  assert.notEqual(dotClassElems[0].getAttribute('cx'), dotClassElems[1].getAttribute('cx'));
  assert.notEqual(dotClassElems[0].getAttribute('cy'), dotClassElems[1].getAttribute('cy'));
});

QUnit.test("Test 14: the cx-position of the dot element with the (potentially joint) lowest data-xvalue attribute is equal to the amount specified by MARGINS.left", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawDataPoints(svg);

  const dotClassElems = document.getElementsByClassName('dot');
  const dotArray = Array.from(dotClassElems);
  dotWithLowestYearValue = dotArray.reduce((lowest, current) => {
    return lowest.getAttribute('data-xvalue') <= current.getAttribute('data-xvalue') ? lowest : current;
  });
  assert.equal(dotWithLowestYearValue.getAttribute('cx'), graph.MARGINS.left);
});

QUnit.test("Test 15: the cx-position of the dot element with the (potentially joint) highest data-xvalue attribute is equal to the SVG element width minus MARGINS.right", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawDataPoints(svg);

  const dotClassElems = document.getElementsByClassName('dot');
  const dotArray = Array.from(dotClassElems);
  dotWithHighestYearValue = dotArray.reduce((highest, current) => {
    return highest.getAttribute('data-xvalue') >= current.getAttribute('data-xvalue') ? highest : current;
  });
  assert.equal(dotWithHighestYearValue.getAttribute('cx'), graph.svgWidth - graph.MARGINS.right);
});

QUnit.test("Test 16: the cy-position (to the nearest whole number) of a dot element with the (potentially joint) lowest value for 'data-yvalue' is equal to the graph height - MARGINS.bottom", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawDataPoints(svg);

  const dotClassElems = document.getElementsByClassName('dot');
  const dotArray = Array.from(dotClassElems);
  dotWithLowestTimeValue = dotArray.reduce((lowest, current) => {
    return lowest.getAttribute('data-yvalue') <= current.getAttribute('data-yvalue') ? lowest : current;
  });
  assert.equal(Math.round(dotWithLowestTimeValue.getAttribute('cy')), graph.svgHeight - graph.MARGINS.bottom);
});

QUnit.test("Test 17: the cy-position (to the nearest whole number) of the dot element that represents the datapoint with the largest value in a datset is equal to MARGINS.top", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawDataPoints(svg);

  const dotClassElems = document.getElementsByClassName('dot');
  const dotArray = Array.from(dotClassElems);
  dotWithHighestTimeValue = dotArray.reduce((highest, current) => {
    return highest.getAttribute('data-yvalue') >= current.getAttribute('data-yvalue') ? highest : current;
  });
  assert.equal(Math.round(dotWithHighestTimeValue.getAttribute('cy')), graph.MARGINS.top);
});

QUnit.test("Test 18: The getDotColor method returns a value equal to the COLORS['No known doping history'] property if the supplied data object's Doping property is the empty string", assert => {
  const graph = new ScatterPlot(testData);

  const dotColor = graph.getDotColor(testData[0]);

  assert.equal(dotColor, graph.COLORS['No known doping history']);
});


QUnit.test("Test 19: The getDotColor method does not return a value equal to COLORSCALE['No known doping history'] if the supplied data object's Doping property is not the empty string", assert => {
  const graph = new ScatterPlot(testData);

  const dotColor = graph.getDotColor(testData[1]);

  assert.notEqual(dotColor, graph.COLORS['No known doping history']);
});

QUnit.test("Test 20: getDotColor returns a value equal to COLORSCALE['Failed test / confessed to doping'] if the supplied data object's Doping property contains the string 'Confessed'", assert => {
  const graph = new ScatterPlot(testData);
  const testObject = {'Doping': 'In 1999, confessed to taking every possible illegal doping product known to man'}

  const dotColor = graph.getDotColor(testObject);

  assert.equal(dotColor, graph.COLORS['Failed test / confessed to doping']);
});

QUnit.test("Test 21: The isConfirmedDoping method returns a true when passed any of several phrases that equate to confirmed doping in the context of the cycling dataset object's Doping properties", assert => {
  const graph = new ScatterPlot(testData);

  confirmedDopingPhrases.forEach(function(phrase) {
    assert.true(graph.isConfirmedDoping(phrase));
  });
});

QUnit.test("Test 22: The isConfirmedDoping method returns a false when passed any of several phrases that equate to unconfirmed allegations of doping in the context of the cycling dataset object's Doping properties", assert => {
  const graph = new ScatterPlot(testData);

  unconfirmedDopingPhrases.forEach(function(phrase) {
    assert.false(graph.isConfirmedDoping(phrase));
  });
});

QUnit.test("Test 23: The getDotColor method returns a value equal to COLORS['Failed test / confessed to doping'] when passed an object with a Doping property that is equal to any item in confirmedDopingPhrases", assert => {
  const graph = new ScatterPlot(testData);

  confirmedDopingPhrases.forEach(function(phrase) {
    testObject = {'Doping': phrase};
    assert.equal(graph.getDotColor(testObject), graph.COLORS['Failed test / confessed to doping']);
  });
});

QUnit.test("Test 24: The getDotColor method returns a value equal to COLORS['Unproven allegations'] when passed an object with a Doping property that is equal to any item unconfirmedDopingPhrases in", assert => {
  const graph = new ScatterPlot(testData);

  unconfirmedDopingPhrases.forEach(function(phrase) {
    testObject = {'Doping': phrase};
    assert.equal(graph.getDotColor(testObject), graph.COLORS['Unproven allegations']);
  });
});

QUnit.test("Test 25: The color of two dot elements is different if the doping property of the corresponding dataObject's produce different results from the getDotColor method", assert => {
  // The three items in the testData object represent the three possible results from getDotColor
  const graph = new ScatterPlot(testData);

  graph.drawGraph();

  const dotClassElems = document.getElementsByClassName('dot');
  const dotArray = Array.from(dotClassElems);
  for (let i = 0; i < dotArray.length - 1; i++) {
    for (let j = i + 1; j < dotArray.length; j++) {
      assert.notEqual(dotArray[i].getAttribute('fill'), dotArray[j].getAttribute('fill'));
    }
  };
});

QUnit.test("Test 26: The createFilter method adds a filter element to the SVG", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.createFilter(svg);

  const firstSvgElem = document.getElementsByTagName('svg')[0];
  assert.equal(firstSvgElem.getElementsByTagName('filter').length, 1);
});

QUnit.test("Test 27: The drawLegend method creates one element with the class 'legend-dot' for each of the keys that are present in the COLORSCALE object", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawLegend(svg)

  assert.equal(document.getElementsByClassName('legend-dot').length, Object.keys(graph.COLORS).length);
});

QUnit.test("Test 28: The drawLegend method adds the text for each of the keys of the ScatterPlot class's COLORS object to the graph", assert => {
  const graph = new ScatterPlot(testData);
  const svg = graph.makeSvgElem();

  graph.drawLegend(svg);

  const firstSvgElem = document.getElementsByTagName('svg')[0];
  Object.keys(graph.COLORS).forEach(str => {
    assert.true(firstSvgElem.textContent.includes(str));
  });
});

QUnit.test("Test 29: The makeToolTipContainer method creates an element with an ID of 'tooltip-container", assert => {
  const graph = new ScatterPlot(testData);

  graph.makeToolTipContainer();

  assert.notEqual(document.getElementById('tooltip-container'), undefined);
});

QUnit.test("Test 30: The makeToolTip method creates a <div> element with an ID equal to the supplied argument", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();

  graph.makeToolTip('tooltip');

  assert.notEqual(document.getElementById('tooltip'), undefined);
});

QUnit.test("Test 31: The makeToolTip method adds the ID of the first tooltip to the ScatterPlot instance's toolTips property", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();

  graph.makeToolTip('tooltip');

  assert.equal(graph.toolTipIds[0], 'tooltip');
});

QUnit.test("Test 32: Calling the makeToolTip method multiple times creates multiple tool tips", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();
  graph.makeToolTip('tooltip');
  assert.equal(document.getElementById('tooltip1'), undefined);

  graph.makeToolTip('tooltip1');

  assert.notEqual(document.getElementById('tooltip1'), undefined);
});

QUnit.test("Test 33: The makeToolTip method adds the ID of successive tooltips to the start of ScatterPlot instance's toolTipIds property", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();
  graph.makeToolTip('tooltip1');

  graph.makeToolTip('tooltip');

  assert.equal(graph.toolTipIds[0], 'tooltip');
});

QUnit.test("Test 34: a tool tip created with the makeToolTip method should contain a <p> element (with a suitable ID) for each of the elements in toolTipItems", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();

  graph.makeToolTip('tooltip');

  graph.toolTipItems.forEach(item => {
    assert.notEqual(document.getElementById(`tooltip-${item[0].toLowerCase()}`), null);
  });
});

QUnit.test("Test 35: A tool tip is not visible when it is first created", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();

  graph.makeToolTip('tooltip');

  assert.equal(document.getElementById('tooltip').style.visibility, "hidden");
});

QUnit.test("Test 36: The displayToolTip  method causes the tool tip with the supplied ID to become visible", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();
  graph.makeToolTip('tooltip');

  graph.displayToolTip('tooltip', testData[0]);

  assert.equal(document.getElementById('tooltip').style.visibility, "visible");
});

QUnit.test("Test 37: The displayToolTip method updates the contents of the tool tip with the supplied ID with the relevant data from the data object that is also supplied as an argument", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();
  graph.makeToolTip('tooltip');

  graph.displayToolTip('tooltip', testData[1]);

  graph.toolTipItems.forEach(item => {
    const para = document.getElementById(`tooltip-${item[0].toLowerCase()}`);
    assert.equal(para.getElementsByTagName('span')[0].textContent, testData[1][item[0]]);
  });
});

QUnit.test("Test 38: The getDopingHistoryOrNone method returns 'None' when it is passed the empty string as an argument", assert => {
  const graph = new ScatterPlot(testData);

  assert.equal(graph.getStringOrNone(''), 'None');
});

QUnit.test("Test 39: The getDopingHistoryOrNone method returns the input string if that argument is not the empty string", assert => {
  const graph = new ScatterPlot(testData);

  assert.equal(graph.getStringOrNone('Test'), 'Test');
});

QUnit.test("Test 40: The displayToolTip method replaces empty data fields with 'None' when filling a tool tip with information from a data object", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();
  graph.makeToolTip('tooltip');

  graph.displayToolTip('tooltip', testData[0]);

  const dopingPara = document.getElementById('tooltip-doping');
  assert.equal(dopingPara.getElementsByTagName('span')[0].textContent, 'None');
});

QUnit.test("Test 41: The displayToolTip method updates the tool tip's data-year property to a date object with the appropriate value", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();
  graph.makeToolTip('tooltip');

  graph.displayToolTip('tooltip', testData[0]);

  assert.equal(document.getElementById('tooltip').getAttribute('data-year'), new Date(testData[0].Year, 0));
});

QUnit.test("Test 42: a tool tip has a height of zero when it is first created", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();

  graph.makeToolTip('tooltip');

  const toolTip = document.getElementById('tooltip');
  const toolTipHeightInt = Number(window.getComputedStyle(toolTip).getPropertyValue('height').slice(0, -2));
  assert.equal(toolTipHeightInt, 0);
});

QUnit.test("Test 43: The hideToolTip method sets the visibility of the tool tip with the relevant ID to hidden'", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();
  graph.makeToolTip('tooltip');
  graph.displayToolTip('tooltip', testData[0]);

  graph.hideToolTip('tooltip');

  assert.equal(document.getElementById('tooltip').style.visibility, "hidden");
});

QUnit.test("Test 44: The hideToolTip method sets a tool tip's height to zero", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();
  graph.makeToolTip('tooltip');
  graph.displayToolTip('tooltip', testData[0]);

  graph.hideToolTip('tooltip');

  const toolTip = document.getElementById('tooltip');
  const toolTipHeightInt = Number(window.getComputedStyle(toolTip).getPropertyValue('height').slice(0, -2));
  assert.equal(toolTipHeightInt, 0);
});

QUnit.test("Test 45: The displayToolTip method sets a tool tip's margin bottom to a value greater than zero", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();
  graph.makeToolTip('tooltip');

  graph.displayToolTip('tooltip', testData[0]);

  const toolTip = document.getElementById('tooltip');
  const toolTipBottomMarginInt = Number(window.getComputedStyle(toolTip).getPropertyValue('margin-bottom').slice(0, -2));
  assert.true(toolTipBottomMarginInt > 0);
});

QUnit.test("Test 46: The hideToolTip method sets a tool tip's margin bottom to zero", assert => {
  const graph = new ScatterPlot(testData);
  graph.makeToolTipContainer();
  graph.makeToolTip('tooltip');
  graph.displayToolTip('tooltip', testData[0]);

  graph.hideToolTip('tooltip');

  const toolTip = document.getElementById('toolTip');
  const toolTipBottomMarginInt = Number(window.getComputedStyle(tooltip).getPropertyValue('margin-bottom').slice(0, -2));
  assert.equal(toolTipBottomMarginInt, 0);
});

QUnit.test("Test 47: The countPreviousMatches method returns 0 for the first element of an array", assert => {
  const graph = new ScatterPlot(testData);

  assert.equal(graph.countPreviousMatches(0), 0);
});

QUnit.test("Test 48: The countPreviousMatches method returns 1 for the second element of an array with two objects with matching time properies", assert => {
  const testArr = [{'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}]
  const graph = new ScatterPlot(testArr);

  assert.equal(graph.countPreviousMatches(1), 1);
});

QUnit.test("Test 49: The countPreviousMatches method returns 0 for the second element of an array with two objects with different time properies", assert => {
  const graph = new ScatterPlot(testData);

  assert.equal(graph.countPreviousMatches(1), 0);
});

QUnit.test("Test 50: The countPreviousMatches returns 0 for the second element of an array with two objects with the same Seconds properties but different Year properies", assert => {
  const testArr = [{'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2020}]
  const graph = new ScatterPlot(testArr);

  assert.equal(graph.countPreviousMatches(1), 0);
});

QUnit.test("Test 51: The countPreviousMatches method returns 2 for the third element of an array with three objects with the same Seconds and Year properties", assert => {
  const testArr = [{'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}]
  const graph = new ScatterPlot(testArr);

  assert.equal(graph.countPreviousMatches(2), 2);
});

QUnit.test("Test 52: The countPreviousMatches method returns 2 for the fourth element of an array with three objects with matching Seconds and Year properties and a first element with a different Year property", assert => {
  const testArr = [{'Seconds': 2240, 'Year': 2017}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}]
  const graph = new ScatterPlot(testArr);

  assert.equal(graph.countPreviousMatches(3), 2);
});

QUnit.test("Test 53: The countPreviousMatches method returns 2 for the fourth element of an array with three objects with matching Seconds and Year properties and a first element with a different Year property", assert => {
  const testArr = [{'Seconds': 2240, 'Year': 2017}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}]
  const graph = new ScatterPlot(testArr);

  assert.equal(graph.countPreviousMatches(3), 2);
});

QUnit.test("Test 54: The getMaxMatches method returns 2 for an array with three objects with matching Seconds and Year properties", assert => {
  const testArr = [{'Seconds': 2240, 'Year': 2017}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}]
  const graph = new ScatterPlot(testArr);

  assert.equal(graph.getMaxMatches(testArr), 2);
});

QUnit.test("Test 55: The getMaxMatches method returns 0 for an array with three objects with different Seconds properties", assert => {
  const graph = new ScatterPlot(testData);

  assert.equal(graph.getMaxMatches(testData), 0);
});

QUnit.test("Test 56: The makeAllToolTips method creates a number of tool tips that is one more than the value returned by the getMaxMatches method", assert => {
  const testArr = [{'Seconds': 2240, 'Year': 2017}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}]
  const graph = new ScatterPlot(testArr);
  graph.makeToolTipContainer();

  graph.makeAllToolTips();

  assert.equal(document.getElementsByClassName('tool-tip').length, graph.getMaxMatches() + 1);
});

QUnit.test("Test 57: The first tool tip created by makeAllToolTips has an ID of 'tooltip'", assert => {
  const testArr = [{'Seconds': 2240, 'Year': 2017}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}]
  const graph = new ScatterPlot(testArr);
  graph.makeToolTipContainer();

  graph.makeAllToolTips();

  assert.notEqual(document.getElementById('tooltip'), undefined);
  assert.equal(graph.toolTipIds[0], 'tooltip');
});

QUnit.test("Test 58: The second tool tip created by makeAllToolTips has an ID of 'tooltip1'", assert => {
  const testArr = [{'Seconds': 2240, 'Year': 2017}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}, {'Seconds': 2240, 'Year': 2019}]
  const graph = new ScatterPlot(testArr);
  graph.makeToolTipContainer();

  graph.makeAllToolTips();

  assert.notEqual(document.getElementById('tooltip1'), undefined);
  assert.equal(graph.toolTipIds[1], 'tooltip1');
});

QUnit.test("Test 59: The drawGraph method performs all of the actions required to produce a complete scatterplot", assert => {
  const graph = new ScatterPlot(testData);

  graph.drawGraph();

  assert.equal(document.getElementsByTagName('svg').length, 1);
  assert.notEqual(document.getElementById('tooltip-container'), undefined);
  assert.notEqual(document.getElementById('tooltip'), undefined);
  const firstSvgElem = document.getElementsByTagName('svg')[0];
  assert.equal(firstSvgElem.getElementsByTagName('filter').length, 1);
  assert.equal(document.getElementsByClassName('axis').length, 2);
  assert.equal(document.getElementsByClassName('dot').length, testData.length);
  assert.equal(document.getElementsByClassName('legend-dot').length, Object.keys(graph.COLORS).length);
});
