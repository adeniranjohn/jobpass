import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
                    {
                      path: 'home', component: HomeComponent },
                    { path: 'terms', component: TermsComponent },
                    { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
                    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
                    { path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule) },
                    { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
