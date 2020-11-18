import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  images1: any;

  constructor(private images: ImagesService) { }

  ngOnInit(): void {
    this.images1 = this.images.getImageById('img1');
    var $portfolio_container = $(".portfolio-grid");
        $portfolio_container.imagesLoaded(function () {
            this.portfolio_init();
        });

  }

  portfolio_init() {
        var portfolio_grid = $('.portfolio-grid'),
            portfolio_filter = $('.portfolio-filters');

        if (portfolio_grid) {

            portfolio_grid.shuffle({
                speed: 450,
                itemSelector: 'figure'
            });

            portfolio_filter.on("click", ".filter", function (e) {
                portfolio_grid.shuffle('update');
                e.preventDefault();
                $('.portfolio-filters .filter').parent().removeClass('active');
                $(this).parent().addClass('active');
                portfolio_grid.shuffle('shuffle', $(this).attr('data-group') );
            });

        }
    }
}
