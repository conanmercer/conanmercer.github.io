---
layout: post
author: Conan Mercer
title: "PostgreSQL - Execution"
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

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/stock/execution.jpg">
  </figure>

<h2>Motivation</h2>

This Jupyter Notebook is the second in my series on PostgreSQL, the first blog post can be found <a href="{{ site.baseurl }}{% link _posts/2021-05-25-sqlselect.md%}">here</a>. The goal is to become familiar with the EXPLAIN and ANALYSE statements, with particular focus on execution and planning times of queries. This guide uses a sample database called dvdrental, a common resource used to learn PostgreSQL, it can be downloaded from <a href="https://www.postgresqltutorial.com/postgresql-sample-database/" target="_blank">here</a>.
<br>
<br>

<b>This Jupyter Notebook also resides on my GitHub - it can be viewed from <a href="https://github.com/ConanMercer/PostgreSQL/blob/master/postgresSQL_Execution.ipynb" target="_blank">here</a></b>

<div class="post-paragraph">

<iframe src="{{site.baseurl}}/assets/html/postgresSQL_Execution.html" width="100%" scrolling="no" frameBorder="0" onload="resizeIframe(this)"></iframe>

</div>

<h2>Conclusion</h2>

<p>
This post introduced the EXPLAIN and ANALYSE statements in PostgreSQL along with how a table is scanned.
<br>
In the future I will be writing about indexes and how they can help to improve execution times and performance optimization.
<p>
