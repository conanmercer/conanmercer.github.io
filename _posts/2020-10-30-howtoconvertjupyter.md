---
layout: post
author: Conan Mercer
title: "Jupyter Notebooks on Your Blog"
categories: [blog, Data Science]
tags: Data Science
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<div class="post-paragraph">
  <h1>{{ page.title }}</h1>
  <p><i>{{ page.date | date_to_string }} - {{ page.author }}</i></p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/datascience/notebook.jpg">
  </figure>

<h2>Motivation</h2>

I started to write a lot of Data Science projects using Jupyter Notebooks. I was hosting these projects on GitHub, which I continue to do. However, I also have this website, and I thought it would be great to also post these data science projects here. The idea is to keep the Jupyter Notebook format and just embed it within a blog post.
<br>

<h3>Convert Jupyter Notebook to HTML</h3>

This blog post assumes that you already have a Jupyter Notebook created. Once you have, a package called Nbconvert is used to convert the Jupyter Notebook (.ipynb) to HTML. Be aware that as of the time of writing, only Python 3.6-3.8 is supported and tested by Nbconvert. You can install Nbconvert via the command line if you have a pip or an Anaconda python environment already installed, see Figure 1.

  <figure>
  <script src="https://gist.github.com/ConanMercer/ae3685f9190246975e3602adb1811120.js"></script>
  <figcaption>Figure 1 -  Install Nbconvert with either pip and conda</figcaption>
  </figure>

Once Nbconvert is installed, the process of conversion to HTML can now start. This is achieved easily by running the following command in the command line. The command must be run in the same directory as the "YourNotebook.ipynb" file:

<figure>
  <script src="https://gist.github.com/ConanMercer/da60ced3ecebeb61361326d8918106c5.js"></script>
  <figcaption>Figure 2 -  Convert .ipynb file to HTML</figcaption>
</figure>

It is worth mentioning that at first I started by using Nbconvert to convert Jupyter Notebooks to Markdown, as my website uses Jekyll. I thought this would be the best approach. I was wrong. The markdown conversion did not look anything like the classic Jupyter Notebook style and format, and for me this is one of the best aspects of these notebooks.

<h3>IFrame</h3>

Once the notebook is now in HTML format the best way to embed it within a markdown blog post is by using an Iframe. Style problems occurred if I did not use an Iframe. By using the Iframe, all of the necessary styling that the Jupyter Notebook needs is contained within the Iframe, and does not interfere with your websites CSS.

<figure>
  <script src="https://gist.github.com/ConanMercer/5460d09788da3de00d3d1d85dde7669c.js"></script>
  <figcaption>Figure 3 - Embed the converted JupyterNotebook.html file into an Iframe</figcaption>
</figure>

<h2>Conclusion</h2>

This blog post explained how to convert Jupyter Notebooks into HTML and embed them into a personal website or blog. This is achieved without destroying the style of either the Jupyter Notebook or the website. An example of this being used can be seen in one of my Data Science blog posts <a href="{{ site.baseurl }}{% link _posts/2020-10-29-webscraper.md %}">here</a>.
