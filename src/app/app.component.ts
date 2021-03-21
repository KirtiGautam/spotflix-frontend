import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spotflix';
  sampleData = [
    {
      'title': 'Iron Man',
      'image': 'https://pbs.twimg.com/profile_images/1222654825403424768/-ySQePLc.jpg'
    },
    {
      'title': 'Dr. Strange',
      'image': 'https://wallpapercave.com/wp/wp3965882.jpg'
    },
    {
      'title': 'Catwoman',
      'image': 'https://i.ytimg.com/vi/zqnY9rUir4Q/maxresdefault.jpg'
    },
    {
      'title': 'Harley Quinn',
      'image': 'https://images-na.ssl-images-amazon.com/images/I/71QtpwY6xJL._AC_SL1500_.jpg'
    },
  ]
}
