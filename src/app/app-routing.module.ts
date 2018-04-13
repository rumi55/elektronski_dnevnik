import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UcenikDetailComponent } from './ucenik-detail/ucenik-detail.component';
import { NastavnikDetailComponent } from './nastavnik-detail/nastavnik-detail.component';
import { RoditeljComponent } from './roditelj/roditelj.component';
import { RoditeljDetailComponent } from './roditelj-detail/roditelj-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { UcenikComponent } from './ucenik/ucenik.component';
import { SpiskoviComponent } from './spiskovi/spiskovi.component';
import { SpisakOdeljenjaComponent } from './spisak-odeljenja/spisak-odeljenja.component';
import { RoditeljOdeljenjeComponent } from './roditelj-odeljenje/roditelj-odeljenje.component';
import { UceniciPoOdeljenjimaComponent } from './ucenici-po-odeljenjima/ucenici-po-odeljenjima.component';
import { RoditeljiPoOdeljenjimaComponent } from './roditelji-po-odeljenjima/roditelji-po-odeljenjima.component';
import { UcenikSearchComponent } from './ucenik-search/ucenik-search.component';
import { RoditeljSearchComponent } from './roditelj-search/roditelj-search.component';
import { NastavnikSearchComponent } from './nastavnik-search/nastavnik-search.component';
import { PredmetComponent } from './predmet/predmet.component';
import { NastavnikPredmetComponent } from './nastavnik-predmet/nastavnik-predmet.component';
import { RoditeljUcenikComponent } from './roditelj-ucenik/roditelj-ucenik.component';
import { UcenikPredmetComponent } from './ucenik-predmet/ucenik-predmet.component';
import { OcenaDetailComponent } from './ocena-detail/ocena-detail.component';
import { OcenaIzmenaComponent } from './ocena-izmena/ocena-izmena.component';
import { NastavnikOdeljenjeComponent } from './nastavnik-odeljenje/nastavnik-odeljenje.component';
import { AdminucenikSearchComponent } from './adminucenik-search/adminucenik-search.component';
import { AdminnastavnikSearchComponent } from './adminnastavnik-search/adminnastavnik-search.component';
import { AdminroditeljSearchComponent } from './adminroditelj-search/adminroditelj-search.component';
import { RazredComponent } from './razred/razred.component';
import { OdeljenjeComponent } from './odeljenje/odeljenje.component';
import { OdeljenjeRazredComponent } from './odeljenje-razred/odeljenje-razred.component';
import { AdminUcenikRoditeljComponent } from './admin-ucenik-roditelj/admin-ucenik-roditelj.component';
import { AdminUcenikOdeljenjeComponent } from './admin-ucenik-odeljenje/admin-ucenik-odeljenje.component';
import { UcenikOdeljenjeComponent } from './ucenik-odeljenje/ucenik-odeljenje.component';
import { AdminpredmetSearchComponent } from './adminpredmet-search/adminpredmet-search.component';
import { PredmetDetailComponent } from './predmet-detail/predmet-detail.component';
import { PredajeoComponent } from './predajeo/predajeo.component';
import { PredajeopComponent } from './predajeop/predajeop.component';
import { PredajeopnComponent } from './predajeopn/predajeopn.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'adminsearch', component: AdminSearchComponent },
  { path: 'administrator/:id', component: AdministratorComponent },
  { path: 'spisak', component: SpiskoviComponent },
  { path: 'spisaknastavnik', component: NastavnikComponent },
  { path: 'spisakucenik', component: UcenikComponent },
  { path: 'spisakodeljenja', component: SpisakOdeljenjaComponent },
  { path: 'roditeljodeljenje', component: RoditeljOdeljenjeComponent },
  { path: 'ucenicipoodeljenjima/:id', component: UceniciPoOdeljenjimaComponent },
  { path: 'roditeljipoodeljenjima/:id', component: RoditeljiPoOdeljenjimaComponent },
  { path: 'ucenik', component: UcenikSearchComponent },
  { path: 'ucenik/:id', component: PredmetComponent },
  { path: 'roditelj', component: RoditeljSearchComponent },
  { path: 'roditelj/:id', component: RoditeljUcenikComponent },
  { path: 'nastavnik', component: NastavnikSearchComponent },
  { path: 'nastavnik/:id', component: NastavnikOdeljenjeComponent },
  { path: 'nastavnik/:nId/:uId', component: UcenikPredmetComponent },
  { path: 'nastavnik/:nId/:uId/:pId' , component: OcenaDetailComponent },
  { path: 'ocenaizmena/:id', component: OcenaIzmenaComponent },
  { path: 'adminucenik', component: AdminucenikSearchComponent },
  { path: 'adminroditelj', component: AdminroditeljSearchComponent },
  { path: 'adminnastavnik', component: AdminnastavnikSearchComponent },
  { path: 'ucenikdetail/:id', component: UcenikDetailComponent },
  { path: 'nastavnikdetail/:id', component: NastavnikDetailComponent },
  { path: 'roditeljdetail/:id', component: RoditeljDetailComponent },
  { path: 'razred', component: RazredComponent },
  { path: 'razred/:id', component: OdeljenjeRazredComponent },
  { path: 'odeljenje', component: OdeljenjeComponent },
  { path: 'ucenikroditelj', component: AdminUcenikRoditeljComponent },
  { path: 'ucenikroditelj/:id', component: RoditeljComponent },
  { path: 'ucenikodeljenje', component: AdminUcenikOdeljenjeComponent },
  { path: 'ucenikodeljenje/:id', component: UcenikOdeljenjeComponent },
  { path: 'adminpredmet', component: AdminpredmetSearchComponent },
  { path: 'predmetdetail/:id', component: PredmetDetailComponent },
  { path: 'predaje', component: PredajeoComponent },
  { path: 'predaje/:id', component: PredajeopComponent },
  { path: 'predaje/:oid/:nid', component: PredajeopnComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
