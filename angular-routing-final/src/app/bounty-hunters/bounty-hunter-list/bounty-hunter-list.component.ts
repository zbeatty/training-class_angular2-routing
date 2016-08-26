import { Component, OnInit } from '@angular/core';
import { BountyHunterService } from '../bounty-hunter.service';
import { IBountyHunter } from '../../model/bounty-hunter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bounty-hunter-list',
  templateUrl: 'bounty-hunter-list.component.html',
  styleUrls: ['bounty-hunter-list.component.css']
})
export class BountyHunterListComponent implements OnInit {
  bountyHunters: Array<IBountyHunter>;

  constructor(private router: Router, private bountyHunterService: BountyHunterService) { }

  ngOnInit() {
    this.bountyHunterService.getBountyHunters()
      .subscribe(
      ((bountyHuners) => { this.bountyHunters = bountyHuners })
      );
  }

  selectBountyHunter(id: number) {
    this.router.navigate(['/bounty-hunter', id]);
  }
}
