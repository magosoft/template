import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
