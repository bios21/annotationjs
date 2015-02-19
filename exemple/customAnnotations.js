var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../src/annotation.ts" />
var MyAnnotation = (function (_super) {
    __extends(MyAnnotation, _super);
    function MyAnnotation() {
        _super.apply(this, arguments);
    }
    return MyAnnotation;
})(AtJS.Annotation);

/@MyAnnotation/;
function test() {
    'use strict';
    console.log('hello');
}
//# sourceMappingURL=customAnnotations.js.map
