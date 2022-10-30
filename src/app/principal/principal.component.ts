import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  ngOnInit(): void {}

  constructor(@Inject(DOCUMENT) document: Document) {}

  changeStyle(color: string, img: string) {
    (document.querySelector('.circle') as HTMLElement).style.backgroundColor =
      color;

    (
      document.querySelector('.corderoconpieldeloborose') as HTMLElement
    ).setAttribute('src', img);
  }
}
