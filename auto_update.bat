@echo off

call jade page.jade page.html

call jade template/template-before.jade template/template-before.html
call jade template/template-after.jade template/template-after.html
call sass --update _shared/scss:_shared/css

call jade pages/sample/sample-page.jade pages/sample/sample-page.html