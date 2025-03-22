import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallCardComponent } from "./components/small-card/small-card.component";
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { HomeComponent } from "./pages/home/home.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { ContentComponent } from './pages/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true, // Adicionando Standalone
  imports: [RouterOutlet, SmallCardComponent, MenuTitleComponent, HomeComponent, MenuBarComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigindo o nome da propriedade
})
export class AppComponent {
  title = 'angular-blog_claudino';
}
