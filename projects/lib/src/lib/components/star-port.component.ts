import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, Input, OnDestroy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HtmlHelper } from '../helpers/html.helper';
import { StarPortService } from '../services/star-port.service';
import gsap from 'gsap';

@Component({
  selector: 'ngx-star-port',
  template: `
    <ng-container *ngTemplateOutlet="content"></ng-container>

    <ng-template #content>
        <ng-content></ng-content>
    </ng-template>
  `,
  styles: [
  ]
})
export class StarPortComponent implements AfterViewInit, OnDestroy {

  @Input()
  id!: string;

  @Input()
  portalOutletSelector: string = 'ngx-star-port-carrier';

  @ViewChild('content')
  content!: TemplateRef<any>;

  portal!: TemplatePortal<any>;

  outlet!: DomPortalOutlet;

  liftedOff: boolean = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private starPortService: StarPortService,
  ) { }

  ngAfterViewInit(): void {
    const starPort = this.starPortService.getStarPort(this.id);
    const content = starPort?.content as TemplateRef<any>;
    const previousPosition = starPort?.position;
    const currentPosition = this.viewContainerRef.element.nativeElement.getBoundingClientRect();
    let contentElement: HTMLElement = this.content?.elementRef.nativeElement.previousElementSibling;
    let starPortCarrierElement: HTMLElement;

    console.log(this.content);
    
    if (content) {
      this.portal = new TemplatePortal(content, this.viewContainerRef);
      this.outlet = new DomPortalOutlet(document.querySelector(this.portalOutletSelector)!);
      starPortCarrierElement = this.outlet.attach(this.portal).rootNodes[0];

      const styleDiff = HtmlHelper.computeStyleDiff(starPortCarrierElement, contentElement);

      gsap
        .set(
          starPortCarrierElement,
          {
            transformOrigin: 'center',
            position: 'fixed',
            top: previousPosition.top,
            left: previousPosition.left
          }
        );

      gsap
        .set(
          contentElement,
          {
            visibility: 'hidden'
          }
        );

      gsap
        .to(
          starPortCarrierElement,
          {
            ...styleDiff,
            top: currentPosition.top,
            left: currentPosition.left
          }
        )
        .then(
          () => {
            starPortCarrierElement.remove();
            gsap
              .set(
                contentElement,
                {
                  visibility: 'visible'
                }
              );
          }
        );
    }

    this.starPortService.addOrUpdateStarPort(
      this.id,
      {
        content: this.content,
        position: currentPosition
      }
    );
  }

  ngOnDestroy(): void {
    this.outlet?.detach();
  }

}
