import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InputTimeComponent } from '../modal/input-time/input-time.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal() {
    const modalRef = this.modalService.open(InputTimeComponent, {
      backdrop: 'static',
      size: 'lg'
    });
    }

  }
