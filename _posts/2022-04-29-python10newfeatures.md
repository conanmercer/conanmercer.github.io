---
layout: post
author: Conan Mercer
title: "5 New Python 3.10 Features You Should Know About"
categories: [blog, python]
tags: data engineering
---

<div class="post-paragraph">
  <h1>{{ page.title }}</h1>
  <p><i>{{ page.date | date_to_string }} - {{ page.author }}</i></p>


<figure>
<img src="{{site.baseurl}}/assets/minified/images/stock/python310.jpg">
</figure>

This article explains the new features in Python 3.10, compared to 3.9. When Python releases a new version, a lot of the ideas originate from Python Enhancement Proposals (PEP). 

<p>These PEPs define in detail what has changed, in this article I have picked 5 of the most interesting proposals.</p>




<h2>1. Structural Pattern Matching</h2>

<p>
If you have ever worked with C# or Java you may be familiar with "switch case" statements. Trying to do this in Python would have previously involved some cumbersome "if, elif, else" statements
</p>
<p>
New to Python 3.10 is structural pattern matching AKA the "switch, case" statement which has the following syntax:
</p>

<pre><code class="python">
def http_error(status):
    match status:
        case 400:
            return "Bad request"
        case 401:
            return "Unauthorized"
        case 403:
            return "Forbidden"
        case 404:
            return "Not found"
        case _:
            return "Something else"
</code></pre>

Notice the final block "case _", the underscore works like a wildcard and will never fail to match.

Interestingly, it is possible to combine multiple cases into a single pattern using the pipe operator "|":

<pre><code class="python">
case 401|403|404:
            return "Not happening"
</code></pre>




<h2>2. Improved Error Messages</h2>

Python could be accused of misleading or unclear error reporting. To combat this, Python 3.10 introduces precise line numbers for debugging through <a href="https://peps.python.org/pep-0626/" target="_blank">PEP 626</a>.
<br>

Before Python 3.10, syntax errors would often be reported in a somewhat vague fashion:

<pre><code class="python">
File "test.py", line 1
    expected = {'First': 1, 'Second':2

SyntaxError: unexpected EOF while parsing
</code></pre>

Not anymore, version 3.10 introduces more precise information while parsing code. For example, if a bracket is never closed, the error message will be explicit and point to the line of code, and state the error in prose:

<pre><code class="python">
File "test.py", line 1
    expected = {'First': 1, 'Second':2
               ^
SyntaxError: '{' was never closed
</code></pre>




<h2>3. A New Union Type Operator</h2>

Previously, when adding type hints with two types, the Union keyword was necessary:

<pre><code class="python">
def example_function(flexible_parameter: Union[float, string]) -> Union[float, string]:
	  return flexible_parameter
</code></pre>

<a href="https://peps.python.org/pep-0604/" target="_blank">PEP 604</a> introduces writing Union types as X | Y instead of Union[X, Y]:

<pre><code class="python">
def example_function(flexible_parameter: float | string) -> float | string:
	  return flexible_parameter
</code></pre>

This syntax, in my opinion, is more readable and gets the job done in less code.





<h2>4. Explicit Type Aliases</h2>

Take the example of representing speed using a tuple of average and maximum floats, and a group of cars by a list of such speed tuples. A group of speeds is then type hinted as list[tuple[float, float]]
<br>
To simplify type annotation, you define type aliases as follows:

<pre><code class="python">
Speed = tuple[float, float]
Car = list[Speed]
</code></pre>


This approach can work, but often the type checker can not distinguish between a definition of a global variable or a type alias. To lend a hand to the type checker, type aliases can now be explicitly annotated:

<pre><code class="python">
from typing import TypeAlias

Speed: TypeAlias = tuple[float, float]
Car: TypeAlias = list[Speed]
</code></pre>

The TypeAlias annotation makes the intention concrete, both to a type checker and to anyone reading the code.




<h2>5. Optional Length-Checking To zip</h2>

When combining multiple lists in Python, the built-in zip function is useful. However before Python 3.10 there was no check that all sequences being zipped had the same length. <a href="https://peps.python.org/pep-0618/" target="_blank">PEP 618</a> adds the optional strict boolean keyword parameter. 

<p>When enabled, a ValueError is raised if one of the arguments is exhausted before the others. For example, the code below would raise a ValueError, because the strict parameter is set to True.</p>


<pre><code class="python">
z = zip([8.0, 12.0, 16.0], [8, 12, 20, 32], strict=True)
</code></pre>



<a href="https://docs.python.org/3/whatsnew/3.10.html" target="_blank">Here</a> is a list of all of the PEP features introduced into Python 3.10