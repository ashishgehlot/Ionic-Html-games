import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IframeService } from '../iframe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public innerHtml;

  constructor(private sanitizer: DomSanitizer,
    private iframeService: IframeService) { }

  ngOnInit(): void {

    const html = this.iframeService.InitalizeIframe('BubbleShooter');

    setTimeout(() => {
      this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(html);
    }, 1000);

  }

}
