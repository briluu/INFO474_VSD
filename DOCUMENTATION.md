# BubbleChart API Documentation

Easy API tool to plot a bubble chart for a hierarchical dataset.

## Usage

```javascript
var myChart = BubbleChart();

d3.json([dataset],function (error, root) { // Dataset should be hierarchical
	var chartWrapper = d3.select('#my-div')
	                .datum(root) 
	                .call(myChart);
})

```

## API Functions

\# *BubbleChart*()
> Constructs a bubble chart with the default variables.


\# *BubbleChart*.**diameter**(number)
> Sets the current value of diameter of the bubble chart where all the bubbles are.
<br /><u>*Default: 800*</u>


\# *BubbleChart*.**padding**(number)
> Sets the current value of padding between adjacent circles in pixels.
<br /><u>*Default: 2*</u>


\# *BubbleChart*.**color**(d3.scale.color_scale)
> Sets the current value of color scale array.
<br /><u>*Default: d3.scale.category20()*</u>


\# *BubbleChart*.**height**(number)
> Sets the current value of height of the svg where the bubble chart is consturcted.
<br /><u>*Default: 800*</u>


\# *BubbleChart*.**width**(number)
> Sets the current value of width of the svg where the bubble chart is consturcted.
<br /><u>*Default: 800*</u>