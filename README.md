# Simple Portfolio Visualization

Just in D3.js, because ReactJS turned out to be hilariously unsuitable for such a small use case. This may change in future as new functionality is added.

* data fetched from the Alpha Vantage API
* Viz. with D3.JS

## Further plans

* More computations! Stacked bar chart for top panel, portfolio-pie chart breakdown, etc. 

## Problems

* [BUG] Axes for bar chart changing after line chart is changed.  

## Dev Notes

* While I miss the modularity conferred by React.JS, having to deal with `state`, `setState` and all that turned out to be an unnecessary level of complexity. There's almost no component reuse at so small a scale. Having to have everything in `index.html` is rather inelegant, though.
* Other visualisation libraries tried: `victory` and `charts.js`. Limited by poor documentation beyond quickly producing "standard" plots (line charts, bar charts).
* Other frameworks: `plotly.js` worked very well out of the box, as did `pydash`. But the point was to pick up something *not* Python-based anyway.
