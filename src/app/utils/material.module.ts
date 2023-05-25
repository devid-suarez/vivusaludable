import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatTabsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatTabsModule,
        MatToolbarModule,
        MatButtonModule,
         MatSidenavModule,
        MatIconModule,

        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [],
})
export class MaterialModuleImports { }
