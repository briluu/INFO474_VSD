
var myChart = BubbleChart().padding(10).color(d3.scale.category20c()).diameter(1000).width(1000).height(1000);


d3.json(["data.json"],function (error, root) { // Dataset should be hierarchical
    var chartWrapper = d3.select('#my-div')
                    .datum(root) 
                    .call(myChart);
});
