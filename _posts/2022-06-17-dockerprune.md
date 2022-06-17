---
layout: post
author: Conan Mercer
title: "Prune Docker Automatically with a Weekly Cron Job"
categories: [blog, docker]
tags: dataengineering
---

<div class="post-paragraph">
  <h1>{{ page.title }}</h1>
  <p><i>{{ page.date | date_to_string }} - {{ page.author }}</i></p>


<figure>
<img src="{{site.baseurl}}/assets/minified/images/stock/docker.jpg">
</figure>

<p>
Ever run out of space on your build server? Learn how to automatically prune docker images to free up space every week.
</p>

<h2>Automatic Docker Pruning</h2>

Recently I had an issue where my Linux-based build server was suddenly full to the brim. Not ideal when you want to build and push to production. The codebase utilizes Docker, and as it happens, Docker has a wonderful Prune command to assist in cleaning up its unused containers and images.

<h2>Taking Out the Bins</h2>

In Linux, the easiest way to schedule a weekly job is to set up a cronjob to execute the desired docker prune command, for example, the following command will force docker to prune all unused images:

<pre><code class="shebang">
docker image prune -f
</code></pre>

<br>
<b><i>docker image prune</i></b> - tells Docker to Prune unused images
<br>
<b><i>-f</i></b> - tells Docker to force the Prune command without prompting the user


<br>
<p>
Next, we need to create a new file in the etc/cron.weekly/ folder:
</p>

<pre><code class="shebang">
cd /etc/cron.weekly
sudo nano docker-prune
</code></pre>

The file should open, and allow us to add the desired prune command and inform the OS that this is a bash file (place the Bash Shebang at the top of the file)
<pre><code class="shebang">
#!/bin/bash
docker image prune -f
</code></pre>

To save and close the file, hit Ctrl + O and then Ctrl + X


<h3>Schedule</h3>

This next part is important. We need to tell the OS to execute our cronjob by using the following command:

<pre><code class="shebang">
sudo chmod +x /etc/cron.weekly/docker-prune
</code></pre>


All done. Docker will now execute this command every week.


<h3>Testing</h3>

To test out the command to see if it will execute correctly next time the cronjob runs, you can force the weekly Cron register to run with the following command:

<pre><code class="shebang">
run-parts /etc/cron.weekly
</code></pre>