---
layout: post
author: Conan Mercer
title: "A Guide to Creating Your Very First Docker Application"
categories: [blog, docker]
tags: docker
---

<div class="post-paragraph">
  <h1>{{ page.title }}</h1>
  <p><i>{{ page.date | date_to_string }} - {{ page.author }}</i></p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/stock/docker.png">
  </figure>


<h2>How Docker Works</h2>
<p>
Docker is used to develop, test, ship, and run applications. The key aspect of Docker is that it allows the programmer to separate the application from the infrastructure it runs on.

Before Docker, Virtual Machines (VMs) were commonplace.

The difference between Docker and a traditional VM is that Docker runs on a Docker Engine. It does not require a Hypervisor and a guest OS.

This makes the Docker container lighter and increases boot time.

A Docker container can also run in pretty much any environment, making it more portable than a VM.

Containers can be built and destroyed much faster than a VM.

It is much easier to deploy a Docker container on a cloud server than it is for a VM.
</p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/stock/vms.png">
  </figure>


<h2>Creating your first Docker application</h2>

<h3>First things first, installing Docker on Linux</h3>

Update packages, install docker, and test docker installation:

<pre><code class="shebang">
sudo apt update
sudo apt install docker.io
sudo docker run hello-world
</code></pre>

<h3>Write the project</h3>

We are going to need two files to run our application. A Dockerfile and a Python file.

<ul>
  <li>The Python file main.py contains the code that will be run by the Docker container</li>
  <li>The Dockerfile is used to configure how the Docker container will run</li>
</ul>


The Python file is very basic, only outputting some text:

<pre><code class="python">
#!/usr/bin/env python3

print("Hello from Docker!")
</code></pre>


The Dockerfile is where the magic happens:

<pre><code class="shebang">
FROM python:latest

COPY main.py /

CMD [ "python", "./main.py" ]
</code></pre>


The goal of the Dockerfile is to launch the Python code.

First, a Python image is loaded using the FROM instruction.

Then the Python file, in this case, main.py is copied into the container using the COPY instruction.

Lastly, the CMD instruction tells the container to execute the Python file.

The code used in this guide can be found on my GitHub <a href="https://github.com/conanmercer/docker-application-example" target="_blank">here</a>



<h3>Create the Docker Image for the first time</h3>

Using the terminal, the image first needs to be created before it can be run. The following command creates the image called “docker-python-test”

<pre><code class="shebang">
docker build -t docker-python-test . 
</code></pre>

The -t command allows us to name the image, in this case, docker-python-test

<h3>Run the Docker Image for the first time</h3>

Now that we have created an image to run, it is time actually run it.

<pre><code class="shebang">
docker run docker-python-test 
</code></pre>

Hurray!

You should see “Hello from Docker!” output on your terminal screen.

<h2>Conclusion</h2>
From here you are ready to start building and running applications in Docker!

The skies are the limit!

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/stock/limit.png">
  </figure>