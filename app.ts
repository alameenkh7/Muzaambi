
import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core" ;

class Article{
  title:string;
  link:string;
  vote:number;
  constructor(title:string,link:string,vote?:number){
    this.title=title;
    this.link=link;
    this.vote=vote || 0;
  }

  voteUp(){
    this.vote++;
  }

  voteDown(){
    this.vote--;
  }

  domain() : string{
    try{
      const link: string = this.link.split('//')[1];
  return link.split('/')[0];
    }
    catch (err){
      return null;
    }
  }
}

@Component({
  selector:'reddit-article',
  inputs:['article'],
  host:{
    class:'row'
  },
  template:`
    <div class="four wide column center aligned votes">
      <div class="ui statitics">
        <div class="value">
        {{article.vote}}
        </div>
        <div class="label">
        Points
        </div>
      </div>
    </div>
    <div class="twelve wide column ">
      <a class="ui large header" href="{{article.link}}">
        {{article.title}}

      </a>
      <div class="meta">({{ article.domain() }})</div>
    <ul class="ui big horizontal list voters">
      <li class="item">
        <a href (click)="voteUp()">
          <i class="arrow up icon"></i>
          upvote
        </a>
      </li>
      <li class="item">
        <a href (click)="voteDown()">
          <i class="arrow down icon"></i>
            downvote
        </a>
      </li>
    </ul>
  `
})






class ArticleComponent{
  article:Article;
  constructor(){
  this.article=new Article('Angular2','http://angular.io',10);
  }

  voteUp(){
    this.article.voteUp();
    return false;
  }

  voteDown(){
    this.article.voteDown();
    return false;
  }



}


@Component({
  selector:'reddit ',
  directives: [ArticleComponent],
  template:`
  <form class="ui large form segment">
    <h3 class="ui header">Add a Link</h3>
    <div class="field">
      <label for="title"  >Title:</label>
      <input name="title" #newtitle>
    </div>
    <div class="field">
      <label for="link">Link</label>
      <input name="link"  #newlink>
    </div>
    <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">Submit Link</button>

  </form>
  <div class="ui grid posts">
    <reddit-article *ngFor="#x of sortedArticle()" [article]="x"></reddit-article>

  </div>
  `
})

class RedditApp{
  articles : Article[];
  constructor(){
    this.articles=[
    ];
  }

  addArticle(title: HTMLInputElement,link: HTMLInputElement){
    console.log(title.value,link.value);
    this.articles.push(new Article(title.value,link.value,0));
    title.value=link.value='';
  }

  sortedArticle() : Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.vote-a.vote);
  }

  }



bootstrap(RedditApp);
