---
title: 'HTML'
slug: 'html'
category: 'Markup'
date: 2022-10-26T00:00:00.000Z
author: MKAbuMattar
description: 'HTML is the standard markup language for creating Web pages. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
color: '#E44D26'
icon: 'HTML5Icon'
draft: false
---

## Table of Contents

<details>

<summary>Table of Contents</summary>

- [Introduction](#introduction)
  - [What is HTML?](#what-is-html)
  - [Why HTML?](#why-html)
- [Getting started](#getting-started)
  - [Hello World](#hello-world)
  - [Comment in HTML](#comment-in-html)
  - [Headings](#headings)
  - [Paragraph](#paragraph)
  - [Text Formatting Tags](#text-formatting-tags)
  - [HTML links](#html-links)
  - [HTML Images](#html-images)
  - [Section Divisions](#section-divisions)
  - [CSS in HTML](#css-in-html)
  - [JavaScript in HTML](#javascript-in-html)
  - [Inline Frame](#inline-frame)
- [HTML5](#html5)
  - [HTML5 Tags](#html5-tags)
  - [HTML5 Picture](#html5-picture)
  - [HTML5 Audio](#html5-audio)
  - [HTML5 Video](#html5-video)
  - [HTML5 Canvas](#html5-canvas)
- [HTML Tables](#html-tables)
  - [Table Example](#table-example)
  - [Table Tags](#table-tags)
  - [Table attributes](#table-attributes)
    - [`<table>` Attributes](#table-attributes)
    - [`<td>` Attributes](#td-attributes)
    - [`<th>` Attributes](#th-attributes)
    - [`<tr>` Attributes](#tr-attributes)
- [HTML Lists](#html-lists)
  - [Unordered List](#unordered-list)
  - [Ordered List](#ordered-list)
  - [Description List](#description-list)
- [HTML Forms](#html-forms)
  - [Form Example](#form-example)
  - [Label tags](#label-tags)
  - [Input tags](#input-tags)
  - [Radio Buttons](#radio-buttons)
  - [Checkboxes](#checkboxes)
  - [Textarea tags](#textarea-tags)
  - [Select tags](#select-tags)
  - [Fieldset tags](#fieldset-tags)
  - [Datalist tags](#datalist-tags)

</details>

---

## Introduction

<div class="cheat__container-content">

### What is HTML?

HTML is the standard markup language for creating Web pages. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.

</div>

<div class="cheat__container-content">

### Why HTML?

HTML is a markup language that is used to create web pages. It is the standard markup language for creating web pages and web applications. HTML is the foundation of the World Wide Web. It is a language that is used to create the structure of a web page. It is the standard markup language for creating web pages and web applications. HTML is the foundation of the World Wide Web. It is a language that is used to create the structure of a web page.

</div>

---

## Getting started

<div class="cheat__container-content">

### Hello World

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

Explanation:

- `<!DOCTYPE html>`: This is the document type declaration. It tells the browser that this is an HTML document.
- `<html>`: This is the root element of an HTML page.
- `<head>`: This element contains meta information about the document.
- `<meta charset="utf-8">`: This element declares the character encoding for the HTML document.
- `<meta name="viewport" content="width=device-width">`: This element specifies the viewport size and scaling.
- `<title>`: This element specifies a title for the document.
- `<body>`: This element contains the visible page content.
- `<h1>`: This element defines a large heading.

</div>

<div class="cheat__container-content">

### Comment in HTML

```html
<!-- This is a comment -->

<!--
  This is a comment
  that spans multiple lines
-->
```

Explanation:

- `<!-- This is a comment -->`: This is a single line comment.
- `<!-- This is a comment that spans multiple lines -->`: This is a multi-line comment.

</div>

<div class="cheat__container-content">

### Headings

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

Explanation:

- `<h1>`: This element defines the most important heading.
- `<h2>`: This element defines a subtopic in a document.
- `<h3>`: This element defines a subtopic in a document.
- `<h4>`: This element defines a subtopic in a document.
- `<h5>`: This element defines a subtopic in a document.
- `<h6>`: This element defines the least important heading.

</div>

<div class="cheat__container-content">

### Paragraph

```html
<p>This is a paragraph.</p>
```

Explanation:

- `<p>`: This element defines a paragraph.

</div>

<div class="cheat__container-content">

### Text Formatting Tags

```html
<p>This is <b>bold</b> text.</p>
<p>This is <strong>strong</strong> text.</p>
<p>This is <i>italic</i> text.</p>
<p>This is <em>emphasized</em> text.</p>
<p>This is <u>underlined</u> text.</p>
<p>This is <pre>preformatted</pre> text.</p>
<p>This is <code>code</code> text.</p>
<p>This is <del>deleted</del> text.</p>
<p>This is <mark>marked</mark> text.</p>
<p>This is <ins>inserted</ins> text.</p>
<p>This is <sub>subscript</sub> text.</p>
<p>This is <sup>superscript</sup> text.</p>
<p> this is <kbd>keyboard</kbd> text.</p>
<p>This is <samp>sample</samp> text.</p>
<p>This is <var>variable</var> text.</p>
<p>This is <q>quoted</q> text.</p>
<p> this is <blockquote>block quote</blockquote> text.</p>
<p>This is <cite>citation</cite> text.</p>
<p>This is <abbr>abbreviation</abbr> text.</p>
<p>This is <dfn>definition</dfn> text.</p>
<p>This is <time>time</time> text.</p>
```

Explanation:

- `<b>`: This element defines bold text.
- `<strong>`: This element defines important text.
- `<i>`: This element defines italic text.
- `<em>`: This element defines emphasized text.
- `<u>`: This element defines underlined text.
- `<pre>`: This element defines preformatted text.
- `<code>`: This element defines a piece of computer code.
- `<del>`: This element defines deleted text.
- `<mark>`: This element defines marked/highlighted text.
- `<ins>`: This element defines inserted text.
- `<sub>`: This element defines subscripted text.
- `<sup>`: This element defines superscripted text.
- `<kbd>`: This element defines keyboard input.
- `<samp>`: This element defines sample output from a computer program.
- `<var>`: This element defines a variable.
- `<q>`: This element defines a short quotation.
- `<blockquote>`: This element defines a section that is quoted from another source.
- `<cite>`: This element defines the title of a work.
- `<abbr>`: This element defines an abbreviation or an acronym.
- `<dfn>`: This element defines a definition term.
- `<time>`: This element defines a date/time.

</div>

<div class="cheat__container-content">

### HTML links

```html
<a href="https://www.google.com">Google</a>
```

Explanation:

- `<a>`: This element defines a hyperlink, which is used to link from one page to another.

</div>

<div class="cheat__container-content">

### HTML Images

```html
<img src="example.jpg" alt="Example" loading="lazy" width="400" height="400" />
```

Explanation:

- `<img>`: This element defines an image in an HTML page.
- `src`: This attribute specifies the URL (web address) of the image.
- `alt`: This attribute specifies an alternate text for an image, if the image for some reason cannot be displayed.
- `loading`: This attribute specifies how the browser should load the image.
- `width`: This attribute specifies the width of the image.
- `height`: This attribute specifies the height of the image.

</div>

<div class="cheat__container-content">

### Section Divisions

```html
<div>This is a division.</div>
<span>This is a span.</span>
<p>This is a paragraph.</p>
<br />
<hr />
```

Explanation:

- `<div>`: This element defines a division or a section in an HTML document.
- `<span>`: This element is used to group inline-elements in a document.
- `<p>`: This element defines a paragraph.
- `<br>`: This element defines a single line break.
- `<hr>`: This element defines a thematic change in the content.

</div>

<div class="cheat__container-content">

### CSS in HTML

```html
<-! Inline CSS -->
<p style="color: red;">This is a paragraph.</p>

<-! Internal CSS -->
<style>
  p {
    color: red;
  }
</style>

<-! External CSS -->

<!-- index.html -->
<link rel="stylesheet" href="style.css" />
```

Explanation:

- `style`: This attribute specifies an inline style for an element.
- `<style>`: This element is used to define style information for an HTML document.
- `<link>`: This element defines the relationship between a document and an external resource.
- `rel`: This attribute specifies the relationship between the current document and the linked document.
- `href`: This attribute specifies the location (URL) of the linked document.

</div>

<div class="cheat__container-content">

### JavaScript in HTML

```html
<!-- Inline JavaScript -->
<p onclick="alert('Hello World!')">This is a paragraph.</p>

<!-- Internal JavaScript -->
<script>
  alert('Hello World!');
</script>

<!-- External JavaScript -->
<script src="script.js" defer></script>
```

Explanation:

- `onclick`: This attribute specifies a script to be run when a mouse click occurs over an element.
- `<script>`: This element is used to define a client-side script (JavaScript).
- `src`: This attribute specifies the URL of an external script file.
- `defer`: This attribute specifies that the script is executed when the page has finished parsing.

</div>

<div class="cheat__container-content">

### Inline Frame

```html
<iframe
  title="Google"
  src="https://www.google.com"
  width="400"
  height="400"
  scrolling="no"
  frameborder="0"
  allowfullscreen
></iframe>
```

Explanation:

- `<iframe>`: This element defines an inline frame.
- `title`: This attribute specifies a title for an iframe.
- `src`: This attribute specifies the URL of the page to embed.
- `width`: This attribute specifies the width of an iframe.
- `height`: This attribute specifies the height of an iframe.
- `scrolling`: This attribute specifies whether or not to display scrollbars in an iframe.
- `frameborder`: This attribute specifies whether or not to display a border for an iframe.
- `allowfullscreen`: This attribute specifies whether or not to allow an iframe to go fullscreen.

</div>

---

## HTML5

<div class="cheat__container-content">

### HTML5 Tags

| Tag            | Description                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------- |
| `<article>`    | Defines an article                                                                                  |
| `<aside>`      | Defines content aside from the page content                                                         |
| `<audio>`      | Defines sound content                                                                               |
| `<bdi>`        | Isolates a part of text that might be formatted in a different direction from other text outside it |
| `<canvas>`     | Used to draw graphics, on the fly, via scripting (usually JavaScript)                               |
| `<data>`       | Links the given content with a machine-readable translation                                         |
| `<datalist>`   | Specifies a list of pre-defined options for input controls                                          |
| `<details>`    | Defines additional details that the user can view or hide                                           |
| `<dialog>`     | Defines a dialog box or window                                                                      |
| `<embed>`      | Defines a container for an external (non-HTML) application                                          |
| `<figcaption>` | Defines a caption for a `<figure>` element                                                          |
| `<figure>`     | Specifies self-contained content                                                                    |
| `<footer>`     | Defines a footer for a document or section                                                          |
| `<header>`     | Defines a header for a document or section                                                          |
| `<main>`       | Specifies the main content of a document                                                            |
| `<mark>`       | Defines marked/highlighted text                                                                     |
| `<meter>`      | Defines a scalar measurement within a known range                                                   |
| `<nav>`        | Defines navigation links                                                                            |
| `<output>`     | Defines the result of a calculation                                                                 |
| `<picture>`    | Defines a container for multiple image resources                                                    |
| `<progress>`   | Represents the progress of a task                                                                   |
| `<rp>`         | Defines what to show in browsers that do not support ruby annotations                               |
| `<rt>`         | Defines an explanation/pronunciation of characters (for East Asian typography)                      |
| `<ruby>`       | Defines a ruby annotation (for East Asian typography)                                               |
| `<time>`       | Defines a date/time                                                                                 |
| `<track>`      | Defines text tracks for media elements (such as `<video>` and `<audio>`)                            |
| `<video>`      | Defines a video or movie                                                                            |
| `<wbr>`        | Defines a possible line-break                                                                       |
| `<svg>`        | Defines a container for SVG graphics                                                                |
| `<math>`       | Defines a container for MathML expressions                                                          |

</div>

<div class="cheat__container-content">

### HTML5 Picture

```html
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 600px)" />
  <source srcset="img_flowers.jpg" media="(max-width: 1500px)" />
  <source srcset="img_largeflower.jpg" media="(min-width: 1500px)" />
  <img src="img_flowers.jpg" alt="Flowers" style="width:auto;" />
</picture>
```

Explanation:

- `<picture>`: This element defines a container for multiple image resources.
- `<source>`: This element specifies multiple media resources for media elements (`<video>` and `<audio>`).
- `srcset`: This attribute specifies the URL of the image to use in different situations.
- `media`: This attribute specifies a media query that must be true for the media resource to be used.
- `<img>`: This element defines an image in an HTML page.
- `alt`: This attribute specifies an alternate text for an image, if the image cannot be displayed.
- `style`: This attribute specifies an inline style for an element.

</div>

<div class="cheat__container-content">

### HTML5 Audio

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<audio controls>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
  <track kind="captions" src="horse.vtt" srclang="en" label="English" />
  <track kind="captions" src="horse-ar.vtt" srclang="ar" label="Arabic" />
  Your browser does not support the audio element.
</audio>
```

Explanation:

- `<audio>`: This element defines sound content.
- `controls`: This attribute specifies that audio controls should be displayed (such as a play/pause button etc).
- `<source>`: This element specifies multiple media resources for media elements (`<video>` and `<audio>`).
- `src`: This attribute specifies the URL of the media file.
- `type`: This attribute specifies the media type of the media file.
- `<track>`: This element defines text tracks for media elements (`<video>` and `<audio>`).
- `kind`: This attribute specifies the kind of text track.
- `src`: This attribute specifies the URL of the track file.
- `srclang`: This attribute specifies the language of the track text data.
- `label`: This attribute specifies a user-readable title of the text track.

</div>

<div class="cheat__container-content">

### HTML5 Video

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <track kind="captions" src="subtitles_en.vtt" srclang="en" label="English" />
  <track kind="captions" src="subtitles_ar.vtt" srclang="ar" label="Arabic" />
  Your browser does not support the video tag.
</video>
```

Explanation:

- `<video>`: This element defines a video or movie.
- `width`: This attribute specifies the width of the video player.
- `height`: This attribute specifies the height of the video player.
- `controls`: This attribute specifies that video controls should be displayed (such as a play/pause button etc).
- `<source>`: This element specifies multiple media resources for media elements (`<video>` and `<audio>`).
- `src`: This attribute specifies the URL of the media file.
- `type`: This attribute specifies the media type of the media file.
- `<track>`: This element defines text tracks for media elements (`<video>` and `<audio>`).
- `kind`: This attribute specifies the kind of text track.
- `src`: This attribute specifies the URL of the track file.
- `srclang`: This attribute specifies the language of the track text data.
- `label`: This attribute specifies a user-readable title of the text track.

</div>

<div class="cheat__container-content">

### HTML5 Canvas

```html
<canvas
  id="myCanvas"
  width="200"
  height="100"
  style="border:1px solid #000000;"
></canvas>
```

Explanation:

- `<canvas>`: This element defines a canvas, used to draw graphics, on the fly, via scripting (usually JavaScript).
- `id`: This attribute specifies a unique id for an element.
- `width`: This attribute specifies the width of a canvas.
- `height`: This attribute specifies the height of a canvas.
- `style`: This attribute specifies an inline style for an element.

</div>

---

## HTML Tables

<div class="cheat__container-content">

### Table Example

```html
<table>
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Sum</td>
      <td>224</td>
    </tr>
  </tfoot>
</table>
```

Explanation:

- `<table>`: This element defines a table.
- `<thead>`: This element groups the header content in a table.
- `<tr>`: This element defines a row in a table.
- `<th>`: This element defines a header cell in a table.
- `<tbody>`: This element groups the body content in a table.
- `<td>`: This element defines a cell in a table.
- `<tfoot>`: This element groups the footer content in a table.
- `colspan`: This attribute specifies the number of columns a cell should span.

</div>

<div class="cheat__container-content">

### Table Tags

| Tag          | Description                                                               |
| ------------ | ------------------------------------------------------------------------- |
| `<table>`    | Defines a table                                                           |
| `<th>`       | Defines a header cell in a table                                          |
| `<tr>`       | Defines a row in a table                                                  |
| `<td>`       | Defines a cell in a table                                                 |
| `<caption>`  | Defines a table caption                                                   |
| `<colgroup>` | Groups a set of columns in a table for formatting                         |
| `<col>`      | Specifies column properties for each column within a `<colgroup>` element |
| `<thead>`    | Groups the header content in a table                                      |
| `<tbody>`    | Groups the body content in a table                                        |
| `<tfoot>`    | Groups the footer content in a table                                      |

</div>

<div class="cheat__container-content">

### Table Attributes

#### `<table>` Attributes

| Attribute     | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `border`      | Specifies the width of the border around the table           |
| `cellpadding` | Specifies the space between the cell content and its borders |
| `cellspacing` | Specifies the space between cells in a table                 |

#### `<td>` Attributes

| Attribute | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| `colspan` | Specifies the number of columns a cell should span                      |
| `rowspan` | Specifies the number of rows a cell should span                         |
| `headers` | Specifies one or more headers cells a cell is related to                |
| `scope`   | Specifies whether a header cell is a header for a column, row, or group |

#### `<th>` Attributes

| Attribute | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| `colspan` | Specifies the number of columns a cell should span                      |
| `rowspan` | Specifies the number of rows a cell should span                         |
| `headers` | Specifies one or more headers cells a cell is related to                |
| `scope`   | Specifies whether a header cell is a header for a column, row, or group |

#### `<tr>` Attributes

| Attribute | Description                                       |
| --------- | ------------------------------------------------- |
| `align`   | Specifies the horizontal alignment of a table row |
| `bgcolor` | Specifies the background color of a table row     |
| `valign`  | Specifies the vertical alignment of a table row   |
| `height`  | Specifies the height of a table row               |
| `width`   | Specifies the width of a table row                |

</div>

---

## HTML Lists

<div class="cheat__container-content">

### Unordered List

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>
    Milk
    <ul>
      <li>Skimmed</li>
      <li>Semi-skimmed</li>
      <li>Whole</li>
    </ul>
  </li>
</ul>
```

Explanation:

- `<ul>`: This element defines an unordered list.
- `<li>`: This element defines a list item.

</div>

<div class="cheat__container-content">

### Ordered List

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>
    Milk
    <ol>
      <li>Skimmed</li>
      <li>Semi-skimmed</li>
      <li>Whole</li>
    </ol>
  </li>
</ol>
```

Explanation:

- `<ol>`: This element defines an ordered list.
- `<li>`: This element defines a list item.

</div>

<div class="cheat__container-content">

### Description List

```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>
    Milk
    <dl>
      <dt>Skimmed</dt>
      <dd>- lowest fat content</dd>
      <dt>Semi-skimmed</dt>
      <dd>- medium fat content</dd>
      <dt>Whole</dt>
      <dd>- highest fat content</dd>
    </dl>
  </dt>
</dl>
```

Explanation:

- `<dl>`: This element defines a description list.
- `<dt>`: This element defines a term/name in a description list.
- `<dd>`: This element defines a description of a term/name in a description list.

</div>

---

## HTML Forms

<div class="cheat__container-content">

### Form Example

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" value="John" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
  <input type="submit" value="Submit" />
</form>

<p>
  If you click the "Submit" button, the form-data will be sent to a page called
  "/action_page.php".
</p>
```

Explanation:

- `<form>`: This element defines an HTML form for user input.
- `<label>`: This element represents a caption for an item in a user interface.
- `<input>`: This element is used to create interactive controls for web-based forms in order to accept data from the user.
- `action`: This attribute specifies where to send the form-data when a form is submitted.
- `for`: This attribute specifies which form element a label is bound to.
- `type`: This attribute specifies the type of `<input>` element to display.
- `id`: This attribute specifies a unique id for an element.
- `name`: This attribute specifies the name of an element.
- `value`: This attribute specifies the value of an element.
- `submit`: This attribute specifies the type of `<input>` element to display.

</div>

<div class="cheat__container-content">

### Label tags

```html
<!-- Nested label -->
<label>
  <input type="checkbox" name="vehicle1" value="Bike" /> I have a bike
</label>

<!-- 'for' labels -->
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname" />
```

Explanation:

- `<label>`: This element represents a caption for an item in a user interface.
- `for`: This attribute specifies which form element a label is bound to.

</div>

<div class="cheat__container-content">

### Input tags

```html
<!-- Text input -->
<input type="text" name="username" />

<!-- Password input -->
<input type="password" name="password" />

<!-- email input -->
<input type="email" name="email" />

<!-- Number input -->
<input type="number" name="quantity" min="1" max="5" />

<!-- Date input -->
<input type="date" name="bday" />

<!-- Submit button -->
<input type="submit" value="Submit" />

<!-- Reset button -->
<input type="reset" value="Reset" />

<!-- File upload -->
<input type="file" name="pic" accept="image/*" />

<!-- Hidden input -->
<input type="hidden" name="secret" value="secret" />
```

Explanation:

- `<input>`: This element is used to create interactive controls for web-based forms in order to accept data from the user.
- `type`: This attribute specifies the type of `<input>` element to display.
- `name`: This attribute specifies the name of an element.
- `value`: This attribute specifies the value of an element.
- `min`: This attribute specifies the minimum value.
- `max`: This attribute specifies the maximum value.
- `accept`: This attribute specifies the types of files that the server accepts.
- `submit`: This attribute specifies the type of `<input>` element to display.
- `reset`: This attribute specifies the type of `<input>` element to display.
- `file`: This attribute specifies the type of `<input>` element to display.
- `hidden`: This attribute specifies the type of `<input>` element to display.

</div>

<div class="cheat__container-content">

### Radio Buttons

```html
<input type="radio" name="trip" value="one-way" /> One-way
<input type="radio" name="trip" value="round-trip" /> Round-trip
```

Explanation:

- `<input>`: This element is used to create interactive controls for web-based forms in order to accept data from the user.
- `type`: This attribute specifies the type of `<input>` element to display.
- `name`: This attribute specifies the name of an element.
- `value`: This attribute specifies the value of an element.

</div>

<div class="cheat__container-content">

### Checkboxes

```html
<input type="checkbox" name="vehicle1" value="Bike" /> I have a bike
<input type="checkbox" name="vehicle2" value="Car" /> I have a car
```

Explanation:

- `<input>`: This element is used to create interactive controls for web-based forms in order to accept data from the user.
- `type`: This attribute specifies the type of `<input>` element to display.
- `name`: This attribute specifies the name of an element.
- `value`: This attribute specifies the value of an element.

</div>

<div class="cheat__container-content">

### Textarea tags

```html
<textarea name="message" rows="10" cols="30">
  The cat was playing in the garden.
</textarea>
```

Explanation:

- `<textarea>`: This element represents a multi-line plain-text editing control.
- `name`: This attribute specifies the name of an element.
- `rows`: This attribute specifies the visible number of lines in a text area.
- `cols`: This attribute specifies the visible width of a text area.

</div>

<div class="cheat__container-content">

### Select tags

```html
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
```

Explanation:

- `<select>`: This element represents a control that provides a menu of options.
- `<option>`: This element represents an option in a select element.
- `name`: This attribute specifies the name of an element.
- `value`: This attribute specifies the value of an element.

</div>

<div class="cheat__container-content">

### Fieldset tags

```html
<fieldset>
  <legend>Personalia:</legend>
  Name: <input type="text" /><br />
  E-mail: <input type="text" /><br />
  Date of birth: <input type="text" />
</fieldset>
```

Explanation:

- `<fieldset>`: This element represents a set of form fields.
- `<legend>`: This element represents a caption for the content of its parent `<fieldset>`.
- `<input>`: This element is used to create interactive controls for web-based forms in order to accept data from the user.

</div>

<div class="cheat__container-content">

### Datalist tags

```html
<input list="cars" name="car" />
<datalist id="cars">
  <option value="Volvo" />
  <option value="Saab" />
  <option value="Mercedes" />
  <option value="Audi" />
</datalist>
```

Explanation:

- `<input>`: This element is used to create interactive controls for web-based forms in order to accept data from the user.
- `<datalist>`: This element represents a set of predefined options for other controls.
- `<option>`: This element represents an option in a select element.
- `list`: This attribute specifies one or more datalist elements that contain pre-defined options for an `<input>` element.
- `name`: This attribute specifies the name of an element.
- `value`: This attribute specifies the value of an element.

</div>
