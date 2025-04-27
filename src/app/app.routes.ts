import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListingComponent } from './pages/listing/listing.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'explore', component: ExplorePageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'listing', component: ListingComponent },
];
