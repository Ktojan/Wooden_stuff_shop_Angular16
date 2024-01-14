import { Component, Input, inject } from '@angular/core';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { MatExpansionModule} from '@angular/material/expansion';
import { PieceService } from '../services/piece.service';
import { AsyncPipe } from '@angular/common';
import { Category } from '../models/piece';
import { AuthService } from '../services/auth.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    DetailViewComponent,
    SideMenuComponent,
    FormsModule,
    MatExpansionModule,
    RouterOutlet,
    AsyncPipe,
    MatTooltipModule,
    MatSlideToggleModule,
  ],
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {
  @Input() set categoryId(val: string) {
    const cats: string[] = Object.values(Category);
    if (cats.includes(val))
    this.pieceService.setSelectedCategory(val);
  }

  private readonly pieceService = inject(PieceService);
  private readonly authService = inject(AuthService);
  currentCategory$ = this.pieceService.selectedCategory$;
  isLoggedIn$ = this.authService.getCurrentUser();
  customizeMode = false;
}
