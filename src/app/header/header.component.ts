import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  constructor() {
    console.log('constructor');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  title = `Tema laborator 1`;

  cerinte = [
    { nrCerinta: '1.' , Cerinta:'Folosirea a minim 2 componente'},
    { nrCerinta: '2.' , Cerinta:'Minim 6 carduri cu titlu, descriere si buton'},
    { nrCerinta: '3.' , Cerinta:'Folosirea directivei *ngFor'},
    { nrCerinta: '4.' , Cerinta:'Folosirea elementelor <h1>, <a>, <img>, etc.'}
  ];

  display: boolean = true;

  changeDisplay(){
    this.display = !this.display;
  }
}