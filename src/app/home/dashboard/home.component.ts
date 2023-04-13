import { Component, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Chart } from 'chart.js';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent {
  @ViewChild('scrollTo', { static: true }) scrollTo: ElementRef;


  chart: any;

ngOnInit() {
    // console.log(this.array);
    // let d = this.array.filter((a:any)=>{
    //   return a.Schemes.SchemeName == 'SBI Liquid Fund'
    // })
  
//    console.log(d)
    this.chart = new Chart('canvas', {
          type: 'doughnut',
          data: {
            labels: ['Data1','Data2'],
            datasets: [
              { 
                data: [55,45],
                backgroundColor: ['rgba(255, 0, 0, 1)','rgba(255, 0, 0, 0.1)'],
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            tooltips:{
              enabled:false
            }
          }
        });
  }
  constructor(globalservice:GlobalService){
    this.scrollTo = new ElementRef(document.querySelector('#scrollTo'));
    globalservice.setUserTitle.subscribe(re=>console.log(re))
    this.y = 3;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 10,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  x = 5;
  y = 2;
  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    {image: 'https://via.placeholder.com/600/92c952'},
    {image: 'https://via.placeholder.com/600/771796'},
    {image: 'https://via.placeholder.com/600/24f355'},
    {image: 'https://via.placeholder.com/600/d32776'},
    {image: 'https://via.placeholder.com/600/f66b97'},
    {image: 'https://via.placeholder.com/600/92c952'},
    {image: 'https://via.placeholder.com/600/771796'},
    {image: 'https://via.placeholder.com/600/24f355'},
    {image: 'https://via.placeholder.com/600/d32776'},
    {image: 'https://via.placeholder.com/600/f66b97'},
  ];

  scrollToElement(): void {
  this.scrollTo.nativeElement.scrollIntoView({ behavior: 'smooth' });
}

}
