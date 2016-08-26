import { Component, OnInit } from '@angular/core';
import { BountyHunterService } from '../bounty-hunter.service';
import { IBountyHunter } from '../../model/bounty-hunter';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bounty-hunter-detail',
  templateUrl: 'bounty-hunter-detail.component.html',
  styleUrls: ['bounty-hunter-detail.component.css']
})
export class BountyHunterDetailComponent implements OnInit {
  private sub: Subscription;
  bountyHunter: IBountyHunter;

  constructor(private route: ActivatedRoute, private router: Router, private bountyHunterService: BountyHunterService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.bountyHunterService.getBountyHunter(id)
        .subscribe(
        (bountyHunters) => {
          for (let i = 0; i < bountyHunters.length; i++) {
            if (bountyHunters[i].id === id) {
              this.bountyHunter = bountyHunters[i];
            }
          }
        });
    });
  }

  goBack() {
    this.router.navigate(['/bounty-hunters']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
