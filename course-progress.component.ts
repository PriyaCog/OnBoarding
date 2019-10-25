import { Component, OnInit } from '@angular/core';
import {CourseProgressService} from '../../service/courseProgress.service';
import { ICourseProgressDetails } from '../../model/courseProgressDetails';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProgressSummaryComponent } from '../progress-summary/progress-summary.component';

@Component({
  selector: 'app-course-progress',
  templateUrl: './course-progress.component.html',
  styleUrls: ['./course-progress.component.css']
})

export class CourseProgressComponent implements OnInit {

   private courseProgressDetails:ICourseProgressDetails[];
   bsModalRef: BsModalRef;

   viewProgressSummary() {
        this.bsModalRef = this.modalService.show(ProgressSummaryComponent);
        this.bsModalRef.content.closeBtnName = 'Close';
    }

  constructor( private courseProgressService: CourseProgressService,private modalService: BsModalService) { }

  ngOnInit() {
    this.getCourseProgressDetails();
  }

  private getCourseProgressDetails() {
        this.courseProgressService.getAssociate().subscribe(model => {
            this.courseProgressDetails = model
        });
  };
}
