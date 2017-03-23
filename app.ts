
import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core" ;

@Component({
  selector:'reddit ',
  template:`
  <form class="ui large form segment">
    <h3 class="ui header">Add a Link</h3>
    <div class="field">
      <label for="title" #newtitle >Title:</label>
      <input name="title" >
    </div>
    <div class="field">
      <label for="link" #newlink>Link</label>
      <input name="link">
    </div>
    <button (click)="addArticle(newtitle,newtitle)" class="ui positive right floated button">Submit Link</button>
  </form>

  `
})

class RedditApp{
  }



bootstrap(RedditApp);
