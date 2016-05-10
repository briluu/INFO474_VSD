var BubbleChart = function() {

		var diameter = 100, 
		    color = "black",
		    name = "Bubble",
		    format = d3.format(",d"),
		    bubbles = [];

		var width = 1000,
		 	height = 1000,
		 	margin = 100;

	    var bbChart = function(selection) {
	    	selection.each(function(data) {

		   		var div = d3.select(this);

				var svg = div.append("svg")
		   		 			.attr("width", width)
		   		 			.attr("height", height);
		   		 scale = d3.scale.linear()
		   		 			.domain([])
					        .range([0,1])
				 console.log(scale)

				var g = svg.selectAll('g').data(data);
				       
				    g.append("g")
				     .attr("transform", function(d) { return "translate(" + diameter/2 + "," + diameter/2 + ")"; });

				var circle = g.enter().append("circle")
				      	.attr("r", function(d) { return d.r; })
				      	.attr("cx",function(d) { return diameter/2})
				      	.attr("cy",function(d) { return diameter/2})
				      	.attr("class", "bubble")
				      	.style("stroke",function(d){return "black"})
				      	.style("stroke-width",function(d){return "3"})
				        .style("fill", function(d) { return color; });
				    circle.append("text")
				        .attr("dy", ".3em")
				        .style("font-size", function(d){ return diameter/5})
				        .style("text-anchor", "middle")
				        .text(function(d) { return name + ": " + format(d.value);});

		  //   	 d3.json(data, function(error, root) {

				//   var node = svg.selectAll(".node")
				//       .data(bubble.nodes(classes(root))
				//       .filter(function(d) { return !d.children; }))
				//       .enter().append("g")
				//       .attr("class", "node")
				//       .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

				//   node.append("title")
				//       .text(function(d) { return d.className + ": " + format(d.value); });

				//   node.append("circle")
				//       .attr("r", function(d) { return d.r; })
				//       .style("fill", function(d) { return color(d.packageName); });

				//   node.append("text")
				//       .attr("dy", ".3em")
				//       .style("text-anchor", "middle")
				//       .text(function(d) { return d.className.substring(0, d.r / 3); });
				// });

	    	});

	    }


		bbChart.diameter = function(val) {
	 		if (!arguments.length) return diameter;
	 		diameter = val;
			return this;
		}

		bbChart.color = function(val) {
	 		if (!arguments.length) return color;
	 		color = val;
			return this;
		}

		bbChart.name = function(val) {
	 		if (!arguments.length) return name;
	 		name = val;
			return this;
		}

		bbChart.format = function(val) {
	 		if (!arguments.length) return format;
	 		format = d3.format(val);
			return this;
		}

	return bbChart;
}