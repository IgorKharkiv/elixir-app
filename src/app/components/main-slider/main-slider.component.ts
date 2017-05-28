import { Component, OnInit, trigger, state, ChangeDetectorRef, style, transition, animate } from '@angular/core';


interface Slide {
  id:number;
  title: string;
  subtitle: string;
  material: string;
  color: string;
  sleeves: string;
  fit: string;
  price: string;
  gsm: string,
  image: string
}

type Orientation = ( "prev" | "next" | "none" );

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css'],
  animations: [
    trigger(
        "slideAnimation",
        [
          transition(
              "void => prev", // ---> Entering --->
              [

                style({
                  left: -100,
                  opacity: 0.0,
                  zIndex: 2
                }),
                animate(
                    "300ms ease-in-out",
                    style({
                      left: 0,
                      opacity: 1.0,
                      zIndex: 2
                    })
                )
              ]
          ),
          transition(
              "prev => void", // ---> Leaving --->
              [
                animate(
                    "300ms ease-in-out",
                    style({
                      left: 100,
                      opacity: 0.0
                    })
                )
              ]
          ),
          transition(
              "void => next", // <--- Entering <---
              [

                style({
                  left: 100,
                  opacity: 0.0,
                  zIndex: 2
                }),
                animate(
                    "300ms ease-in-out",
                    style({
                      left: 0,
                      opacity: 1.0,
                      zIndex: 2
                    })
                )
              ]
          ),
          transition(
              "next => void", // <--- Leaving <---
              [
                animate(
                    "300ms ease-in-out",
                    style({
                      left: -100,
                      opacity: 0.0
                    })
                )
              ]
          )
        ]
    ),
    trigger('description', [
      state('inactive', style({
        transform: 'scale(1) translateY(-100px)',
        opacity: '0'
      })),
      state('active',   style({
        transform: 'scale(1) translateY(0)',
        opacity: '1'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ]),
    trigger('image', [
      state('inactive', style({
        transform: 'scale(1) rotateY(70deg)',
        opacity: '0'
      })),
      state('active',   style({
        transform: 'scale(1.2) rotateY(0)',
        opacity: '1'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class MainSliderComponent implements OnInit {

  public orientation: Orientation;
  public selectedSlide: Slide;
  public even: boolean;
  public state: string;

  private slides: Slide[];
  // I initialize the component.
  constructor( ) {

    this.orientation = "none";

    // Setup the slides collection.
    this.slides = [
                {
                  "id":1,
                  "title":"ELIXIR T-08",
                  "subtitle":"FEELING YOUR IMAGINTION",
                  "material":"100% COMBED COTTON",
                  "color":"COLOR: BLUE",
                  "sleeves":"ROUND NECK & HALF SLEEVES",
                  "fit":"CLASSIC FIT, SLIGHTLY LONG",
                  "gsm":"GSM: 160",
                  "price":"PRICE: $ 29.99",
                  "image":"http://localhost:4200/assets/img/slider/slide-1.png"
                },
                {
                  "id":2,
                  "title":"ELIXIR T-10",
                  "subtitle":"FEELING YOUR IMAGINTION",
                  "material":"100% COMBED COTTON",
                  "color":"COLOR: GRAY BLACK",
                  "sleeves":"ROUND NECK & HALF SLEEVES",
                  "fit":"CLASSIC FIT, SLIGHTLY LONG",
                  "gsm":"GSM: 180",
                  "price":"PRICE: $ 34.99",
                  "image":"http://localhost:4200/assets/img/slider/slide-2.png"
                },
                {
                  "id":3,
                  "title":"ELIXIR T-09",
                  "subtitle":"FEELING YOUR IMAGINTION",
                  "material":"100% COMBED COTTON",
                  "color":"COLOR: BLUE",
                  "sleeves":"ROUND NECK & HALF SLEEVES",
                  "fit":"CLASSIC FIT, SLIGHTLY LONG",
                  "gsm":"GSM: 170",
                  "price":"PRICE: $ 17.99",
                  "image":"http://localhost:4200/assets/img/slider/slide-1.png"
                }
              ];

    this.selectedSlide = this.slides[ 0 ];
    this.even = true;

  }


  // ---
  // PUBLIC METHODS.
  // ---


  // I cycle to the next slide in the collection.
  public showNextSlide() : void {
    this.state = 'inactive';
    // Change the "state" for our animation trigger.
    this.orientation = "next";

    // Find the currently selected index.
    let index = this.slides.indexOf( this.selectedSlide );

    // Move the rendered element to the next index - this will cause the current item
    // to enter the ( "next" => "void" ) transition and this new item to enter the
    // ( "void" => "next" ) transition.

    this.selectedSlide = this.slides[ index + 1 ]
        ? this.slides[ index + 1 ]
        : this.slides[ 0 ]
    ;
    
    this.even = ( this.even ) ? false : true;
    setTimeout(()=> {
      this.state = 'active';
    }, 300)
    
  }


  // I cycle to the previous slide in the collection.
  public showPrevSlide() : void {
    this.state = 'inactive';
    // Change the "state" for our animation trigger.
    this.orientation = "prev";

    // Find the currently selected index.
    let index = this.slides.indexOf( this.selectedSlide );

    // Move the rendered element to the previous index - this will cause the current
    // item to enter the ( "prev" => "void" ) transition and this new item to enter
    // the ( "void" => "prev" ) transition.
    this.selectedSlide = this.slides[ index - 1 ]
        ? this.slides[ index - 1 ]
        : this.slides[ this.slides.length - 1 ]
    ;

    this.even = ( this.even ) ? false : true;

    setTimeout(()=> {
      this.state = 'active';
    }, 300)
  }

  ngOnInit() {
    this.state = 'inactive';
    setTimeout(()=> {
      this.state = 'active';
    }, 300)
  }
}
