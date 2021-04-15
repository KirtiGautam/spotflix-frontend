import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListModel } from "../models/list.model";
import { ApiService } from "./api.services";


@Injectable({
    providedIn: 'root',
})
export class MovieService {
    constructor(private apiService: ApiService,) { }

    getTrending(page: number = 1): Observable<ListModel> {
        const data = {
            page
        }
        return this.apiService.get('trending/', data)
    }
}