import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { PostDetailsComponent } from './post-details/post-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterWord } from '../app/post-details/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailsComponent,
    FilterWord
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
