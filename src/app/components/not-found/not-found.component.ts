import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styles: []
})
export class NotFoundComponent implements OnInit {
  seasonIndex = (Math.floor(Math.random() * 4) + 1); // The season we will start. It will be random
  foodEmojis = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥','🥑','🍆','🥔','🥕','🌽','🌶','🥒','🥬','🥦','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🥙','🍳','🥘','🍲','🥣','🥗','🍿','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕','🍵','🍶','🍾','🍷','🍸','🍹','🍺','🍻','🥂','🥃','🥤','🥢','🍽','🍴','🥄'];
  constructor() { 
    
  }
  
  ngOnInit() {
    this.changeSeason();
  }

  changeSeason() {
      let html = '';
      // I will build the html here
      
      html += `<div class="section404"><h2>404 <br>  <small>Page not found</small></h2>`;

      for (let containerIndex = 1; containerIndex < 4; containerIndex++) {
          // Now I make 3 set containers
          html += `<div class="set set${containerIndex}">`;

          // now 3 groups of 3 images each
          for (let imgGroupIndex = 1; imgGroupIndex < 4; imgGroupIndex++) { // The loop for groups

              for (let imgIndex = 1; imgIndex < 4; imgIndex++) { // The loop for the images
                let ranfood = this.foodEmojis[Math.floor(Math.random() * this.foodEmojis.length)];
                // html += `<div><img src="https://raw.githubusercontent.com/reymon359/web-experiments/master/Seasons%20Falling/season${this.seasonIndex}_${imgIndex}.png" alt="">🍟</div>`;
                html += `<div class="img">${ranfood}</div>`;

              }
          }

          html += `</div>`;
      }

      html += `<a href="https://ramonmorcillo.com" >Ramon Morcillo @reymon359</a>`;

      html += `</div>`;
      document.getElementById('404-container').innerHTML = html;

      // Increasing the season number
      this.seasonIndex = (this.seasonIndex === 4) ? 1 : this.seasonIndex + 1;

      // Changing season in 10 sec
      // setTimeout(() => {
      //    this. changeSeason();
      // }, 10000);
  }
}
