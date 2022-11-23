const testDataset = {
  'source_name': 'test data',
  'data': [
    ['2022-11-01', 27.63],
    ['2022-11-02', 27.63],
    ['2022-11-03', 28.77],
    ['2022-11-04', 30.50],
    ['2022-11-05', 34.25],
    ['2022-11-06', 40.48],
  ]
}

const XPADDING = 80;
const YPADDING = 20;

const calcGraphWidth = datapoints => {
  /* Returns the larger value of window.innerWidth and (datapoints * 6 + 2 * PADDING) */
  return Math.max(6 * datapoints + 2 * XPADDING, window.innerWidth);
}

const calcGraphHeight = datapoints => {
  /* Returns the larger value of window.innerWidth and (datapoints * 2 + 100 + 2 * PADDING) */
  // I'm assuming that if there are lots of datapoints, then they will (almost all) all have different values
  // Adding 200 allows for a minimum max bar heigh of 100 + #bars * 2(px) along with 50px of padding either side
  return Math.max(2 * datapoints + 100 + 2 * YPADDING, Math.floor(0.9 * window.innerHeight));
}

const calcBarWidth = datapoints => {
  /* Returns the width (in px) for the bars (will be greater than 5 because of the way calcGraphWidth works) */
  return Math.floor(calcGraphWidth(datapoints) / (datapoints + 1)) - 1;
}

const makeDateLabel = dateString => {
  /* Given a date string in the format 'YYYY-MM-DD' returns a string consisting of the year and the quarter */
  const [yr, mth, day] = dateString.split('-');

  return `${yr} Q${Math.floor((mth - 1) / 3) + 1}`;
};

const getYAxisLabel = dataset => {
  let result = null;
  const descriptions = dataset.description.split('\n');

  descriptions.forEach(description => {
    if (description.substring(0, 7) === 'Units: ') {
      result = description.substring(7);
    }
  });

  return result;
};

const createBarChart = dataset => {
  const data = dataset.data;
  //console.log(dataset)
  const svgWidth = calcGraphWidth(data.length);
  const svgHeight = calcGraphHeight(data.length);
  const barWidth = calcBarWidth(data.length);

  const dateLabels = data.map(d => {return new Date(d[0])})
  const startDate = dateLabels[0];
  const endDate = dateLabels[dateLabels.length - 1]
  /* The following is a workaround to stop the last bar appearing to the right of the end of the x-axis
  This means the last bar appears to be off the scale of the x-axis, which is ugly,
  Ultimately, I decided that that was less ugly than the workaround code (and its effect on the tests)
  const dateDelta = dateLabels[dateLabels.length - 1].getTime() - dateLabels[dateLabels.length - 2].getTime();
  const endMilliseconds = dateLabels[dateLabels.length - 1].getTime() + dateDelta;
  const adjustedEndDate = new Date();
  adjustedEndDate.setTime(endMilliseconds);
  */

  const xScale = d3.scaleTime()
                   .domain([startDate, endDate])
                   .range([XPADDING, svgWidth - XPADDING - barWidth]);

  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(data, d => d[1])])
                   .range([svgHeight - YPADDING, YPADDING]);

  const xAxis = d3.axisBottom(xScale)
                  .tickFormat(d3.timeFormat('%Y'));

  const yAxis = d3.axisLeft(yScale)

  const toolTip = d3.select('#graph-container')
                    .append('div')
                    .attr('id', 'tooltip')
                    .style('position', 'absolute')
                    .style('visibility', 'hidden');

  const svg = d3.select('#graph-container')
                .append('svg')
                .attr('width', svgWidth)
                .attr('height', svgHeight)
                .attr('xlmns', 'http://www.w3.org/2000/svg')
                .attr('xlmns:xlink', 'http://www.w3.org/1999/xlink');

  const filter = svg.append('filter')
                    .attr('id', 'slightBlur')

  filter.append('feGaussianBlur')
        .attr('in', 'SourceGraphic')
        .attr('stdDeviation', 0.6)

  d3.select('#title')
    .text(dataset.name);

  svg.selectAll('rect')
     .data(data)
     .enter()
     .append('rect')
     .attr('class', 'bar')
     .attr('x', d => {return xScale(new Date(d[0]))})
     .attr('y', d => yScale(d[1]))
     .attr('width', barWidth)
     .attr('height', d => svgHeight - yScale(d[1]) - YPADDING)
     .attr('data-date', d => d[0])
     .attr('data-gdp', d => d[1])
     .attr('fill', 'rgb(0, 0, 255)')
     .attr('filter', 'url(#slightBlur)')
     .on('mouseover', (evt, d) => {
       toolTip.text(`${makeDateLabel(d[0])}: $${d[1]}bn`)
              .style('visibility', 'visible')
              .attr('data-date', d[0])
              .style('left', `${xScale(new Date(d[0])) - XPADDING}px`)
              .style('top', `${yScale(d[1]) + 0.5 * YPADDING}px`);
     })
     .on('mouseout', evt => toolTip.style('visibility', 'hidden'));

  const xAx = svg.append('g')
     .attr('id', 'x-axis')
     .attr('transform', `translate(0, ${svgHeight - YPADDING})`)
     .call(xAxis);

  // First way to set axis color ('stroke' changes the text color, 'color' changes the line and tick colors)
  svg.append('g')
     .attr('stroke', 'white')
     .attr('color', 'white')
     .attr('id', 'y-axis')
     .attr('transform', `translate(${XPADDING}, 0)`)
     .call(yAxis);

  // Second way to set axis color ('path' = main axis line, 'line' = ticks, 'text' = text)
  xAx.selectAll('path')
       .style('stroke', 'white');

  xAx.selectAll('line')
       .style('stroke', 'white');

  xAx.selectAll('text')
       .style('stroke', 'white');

  const sourceLink = d3.select('#source-link')
                       .text(dataset.display_url)
                       .attr('href', dataset.display_url);

  svg.append('text')
     .attr('class', 'label y')
     .attr('text-anchor', 'end')
     .attr('transform', 'rotate(-90)')
     .attr('x', -svgHeight / 2.5)
     .attr('y', XPADDING / 3)
     .style('fill', 'white')
     .text(getYAxisLabel(dataset));

  const dataSourcePara = d3.select('#graph-container')
                           .append('p')
                           .attr('id', 'data-source')
                           .text(`Data source: ${dataset.source_name} (`);

  dataSourcePara.append('a')
                .attr('id', 'source-link')
                .attr('href', dataset.display_url)
                .text(dataset.display_url);

  const dataSourceParaElem = document.getElementById('data-source');
  dataSourceParaElem.innerHTML += ')';
}
