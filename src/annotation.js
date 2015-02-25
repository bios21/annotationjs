var AtJS;
(function (AtJS) {
    (function (SideEnum) {
        SideEnum[SideEnum["PRE"] = 0] = "PRE";
        SideEnum[SideEnum["POST"] = 1] = "POST";
        SideEnum[SideEnum["DOC"] = 2] = "DOC";
    })(AtJS.SideEnum || (AtJS.SideEnum = {}));
    var SideEnum = AtJS.SideEnum;

    (function (ElementTypeEnum) {
        ElementTypeEnum[ElementTypeEnum["MODULE"] = 0] = "MODULE";
        ElementTypeEnum[ElementTypeEnum["CLASS"] = 1] = "CLASS";
        ElementTypeEnum[ElementTypeEnum["TYPE"] = 2] = "TYPE";
        ElementTypeEnum[ElementTypeEnum["FIELD"] = 3] = "FIELD";
        ElementTypeEnum[ElementTypeEnum["PARAMETER"] = 4] = "PARAMETER";
        ElementTypeEnum[ElementTypeEnum["CONSTRUCTOR"] = 5] = "CONSTRUCTOR";
        ElementTypeEnum[ElementTypeEnum["LOCAL_VARIABLE"] = 6] = "LOCAL_VARIABLE";
        ElementTypeEnum[ElementTypeEnum["GLOBAL_VARIABLE"] = 7] = "GLOBAL_VARIABLE";
    })(AtJS.ElementTypeEnum || (AtJS.ElementTypeEnum = {}));
    var ElementTypeEnum = AtJS.ElementTypeEnum;

    var Annotation = (function () {
        function Annotation(name) {
            this.side = 0 /* PRE */;
            this.target = [7 /* GLOBAL_VARIABLE */];
            AtParser.register(this);
        }
        return Annotation;
    })();
    AtJS.Annotation = Annotation;

    var AnnotationError = (function () {
        function AnnotationError(message, name) {
            if (typeof name === "undefined") { name = "AnnotationError"; }
            this.message = message;
            this.name = name;
            AnnotationError.prototype = Error.prototype;
            var e = new Error(message);
            e.name = name;
            return e;
        }
        return AnnotationError;
    })();

    var AtParser = (function () {
        function AtParser() {
        }
        AtParser.preProcessing = function () {
        };

        AtParser.postProcessing = function () {
        };

        AtParser.register = function (annotation) {
            switch (annotation.side) {
                case 2 /* DOC */:
                    AtParser.docProcAnnotations.push(annotation);
                    break;
                case 1 /* POST */:
                    AtParser.postProcAnnotations.push(annotation);
                    break;
                case 0 /* PRE */:
                    AtParser.preProcAnnotations.push(annotation);
                    break;
            }
        };
        AtParser.atPattern = /\/@(.*)\/;/ig;
        return AtParser;
    })();

    AtParser.preProcessing();
    AtParser.postProcessing();
})(AtJS || (AtJS = {}));
//# sourceMappingURL=annotation.js.map
