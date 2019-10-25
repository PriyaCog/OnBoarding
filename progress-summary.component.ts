import { Component, OnInit } from '@angular/core';
import { ProgressSummaryService} from '../../service/progressSummary.service';
import { IProgressSummary } from '../../model/progressSummary';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-progress-summary',
  templateUrl: './progress-summary.component.html',
  styleUrls: ['./progress-summary.component.css']
})
export class ProgressSummaryComponent implements OnInit {
  private progressSummary:IProgressSummary[];

  constructor(private progressSummaryService: ProgressSummaryService) { }

  ngOnInit() {
    this.getProgressSummary();
  }

  private getProgressSummary() {
        this.progressSummaryService.getAssociate().subscribe(model => {
            this.progressSummary = model
        });
  };
}
