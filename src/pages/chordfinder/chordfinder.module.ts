import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChordfinderPage } from './chordfinder';

@NgModule({
  declarations: [
    ChordfinderPage,
  ],
  imports: [
    IonicPageModule.forChild(ChordfinderPage),
  ],
})
export class ChordfinderPageModule {}
