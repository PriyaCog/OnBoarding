import { IProgressSummary } from '../model/progressSummary';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProgressSummaryService {
    constructor() {}


 public getAssociate(associateId?: string): Observable<IProgressSummary[]> {
        return of(this.getDetails());
    }

    private getDetails():IProgressSummary[]{
        const first={
            title:"Angular",
            desciption:"Angular learning",
            documentType:"PDF",
            courseType:"Skillsoft",
            completionStatus:1
        };
        const second={
            title:"React",
            desciption:"React learning",
            documentType:"PDF",
            courseType:"Pluralsight",
            completionStatus:2
        };
        const third={
            title:"MVC",
            desciption:"MVC learning",
            documentType:"PDF",
            courseType:"Skillsoft",
            completionStatus:1
        };
    
    return [first, second, third] as IProgressSummary[];
    }
}    
