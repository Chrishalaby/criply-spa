import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { ThemeService } from './theme-service';

@Component({
  selector: 'cr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/',
    },
    {
      label: 'About us',
      icon: 'pi pi-fw pi-info-circle',
      routerLink: 'about-us',
    },
    {
      label: 'Contact',
      icon: 'pi pi-fw pi-send',
      items: [
        {
          label: 'Instagram',
          icon: 'pi pi-fw pi-instagram',
          url: 'https://www.instagram.com/criplylb/',
        },
        {
          label: 'Phone Number',
          icon: 'pi pi-fw pi-phone',
          url: 'tel:96171067260',
        },
        {
          label: 'Whatsapp',
          icon: 'pi pi-fw pi-whatsapp',
          url: 'https://wa.me/96171067260',
        },
        {
          label: 'Mail',
          icon: 'pi pi-fw pi-envelope',
          url: 'mailto:chridtianhalabi@gmail.com',
        },
        {
          label: 'Location 1',
          icon: 'pi pi-fw pi-map-marker',
          url: 'https://goo.gl/maps/aSzuYqDxjHM6d6EK9',
        },
        {
          label: 'Location 2',
          icon: 'pi pi-fw pi-map-marker',
          url: 'https://goo.gl/maps/6xuDqHM4DcLjzFzR6',
        },
      ],
    },
  ];

  public constructor(
    private readonly themeService: ThemeService,
  ) {}

  // changeTheme(theme: string) {
  //   this.themeService.switchTheme(theme);
  // }
}
