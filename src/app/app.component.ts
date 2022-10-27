import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projeto_vinhos_frontend';

  constructor(@Inject(DOCUMENT) document: Document) {}

  changeStyle(color: string, img: string) {
    (document.querySelector('.circle') as HTMLElement).style.backgroundColor =
      color;

    (
      document.querySelector('.corderoconpieldeloborose') as HTMLElement
    ).setAttribute('src', img);
  }
}
