const testData = {'name': 'Test dataset', 'source_name': 'Test data source', 'data': [[0, 1], [1, 2], [2, 0], [3, 3]], 'display_url': 'www.example.com', 'description': 'Units: Millions of pounds\nOther information: this field is for testing\nReason: To check that the code can split this text by newline characters'};
const testLength = testData.data.length;

QUnit.test("Test 1: createBarChart sets the title text to be equal to the value of the dataset's source_name property", assert => {
  createBarChart(testData);
  const title = document.getElementById('title');

  assert.equal(title.innerText, testData.name);
});

QUnit.test("Test 2: calcGraphWidth returns the window width if the screen is wider than the number of bars * 6px plus two lots of horizontal padding", assert => {
  if (window.innerWidth < 60 + XPADDING * 2) {
    alert("The browser display is too narrow to properly test the setup for small bar charts!");
  }

  assert.equal(calcGraphWidth(10), `${window.innerWidth}`);
});

QUnit.test("Test 3: calcGraphWidth should return the a value equal to the number of bars * 6 plus two lots of horizontal padding (one each side) if this is larger than the window width", assert => {
  if (window.innerWidth > 6000 + 2 * XPADDING) {
    alert("The browser display is too wide to properly test the setup for large bar charts!");
  }

  assert.equal(calcGraphWidth(1000), 6 * 1000 + 2 * XPADDING);
});

QUnit.test("Test 4: calcGraphHeight returns the floor 85 of% of the window height if the screen is taller than the number of bars * 2 plus 100 plus two lots of vertical padding", assert => {
  if (window.innerHeight < 20 + YPADDING) {
    alert("The browser display is too short to properly test the setup for small bar charts!");
  }

  assert.equal(calcGraphHeight(10), `${Math.floor(0.85 * window.innerHeight)}`);
});

QUnit.test("Test 5: calcGraphHeight returns the a value equal to the number of bars * 2 plus 100 plus twice the vertical padding if this is larger than 85% of the browser window's innerHeight", assert => {
  // 100px added to set a reasonable minimum chart height  on small screens if the number of bars is small
  if (0.85 * window.innerWidth > 2000 + 2 * YPADDING) {
    alert("The browser display is too tall to properly test the setup for large bar charts!");
  }

  assert.equal(calcGraphHeight(1000), 2 * 1000 + 100 + 2 * YPADDING);
});

QUnit.test("Test 6: createBarChart sets the width of the SVG element (in px) to be equal to the value returned by calcGraphWidth", assert => {
  createBarChart(rawJson);
  const firstSvgElem = document.getElementsByTagName('svg')[0];

  assert.equal(window.getComputedStyle(firstSvgElem).getPropertyValue('width'), `${calcGraphWidth(rawJson.data.length)}px`);
});

QUnit.test("Test 7: for a small dataset, createBarChart sets the SVG element's width to be equal to the browser window's innerWidth property", assert => {
  createBarChart(testData);
  const firstSvgElem = document.getElementsByTagName('svg')[0];

  assert.equal(window.getComputedStyle(firstSvgElem).getPropertyValue('width'), `${window.innerWidth}px`);
});

QUnit.test("Test 8: createBarChart sets the height of the SVG element (in px) to be equal to the value returned by calcGraphHeight", assert => {
  createBarChart(rawJson);
  const firstSvgElem = document.getElementsByTagName('svg')[0];

  assert.equal(window.getComputedStyle(firstSvgElem).getPropertyValue('height'), `${calcGraphHeight(rawJson.data.length)}px`);
});

QUnit.test("Test 9: for a small dataset, createBarChart sets the SVG element's height (in px) to be equal to the floor of 85% of the browser window's innerHeight property", assert => {
  createBarChart(testData);
  const firstSvgElem = document.getElementsByTagName('svg')[0];

  assert.equal(window.getComputedStyle(firstSvgElem).getPropertyValue('height'), `${Math.floor(0.85 * window.innerHeight)}px`);
});

QUnit.test("Test 10: there is one element with a class of bar for each element in the dataset supplied to createBarChart", assert => {
  createBarChart(testData);
  const barClassElems = document.getElementsByClassName('bar');

  assert.equal(barClassElems.length, testLength);
});

QUnit.test("Test 11: each bar element has a data-date attribute that is equal to the value of the first sub-element in the corresponding element of the dataset", assert => {
  createBarChart(testData);
  const barClassElems = document.getElementsByClassName('bar');

  for (let i = 0; i < testLength; i++) {
    assert.equal(barClassElems[i].getAttribute('data-date'), testData.data[i][0]);
  }
});

QUnit.test("Test 12: each bar element has a data-gdp attribute that is equal to the value of the second sub-element in the corresponding element of the dataset", assert => {
  createBarChart(testData);
  const barClassElems = document.getElementsByClassName('bar');

  for (let i = 0; i < testLength; i++) {
    assert.equal(barClassElems[i].getAttribute('data-gdp'), testData.data[i][1]);
  }
});

QUnit.test("Test 13: the bar elements have different heights (if the corresponding values in the dataset are not the same)", assert => {
  createBarChart(testData);
  const barClassElems = document.getElementsByClassName('bar');

  assert.notEqual(testData.data[0][1], testData.data[1][1]);
  assert.notEqual(barClassElems[0].getAttribute('height'), barClassElems[1].getAttribute('height'));
});

QUnit.test("Test 14: the x-position of the first bar element is equal to the amount of horizontal padding", assert => {
  createBarChart(testData);
  const firstBarClassElem = document.getElementsByClassName('bar')[0];

  assert.equal(firstBarClassElem.getAttribute('x'), XPADDING);
});

QUnit.test("Test 15: for a small dataset, calcBarWidth returns a value that is one less than the floor of the SVG width divided by the number of datapoints plus one", assert => {
  assert.equal(calcBarWidth(testLength), Math.floor(calcGraphWidth(testLength) / (testLength + 1)) - 1);
});

QUnit.test("Test 16: for a large dataset (which will fill the graph area), calcBarWidth returns a value of five", assert => {
  assert.equal(calcBarWidth(rawJson.data.length), 5);
});

QUnit.test("Test 17: the width of the bars are equal to the value returned by calcBarWidth (small dataset test)", assert => {
  createBarChart(testData);
  const barClassElems = document.getElementsByClassName('bar');

  assert.equal(barClassElems[0].getAttribute('width'), calcBarWidth(testLength));
  assert.equal(barClassElems[barClassElems.length - 1].getAttribute('width'), calcBarWidth(testLength));
});

QUnit.test("Test 18:  the width of the bars are equal to the value returned by calcBarWidth (large dataset test)", assert => {
  createBarChart(rawJson);
  const barClassElems = document.getElementsByClassName('bar');

  assert.equal(barClassElems[0].getAttribute('width'), calcBarWidth(rawJson.data.length));
  assert.equal(barClassElems[barClassElems.length - 1].getAttribute('width'), calcBarWidth(rawJson.data.length));
});

QUnit.test("Test 19: the x-position of the last bar element should be equal to the SVG element width minus the amount of horizontal padding and the width of one bar", assert => {
  createBarChart(rawJson);
  const barClassElems = document.getElementsByClassName('bar');
  const lastBarClassElem = barClassElems[barClassElems.length - 1];

  assert.equal(lastBarClassElem.getAttribute('x'), calcGraphWidth(rawJson.data.length) - XPADDING - calcBarWidth(rawJson.data.length));
});

QUnit.test("Test 20: the height of a bar element that represents a datapoint with a value of zero is zero", assert => {
  createBarChart(testData);
  const barClassElems = document.getElementsByClassName('bar');
  const zeroValueBarClassElem = barClassElems[2];

  testData.data.forEach(function(datapoint, i) {
    if (datapoint[1] === 0) {
      assert.equal(barClassElems[i].getAttribute('height'), 0);
    }
  });
});

QUnit.test("Test 21: the height of a bar element that represents the datapoint with the largest value in a datset is equal to the height of the SVG element minus twice the vertical padding", assert => {
  createBarChart(testData);
  const barClassElems = document.getElementsByClassName('bar');
  const maxValue = Math.max(...testData.data.map(d => d[1]));

  testData.data.forEach(function(datapoint, i) {
    if (datapoint[1] === maxValue) {
      assert.equal(barClassElems[i].getAttribute('height'), calcGraphHeight(testLength) - 2 * YPADDING);
    }
  });
});

QUnit.test("Test 22: the y-position of each bar element is equal to the difference between its height and the height of the SVG element minus one lot of vertical padding (when rounded to the nearest whole number)", assert => {
  createBarChart(testData);
  const barClassElems = document.getElementsByClassName('bar');

  testData.data.forEach(function(datapoint, i) {
    assert.equal(Math.round(barClassElems[i].getAttribute('y')), Math.round(calcGraphHeight(testLength) - barClassElems[i].getAttribute('height') - YPADDING));
  });
});

QUnit.test("Test 23: makeDateLabel returns a string with the year from the date argument as the first four characters", assert => {
  assert.equal(makeDateLabel('1947-01-01').substring(0, 4), '1947');
  assert.equal(makeDateLabel('1984-07-01').substring(0, 4), '1984');
});

QUnit.test("Test 24: makeDateLabel returns a string with the correct quarter (as 'Q1', 'Q2' etc) at characters 5 & 6", assert => {
  assert.equal(makeDateLabel('1947-01-01').substring(5, 7), 'Q1');
  assert.equal(makeDateLabel('1948-02-01').substring(5, 7), 'Q1');
  assert.equal(makeDateLabel('1950-03-01').substring(5, 7), 'Q1');
  assert.equal(makeDateLabel('1952-04-01').substring(5, 7), 'Q2');
  assert.equal(makeDateLabel('1954-05-01').substring(5, 7), 'Q2');
  assert.equal(makeDateLabel('1960-06-01').substring(5, 7), 'Q2');
  assert.equal(makeDateLabel('1984-07-01').substring(5, 7), 'Q3');
  assert.equal(makeDateLabel('2000-12-01').substring(5, 7), 'Q4');
});

QUnit.test("Test 25: a bar chart is accompanied by a paragraph that describes the data source and contains the dataset's source_name and display_url properties", assert => {
  createBarChart(testData);
  const sourcePara = document.getElementById('data-source');

  assert.equal(sourcePara.innerText, `Data source: ${testData.source_name} (${testData.display_url})`);
});

QUnit.test("Test 26: the data source paragraph contains a link whose href attribute is equal to the display_url property of the raw dataset", assert => {
  createBarChart(testData);
  const link = document.getElementById('source-link');

  assert.equal(link.innerText, testData.display_url);
  assert.equal(link.getAttribute('href'), testData.display_url);
});

QUnit.test("Test 27: for the test dataset, getYAxisLabel returns the text between 'Units' and the following '\\n' in the dataset's description property", assert => {
  assert.equal(getYAxisLabel(testData), 'Millions of pounds');
});

QUnit.test("Test 28: for a dataset with no field starting with 'Units: ' in its description, getYAxisLabel returns null", assert => {
  assert.equal(getYAxisLabel({'description': 'Information: Nothing for getYAxisLabel here\nNo, really: Nothing at all.'}), null);
});

QUnit.test("Test 29: the x-axis label has text that matches the units field in the dataset's description property", assert => {
  createBarChart(testData);
  const firstLabel = document.getElementsByClassName('label')[0];

  assert.equal(firstLabel.textContent, getYAxisLabel(testData));
});
