/// <reference path="../src/annotation.ts" />
class MyAnnotation extends AtJS.Annotation {
    side = AtJS.SideEnum.PRE;
    target = [AtJS.ElementTypeEnum.FUNCTION];
    name = "MyAnnotation";
}

/@MyAnnotation/;
function test() {
    'use strict';
    console.log('hello');
}