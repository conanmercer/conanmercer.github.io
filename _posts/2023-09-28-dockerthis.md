---
layout: post
author: Conan Mercer
title: "Dockerizing my Github Pages website - Simplified Development and Local Serving for Jekyll Websites"
categories: [blog, docker]
tags: docker
---

<div class="post-paragraph">
  <h1>{{ page.title }}</h1>
  <p><i>{{ page.date | date_to_string }} - {{ page.author }}</i></p>


<figure>
<img src="{{site.baseurl}}/assets/minified/images/stock/docker.jpg">
</figure>

<b>The code used in this post also resides on my GitHub - it can be viewed from <a href="https://github.com/conanmercer/conanmercer.github.io" target="_blank">here</a></b>

<p>
Docker is great for providing a consistent and isolated environment for developing all kinds of software. This website uses Jekyll and Ruby, both of which I do not really want installed on my local machine. Also, I often work on different machines locally, not always the same machine, so maintaining a correct Ruby environment for this website on all machines was becoming a massive pain.
</p>

<p>
Docker is one of my favorite technology stacks, so I should have done this sooner, but I have now setup docker containerization of the Ruby and Jekyll environment so that I can test this websites code locally using Docker, a much better solution to the problem.
</p>

<h2>Setting up Docker Containerization</h2>

In order to create the Docker container we use the Dockerfile below. 

<pre><code class="shebang">
FROM jekyll/jekyll:3.8.6

# Copy Gemfile because sometimes the bundle version is different
# install the required bundler and install all the dependencies
COPY Gemfile* ./

RUN gem install bundler -v 2.4.13 && bundle install

ENTRYPOINT [ "jekyll" ]

CMD [ "build" ]
</code></pre>

This Dockerfile pulls the publicly available jekyll image from Dockerhub. It then copys the projects Gemfile into the docker container.

<p>
The Gemfile is quite simple, it looks for gems in the rubygems.org hosting service, we are interesting in the latest version of Jekyll so we pull version 4.2 or above, and then some other plugins also. Thats it.
</p>

<pre><code class="ruby">
source 'https://rubygems.org'

gem 'jekyll', '~> 4.2'

group :jekyll_plugins do
  gem 'jekyll-timeago', '~> 0.13.1'
end
</code></pre>

<p>
Next the Dockerfile instructs to install Bundler. Bundler ensures Ruby projects maintain a consistent environment by meticulously tracking and installing the precise gems and their respective versions required. Once Bundler is installed, the bundle install command is used to install all the required gems.
</p>

<h2>Serving the Site Locally</h2>

<p>
Now that the Dockerfile is setup, a bash script is used to build, and also serve the website locally. This script automates the building and serving of the website within the Docker container. To run the script these commands are used:
</p>

<pre><code class="shebang">
./local_serve.sh build
</code></pre>

<pre><code class="shebang">
./local_serve.sh serve
</code></pre>


<pre><code class="shebang">
#!/usr/bin/env bash

set -e

case $1 in
    'prod-build')
        echo "Building docker image of Jekyll"
        docker build -t jekyll .

        echo "Building Jekyll site"    
        docker run \
            --volume="$PWD:/srv/jekyll:Z" \
            -e JEKYLL_ENV=prod \
            -t jekyll \
            build
    ;;
    'build')
        echo "Building docker image of Jekyll"
        docker build -t jekyll .

        echo "Building Jekyll site"    
        docker run \
            --volume="$PWD:/srv/jekyll:Z" \
            -t jekyll
    ;;
    'serve')
    docker run \
            --volume="$PWD:/srv/jekyll:Z" \
            -p 4000:4000 \
            -it jekyll serve
    ;;
esac
</code></pre>

<h2>File Structure</h2>

<p>
The file structure for everything related to dockerization goes into the root folder for the website. An example of what that might look like for you is here:
</p>

<pre><code class="shebang">
my-website/
|-- _posts/
|   |-- 2023-09-XX-dockerizing-my-github-pages-website.md
|
|-- assets/
|   |-- minified/
|   |   |-- images/
|   |   |   |-- stock/
|   |   |   |   |-- docker.jpg
|
|-- Dockerfile
|-- Gemfile
|-- local_serve.sh
</code></pre>

For the exact structure you can check out this websites repo, <a href="https://github.com/conanmercer/conanmercer.github.io" target="_blank">here</a>



<h2>Conclusion</h2>

<p>
The process of dockerizing my GitHub Pages website using Jekyll has brought simplicity and efficiency to my development workflow. Docker provides a reliable and isolated environment, allowing me to work across different machines without the need to install Ruby and Jekyll locally. By encapsulating the Ruby and Jekyll environment within a Docker container, I've eliminated the hassles of maintaining consistent configurations on various machines.
</p>

<p>
The Dockerfile, which specifies the environment setup and gem installations, ensures that my website's dependencies are accurately managed. Bundler plays a crucial role in maintaining gem versions, ensuring a consistent development experience.
</p>

<p>
To further enhance my local development and testing, a Bash script automates the website building and serving processes within the Docker container. This script simplifies the development cycle, making it as straightforward as running a few commands.
</p>

<p>
Incorporating Docker into my technology stack has undoubtedly streamlined my Jekyll website development, and I highly recommend it to fellow developers seeking a more efficient and hassle-free workflow. Docker's containerization capabilities have made a significant difference in managing the Ruby and Jekyll environment for my website offering a clear path to simplified development and local serving for Jekyll websites.
</p>