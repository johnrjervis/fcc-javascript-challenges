// DrawGraph tests
// description.md
class ScatterPlot {

  constructor(dataset) {
    this.MARGINS = {'top': 20, 'right': 200, 'bottom': 40, 'left': 100};
    this.COLORS = {
      'No known doping history': 'rgb(50, 190, 255)',
      'Unproven allegations': 'rgb(250, 200, 80)',
      'Failed test / confessed to doping': 'rgb(255, 65, 50)',
    };
    this.toolTipItems = [
      ['Name', 'Name'],
      ['Year', 'Year'],
      ['Time', 'Time'],
      ['Place', 'Rank'],
      ['Doping', 'Doping history'],
    ];

    this.svgWidth = Math.max(window.innerWidth, 600);
    this.svgHeight = Math.max(Math.floor(0.85 * window.innerHeight), 300);

    this.toolTipContainerId = 'tooltip-container';
    this.toolTipIds = [];

    this.dataset = dataset;

    this.xScale = d3.scaleTime()
                    .domain([
                      d3.min(this.dataset.map(d => new Date(d.Year, 0))),
                      d3.max(this.dataset.map(d => new Date(d.Year, 0)))
                    ])
                    .range([this.MARGINS.left, this.svgWidth - this.MARGINS.right]);
    this.yScale = d3.scaleTime()
                    .domain([
                      d3.min(this.dataset.map(d => this.getTimeFromDataObject(d))),
                      d3.max(this.dataset.map(d => this.getTimeFromDataObject(d)))
                   ])
                   .range([this.svgHeight - this.MARGINS.bottom, this.MARGINS.top]);
    };


  // -------- D3-based methods for drawing the scatter plot --------

  makeSvgElem = () => {
    /* Creates an SVG element and sets its height and width 
    Returns a reference to the SVG element */
    const svg = d3.select('#graph-container')
                  .append('svg')
                  .attr('width', this.svgWidth)
                  .attr('height', this.svgHeight)
                  .attr('xlmns', 'http://www.w3.org/2000/svg')
                  .attr('xlmns:xlink', 'http://www.w3.org/1999/xlink');

    return svg;
  };

  createFilter = svg => {
    /* Adds a filter to soften the edges of the circles in the graph */
    const filter = svg.append('filter')
                      .attr('id', 'slightBlur');

    filter.append('feGaussianBlur')
          .attr('in', 'SourceGraphic')
          .attr('stdDeviation', 0.8);
  };

  drawAxes = svg => {
    /* Defines and draws the axes for the graph and adds text labels */

    const xAxis = d3.axisBottom(this.xScale)
                  .tickFormat(d3.timeFormat('%Y'));

    const yAxis = d3.axisLeft(this.yScale)
                  .tickFormat(d3.timeFormat('%M:%S'));

    svg.append('g')
       .attr('id', 'y-axis')
       .attr('class', 'axis')
       .attr('transform', `translate(${this.MARGINS.left}, 0)`)
       .call(yAxis);

    svg.append('g')
       .attr('id', 'x-axis')
       .attr('class', 'axis')
       .attr('transform', `translate(0, ${this.svgHeight - this.MARGINS.bottom})`)
       .call(xAxis);

    svg.append('text')
       .attr('class', 'label x')
       .attr('x', this.MARGINS.left + (this.svgWidth - this.MARGINS.right) / 2)
       .attr('y', this.svgHeight)
       .style('fill', 'white')
       .text('Year');

    svg.append('text')
       .attr('class', 'label y')
       .attr('text-anchor', 'end')
       .attr('transform', 'rotate(-90)')
       .attr('x', -this.svgHeight / 2.5)
       .attr('y', this.MARGINS.left / 3)
       .style('fill', 'white')
       .text('Time (MM:SS)');
  };

  drawDataPoints = (svg) => {
    /* Plots the data as a series of SVG circles */

    // Get a reference to the current instance of ScatterPlot (for use inside the mouseover event handler)
    const inst = this;

    // Create a local variable for storing the index number of elements in this.dataset
    const index = d3.local();

    const toolTipContainer = d3.select(`#${this.toolTipContainerId}`)

    svg.selectAll()
       .data(this.dataset)
       .enter()
       .append('circle')
       .attr('class', 'dot')
       .attr('data-xvalue', d => {return new Date(d.Year, 0)})
       .attr('data-yvalue', d => this.getTimeFromDataObject(d))
       .attr('r', 5)
       .attr('cx', d => this.xScale(new Date(d.Year, 0)))
       .attr('cy', d => this.yScale(this.getTimeFromDataObject(d)))
       .attr('fill', d => this.getDotColor(d))
       .attr('filter', 'url(#slightBlur)')
       .each(function(d, i) {index.set(this, i);})
       .on('mouseover', function(evt, d) {
         toolTipContainer.style('left', `${inst.xScale(new Date(d.Year,0))}px`) 
                         .style('top', `${inst.yScale(inst.getTimeFromDataObject(d)) + 2 * inst.MARGINS.bottom + 20}px`);

         for (let j = 0; j <= inst.countPreviousMatches(index.get(this)); j++) {
           inst.displayToolTip(inst.toolTipIds[j], inst.dataset[index.get(this) - j]);
         };
       })
       .on('mouseout', evt => {
         toolTipContainer.style('left', '-500px')
                          .style('top', '-500px');

         inst.toolTipIds.forEach(id => {
           inst.hideToolTip(id);
         });
       });

  };

  drawLegend = svg => {
    /* Adds a legend to the graph */
    const DIMENSIONS = {
      'width': 310,
      'marginRight': 25,
      'marginBottom': 50,
      'paddingLeft': 20,
      'paddingTop': 25,
      'paddingBottom': -10,
      'titleHeight': 28,
      'lineSpacing': 35,
      'textShiftVertical': 6,
      'textShiftHorizontal': 15
    };
    DIMENSIONS['height'] = DIMENSIONS.lineSpacing * (Object.keys(this.COLORS).length) + DIMENSIONS.paddingTop + DIMENSIONS.titleHeight + DIMENSIONS.paddingBottom;

    svg.append('rect')
       .attr('id', 'legend')
       .attr('x', this.svgWidth - this.MARGINS.right - DIMENSIONS.width - DIMENSIONS.marginRight)
       .attr('y', this.svgHeight - this.MARGINS.bottom - DIMENSIONS.height - DIMENSIONS.marginBottom)
       .attr('width', DIMENSIONS.width)
       .attr('height', DIMENSIONS.height)
       .attr('stroke', 'white');

    svg.selectAll()
       .data(Object.keys(this.COLORS))
       .enter()
       .append('circle')
       .attr('class', 'legend-dot')
       .attr('cx', this.svgWidth - this.MARGINS.right - DIMENSIONS.width - DIMENSIONS.marginRight
         + DIMENSIONS.paddingLeft)
       .attr('cy', (d, i) => this.svgHeight - this.MARGINS.bottom - DIMENSIONS.height - DIMENSIONS.marginBottom
         + (DIMENSIONS.lineSpacing * i) + DIMENSIONS.paddingTop + DIMENSIONS.titleHeight)
       .attr('r', 5)
       .attr('fill', d => this.COLORS[d])
       .attr('filter', 'url(#slightBlur)');

    svg.selectAll()
       .data(Object.keys(this.COLORS))
       .enter()
       .append('text')
       .attr('class', 'legend-text')
       .attr('x', this.svgWidth - this.MARGINS.right - DIMENSIONS.width - DIMENSIONS.marginRight
         + DIMENSIONS.paddingLeft + DIMENSIONS.textShiftHorizontal)
       .attr('y', (d, i) => this.svgHeight - this.MARGINS.bottom - DIMENSIONS.height - DIMENSIONS.marginBottom
         + (DIMENSIONS.lineSpacing * i) + DIMENSIONS.paddingTop + DIMENSIONS.titleHeight
         + DIMENSIONS.textShiftVertical)
       .attr('fill', 'white')
       .text(d => d);

    const legendTitle = svg.append('text')
                           .attr('id', 'legend-title')
                           .attr('x', this.svgWidth - this.MARGINS.right - DIMENSIONS.width - DIMENSIONS.marginRight
                              + DIMENSIONS.paddingLeft + DIMENSIONS.textShiftHorizontal)
                           .attr('y', this.svgHeight - this.MARGINS.bottom - DIMENSIONS.height
                              - DIMENSIONS.marginBottom + DIMENSIONS.paddingTop + DIMENSIONS.titleHeight
                              - DIMENSIONS.titleHeight)
                           .attr('fill', 'white');

    legendTitle.append('tspan')
               .text('Doping history')
               .style('text-decoration', 'underline');

    legendTitle.append('tspan')
               .text('*');
  };

  drawGraph = () => {
    /* Runs all the methods needed to draw the graph */
    const svgElem = this.makeSvgElem();
    this.makeToolTipContainer();
    this.makeAllToolTips();
    this.createFilter(svgElem);
    this.drawAxes(svgElem);
    this.drawDataPoints(svgElem);
    this.drawLegend(svgElem);
  };


  // -------- Data handling methods --------

  getTimeFromDataObject = obj => {
    /* Creates a Date object and sets the time to be that which is represented by obj.Seconds */

    const ascentTime = new Date(0);
    ascentTime.setSeconds(obj.Seconds);
    return ascentTime;
  };

  getDotColor = obj => {
    /* Returns a color from this.COLORS: the exact color is determined by the contents of obj.Doping */
    if (obj.Doping === '') {
      return this.COLORS['No known doping history'];
    } else if (this.isConfirmedDoping(obj.Doping)) {
      return this.COLORS['Failed test / confessed to doping'];
    } else {
      return this.COLORS['Unproven allegations'];
    }
  };

  isConfirmedDoping = phrase => {
    /* Returns true if any of a number of Regexps are matched in the supplied phrase */
    let result = false;

    const dopingRegexps = [
      '[Aa]dmitted',
      '[Cc]onfessed',
      '([Ff]ailed|[Pp]ositive) .*test',
      '[Ss]tripped of .*title',
      '[Tt]ested positive',
      '[Tt]estified .*to doping',
      '[Tt]itle stripped',
    ];

    dopingRegexps.forEach(regexp => {
      if (phrase.match(regexp)) {
        result = true;
      }
    });

    return result;
  };

  getStringOrNone = str => {
    /* Returns None if str is the empty string, otherwise the input string is returned */
    return (str === '') ? 'None' : str;
  };

  countPreviousMatches = (index) => {
    /* Returns the number of objects in the this.dataset that have the same Year and Seconds properties as the object at index i */
    // Because the data array is ordered, it starts from the next index down from that of the object under consideration
    // Counts down because datapoints for objects with a higher index are drawn on top of the preceding objects

    let result = 0;

    while (index > 0) {
      const current = this.dataset[index];
      const previous = this.dataset[index - 1];

      if (current.Seconds === previous.Seconds && current.Year === previous.Year) {
        result += 1;
        index -= 1;
      } else {
        index = 0;
      }
    }

    return result;

  }

  getMaxMatches = () => {
    /* Calculates countPreviousMatches for every index in the this.dataset and returns the maximum of those results */
    let result = 0;

    for (let i = 0; i < this.dataset.length; i++) {
      if (this.countPreviousMatches(i) > result) {
        result = this.countPreviousMatches(i);
      }
    }

    return result;
  };

  // -------- Tool tip methods --------

  makeToolTipContainer = () => {
    /* Adds a <div> element to contain the tool tips to the #graph-container <div> */
    d3.select('#graph-container')
      .append('div')
      .attr('id', this.toolTipContainerId)
      .style('position', 'absolute')
      .style('left', '-500px')
      .style('top', '-500px');
  };

  makeToolTip = id => {
    /* Creates a tool tip with an ID equal to the id argument and <p> elements for each item in this.toolTipItems.
       The tool tip is added to the tool tip container, and it hideToolTip is called on the tool tip.
       The tool tip's ID is added to the front of the this.toolTips array */

    const toolTip = d3.select(`#${this.toolTipContainerId}`).append('div')
                           .attr('id', id)
                           .attr('class', 'tool-tip');

    this.toolTipItems.forEach(item => {
      toolTip.append('p')
             .attr('id', `${id}-${item[0].toLowerCase()}`)
             .text(`${item[1]}: `)
             .append('span');
      });

    this.toolTipIds.unshift(id);
    this.hideToolTip(id);
  }

  makeAllToolTips = () => {
    /* Creates the enough tool tips to handle all possible clashes in the data */

    // Tool tips are created in reverse order so that objects with a lower Place property appear higher up the tool tip
    for (let i = this.getMaxMatches(); i >= 0; i--) {
      const ending = (i === 0)? '' : i ;
      this.makeToolTip(`tooltip${ending}`);
    }
  };

  displayToolTip = (id, dataObj) => {
    /* inputs data from the dataObj into the tool tip's span elements, sets the tool tip's data-year attribute, sets its height to 'auto', and and makes it visible */
    const toolTip = d3.select(`#${id}`)
                      .attr('data-year', new Date(dataObj.Year, 0))
                      .style('visibility', 'visible')
                      .style('height', 'auto')
                      .style('margin-bottom', '12px');

    this.toolTipItems.forEach(item => {
      const para = d3.select(`#${id}-${item[0].toLowerCase()}`);

      para.select('span')
          .text(this.getStringOrNone(dataObj[item[0]]));
    });
  };

  hideToolTip = id => {
    /* Sets the selected tool tip's visibility to hidden and its height and margin-bottom to zero */
    d3.select(`#${id}`)
      .style('visibility', 'hidden')
      .style('height', 0)
      .style('margin-bottom', 0);
  };

};
