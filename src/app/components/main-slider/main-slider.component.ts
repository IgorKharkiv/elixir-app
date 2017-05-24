import { Component, OnInit, trigger, ChangeDetectorRef,  state, style, transition, animate, keyframes  } from '@angular/core';


interface Slide {
  id: number;
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
                // In order to maintain a zIndex of 2 throughout the ENTIRE
                // animation (but not after the animation), we have to define it
                // in both the initial and target styles. Unfortunately, this
                // means that we ALSO have to define target values for the rest
                // of the styles, which we wouldn't normally have to.
                style({
                  left: -100,
                  opacity: 0.0,
                  zIndex: 2
                }),
                animate(
                    "200ms ease-in-out",
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
                    "200ms ease-in-out",
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
                // In order to maintain a zIndex of 2 throughout the ENTIRE
                // animation (but not after the animation), we have to define it
                // in both the initial and target styles. Unfortunately, this
                // means that we ALSO have to define target values for the rest
                // of the styles, which we wouldn't normally have to.
                style({
                  left: 100,
                  opacity: 0.0,
                  zIndex: 2
                }),
                animate(
                    "200ms ease-in-out",
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
                    "200ms ease-in-out",
                    style({
                      left: -100,
                      opacity: 0.0
                    })
                )
              ]
          )
        ]
    )
  ]
})
export class MainSliderComponent implements OnInit {

  public orientation: Orientation;
  public selectedSlide: Slide;

  private changeDetectorRef: ChangeDetectorRef;
  private slides: Slide[];


  // I initialize the component.
  constructor( changeDetectorRef: ChangeDetectorRef ) {

    this.changeDetectorRef = changeDetectorRef;
    this.orientation = "none";

    // Setup the friends collection.
    this.slides = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      }
    ];

    // Randomly(ish) select the initial friend to display.
    this.selectedSlide = this.slides[ Math.floor( Math.random() * this.slides.length ) ];

  }


  // ---
  // PUBLIC METHODS.
  // ---


  // I cycle to the next friend in the collection.
  public showNextFriend() : void {

    // Change the "state" for our animation trigger.
    this.orientation = "next";

    // Force the Template to apply the new animation state before we actually
    // change the rendered element view-model. If we don't force a change-detection,
    // the new [@orientation] state won't be applied prior to the "leave" transition;
    // which means that we won't be leaving from the "expected" state.
    this.changeDetectorRef.detectChanges();

    // Find the currently selected index.
    let index = this.slides.indexOf( this.selectedSlide );

    // Move the rendered element to the next index - this will cause the current item
    // to enter the ( "next" => "void" ) transition and this new item to enter the
    // ( "void" => "next" ) transition.
    this.selectedSlide = this.slides[ index + 1 ]
        ? this.slides[ index + 1 ]
        : this.slides[ 0 ]
    ;

  }


  // I cycle to the previous friend in the collection.
  public showPrevFriend() : void {

    // Change the "state" for our animation trigger.
    this.orientation = "prev";

    // Force the Template to apply the new animation state before we actually
    // change the rendered element view-model. If we don't force a change-detection,
    // the new [@orientation] state won't be applied prior to the "leave" transition;
    // which means that we won't be leaving from the "expected" state.
    this.changeDetectorRef.detectChanges();

    // Find the currently selected index.
    let index = this.slides.indexOf( this.selectedSlide );

    // Move the rendered element to the previous index - this will cause the current
    // item to enter the ( "prev" => "void" ) transition and this new item to enter
    // the ( "void" => "prev" ) transition.
    this.selectedSlide = this.slides[ index - 1 ]
        ? this.slides[ index - 1 ]
        : this.slides[ this.slides.length - 1 ]
    ;

  }

  ngOnInit() {
  }
}
