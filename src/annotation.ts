module AtJS {
    export enum SideEnum {
        PRE,
        POST,
        DOC
    }

    export enum ElementTypeEnum {
        MODULE,
        CLASS,
        TYPE,
        FIELD,
        PARAMETER,
        CONSTRUCTOR,
        LOCAL_VARIABLE,
        GLOBAL_VARIABLE
    }


    export class Annotation {
        side:SideEnum = SideEnum.PRE;
        target:ElementTypeEnum[] = [ElementTypeEnum.GLOBAL_VARIABLE];


        constructor(name?:string) {
            AtParser.register(this);
        }
    }

    class AnnotationError implements Error {
        constructor (public message?: string, public name:string = "AnnotationError") {
            AnnotationError.prototype = Error.prototype;
            var e:Error = new Error(message);
            e.name = name;
            return e;
        }
    }

    class AtParser {
        private static atPattern:RegExp = /\/@(.*)\/;/ig; // find for example /@Annotation/ and give Annotation as match
        private static preProcAnnotations:Annotation[];
        private static postProcAnnotations:Annotation[];
        private static docProcAnnotations:Annotation[];

        static preProcessing():void {

        }

        static postProcessing():void {

        }

        static register<T extends Annotation>(annotation:T):void {
            switch (annotation.side) {
                case SideEnum.DOC:
                    AtParser.docProcAnnotations.push(annotation);
                    break;
                case SideEnum.POST:
                    AtParser.postProcAnnotations.push(annotation);
                    break;
                case SideEnum.PRE:
                    AtParser.preProcAnnotations.push(annotation);
                    break;
            }
        }
    }

    AtParser.preProcessing();
    AtParser.postProcessing();
}