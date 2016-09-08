@echo off
call jade landing.jade landing.html
call jade page.jade page.html
call sass --update _shared/scss:_shared/css
call sass --update landing/scss:landing/css
call sass --update page/scss:page/css