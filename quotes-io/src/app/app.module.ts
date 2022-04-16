import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MostLikedDirective } from './directives/most-liked.directive';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { TimePassedPipe } from './pipes/timePassed/time-passed.pipe';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuotesComponent,
    ButtonsComponent,
    MostLikedDirective,
    FormComponent,
    TimePassedPipe,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
