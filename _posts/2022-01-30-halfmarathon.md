---
layout: post
author: Conan Mercer
title: "Half Marathon Training Analysis using the Strava API and Python"
categories: [blog, python, strava, jupyter]
tags: data science
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>
<script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }
</script>

<div class="post-paragraph">
  <h1>{{ page.title }}</h1>
  <p><i>{{ page.date | date_to_string }} - {{ page.author }}</i></p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/running/halfmarathon.jpg" width="500">
  </figure>

<h2>Motivation</h2>

For a long time I wanted to get a GPS running watch that measures heart rate. In the end I went with the <a href="https://www.garmin.com/en-IE/p/641121/pn/010-02156-15" target="_blank">Garmin Forerunner 45</a> watch, and the external <a href="https://www.polar.com/ie-en/products/accessories/polar_h10_heart_rate_sensor" target="_blank">Polar H10</a> heart rate sensor. This combination is perfect for highly accurate GPS and heart rate data, which is all that I was interested in from a running point of view. Being of the curious type, and also a data engineer, I decided to write this post that uses the Strava API and Python to analyse my training and race day performance for a Half Marathon race.

<br>
<br>
<b>This Jupyter Notebook also resides on my GitHub - it can be viewed from <a href="https://github.com/ConanMercer/Strava_Half_Marathon/blob/master/strava_data.ipynb" target="_blank">here</a></b>

<div class="post-paragraph">

<iframe src="{{site.baseurl}}/assets/html/strava_data.html" width="100%" scrolling="no" frameBorder="0" onload="resizeIframe(this)"></iframe>

</div>

<h2>Conclusion</h2>

<p>
This post explained how to use the Strava API and Python to analyse running data. The Strava API is a very effective tool for storing and retrieving running data. Python is very suitable for the analysis of that data. Together they form part of a powerful method to tell stories about fitness. I will write more of these types of projects in the future.
