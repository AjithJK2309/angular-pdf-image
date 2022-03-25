// 
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
// import $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'train';
  pdfSource = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
  ngOnInit(): void {
      $('.solid-container').FlipBook({pdf: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'})
    
     
  }
}
// https://ipfs.io/ipfs/QmfZSc2Zmj85SRQxNh2Yaxy8hkRDKQtRJVF4icCaUTZuZP