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
        GLOBAL_VARIABLE,
        FUNCTION
    }


    export interface IAnnotation {
        side:SideEnum;
        target:ElementTypeEnum[];
    }

    export class Annotation implements IAnnotation {
        side:SideEnum = SideEnum.PRE;
        target:ElementTypeEnum[] = [ElementTypeEnum.FUNCTION];


        constructor(name?:string) {
            AtParser.register(this);
        }
    }

    class AnnotationError implements Error {
        public name:string = "AnnotationError"
        constructor (public message?: string) {
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
                default:
                    throw new AnnotationError("Wrong annotation side");
            }
        }
    }

    AtParser.preProcessing();
    AtParser.postProcessing();
}