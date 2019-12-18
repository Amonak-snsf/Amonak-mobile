import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DynamicDatabase, HomeComponent} from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatCardModule, MatFormFieldModule  ,MatInputModule  ,MatButtonModule ,MatTreeModule , MatIconModule , MatProgressBarModule, MatStepperModule} from '@angular/material';
import { ResetComponent } from './reset/reset.component';
import { TopTenProductsComponent } from './top-ten-products/top-ten-products.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ProfilComponent } from './profil/profil.component';
import { DiscussionShortcutComponent } from './discussion-shortcut/discussion-shortcut.component';
import { EditComponent } from './edit/edit.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { BlockingComponent } from './blocking/blocking.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditPublicationComponent } from './edit-publication/edit-publication.component';
import { BlockingModalComponent } from './blocking-modal/blocking-modal.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { EditSalesComponent } from './edit-sales/edit-sales.component';
import { EditAlertsComponent } from './edit-alerts/edit-alerts.component';
import { EditStoriesComponent } from './edit-stories/edit-stories.component';
import { NewsFilComponent } from './news-fil/news-fil.component';
import { HomeRightComponent } from './home-right/home-right.component';
import { HomeLeftComponent } from './home-left/home-left.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { SellModalComponent } from './sell-modal/sell-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { PostOptionDropdownComponent } from './post-option-dropdown/post-option-dropdown.component';
import { SellOptionDropdownComponent } from './sell-option-dropdown/sell-option-dropdown.component';
import { AlertOptionDropdownComponent } from './alert-option-dropdown/alert-option-dropdown.component';
import { PostPublicationComponent } from './post-publication/post-publication.component';
import { SellPublicationComponent } from './sell-publication/sell-publication.component';
import { AlertPublicationComponent } from './alert-publication/alert-publication.component';
import { PremiumComponent } from './premium/premium.component';
import { NavbarPrComponent } from './navbar-pr/navbar-pr.component';
import { InfoPrComponent } from './info-pr/info-pr.component';
import { FormPrComponent } from './form-pr/form-pr.component';
import { PublicityPageComponent } from './publicity-page/publicity-page.component';
import { NavPublicityComponent } from './nav-publicity/nav-publicity.component';
import { PubPremiumComponent } from './pub-premium/pub-premium.component';
import { PublicitySponsoringComponent } from './publicity-sponsoring/publicity-sponsoring.component';
import { GetPremiumComponent } from './get-premium/get-premium.component';
import { DefaultNavbarComponent } from './default-navbar/default-navbar.component';
import { AdPublicityModalComponent } from './ad-publicity-modal/ad-publicity-modal.component';
import { SellPublicityModalComponent } from './sell-publicity-modal/sell-publicity-modal.component';
import { AlertPublicityModalComponent } from './alert-publicity-modal/alert-publicity-modal.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { SellManagementComponent } from './sell-management/sell-management.component';
import { AlertManagementComponent } from './alert-management/alert-management.component';
import { ImgCManagementComponent } from './img-c-management/img-c-management.component';
import { CommentsManagementComponent } from './comments-management/comments-management.component';
import { CommentsAManagementComponent } from './comments-a-management/comments-a-management.component';
import { CommentsSManagementComponent } from './comments-s-management/comments-s-management.component';
import { CpCommentComponent } from './cp-comment/cp-comment.component';
import { CsCommentComponent } from './cs-comment/cs-comment.component';
import { CaCommentComponent } from './ca-comment/ca-comment.component';
import { CsSalesComponent } from './cs-sales/cs-sales.component';
import { CaAnswersComponent } from './ca-answers/ca-answers.component';
import { BuyFormComponent } from './buy-form/buy-form.component';
import { SmsListComponent } from './sms-list/sms-list.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryNavComponent } from './delivery-nav/delivery-nav.component';
import { DeliveryDocumentationComponent } from './delivery-documentation/delivery-documentation.component';
import { DeliveryFollowComponent } from './delivery-follow/delivery-follow.component';
import { DeliveryMakeComponent } from './delivery-make/delivery-make.component';
import { DeliveryWorkComponent } from './delivery-work/delivery-work.component';
import { DeliveryContactComponent } from './delivery-contact/delivery-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ResetComponent,
    TopTenProductsComponent,
    HomeFooterComponent,
    ProfilComponent,
    DiscussionShortcutComponent,
    EditComponent,
    EditFormComponent,
    BlockingComponent,
    CategoriesComponent,
    EditPublicationComponent,
    BlockingModalComponent,
    EditPostsComponent,
    EditSalesComponent,
    EditAlertsComponent,
    EditStoriesComponent,
    NewsFilComponent,
    HomeRightComponent,
    HomeLeftComponent,
    LoginFooterComponent,
    PostModalComponent,
    SellModalComponent,
    AlertModalComponent,
    PostOptionDropdownComponent,
    SellOptionDropdownComponent,
    AlertOptionDropdownComponent,
    PostPublicationComponent,
    SellPublicationComponent,
    AlertPublicationComponent,
    PremiumComponent,
    NavbarPrComponent,
    InfoPrComponent,
    FormPrComponent,
    PublicityPageComponent,
    NavPublicityComponent,
    PubPremiumComponent,
    PublicitySponsoringComponent,
    GetPremiumComponent,
    DefaultNavbarComponent,
    AdPublicityModalComponent,
    SellPublicityModalComponent,
    AlertPublicityModalComponent,
    PostManagementComponent,
    SellManagementComponent,
    AlertManagementComponent,
    ImgCManagementComponent,
    CommentsManagementComponent,
    CommentsAManagementComponent,
    CommentsSManagementComponent,
    CpCommentComponent,
    CsCommentComponent,
    CaCommentComponent,
    CsSalesComponent,
    CaAnswersComponent,
    BuyFormComponent,
    SmsListComponent,
    DeliveryComponent,
    DeliveryNavComponent,
    DeliveryDocumentationComponent,
    DeliveryFollowComponent,
    DeliveryMakeComponent,
    DeliveryWorkComponent,
    DeliveryContactComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [DynamicDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
