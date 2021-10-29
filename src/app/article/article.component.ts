import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  //article: Article;
  //votes: number;
  //title: string;
  //link: string;
  constructor() { 
    this.article = new Article('Angular 2', 'http://angular.io', 10)
    //this.title = 'Angular 2';
    //this.link = 'http://angular.io';
    //this.votes = 10;
  }
  voteUp(): boolean {
    this.article.voteUp();
    return false;
    //this.votes += 1;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
    //this.votes -= 1;
  }
  ngOnInit() {
  }

}
