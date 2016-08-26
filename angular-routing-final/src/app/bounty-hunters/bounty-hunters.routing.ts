import { Routes, RouterModule } from '@angular/router';

import { BountyHunterListComponent } from './bounty-hunter-list/bounty-hunter-list.component';
import { BountyHunterDetailComponent } from './bounty-hunter-detail/bounty-hunter-detail.component';

const bountyHuntersRoutes: Routes = [
  { path: 'bounty-hunters',  component: BountyHunterListComponent },
  { path: 'bounty-hunter/:id', component: BountyHunterDetailComponent }
];

export const bountyHuntersRouting = RouterModule.forChild(bountyHuntersRoutes);