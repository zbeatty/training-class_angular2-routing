import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { BountyHunterListComponent } from './bounty-hunter-list/bounty-hunter-list.component';
import { BountyHunterDetailComponent } from './bounty-hunter-detail/bounty-hunter-detail.component';

import { BountyHunterService } from './bounty-hunter.service';

import { bountyHuntersRouting } from './bounty-hunters.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        bountyHuntersRouting,
    ],
    declarations: [
        BountyHunterListComponent,
        BountyHunterDetailComponent
    ],
    providers: [
        BountyHunterService
    ]
})
export class BountyHuntersModule { }