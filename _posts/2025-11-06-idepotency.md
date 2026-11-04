---
layout: post
author: Conan Mercer
title: "Idempotency - A Cornerstone of Software Engineering"
categories: [blog]
tags: idempotency
---

<div class="post-paragraph">
  <h1>{{ page.title }}</h1>
  <p><i>{{ page.date | date_to_string }} - {{ page.author }}</i></p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/aws/sqs.png">
  </figure>

<h2>What is Idempotency?</h2>

At some point in a software project, the need to solve a problem involving a queuing system is likely to arise. Upon closer examination, it often becomes clear that the queue must handle duplicate messages, and the system as a whole should not be constrained by the queue's throughput capacity.

<h2>Quirks/Edge Cases/ Gotchas</h2>

In an AWS environment, Amazon SQS (Simple Queue Service) is a popular choice because it abstracts much of the complexity involved in handling and processing messages in a queue. 

<p>
As one of AWS's oldest services, SQS offers two types of queues: Standard and FIFO (First In, First Out).
</p>

  <figure>
  <img src="{{site.baseurl}}/assets/minified/images/aws/sqs_fifo.png">
  </figure>
