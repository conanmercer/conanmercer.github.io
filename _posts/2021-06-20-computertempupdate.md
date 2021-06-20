---
layout: post
author: Conan Mercer
title: "Installation of Infrared Temperature Monitoring System for a Computer"
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

<b>The code used in this post also resides on my GitHub - it can be viewed from <a href="https://github.com/ConanMercer/ComputerCaseTemperature" target="_blank">here</a></b>

<h2>The Final Result</h2>

I had just built a new computer, blog post <a href="{{ site.baseurl }}{% link _posts/2020-11-28-computerbuild.md %}">here</a>, and decided to add a highly custom infrared temperature monitoring system. I have written about the circuit design and programing of the system microcontroller in a previous post <a href="{{ site.baseurl }}{% link _posts/2020-12-31-computertemp.md %}">here</a>. The last step was to install the system inside the computer case.

<h4>The Sensor Placement</h4>

The system has a total of three infrared temperature sensors. One can be seen in the image below. These sensors are highly accurate, and are contactless. The overall result is a clear picture of the temperature in different parts of the case. There is one pointed to the plastic intake fans, and one on each of the exhaust fans, at the top of the case and also at the back of the case.

<figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/temp3.png">
</figure>

<h3>Wiring</h3>

Most of the wiring is sent to the back of the case. I soldered all of the wires to a prototype board. I then placed the prototype board into one of the unused HDD bays in the back of the computer case, so it is not visible through the tempered glass. The power to the whole system is supplied via USB from the motherboard. This works so that when the computer is turned on, so is the temperature sensing system. If the computer is off, so is the temperature sensing system.

<h3>The Final Result</h3>

The following photographs demonstrate how the end result looks. It is clear from the temperature readings that there is a significant difference between intake and exhaust fans, indicating that the fans are doing their job correctly and throwing heat outside of the case. These photographs where taken in summer so the ambient temperature of the room is about 27 degrees.
<br>
I hung the OLED screens using black zip ties to the fan grill at the top of the case. The screens sit great just below the top of the tempered glass. The viewing angle is great on these screens and the temperature is always visible with a quick glance.
<br>
I am happy with the end result. In the future I may change the IR sensor placement to point towards the CPU or other components within the computer case. For now, they measure intake and exhaust temperatures.

<figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/temp7.png">

</figure>

<figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/temp6.png">
</figure>

<figure>
  <img src="{{site.baseurl}}/assets/minified/images/computer/temp4.png">
</figure>
