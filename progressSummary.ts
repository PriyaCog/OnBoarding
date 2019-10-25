import {CompletionStatus} from '../enums/completionStatusEnum';

export interface IProgressSummary{
    title:string;
    desciption:string;
    documentType:string;
    courseType:string;
    completionStatus:CompletionStatus;
}