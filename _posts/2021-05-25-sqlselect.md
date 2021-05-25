---
layout: post
author: Conan Mercer
title: "PostgreSQL - Selects"
categories: [blog, sql, basics, jupyter]
tags: sql
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

<h2>Motivation</h2>

This Jupyter Notebook is the first in my series on PostgreSQL. The goal is to become familiar with the basic and more advanced forms of the Structured Query Language (SQL), with particular focus on Data Science applications. This guide uses a sample database called dvdrental, a common resource used to learn PostgreSQL, it can be downloaded from <a href="https://www.postgresqltutorial.com/postgresql-sample-database/" target="_blank">here</a>.
<br>
<br>

<b>This Jupyter Notebook also resides on my GitHub - it can be viewed from <a href="https://github.com/ConanMercer/PostgreSQL/blob/master/postgresSQL_Selects.ipynb" target="_blank">here</a></b>

<div class="post-paragraph">

<iframe src="{{site.baseurl}}/assets/html/postgresSQL_Selects.html" width="100%" scrolling="no" frameBorder="0" onload="resizeIframe(this)"></iframe>

</div>

<h2>Conclusion</h2>

<p>
This post introduced the SELECT statement in PostgreSQL along with primary and foreign keys and their importance in relational database theory. 
<br>
In the future I will be writing about more advanced SQL topics such as query tuning and performance optimization.
<p>
