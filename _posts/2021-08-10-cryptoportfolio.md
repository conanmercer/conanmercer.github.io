---
layout: post
author: Conan Mercer
title: "Crypto Currency - Manage Your Portfolio with Python"
categories: [blog, crypto, bitcoin, jupyter]
tags: crypto
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
  <img src="{{site.baseurl}}/assets/minified/images/stock/crypto.jpg">
  </figure>

<h2>Using Python to Analyse your Crypto Currency Portfolio</h2>

<p>
Crypto currencies such as Bitcoin and Ethereum are growing in popularity and market capitalization. This post looks at how to analyse your personal portfolio using Python, which is useful to gain of a view of your entire portfolio, as it may be spread out over time and be located in different wallets or platforms. The script displays the total percentage gain or loss of the portfolio, as well as calculations on what the value might be after capital gains tax is taken into consideration. The script also provides up to date charts on various crypto currency prices.
</p>

<p>
The information in this blog post does not represent my, or anyone elses, crypto currency portfolio. The information presented here is for educational and entertainment purposes only.
</p>

<p>
The data is stored in a separate csv file (data.csv) that holds all of the data required for the Python script to run. This data file can be modified to match your own portfolio of crypto currency.
</p>

<div class="post-paragraph">

<iframe src="{{site.baseurl}}/assets/html/Crypto_Analysis.html" width="100%" scrolling="no" frameBorder="0" onload="resizeIframe(this)"></iframe>

</div>

Disclaimer: This information is for entertainment and educational purposes only. This information does not represent, in any case, specific investment, legal nor tax advice nor recommendations to purchase a particular financial product.
