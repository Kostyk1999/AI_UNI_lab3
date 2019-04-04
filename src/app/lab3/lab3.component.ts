import {Component, OnInit} from '@angular/core';
import {candTable, profTable, resTable, Table} from './model';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.scss']
})
export class Lab3Component implements OnInit {
  dtOptions: any = {
    'paging': false,
    'ordering': false,
    'info': false,
    'searching': false
  };

  showResults = false;


  professionTable = profTable;
  candidatesTable = candTable;
  resultTable = resTable;

  constructor() {
  }

  ngOnInit() {
  }

  calculateResultsMaxMin() {
    const A = this.professionTable.matrix;
    const B = this.candidatesTable.matrix;

    if (A[0].length !== B.length) {
      throw Error('When A*B -  A.width must equals B.height');
    }

    const numOfRows = A.length;
    const numOfCols = B[0].length;

    const C: number[][] = [];


    for (let i = 0; i < numOfRows; ++i) {
      C[i] = [];
      for (let j = 0; j < numOfCols; ++j) {
        const mins = [];
        for (let k = 0; k < B.length; ++k) {
          mins.push(Math.min(A[i][k], B[k][j]));
        }
        C[i][j] = Math.max(...mins);
      }
    }

    this.resultTable.matrix = C;

    this.showResults = true;
  }

  calculateResultsMaxProd() {
    const A = this.professionTable.matrix;
    const B = this.candidatesTable.matrix;

    if (A[0].length !== B.length) {
      throw Error('When A*B -  A.width must equals B.height');
    }

    const numOfRows = A.length;
    const numOfCols = B[0].length;

    const C: number[][] = [];


    for (let i = 0; i < numOfRows; ++i) {
      C[i] = [];
      for (let j = 0; j < numOfCols; ++j) {
        const prods = [];
        for (let k = 0; k < B.length; ++k) {
          prods.push(Number((A[i][k] * B[k][j]).toFixed(2)));
        }
        C[i][j] = Math.max(...prods);
      }
    }

    this.resultTable.matrix = C;

    this.showResults = true;
  }

  trackByIdx(index: number, obj: any) {
    return index;
  }
}
