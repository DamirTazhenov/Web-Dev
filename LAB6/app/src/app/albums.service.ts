import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Albums} from './data/albums';
import {Photos} from './photos';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  base:string = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private client:HttpClient) {
  }
  getAlbums():Observable<Albums[]>{
    return this.client.get<Albums[]>(`${this.base}`);
  }
  getAlbum(id:number):Observable<Albums>{
    return this.client.get<Albums>(`${this.base}${id}`)
  }
  getPhotos(id:number):Observable<Photos[]>{
    return this.client.get<Photos[]>(`${this.base}${id}/photos`)
  }

  addAlbum(album:Albums):Observable<Albums>{
    return this.client.post<Albums>(`${this.base}`, album);
  }

  deleteAlbum(id:number):Observable<unknown>{
    return this.client.delete(`${this.base}${id}`);
  }

  updateAlbum(album:Albums):Observable<Albums>{
    return this.client.put<Albums>(`${this.base}${album.id}`, album);
  }
}
