import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MeuPerfilService {
  constructor(private http: HttpClient) { }
}