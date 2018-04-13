import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UcenikComponent } from './ucenik/ucenik.component';
import { UcenikService } from './ucenik.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UcenikDetailComponent } from './ucenik-detail/ucenik-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { RoditeljComponent } from './roditelj/roditelj.component';
import { NastavnikService } from './nastavnik.service';
import { RoditeljService } from './roditelj.service';
import { NastavnikDetailComponent } from './nastavnik-detail/nastavnik-detail.component';
import { RoditeljDetailComponent } from './roditelj-detail/roditelj-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin.service';
import { UcenikSearchComponent } from './ucenik-search/ucenik-search.component';
import { NastavnikSearchComponent } from './nastavnik-search/nastavnik-search.component';
import { RoditeljSearchComponent } from './roditelj-search/roditelj-search.component';
import { PredmetComponent } from './predmet/predmet.component';
import { PredmetService } from './predmet.service';
import { PredmetDetailComponent } from './predmet-detail/predmet-detail.component';
import { NastavnikPredmetComponent } from './nastavnik-predmet/nastavnik-predmet.component';
import { OcenaService } from './ocena.service';
import { RoditeljUcenikComponent } from './roditelj-ucenik/roditelj-ucenik.component';
import { UcenikPredmetComponent } from './ucenik-predmet/ucenik-predmet.component';
import { OcenaDetailComponent } from './ocena-detail/ocena-detail.component';
import { NastavnikOdeljenjeComponent } from './nastavnik-odeljenje/nastavnik-odeljenje.component';
import { OdeljenjeComponent } from './odeljenje/odeljenje.component';
import { OdeljenjeService } from './odeljenje.service';
import { AdminucenikSearchComponent } from './adminucenik-search/adminucenik-search.component';
import { AdminnastavnikSearchComponent } from './adminnastavnik-search/adminnastavnik-search.component';
import { AdminroditeljSearchComponent } from './adminroditelj-search/adminroditelj-search.component';
import { RazredComponent } from './razred/razred.component';
import { RazredService } from './razred.service';
import { OdeljenjeRazredComponent } from './odeljenje-razred/odeljenje-razred.component';
import { AdminUcenikRoditeljComponent } from './admin-ucenik-roditelj/admin-ucenik-roditelj.component';
import { UcenikOdeljenjeComponent } from './ucenik-odeljenje/ucenik-odeljenje.component';
import { AdminUcenikOdeljenjeComponent } from './admin-ucenik-odeljenje/admin-ucenik-odeljenje.component';
import { AdminpredmetSearchComponent } from './adminpredmet-search/adminpredmet-search.component';
import { PredajeoComponent } from './predajeo/predajeo.component';
import { PredajeopComponent } from './predajeop/predajeop.component';
import { PredajeopnComponent } from './predajeopn/predajeopn.component';
import { UcenikFilterPipe } from './ucenik-filter.pipe';
import { RoditeljFilterPipe } from './roditelj-filter.pipe';
import { OdeljenjeFilterPipe } from './odeljenje-filter.pipe';
import { NastavnikFilterPipe } from './nastavnik-filter.pipe';
import { PredmetFilterPipe } from './predmet-filter.pipe';
import { OceneFilterPipe } from './ocene-filter.pipe';
import { OcenaIzmenaComponent } from './ocena-izmena/ocena-izmena.component';
import { SpiskoviComponent } from './spiskovi/spiskovi.component';
import { SpisakOdeljenjaComponent } from './spisak-odeljenja/spisak-odeljenja.component';
import { UceniciPoOdeljenjimaComponent } from './ucenici-po-odeljenjima/ucenici-po-odeljenjima.component';
import { RoditeljiPoOdeljenjimaComponent } from './roditelji-po-odeljenjima/roditelji-po-odeljenjima.component';
import { RoditeljOdeljenjeComponent } from './roditelj-odeljenje/roditelj-odeljenje.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';


@NgModule({
  declarations: [
    AppComponent,
    UcenikComponent,
    MessagesComponent,
    DashboardComponent,
    UcenikDetailComponent,
    NastavnikComponent,
    RoditeljComponent,
    NastavnikDetailComponent,
    RoditeljDetailComponent,
    AdminComponent,
    UcenikSearchComponent,
    NastavnikSearchComponent,
    RoditeljSearchComponent,
    PredmetComponent,
    PredmetDetailComponent,
    NastavnikPredmetComponent,
    RoditeljUcenikComponent,
    UcenikPredmetComponent,
    OcenaDetailComponent,
    NastavnikOdeljenjeComponent,
    OdeljenjeComponent,
    AdminucenikSearchComponent,
    AdminnastavnikSearchComponent,
    AdminroditeljSearchComponent,
    RazredComponent,
    OdeljenjeRazredComponent,
    AdminUcenikRoditeljComponent,
    UcenikOdeljenjeComponent,
    AdminUcenikOdeljenjeComponent,
    AdminpredmetSearchComponent,
    PredajeoComponent,
    PredajeopComponent,
    PredajeopnComponent,
    UcenikFilterPipe,
    RoditeljFilterPipe,
    OdeljenjeFilterPipe,
    NastavnikFilterPipe,
    PredmetFilterPipe,
    OceneFilterPipe,
    OcenaIzmenaComponent,
    SpiskoviComponent,
    SpisakOdeljenjaComponent,
    UceniciPoOdeljenjimaComponent,
    RoditeljiPoOdeljenjimaComponent,
    RoditeljOdeljenjeComponent,
    AdministratorComponent,
    AdminSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ UcenikService, MessageService, NastavnikService, RoditeljService, AdminService, PredmetService, OcenaService, OdeljenjeService, RazredService],
  bootstrap: [AppComponent]
})
export class AppModule { }
