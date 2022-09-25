import { LoaderService } from './modules/shared/services/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading$ = this.loaderS.isLoading$;
  title = 'portfolio-project';

  constructor(private loaderS: LoaderService) {}

  ngOnInit(): void {
    this.loaderS.showLoader();
    setTimeout(() => {
      this.loaderS.hideLoader();
    }, 2000);
    // this.loading$.subscribe((isLoading) =>
    //   console.log('subscribe=>', isLoading)
    // );
  }
}
