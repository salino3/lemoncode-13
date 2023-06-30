import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './utils/search/search.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HighlightDirective } from './directives/highlight.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterByLoginPipe } from './pipes/filter-by-login.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserListComponent,
    HighlightDirective,
    FilterByLoginPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
