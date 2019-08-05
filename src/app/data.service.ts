import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Continent } from "./continent.model";

@Injectable({
    providedIn: "root"
})

export class DataService {
apiUrl ="#";

    constructor(private _http: HttpClient) {}

    getContinent() {
        return this._http.get<Continent[]>(this.apiUrl);
    }
}