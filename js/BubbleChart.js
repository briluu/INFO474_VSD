var BubbleChart = function() {

	// Assign default values for each variables.	
	var diameter = 800,
		color=d3.scale.category20(),
		padding = 2,
		format = d3.format(",d"),
		width = 800,
	 	height = 800;

    var bbChart = function(selection) {
    	selection.each(function(root) {
    		var bubblePack = d3.layout.pack()
					.sort(null)
					.size([diameter, diameter])
					.padding(padding);
	   		var div = d3.select(this);

			var svg = div.append("svg")
	   		 			.attr("width", width)
	   		 			.attr("height", height)
	   		 			.attr("class","bubble");
			 
			var node = svg.selectAll(".node")
			      .data(bubblePack.nodes(classes(root))	
			      .filter(function(d) { return !d.children; }))
			      .enter().append("g")
			      .attr("class", "node")
			      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

			    node.append("title")
			        .text(function(d) { return d.className + ": " + format(d.value); });

			  	node.append("circle")
			  	    .attr("r", function(d) { return d.r; })
			        .style("fill", function(d) { return color(d.packageName); });
  

			  	node.append("text")	
			        .attr("dy", ".3em")
			        .style("text-anchor", "middle")
			        .text(function(d) { return d.className.substring(0, d.r / 3); });

				// Returns a flattened hierarchy containing all leaf nodes under the root.
				function classes(root) {
				  var classes = [];
				  function recurse(name, node) {
				    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
				    else classes.push({packageName: name, className: node.name, value: node.size});
				  }

				  recurse(null, root);
				  return {children: classes};
				}

				d3.select(self.frameElement).style("height", diameter + "px");

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

	bbChart.format = function(val) {
 		if (!arguments.length) return format;
 		format = d3.format(val);
		return this;
	}

	bbChart.padding = function(val) {
 		if (!arguments.length) return padding;
 		padding = val;
		return this;
	}

	bbChart.width = function(val) {
 		if (!arguments.length) return width;
 		width = val;
		return this;
	}

	bbChart.height = function(val) {
 		if (!arguments.length) return height;
 		height = val;
		return this;
	}

return bbChart;
}