## Synopsis

This is the GitHub repository for the 2016 UCL iGEM team's wiki site.
Guidance for the use of wiki templates is provided here.

## Documentation

### Standard format

Two MediaWiki templates are provided, ```{{UCL/TemplateBefore}}``` and 
```{{UCL/TemplateAfter}}```.  The user's page content is to be
sandwiched  between these, and must follow the following format:

```{HTML}

{{UCL/TemplateBefore}}
<html>
<body>
<main class="cd-main-content">
    <div id="main-content-container">
        <!-- ACTUAL CONTENT GOES HERE -->
        <h1>Sample title</h1>
        <p>Sample paragraph</p>
    </div>
</main>
</body>
</html>
{{UCL/TemplateAfter}}

```

The ```main``` and ```div``` structure above (```cd-main-content``` and 
```main-content-container``` classes) should not be modified in order
for the templates to work as intended.  The only situation where edits
can be made to this structure is setting the background colour behind
the navigation menu (this colour is briefly visible when the navigation
menu shrinks).  This is done by adding one of the following three
classes to the ```main``` tag:

* ```ess-menu-bgd-prettify-blue```
* ```ess-menu-bgd-prettify-white```
* ```ess-menu-bgd-prettify-light-gray```

In some cases (see examples below), additional content must to be
placed outside the above structure, in order to achieve certain 
functionality.

### Examples

Below is a list of example pages that show how to achieve certain
page designs and functionality using the templates:

* [Example 1](http://2016.igem.org/Team:UCL/Dev/ExamplePage1) - very
basic template structure.
* [Example 2](http://2016.igem.org/Team:UCL/Dev/ExamplePage2) - setting 
up the vertical (auto) scroll structure on a page.
* [Example 3](http://2016.igem.org/Team:UCL/Dev/ExamplePage3) - setting
up the carousel.
* [Example 4](http://2016.igem.org/Team:UCL/Dev/ExamplePage4) - using
content templates, part 1.
* [Example 5](http://2016.igem.org/Team:UCL/Dev/ExamplePage5) - using
content templates, part 2.

The wiki source code for the above pages can be viewed by selecting the 
edit option on the iGEM menu on any of the pages.

## Development Notes

The wiki templates have been developed using SASS for CSS work and Jade 
templates for HTML work (see project files).

## Advice for template users.

A good code editor (IDE) is essential for writing code easily and 
efficiently.  I would recommend using IntelliJ Idea Ultimate (free for 
students, find it here:
[JetBrains Student](https://www.jetbrains.com/student/))
or perhaps Geany
([Geany](https://www.geany.org/Download/Releases#windowsBinaries)).

I would suggest using Jade templates when creating content pages, as
this makes the HTML code significantly simpler, for example have a look
at this comparison:

#### HTML

```{HTML}

{{UCL/TemplateBefore}}

<html>
<body>
<main class="cd-main-content">
<div id="main-content-container"><!-- The theme starts below this point.-->
<div id="ess-template-page">
<div class="container"></div>
<div class="ess-template-general-section">
<div class="container"></div>
<div class="row">
<div class="col-md-6 col-md-offset-3 text-center ess-template-general animate-box"><h2>General
centered</h2>
<p>Lorem ipsum dolor sit amet, in cum omnis movet libris. Has an nisl theophrastus. Clita
lucilius contentiones ne sit, mentitum nominati dissentiet cu per. Mea errem blandit
dissentiunt ex, vim legere appareat ad, iudico blandit vel in.Ut usu debet possit facete, ne
minim meliore sadipscing eum. Detraxit deseruisse mea et, ne mel dicunt omnium scriptorem.
Mutat adhuc dicit et pro, ne sea option elaboraret. Eu enim modus copiosae mei, ad dicta
maiorum invidunt sit, ne nulla propriae sit. Sit adolescens concludaturque ex, ei harum
dolores reprimique nam. Ex sumo justo putent his, ei legere adipisci philosophia vel.Per id
esse dissentiunt. Postulant imperdiet pri ei, his audiam equidem abhorreant no. An duo choro
clita apeirian, ius inani graece no. Eam ei meis fierent explicari. Nec augue cetero
expetenda ne.</p></div>
</div>
<div class="row">
<div class="col-md-6 col-md-offset-3 ess-template-general animate-box"><h2>General non-centered</h2>
<p>Lorem ipsum dolor sit amet, in cum omnis movet libris. Has an nisl theophrastus. Clita
lucilius contentiones ne sit, mentitum nominati dissentiet cu per. Mea errem blandit
dissentiunt ex, vim legere appareat ad, iudico blandit vel in.Ut usu debet possit facete, ne
minim meliore sadipscing eum. Detraxit deseruisse mea et, ne mel dicunt omnium scriptorem.
Mutat adhuc dicit et pro, ne sea option elaboraret. Eu enim modus copiosae mei, ad dicta
maiorum invidunt sit, ne nulla propriae sit. Sit adolescens concludaturque ex, ei harum
dolores reprimique nam. Ex sumo justo putent his, ei legere adipisci philosophia vel.Per id
esse dissentiunt. Postulant imperdiet pri ei, his audiam equidem abhorreant no. An duo choro
clita apeirian, ius inani graece no. Eam ei meis fierent explicari. Nec augue cetero
expetenda ne.</p></div>
</div>
<div class="row">
<div class="col-md-10 col-md-offset-1 ess-template-general animate-box"><h2>Different padding</h2>
<p>Lorem ipsum dolor sit amet, in cum omnis movet libris. Has an nisl theophrastus. Clita
lucilius contentiones ne sit, mentitum nominati dissentiet cu per. Mea errem blandit
dissentiunt ex, vim legere appareat ad, iudico blandit vel in.Ut usu debet possit facete, ne
minim meliore sadipscing eum. Detraxit deseruisse mea et, ne mel dicunt omnium scriptorem.
Mutat adhuc dicit et pro, ne sea option elaboraret. Eu enim modus copiosae mei, ad dicta
maiorum invidunt sit, ne nulla propriae sit. Sit adolescens concludaturque ex, ei harum
dolores reprimique nam. Ex sumo justo putent his, ei legere adipisci philosophia vel.Per id
esse dissentiunt. Postulant imperdiet pri ei, his audiam equidem abhorreant no. An duo choro
clita apeirian, ius inani graece no. Eam ei meis fierent explicari. Nec augue cetero
expetenda ne.</p></div>
</div>
<div class="row">
<div class="col-md-6 col-md-offset-3 ess-template-general"><h2>No animation</h2>
<p>Lorem ipsum dolor sit amet, in cum omnis movet libris. Has an nisl theophrastus. Clita
lucilius contentiones ne sit, mentitum nominati dissentiet cu per. Mea errem blandit
dissentiunt ex, vim legere appareat ad, iudico blandit vel in.Ut usu debet possit facete, ne
minim meliore sadipscing eum. Detraxit deseruisse mea et, ne mel dicunt omnium scriptorem.
Mutat adhuc dicit et pro, ne sea option elaboraret. Eu enim modus copiosae mei, ad dicta
maiorum invidunt sit, ne nulla propriae sit. Sit adolescens concludaturque ex, ei harum
dolores reprimique nam. Ex sumo justo putent his, ei legere adipisci philosophia vel.Per id
esse dissentiunt. Postulant imperdiet pri ei, his audiam equidem abhorreant no. An duo choro
clita apeirian, ius inani graece no. Eam ei meis fierent explicari. Nec augue cetero
expetenda ne.</p></div>
</div>
<div class="row">
<div class="col-md-6 col-md-offset-3 ess-template-general animate-box"><h2>Lists, links</h2>
<ul>
<li>Item 1</li>
<li>Item 2</li>
<ul>
    <li>Item 2.1</li>
    <li>Item 2.2</li>
</ul>
<li>Item 3</li>
</ul>
<p></p><a href="https://www.google.com/">Google</a>
<p></p><a href="http://www.lingscars.com/">Ling's Cars (undoubtedly the best website in the
world)</a></div>
</div>
</div>
<div class="ess-template-general-section ess-template-light-grey-section">
<div class="container"></div>
<div class="row">
<div class="col-md-6 col-md-offset-3 text-center ess-template-general animate-box"><h2>A new
section, grey background</h2>
<p>Lorem ipsum dolor sit amet, in cum omnis movet libris. Has an nisl theophrastus. Clita
lucilius contentiones ne sit, mentitum nominati dissentiet cu per. Mea errem blandit
dissentiunt ex, vim legere appareat ad, iudico blandit vel in.Ut usu debet possit facete, ne
minim meliore sadipscing eum. Detraxit deseruisse mea et, ne mel dicunt omnium scriptorem.
Mutat adhuc dicit et pro, ne sea option elaboraret. Eu enim modus copiosae mei, ad dicta
maiorum invidunt sit, ne nulla propriae sit. Sit adolescens concludaturque ex, ei harum
dolores reprimique nam. Ex sumo justo putent his, ei legere adipisci philosophia vel.Per id
esse dissentiunt. Postulant imperdiet pri ei, his audiam equidem abhorreant no. An duo choro
clita apeirian, ius inani graece no. Eam ei meis fierent explicari. Nec augue cetero
expetenda ne.</p></div>
</div>
</div>

{{UCL/TemplateAfter}}

```

#### Jade

```{Jade}

{{UCL/TemplateBefore}}

html
    body
        block content
            block actual-content
                main.cd-main-content
                    #main-content-container
                        // The theme starts below this point.
                        #ess-template-page
                            .container
                            .ess-template-general-section
                                .container
                                .row
                                    .col-md-6.col-md-offset-3.text-center.ess-template-general.animate-box
                                        h2 General centered
                                        p
                                            | Lorem ipsum dolor sit amet, in cum omnis movet libris. Has an nisl theophrastus. Clita lucilius contentiones ne sit, mentitum nominati dissentiet cu per. Mea errem blandit dissentiunt ex, vim legere appareat ad, iudico blandit vel in.Ut usu debet possit facete, ne minim meliore sadipscing eum. Detraxit deseruisse mea et, ne mel dicunt omnium scriptorem. Mutat adhuc dicit et pro, ne sea option elaboraret. Eu enim modus copiosae mei, ad dicta maiorum invidunt sit, ne nulla propriae sit. Sit adolescens concludaturque ex, ei harum dolores reprimique nam. Ex sumo justo putent his, ei legere adipisci philosophia vel.Per id esse dissentiunt. Postulant imperdiet pri ei, his audiam equidem abhorreant no. An duo choro clita apeirian, ius inani graece no. Eam ei meis fierent explicari. Nec augue cetero expetenda ne.
                                .row
                                    .col-md-6.col-md-offset-3.ess-template-general.animate-box
                                        h2 General non-centered
                                        p
                                            | Lorem ipsum dolor sit amet, in cum omnis movet libris. Has an nisl theophrastus. Clita lucilius contentiones ne sit, mentitum nominati dissentiet cu per. Mea errem blandit dissentiunt ex, vim legere appareat ad, iudico blandit vel in.Ut usu debet possit facete, ne minim meliore sadipscing eum. Detraxit deseruisse mea et, ne mel dicunt omnium scriptorem. Mutat adhuc dicit et pro, ne sea option elaboraret. Eu enim modus copiosae mei, ad dicta maiorum invidunt sit, ne nulla propriae sit. Sit adolescens concludaturque ex, ei harum dolores reprimique nam. Ex sumo justo putent his, ei legere adipisci philosophia vel.Per id esse dissentiunt. Postulant imperdiet pri ei, his audiam equidem abhorreant no. An duo choro clita apeirian, ius inani graece no. Eam ei meis fierent explicari. Nec augue cetero expetenda ne.
                                .row
                                    .col-md-10.col-md-offset-1.ess-template-general.animate-box
                                        h2 Different padding
                                        p
                                            | Lorem ipsum dolor sit amet, in cum omnis movet libris. Has an nisl theophrastus. Clita lucilius contentiones ne sit, mentitum nominati dissentiet cu per. Mea errem blandit dissentiunt ex, vim legere appareat ad, iudico blandit vel in.Ut usu debet possit facete, ne minim meliore sadipscing eum. Detraxit deseruisse mea et, ne mel dicunt omnium scriptorem. Mutat adhuc dicit et pro, ne sea option elaboraret. Eu enim modus copiosae mei, ad dicta maiorum invidunt sit, ne nulla propriae sit. Sit adolescens concludaturque ex, ei harum dolores reprimique nam. Ex sumo justo putent his, ei legere adipisci philosophia vel.Per id esse dissentiunt. Postulant imperdiet pri ei, his audiam equidem abhorreant no. An duo choro clita apeirian, ius inani graece no. Eam ei meis fierent explicari. Nec augue cetero expetenda ne.
                                .row
                                    .col-md-6.col-md-offset-3.ess-template-general
                                        h2 No animation
                                        p
                                            | Lorem ipsum dolor sit amet, in cum omnis movet libris. Has an nisl theophrastus. Clita lucilius contentiones ne sit, mentitum nominati dissentiet cu per. Mea errem blandit dissentiunt ex, vim legere appareat ad, iudico blandit vel in.Ut usu debet possit facete, ne minim meliore sadipscing eum. Detraxit deseruisse mea et, ne mel dicunt omnium scriptorem. Mutat adhuc dicit et pro, ne sea option elaboraret. Eu enim modus copiosae mei, ad dicta maiorum invidunt sit, ne nulla propriae sit. Sit adolescens concludaturque ex, ei harum dolores reprimique nam. Ex sumo justo putent his, ei legere adipisci philosophia vel.Per id esse dissentiunt. Postulant imperdiet pri ei, his audiam equidem abhorreant no. An duo choro clita apeirian, ius inani graece no. Eam ei meis fierent explicari. Nec augue cetero expetenda ne.
                                .row
                                    .col-md-6.col-md-offset-3.ess-template-general.animate-box
                                        h2 Lists, links
                                        ul
                                            li Item 1
                                            li Item 2
                                            ul
                                                li Item 2.1
                                                li Item 2.2
                                            li Item 3
                                        p
                                        a(href='https://www.google.com/') Google
                                        p
                                        a(href='http://www.lingscars.com/') Ling's Cars (undoubtedly the best website in the world)
                            .ess-template-general-section.ess-template-light-grey-section
                                .container
                                .row
                                    .col-md-6.col-md-offset-3.text-center.ess-template-general.animate-box
                                        h2 A new section, grey background
                                        p
                                            | Lorem ipsum dolor sit amet, in cum omnis movet libris. Has an nisl theophrastus. Clita lucilius contentiones ne sit, mentitum nominati dissentiet cu per. Mea errem blandit dissentiunt ex, vim legere appareat ad, iudico blandit vel in.Ut usu debet possit facete, ne minim meliore sadipscing eum. Detraxit deseruisse mea et, ne mel dicunt omnium scriptorem. Mutat adhuc dicit et pro, ne sea option elaboraret. Eu enim modus copiosae mei, ad dicta maiorum invidunt sit, ne nulla propriae sit. Sit adolescens concludaturque ex, ei harum dolores reprimique nam. Ex sumo justo putent his, ei legere adipisci philosophia vel.Per id esse dissentiunt. Postulant imperdiet pri ei, his audiam equidem abhorreant no. An duo choro clita apeirian, ius inani graece no. Eam ei meis fierent explicari. Nec augue cetero expetenda ne.

{{UCL/TemplateAfter}}

```

Jade language documentation is provided here (but if you understand
HTML, it really is very simple - just make sure to use correct 
indentation):

* [Jade reference](http://jadelang.net/reference/)

Jade command line compiler can be downloaded as explained below (the 
commands themselves are also explained here):

* [Jade compiler download](http://jadelang.net/command-line/)

The above requires you to install **npm** first, which is found here:

* [Download npm as part of Node.js](https://nodejs.org/en/)

## Deployment

All the files have been deployed on iGEM's website 
[iGEM.org](http://2016.igem.org).

Useful information on deployment on iGEM site can be found here: 

* [Wiki Editing](http://2015.igem.org/Wiki_Requirements#editing)
* [Using HTML, CSS and JS](http://2015.igem.org/Wiki_Requirements/Using_HTML,_CSS,_and_Javascript)

The file upload page is found here:

* [Wiki file upload](http://2016.igem.org/Special:Upload)

The final deployed wiki page is found at this address:

* [UCL iGEM Wiki](http://2016.igem.org/Team:UCL)

## Author

Evgeny Saveliev.
Email: [e.s.saveliev@gmail.com](mailto:e.s.saveliev@gmail.com)
