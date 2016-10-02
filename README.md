## Synopsis

This is the GitHub repository for the 2016 UCL iGEM team's wiki site. 
Guidance for the use of wiki templates is provided here.

## Documentation

Two mediawiki templates are provided, ```{{UCL/TemplateBefore}}``` and 
```{{UCL/TemplateAfter}}```. The main page content is to be sandwiched 
between these, and must follow the following format:

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

## Development Notes

The wiki templates have been developed using SASS for CSS work and Jade 
templates for HTML work (see project files).

## Deployment

All the files have been deployed on iGEM's website 
[iGEM.org](http://2016.igem.org).

Useful information on deployment on iGEM site can be found here: 

* [Wiki Editing](http://2015.igem.org/Wiki_Requirements#editing)
* [Using HTML, CSS and JS](http://2015.igem.org/Wiki_Requirements/Using_HTML,_CSS,_and_Javascript)

## Author

Evgeny Saveliev.
Email: [e.s.saveliev@gmail.com](mailto:e.s.saveliev@gmail.com)
