//#region chart 1 countries


  

var data = [{"name": "Africa","value": 36},
            {"name": "Asia and the Pacific","value": 16},
            {"name": "Europe","value": 28},
            {"name": "Latin America","value": 26}
            ].sort((a, b) => d3.ascending(a.value, b.value));;

//set up svg using margin conventions - we'll need plenty of room on the left for labels

var margin = { top: 17, right: 25, bottom: 15, left: 160 };
var width = 260 - margin.left - margin.right, height = 100 - margin.top - margin.bottom;

var svg = d3.select("#graphic").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scale.linear()
    .range([0, width])
    .domain([0, d3.max(data, function (d) {
        return d.value;
    })]);

var y = d3.scale.ordinal()
    .rangeRoundBands([height, 0], .1)
    .domain(data.map(function (d) { return d.name; }));
//make y axis to show bar names
var yAxis = d3.svg.axis()
    .scale(y)
    //no tick marks
    .tickSize(0)
    .orient("left");

var gy = svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)

var bars = svg.selectAll(".bbar")
    .data(data)
    .enter()
    .append("g")

//append rects
bars.append("rect").attr("class", "bbar")
    .attr("y", function (d) { return y(d.name); })
    .attr("height", y.rangeBand())
    .attr("x", 0)
    .attr("width", function (d) {
        return x(d.value);
    });

//add a value label to the right of each bar
bars.append("text")
    .attr("class", "label")
    //y position of the label is halfway down the bar
    .attr("y", function (d) {
        return y(d.name) + y.rangeBand() / 2 + 4;
    })
    //x position is 3 pixels to the right of the bar
    .attr("x", function (d) {
        return x(d.value) + 5;
    })
    .text(function (d) {
        return d.value;
    });

//#endregion

//#region second script

var data = [{ "name": "Africa", "value": 42, }, 
            { "name": "Asia and the Pacific", "value": 16, }, 
            { "name": "Europe", "value": 29, }, 
            { "name": "Latin America", "value": 18, }];
//set up svg using margin conventions - we'll need plenty of room on the left for labels
var margin = {
    top: 17,
    right: 25,
    bottom: 15,
    left: 0
};
var width = 120 - margin.left - margin.right,
    height = 100 - margin.top - margin.bottom;

var svg = d3.select("#graphic").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var bars = svg.selectAll(".bbar")
    .data(data)
    .enter()
    .append("g")

//append rects
bars.append("rect")
    .attr("class", "bbar")
    .attr("y", function (d) {
        return y(d.name);
    })
    .attr("height", y.rangeBand())
    .attr("x", 0)
    .attr("width", function (d) {
        return x(d.value);
    });

bars.append("text")
    .attr("class", "label")
    .attr("y", function (d) {
        return y(d.name) + y.rangeBand() / 2 + 4;
    })
    .attr("x", function (d) {
        return x(d.value) + 5;
    })
    .text(function (d) {
        return d.value;
    });


//#endregion

//#region third script with longer data 
var data = [{
    "name": "Sudan",
    "value": 144,
},
{
    "name": "Burkina Faso",
    "value": 133,
},

{
    "name": "Rwanda",
    "value": 112,
},
{
    "name": "Bosnia and Herzegovina",
    "value": 162,
},
{
    "name": "Nicaragua",
    "value": 142,
},
{
    "name": "Ecuador",
    "value": 142,
},
{
    "name": "Zambia",
    "value": 116,
},
{
    "name": "Vanuatu",
    "value": 121,
},
{
    "name": "Uzbekistan",
    "value": 111,
},
{
    "name": "Ukraine",
    "value": 151,
},
{
    "name": "Uruguay",
    "value": 141,
},
{
    "name": "Turkey",
    "value": 121,
},
{
    "name": "Tunisia",
    "value": 151,
},
{
    "name": "Togo",
    "value": 131,
},
];

//sort bars based on value
data = data.sort(function (a, b) {
    return d3.ascending(a.value, b.value);
})

//set up svg using margin conventions - we'll need plenty of room on the left for labels
var margin = {
    top: 10,
    right: 25,
    bottom: 10,
    left: 160
};

var width = 350 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;



var aColor = [
    'rgb(171, 209, 224)', //thirteenth
    'rgb(171, 209, 224)', //thirteenth
    'rgb(171, 209, 224)', //twelfe
    'rgb(171, 209, 224)', //eleventh
    'rgb(171, 209, 224)', //tenth
    'rgb(171, 209, 224)', //nineth
    'rgb(171, 209, 224)', //eighth
    'rgb(171, 209, 224)', //seventh
    'rgb(118, 161, 179)',//sixth
    'rgb(118, 161, 179)', //fifth
    'rgb(118, 161, 179)', //fourth
    'rgb(118, 161, 179)', //third
    'rgb(89, 122, 135)', // second
    'rgb(51, 80, 92)', //first
]
var svg = d3.select("#graphic1").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scale.linear()
    .range([0, 2])

    .domain([0, 3
    ]);

var y = d3.scale.ordinal()
    .rangeRoundBands([height, 0], .1)
    .domain(data.map(function (d) {
        return d.name;
    }));

//make y axis to show bar names
var yAxis = d3.svg.axis()
    .scale(y)
    //no tick marks
    .tickSize(0)
    .orient("left");

var gy = svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)

var bars = svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("g")
    .attr("fill", function (d, i) { return aColor[i]; })

//append rects
bars.append("rect")
    .attr("class", "bar")

    .attr("y", function (d) {
        return y(d.name);
    })

    .attr("height", y.rangeBand())
    .attr("x", 0)
    .attr("width", function (d) {
        return x(d.value);
    });
//add a value label to the right of each bar
bars.append("text")
    .attr("class", "label")
    //y position of the label is halfway down the bar
    .attr("y", function (d) {
        return y(d.name) + y.rangeBand() / 2 + 4;
    })
    //x position is 3 pixels to the right of the bar
    .attr("x", function (d) {
        return x(d.value) + 5;
    })
    .text(function (d) {
        return d.value;
    });




//#endregion

//#region chart 1

var aColor = [
    'rgb(127, 212, 123)', //green
    'rgb(240, 149, 164)', // red
    'rgb(181, 174, 175)' //gray
]

var data = [{
    "platform": "Yes",
    "percentage": 87.00
}, //skyblue
{
    "platform": "No",
    "percentage": 1.00
}, //darkblue
{
    "platform": "N/A",
    "percentage": 17.00
}]; //orange

var svgWidth = 200,
    svgHeight = 200,
    radius = Math.min(svgWidth, svgHeight) / 2;

var svg = d3.select('#graph1').append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Create group element to hold pie chart    
var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var pie = d3.layout.pie().value(function (d) {
    return d.percentage;
});

var path = d3.svg.arc()
    .outerRadius(80)
    .innerRadius(40);

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .sort((a, b) => b.data.percentage - a.data.percentage);

arc.append("path")
    .attr("d", path)
    .attr("fill", function (d, i) { return aColor[i]; });

var label = d3.svg.arc()
    .outerRadius(20)
    .innerRadius(100);



arc.append("text")
    .attr("transform", function (d) {
        return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function (d) {
        return +d.data.percentage;
    });

//#endregion

//#region chart 2
var data = [
    { "platform": "Yes", "percentage": 69.00 }, //skyblue
    { "platform": "No", "percentage": 0.00 },    //darkblue
    { "platform": "N/A", "percentage": 36.00 } //orange
];

// var dd = d3.json('data.json');
// console.log(dd);
var svg = d3.select('#graph1').append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .sort((a, b) => b.data.percentage - a.data.percentage);

arc.append("path")
    .attr("d", path)
    .attr("fill", function (d, i) { return aColor[i]; });

arc.append("text")
    .attr("transform", function (d) {
        return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function (d) {
        return +d.data.percentage;
    });

//#endregion

//#region chart 3
var data = [
    { "platform": "Yes", "percentage": 79.00 }, //skyblue
    { "platform": "No", "percentage": 0.00 },    //darkblue
    { "platform": "N/A", "percentage": 26.00 } //orange
];
var svg = d3.select('#graph1').append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
//Create group element to hold pie chart    
var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .sort((a, b) => b.data.percentage - a.data.percentage);

arc.append("path")
    .attr("d", path)
    .attr("fill", function (d, i) { return aColor[i]; });

arc.append("text")
    .attr("transform", function (d) {
        return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function (d) {
        return +d.data.percentage;
    });

//#endregion

//#region chart 4
var data = [
    { "platform": "Yes", "percentage": 60.00 }, //skyblue
    { "platform": "No", "percentage": 1.00 },    //darkblue
    { "platform": "N/A", "percentage": 40.00 } //orange
];

var svg = d3.select('#graph1').append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Create group element to hold pie chart    
var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .sort((a, b) => b.data.percentage - a.data.percentage);

arc.append("path")
    .attr("d", path)
    .attr("fill", function (d, i) { return aColor[i]; });

arc.append("text")
    .attr("transform", function (d) {
        return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function (d) {
        return +d.data.percentage;
    });
//#endregion

//#region chart 5
var data = [
    { "platform": "Yes", "percentage": 88.00 }, //skyblue
    { "platform": "No", "percentage": 2.00 },    //darkblue
    { "platform": "N/A", "percentage": 15.00 } //orange
];
var svg = d3.select('#graph1').append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Create group element to hold pie chart    
var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")
    .sort((a, b) => b.data.percentage - a.data.percentage);

arc.append("path")
    .attr("d", path)
    .attr("fill", function (d, i) { return aColor[i]; });

arc.append("text")
    .attr("transform", function (d) {
        return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function (d) {
        return +d.data.percentage;
    });
//#endregion