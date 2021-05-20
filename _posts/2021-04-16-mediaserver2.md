---
layout: post
author: Conan Mercer
title: "Guide to Reducing Power Consumption of an Inexpensive Media Server by Undervolting"
categories: [blog, Computer Building]
tags: electronics
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<div class="post-paragraph">
  <h1>{{ page.title }}</h1>
  <p><i>{{ page.date | date_to_string }} - {{ page.author }}</i></p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/stock/powersave.jpg">
  </figure>

<h2>Power Hunger</h2>

<p>
In a previous post I built an inexpensive media server from reused computer parts, blog post <a href="{{ site.baseurl }}{% link _posts/2021-04-14-mediaserver1.md %}">here</a>. It was a successful build for the most part, costing little money and offering a big improvement to my home entertainment setup. There was one nagging issue though, power consumption was high. 
</p>

<p>
The main reason for this high power consumption was the CPU used in the build. The AMD FX-8320 is, and always was, a power hungry CPU. Not wanting to buy any new parts for this server, after some thought I came up with the plan of providing less power to the CPU in order to reduce its power consumption. For this I undervolted the CPU in the BIOS. The settings can be seen in the table below.
</p>

<h2>Undervolting the AMD FX-8320 </h2>

<table>
  <tr>
  <th>Setting</th>
  <th>State</th>
  </tr>
  <tr>
    <td>AMD Turbo Core Technology</td>
    <td>Disabled</td>
  </tr>
  <tr>
    <td>CPU Voltage</td>
    <td>1.130500 V</td>
  </tr>
  <tr>
    <td>CPU-NB Voltage</td>
    <td>1.180667 V</td>
  </tr>
</table>
<figcaption>BIOS setting for a successful undervolting of the AMD FX-8320</figcaption>

<p>
Any voltage combination lower than the above resulted in the system becoming unstable and crashing. This is as low as I could go.
</p>

<h2> Power Consumption Results </h2>

<p>
Using my local rate of electricity of 0.170105 €/kWh, and assuming a usage of 3 hours per day at idle and 21 hours a day in sleep mode, the electrical cost of the server is as follows.
</p>
<p>
Before, the server was idling at around 120 watts, which was costing about 29€ per year. Now the server idles at around 80 watts, costing about 21€ per year.
</p>

<img
    src="{{site.baseurl}}/assets/minified/images/computer/serverwattafter.svg"
    height="900"
    width="600" 
    />

<figcaption>Bar plot of the server watt consumption before and after undervolting</figcaption>

<p>
The average power consumption of the server has dropped by 40%. Not bad considering we did nothing but change some settings in the BIOS. This technique will work on similar hardware, so if you have a configuration that is using less initial wattage than mine, it may be possible to still reduce down the power consumption by undervolting.
</p>

<h2>Conclusion</h2>

<p>
The media server is now more power efficient, although admittedly newer hardware or even some old hardware could do the same job with less power.
<p>
In the future I will look into buying older hardware that is more power efficient, mainly a CPU change (and perhaps a motherboard if the current architecture wont support the new CPU).
</p>
<p>
I may also look at a Raspberry Pi based system to get the energy costs down. Although if I expand this server to do much more, the Pi may not have enough horses under the bonnet to supply what I would need.
</p>
