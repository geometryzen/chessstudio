import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { FoobarService } from "./foobar.service";
import { IpcService } from "./ipc.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    imports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, RouterModule],
    standalone: true
})
export class AppComponent implements OnInit {
    title = "Chess Studio";

    constructor(
        private ipcService: IpcService,
        private foobarService: FoobarService
    ) { }

    async ngOnInit(): Promise<void> {
        // const n = this.foobarService.baz("Wow!");
        // console.lg(`foobar.baz("Wow!!!") => ${n}`);
    }

    clickDevTools() {
        this.ipcService.openDevTools();
    }
}
