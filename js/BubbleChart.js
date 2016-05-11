var BubbleChart = function() {

	// Assign default values for each variables.	
	var diameter = 800,
		color=d3.scale.category20(),
		padding = 2,
		format = d3.format(",d"),
		width = 800,
	 	height = 800;

	// Chart function to draw the bubble chart 	
    var bbChart = function(selection) {

	    // Loop thorough the selection in case of more than one selection
    	selection.each(function(root) {

   			// Set the layout where the bubbles are created
    		var bubblePack = d3.layout.pack()
				        	   .sort(null)
				               .size([diameter, diameter])
				               .padding(padding);

	   		var div = d3.select(this);

	   		// Set svg for showing all bubbles
			var svg = div.selectAll(".bubble").data("1");
			   svg.enter().append("svg")
		 		   .attr("width", width)
		 		   .attr("height", height)
		 		   .attr("class","bubble");

		       svg.exit().remove();

		    // Bind circles with data and update it
		 	var circle = svg.selectAll("circle")
			      .data(bubblePack.nodes(classes(root))	
			      .filter(function(d) { console.log(d); return !d.children; }));
			
			circle.enter().append("circle")
		  			 .attr("r","0")
		  			 .style("fill","white");

		    circle.exit().remove();

            circle.transition()
             .duration(1000)
			 .attr("r", function(d) {return d.r; })
			 .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
			 .style("fill", function(d) { return color(d.packageName); });


		    // Bind text with data and update it
			var text = svg.selectAll("text")
			       .data(bubblePack.nodes(classes(root))	
			       .filter(function(d) { console.log(d); return !d.children; }));
			
			text.enter().append("text")
			  	        .style("fill","white");

			text.exit().remove();

 			text.transition()
 			 .duration(1000)
 			 .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
			 .style("text-anchor", "middle")
			 .attr("dy", ".3em")
			 .style("fill","black")
 			 .text(function(d) { return d.className.substring(0, d.r / 3); });
		 		

 			// Show mouseover view for the exact value
		 	circle.append("title")
			 .text(function(d) { return d.className + ": " + format(d.value); });


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

    // Set diameter of bubble chart (The area where all the bubbles are created)
	bbChart.diameter = function(val) {
 		if (!arguments.length) return diameter;
 		diameter = val;
		return this;
	}

    // Set color category for the bubbles
	bbChart.color = function(val) {
 		if (!arguments.length) return color;
 		color = val;
		return this;
	}

	// Set the format of the value showing on mouseover
	bbChart.format = function(val) {
 		if (!arguments.length) return format;
 		format = d3.format(val);
		return this;
	}

	// Set the distance between the bubbles
	bbChart.padding = function(val) {
 		if (!arguments.length) return padding;
 		padding = val;
		return this;
	}

	// Set the width of the svg
	bbChart.width = function(val) {
 		if (!arguments.length) return width;
 		width = val;
		return this;
	}

	// Set the hight of the svg
	bbChart.height = function(val) {
 		if (!arguments.length) return height;
 		height = val;
		return this;
	}

return bbChart;
}