import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Albums} from "../data/albums";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  album:Albums ;
  newAlbum:Albums;
  load:boolean;
  constructor(private albumsService:AlbumsService, private route:ActivatedRoute) {
    this.album = {} as Albums;
    this.newAlbum = {} as Albums;
    this.load = true;
  }
  ngOnInit(){
    this.getId();
  }
  getId(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.load = false;
      this.albumsService.getAlbum(id).subscribe((album)=>{this.album = album; this.load = true;});
    })
  }

  updateAlbum(){
    this.newAlbum.id = this.album.id;
    this.albumsService.updateAlbum(this.newAlbum).subscribe((album)=>this.album = album);
    this.newAlbum = {} as Albums;
  }
}
