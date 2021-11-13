---
layout: post
author: Conan Mercer
title: "Understanding the Pitfalls of the Pie Chart"
categories: [blog, data science, plots, jupyter]
tags: data science
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<div class="post-paragraph">
  <h1>{{ page.title }}</h1>
  <p><i>{{ page.date | date_to_string }} - {{ page.author }}</i></p>

<h2>Failure to Convey</h2>

The only reason to create a plot is to accurately present data. Without exception, the human eye is involved in this process, so its peculiarities must be considered. The fact is that small differences in a pie chart are poorly recognized by the human eye.
<br>
For instance, take a set of data that is similar, but not the same in value. In Figure 1 below, try to determine which component has the highest value. Even better, try to rank order these values from highest to lowest.
<br>
Its difficult.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/plotting/PieChart4.png">
  <figcaption>Figure 1 - Pie Charts </figcaption>
  </figure>

These pie charts have 5 sections each, now imagine more than 20 sections in each pie chart. Forget about it.

<h2>Same Data, Different Plot</h2>

A significantly different (and accurate) story is told if the exact same data is presented using a bar plot. The bar plot is nearly always the stronger contender against the pie chart. The data clearly trends in contradictory directions in each of these bar plots, something that would have been lost to the audience if the pie chart had been utilized.

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/plotting/BarChart.png">
  <figcaption>Figure 2 - The exact same data as plotted in the pie charts of Figure 1, however represented as bar plots</figcaption>
  </figure>

<h2>Think Twice, Present Once</h2>

This post is not intended to be a hit piece on the pie chart, for it does have some utility. When comparing two datasets, where one is significantly bigger than the other, maybe a pie chart is appropriate.
<br>
In any case, this is a reminder that careful consideration is always required when presenting data.
<br>
<br>
The morale, think twice before choosing the pie chart.
