import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CoursPage} from './cours';

@NgModule({
    declarations: [
        CoursPage,
    ],
    imports: [
        IonicPageModule.forChild(CoursPage),
    ],
})
export class CoursPageModule {
}
