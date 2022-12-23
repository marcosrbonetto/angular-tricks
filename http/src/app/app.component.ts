import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './shared/post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostService]
})
export class AppComponent implements OnInit{
  loadedPosts: Post[] = [];
  loading=false;
  errorMessage ='';

  constructor(private http: HttpClient, private service:PostService) {}

  ngOnInit() {
    this.errorMessage ='';
    this.service.internalError.subscribe((error)=>{
      this.errorMessage = error;
    });
    this.fetch();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.service.createNewPost(postData);
  }

  onFetchPosts() {
    this.fetch();
  }

  onClearPosts() {
    this.service.deletePosts().subscribe(()=>{
      this.loadedPosts=[];
  });
  }

  private fetch(){
    this.loading=true;
    this.service.fetchPosts()
      .subscribe({
          next: response=>{
              console.log(response);
              this.loadedPosts=response;
              this.loading=false;
          }, 
          error: 
            error=>{
            this.loading=false;
            this.errorMessage = error.message; 
            }
      });
  }
}
