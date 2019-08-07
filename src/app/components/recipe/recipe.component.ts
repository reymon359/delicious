import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../services/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: []
})
export class RecipeComponent implements OnInit {
  public location;
  recipe: Recipe;
  meals = [];

  constructor(private activatedRoute: ActivatedRoute, private route: Router,
    private recipeService: RecipeService, public translate: TranslateService) {

    // Getting the meals array for the current translation
    translate.getTranslation(translate.currentLang).subscribe(translations => {
      this.meals = translations.meals;
    });

    // Changing meals translations on language change
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.meals = event.translations.meals;
    });


    this.activatedRoute.params.subscribe(params => {
      this.recipeService.getRecipe(params.id).then(recipe => {
        // If the recipe does not exists we redirect to not found
        if (recipe === undefined) {
          this.route.navigate(['not-found']);
        } else {
          this.recipe = recipe;
          console.log(this.recipe);
        }


      });
    });
  }

  ngOnInit() {
    this.location = window.location.href;
  }
  print() {
    window.print();
  }


/**
 * lazyLoadingImgBg()
 * Its adds an Intersection observer to all the elements with
 * backgroundimages that have the class lazy on them.
 */
lazyLoadingImgBg() {
  let lazyloadImages;

  if ('IntersectionObserver' in window) {
      lazyloadImages = document.querySelectorAll('.lazy');
      const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  const image = entry.target;
                  image.classList.remove('lazy');
                  imageObserver.unobserve(image);
              }
          });
      });

      lazyloadImages.forEach(function(image) {
          imageObserver.observe(image);
      });
  } else { // Browsers without IntersectionObserver

      let lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll('.lazy');

      function lazyload() {
          if (lazyloadThrottleTimeout) clearTimeout(lazyloadThrottleTimeout);

          lazyloadThrottleTimeout = setTimeout(() => {
              const scrollTop = window.pageYOffset;
              lazyloadImages.forEach((img) => {
                  if (img.offsetTop < (window.innerHeight + scrollTop)) {
                      img.src = img.dataset.src;
                      img.classList.remove('lazy');
                  }
              });
              if (lazyloadImages.length === 0) {
                  document.removeEventListener('scroll', lazyload);
                  window.removeEventListener('resize', lazyload);
                  window.removeEventListener('orientationChange', lazyload);
              }
          }, 20);
      }

      document.addEventListener('scroll', lazyload);
      window.addEventListener('resize', lazyload);
      window.addEventListener('orientationChange', lazyload);
  }
}

}
