/// <reference path="../src/annotation.ts" />
class MyAnnotation extends AtJS.Annotation {

}

/@MyAnnotation/;
function test() {
    'use strict';
    console.log('hello');
}