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
        name;
        side:SideEnum = SideEnum.PRE;
        target:ElementTypeEnum[] = [ElementTypeEnum.GLOBAL_VARIABLE];


        constructor() {

        }
    }

    class AtParser {
        static atPattern = /\/@(.*)\/;/ig; // find for example /@Annotation/ and give Annotation as match
        static annotations:Annotation[];
        static preProcessing() {

        }

        static postProcessing() {

        }
    }

    AtParser.preProcessing();
    AtParser.postProcessing();
}