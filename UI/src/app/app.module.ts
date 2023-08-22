import { ScatterPlotComponent } from './features/scatter-plot/scatter-plot.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './features/home-page/home.page';
import { ServerErrorComponent } from './shared/http-errors/server-error/server-error.component';
import { TestComponent } from './external/test/test.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotFoundComponent } from './shared/http-errors/not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { LoadingComponent } from './shared/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgChartsModule } from 'ng2-charts';
import { HomeTranslateComponent } from './shared/header/components/home-translate/home-translate.component';
import { OptionTabsComponent } from './shared/option-tabs/option-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    ServerErrorComponent,
    HomeComponent,
    TestComponent,
    LoadingComponent,
    ScatterPlotComponent,
    HomeTranslateComponent,
    OptionTabsComponent,
  ],
  imports: [
    NgChartsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    //// Angular Material
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
