import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AppServiceService } from '../../service/app.service.service';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss']
})
export class InputTimeComponent implements OnInit {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal,
     private router: Router, private service: AppServiceService) { }

  ngOnInit() {
  }

  postTimeSheet(input) {
    this.service.createTimeSheet(input).subscribe(res =>
      console.log(res));
      this.router.navigate(['table-list']);
  }

}
