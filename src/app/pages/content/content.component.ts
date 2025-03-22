import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
 import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg"
  contentTitle:string = "NOTICIA EXEMPLO"
  contentDescription:string = "consegui fazer no standalone :)"

  private id:string | null = "0"
 
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
    this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }
}
