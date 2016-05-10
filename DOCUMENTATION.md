# BubbleChart API Documentation

An easy API tool to plot a bubble chart for hierarchical dataset.

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
> Sets the value of diameter of the bubble chart where all the bubbles are.
> If the number is not specified, return the current value.
<br />**Default: `800`**


\# *BubbleChart*.**padding**(number)
> Sets the value of padding between adjacent circles in pixels.
> If the number is not specified, return the current value.
<br />**Default: `2`**


\# *BubbleChart*.**color**(d3.scale.color_scale) 
> Sets the value of color scale of the bubbles.
> If the scale is not specified, return the current array.
> The value must be a d3 color scale function.
<br />**Default: `d3.scale.category20()`**


\# *BubbleChart*.**height**(number)
> Sets the current value of height of the svg where the bubble chart is consturcted.
> If the number is not specified, return the current value.
<br />**Default: `800`**


\# *BubbleChart*.**width**(number)
> Sets the current value of width of the svg where the bubble chart is consturcted.
> If the number is not specified, return the current value.
<br />**Default: `800`**