
// var myChart = BubbleChart();


var myChart = BubbleChart().diameter(1000)
							.padding(2.5)
                            .format(",d")
                            .width(1000)
                            .height(1000)
                            .color(d3.scale.category20c());

d3.json("flare.json",function (error, root) {
	var chartWrapper = d3.select('#my-div')
	                .datum(root) 
	                .call(myChart);
})

