# PrevNext Ergo-CMS plugin

This plugin provides access to previous and next pages of a particular type. Most commonly, this would be use to generate Next and Prev buttons for a user to navigate.

## Installation

In an existing ergo project folder:

```
ergo plugin install nextprev
```


## Usage Sample

All of the themes provided by ergo-cms support this plugin automatically in the `post.html` layout. The basic format to build such support is:


```
{{#has_nextprev}}<!--nextprev plugin-->
<div>
{{#prev}}
	<a href="/{{uri}}" class="button">&lt;&lt; Previous</a>
{{/prev}}
{{#next}}
	<a href="/{{uri}}" class="button">Next &gt;&gt;</a>
{{/next}}
</div>
{{/has_nextprev}}
```

Note that the `{{#prev}}` and `{{#next}}` sections contain complete information about the previous/next post. As such, you can use any field available:


```
{{#has_nextprev}}<!--nextprev plugin-->
<div>
{{#prev}}
	<a href="/{{uri}}"><div class="post-preview left" style="background-image:url(/images/{image})">
		<h2>{{title}}</h2>
		<h3>{{subtitle || metadesc}}</h3>
		<p class="meta">Posted by {{author}} on {{date.formatted}}</p>
		<p class="intro">{{short_content}}...</p>
	</div></a>
{{/prev}}
{{#next}}
	<a href="/{{uri}}"><div class="post-preview right" style="background-image:url(/images/{image})">
		<h2>{{title}}</h2>
		<h3>{{subtitle || metadesc}}</h3>
		<p class="meta">Posted by {{author}} on {{date.formatted}}</p>
		<p class="intro">{{short_content}}...</p>
	</div></a>
{{/next}}
</div>
{{/has_nextprev}}
```

