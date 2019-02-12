/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';


import {
  EventEmitter,
} from '@stencil/core';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface AppCarouselIndicators {
      'activeIndex': string;
    }

    interface AppCta {

    }

    interface AppFooter {

    }

    interface AppImg {
      'alt': string;
      'fit': boolean;
      'preLoad': boolean;
      'src': string;
    }

    interface LazyImg {
      'alt': string;
      'src': string;
      'width': number;
    }

    interface AppInput {
      'id': string;
      'label': string;
      'maxlength': string;
      'name': string;
      'placeholder': string;
      'required': boolean;
      'type': string;
    }

    interface AppMembers {
      'members': any[];
    }

    interface AppNavHeader {

    }

    interface AppRadio {
      'label': string;
      'name': string;
      'required': boolean;
      'value': string;
    }

    interface AppSlider {
      'label': string;
      'name': string;
    }

    interface AppTextarea {
      'id': string;
      'label': string;
      'maxlength': string;
      'name': string;
      'placeholder': string;
      'required': boolean;
      'rows': number;
    }

    interface AppTranslate {
      'key': string;
      'params': {};
    }

    interface ContentGraphic {
      'imgUrl': string;
      'preLoadImg': boolean;
      'reverse': boolean;
    }

    interface App404 {

    }

    interface AppAbout {

    }

    interface AppCaseStudy {

    }

    interface AppContact {
      'errorIconStyles': any;
    }

    interface AppDetailedService {
      'history': RouterHistory;
      'match': MatchResults;
    }

    interface AppHome {
      'history': RouterHistory;
    }

    interface AppOpportunities {
      'errorIconStyles': any;
      'history': RouterHistory;
      'match': MatchResults;
    }

    interface AppResources {
      'errorIconStyles': any;
      'history': RouterHistory;
      'match': MatchResults;
    }

    interface AppServiceLevelAgreement {

    }

    interface AppTeamLanding {
      'history': RouterHistory;
      'match': MatchResults;
    }

    interface AppToolbox {

    }

    interface AppTos {

    }

    interface OpenForgeApp {

    }
  }


    interface HTMLAppCarouselIndicatorsElement extends StencilComponents.AppCarouselIndicators, HTMLStencilElement {}

    var HTMLAppCarouselIndicatorsElement: {
      prototype: HTMLAppCarouselIndicatorsElement;
      new (): HTMLAppCarouselIndicatorsElement;
    };


    interface HTMLAppCtaElement extends StencilComponents.AppCta, HTMLStencilElement {}

    var HTMLAppCtaElement: {
      prototype: HTMLAppCtaElement;
      new (): HTMLAppCtaElement;
    };


    interface HTMLAppFooterElement extends StencilComponents.AppFooter, HTMLStencilElement {}

    var HTMLAppFooterElement: {
      prototype: HTMLAppFooterElement;
      new (): HTMLAppFooterElement;
    };


    interface HTMLAppImgElement extends StencilComponents.AppImg, HTMLStencilElement {}

    var HTMLAppImgElement: {
      prototype: HTMLAppImgElement;
      new (): HTMLAppImgElement;
    };


    interface HTMLLazyImgElement extends StencilComponents.LazyImg, HTMLStencilElement {}

    var HTMLLazyImgElement: {
      prototype: HTMLLazyImgElement;
      new (): HTMLLazyImgElement;
    };


    interface HTMLAppInputElement extends StencilComponents.AppInput, HTMLStencilElement {}

    var HTMLAppInputElement: {
      prototype: HTMLAppInputElement;
      new (): HTMLAppInputElement;
    };


    interface HTMLAppMembersElement extends StencilComponents.AppMembers, HTMLStencilElement {}

    var HTMLAppMembersElement: {
      prototype: HTMLAppMembersElement;
      new (): HTMLAppMembersElement;
    };


    interface HTMLAppNavHeaderElement extends StencilComponents.AppNavHeader, HTMLStencilElement {}

    var HTMLAppNavHeaderElement: {
      prototype: HTMLAppNavHeaderElement;
      new (): HTMLAppNavHeaderElement;
    };


    interface HTMLAppRadioElement extends StencilComponents.AppRadio, HTMLStencilElement {}

    var HTMLAppRadioElement: {
      prototype: HTMLAppRadioElement;
      new (): HTMLAppRadioElement;
    };


    interface HTMLAppSliderElement extends StencilComponents.AppSlider, HTMLStencilElement {}

    var HTMLAppSliderElement: {
      prototype: HTMLAppSliderElement;
      new (): HTMLAppSliderElement;
    };


    interface HTMLAppTextareaElement extends StencilComponents.AppTextarea, HTMLStencilElement {}

    var HTMLAppTextareaElement: {
      prototype: HTMLAppTextareaElement;
      new (): HTMLAppTextareaElement;
    };


    interface HTMLAppTranslateElement extends StencilComponents.AppTranslate, HTMLStencilElement {}

    var HTMLAppTranslateElement: {
      prototype: HTMLAppTranslateElement;
      new (): HTMLAppTranslateElement;
    };


    interface HTMLContentGraphicElement extends StencilComponents.ContentGraphic, HTMLStencilElement {}

    var HTMLContentGraphicElement: {
      prototype: HTMLContentGraphicElement;
      new (): HTMLContentGraphicElement;
    };


    interface HTMLApp404Element extends StencilComponents.App404, HTMLStencilElement {}

    var HTMLApp404Element: {
      prototype: HTMLApp404Element;
      new (): HTMLApp404Element;
    };


    interface HTMLAppAboutElement extends StencilComponents.AppAbout, HTMLStencilElement {}

    var HTMLAppAboutElement: {
      prototype: HTMLAppAboutElement;
      new (): HTMLAppAboutElement;
    };


    interface HTMLAppCaseStudyElement extends StencilComponents.AppCaseStudy, HTMLStencilElement {}

    var HTMLAppCaseStudyElement: {
      prototype: HTMLAppCaseStudyElement;
      new (): HTMLAppCaseStudyElement;
    };


    interface HTMLAppContactElement extends StencilComponents.AppContact, HTMLStencilElement {}

    var HTMLAppContactElement: {
      prototype: HTMLAppContactElement;
      new (): HTMLAppContactElement;
    };


    interface HTMLAppDetailedServiceElement extends StencilComponents.AppDetailedService, HTMLStencilElement {}

    var HTMLAppDetailedServiceElement: {
      prototype: HTMLAppDetailedServiceElement;
      new (): HTMLAppDetailedServiceElement;
    };


    interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

    var HTMLAppHomeElement: {
      prototype: HTMLAppHomeElement;
      new (): HTMLAppHomeElement;
    };


    interface HTMLAppOpportunitiesElement extends StencilComponents.AppOpportunities, HTMLStencilElement {}

    var HTMLAppOpportunitiesElement: {
      prototype: HTMLAppOpportunitiesElement;
      new (): HTMLAppOpportunitiesElement;
    };


    interface HTMLAppResourcesElement extends StencilComponents.AppResources, HTMLStencilElement {}

    var HTMLAppResourcesElement: {
      prototype: HTMLAppResourcesElement;
      new (): HTMLAppResourcesElement;
    };


    interface HTMLAppServiceLevelAgreementElement extends StencilComponents.AppServiceLevelAgreement, HTMLStencilElement {}

    var HTMLAppServiceLevelAgreementElement: {
      prototype: HTMLAppServiceLevelAgreementElement;
      new (): HTMLAppServiceLevelAgreementElement;
    };


    interface HTMLAppTeamLandingElement extends StencilComponents.AppTeamLanding, HTMLStencilElement {}

    var HTMLAppTeamLandingElement: {
      prototype: HTMLAppTeamLandingElement;
      new (): HTMLAppTeamLandingElement;
    };


    interface HTMLAppToolboxElement extends StencilComponents.AppToolbox, HTMLStencilElement {}

    var HTMLAppToolboxElement: {
      prototype: HTMLAppToolboxElement;
      new (): HTMLAppToolboxElement;
    };


    interface HTMLAppTosElement extends StencilComponents.AppTos, HTMLStencilElement {}

    var HTMLAppTosElement: {
      prototype: HTMLAppTosElement;
      new (): HTMLAppTosElement;
    };


    interface HTMLOpenForgeAppElement extends StencilComponents.OpenForgeApp, HTMLStencilElement {}

    var HTMLOpenForgeAppElement: {
      prototype: HTMLOpenForgeAppElement;
      new (): HTMLOpenForgeAppElement;
    };


  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'app-carousel-indicators': JSXElements.AppCarouselIndicatorsAttributes;
    'app-cta': JSXElements.AppCtaAttributes;
    'app-footer': JSXElements.AppFooterAttributes;
    'app-img': JSXElements.AppImgAttributes;
    'lazy-img': JSXElements.LazyImgAttributes;
    'app-input': JSXElements.AppInputAttributes;
    'app-members': JSXElements.AppMembersAttributes;
    'app-nav-header': JSXElements.AppNavHeaderAttributes;
    'app-radio': JSXElements.AppRadioAttributes;
    'app-slider': JSXElements.AppSliderAttributes;
    'app-textarea': JSXElements.AppTextareaAttributes;
    'app-translate': JSXElements.AppTranslateAttributes;
    'content-graphic': JSXElements.ContentGraphicAttributes;
    'app-404': JSXElements.App404Attributes;
    'app-about': JSXElements.AppAboutAttributes;
    'app-case-study': JSXElements.AppCaseStudyAttributes;
    'app-contact': JSXElements.AppContactAttributes;
    'app-detailed-service': JSXElements.AppDetailedServiceAttributes;
    'app-home': JSXElements.AppHomeAttributes;
    'app-opportunities': JSXElements.AppOpportunitiesAttributes;
    'app-resources': JSXElements.AppResourcesAttributes;
    'app-service-level-agreement': JSXElements.AppServiceLevelAgreementAttributes;
    'app-team-landing': JSXElements.AppTeamLandingAttributes;
    'app-toolbox': JSXElements.AppToolboxAttributes;
    'app-tos': JSXElements.AppTosAttributes;
    'open-forge-app': JSXElements.OpenForgeAppAttributes;
    }
  }

  namespace JSXElements {

    export interface AppCarouselIndicatorsAttributes extends HTMLAttributes {
      'activeIndex'?: string;
    }

    export interface AppCtaAttributes extends HTMLAttributes {

    }

    export interface AppFooterAttributes extends HTMLAttributes {

    }

    export interface AppImgAttributes extends HTMLAttributes {
      'alt'?: string;
      'fit'?: boolean;
      'preLoad'?: boolean;
      'src'?: string;
    }

    export interface LazyImgAttributes extends HTMLAttributes {
      'alt'?: string;
      'onLazyImgloaded'?: (event: CustomEvent<HTMLImageElement>) => void;
      'src'?: string;
      'width'?: number;
    }

    export interface AppInputAttributes extends HTMLAttributes {
      'id'?: string;
      'label'?: string;
      'maxlength'?: string;
      'name'?: string;
      'onValueChange'?: (event: CustomEvent) => void;
      'placeholder'?: string;
      'required'?: boolean;
      'type'?: string;
    }

    export interface AppMembersAttributes extends HTMLAttributes {
      'members'?: any[];
    }

    export interface AppNavHeaderAttributes extends HTMLAttributes {

    }

    export interface AppRadioAttributes extends HTMLAttributes {
      'label'?: string;
      'name'?: string;
      'onValueChange'?: (event: CustomEvent) => void;
      'required'?: boolean;
      'value'?: string;
    }

    export interface AppSliderAttributes extends HTMLAttributes {
      'label'?: string;
      'name'?: string;
      'onValueChange'?: (event: CustomEvent) => void;
    }

    export interface AppTextareaAttributes extends HTMLAttributes {
      'id'?: string;
      'label'?: string;
      'maxlength'?: string;
      'name'?: string;
      'onValueChange'?: (event: CustomEvent) => void;
      'placeholder'?: string;
      'required'?: boolean;
      'rows'?: number;
    }

    export interface AppTranslateAttributes extends HTMLAttributes {
      'key'?: string;
      'params'?: {};
    }

    export interface ContentGraphicAttributes extends HTMLAttributes {
      'imgUrl'?: string;
      'preLoadImg'?: boolean;
      'reverse'?: boolean;
    }

    export interface App404Attributes extends HTMLAttributes {

    }

    export interface AppAboutAttributes extends HTMLAttributes {

    }

    export interface AppCaseStudyAttributes extends HTMLAttributes {

    }

    export interface AppContactAttributes extends HTMLAttributes {
      'errorIconStyles'?: any;
    }

    export interface AppDetailedServiceAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
      'match'?: MatchResults;
    }

    export interface AppHomeAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
    }

    export interface AppOpportunitiesAttributes extends HTMLAttributes {
      'errorIconStyles'?: any;
      'history'?: RouterHistory;
      'match'?: MatchResults;
    }

    export interface AppResourcesAttributes extends HTMLAttributes {
      'errorIconStyles'?: any;
      'history'?: RouterHistory;
      'match'?: MatchResults;
    }

    export interface AppServiceLevelAgreementAttributes extends HTMLAttributes {

    }

    export interface AppTeamLandingAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
      'match'?: MatchResults;
    }

    export interface AppToolboxAttributes extends HTMLAttributes {

    }

    export interface AppTosAttributes extends HTMLAttributes {

    }

    export interface OpenForgeAppAttributes extends HTMLAttributes {

    }
  }

  interface HTMLElementTagNameMap {
    'app-carousel-indicators': HTMLAppCarouselIndicatorsElement
    'app-cta': HTMLAppCtaElement
    'app-footer': HTMLAppFooterElement
    'app-img': HTMLAppImgElement
    'lazy-img': HTMLLazyImgElement
    'app-input': HTMLAppInputElement
    'app-members': HTMLAppMembersElement
    'app-nav-header': HTMLAppNavHeaderElement
    'app-radio': HTMLAppRadioElement
    'app-slider': HTMLAppSliderElement
    'app-textarea': HTMLAppTextareaElement
    'app-translate': HTMLAppTranslateElement
    'content-graphic': HTMLContentGraphicElement
    'app-404': HTMLApp404Element
    'app-about': HTMLAppAboutElement
    'app-case-study': HTMLAppCaseStudyElement
    'app-contact': HTMLAppContactElement
    'app-detailed-service': HTMLAppDetailedServiceElement
    'app-home': HTMLAppHomeElement
    'app-opportunities': HTMLAppOpportunitiesElement
    'app-resources': HTMLAppResourcesElement
    'app-service-level-agreement': HTMLAppServiceLevelAgreementElement
    'app-team-landing': HTMLAppTeamLandingElement
    'app-toolbox': HTMLAppToolboxElement
    'app-tos': HTMLAppTosElement
    'open-forge-app': HTMLOpenForgeAppElement
  }

  interface ElementTagNameMap {
    'app-carousel-indicators': HTMLAppCarouselIndicatorsElement;
    'app-cta': HTMLAppCtaElement;
    'app-footer': HTMLAppFooterElement;
    'app-img': HTMLAppImgElement;
    'lazy-img': HTMLLazyImgElement;
    'app-input': HTMLAppInputElement;
    'app-members': HTMLAppMembersElement;
    'app-nav-header': HTMLAppNavHeaderElement;
    'app-radio': HTMLAppRadioElement;
    'app-slider': HTMLAppSliderElement;
    'app-textarea': HTMLAppTextareaElement;
    'app-translate': HTMLAppTranslateElement;
    'content-graphic': HTMLContentGraphicElement;
    'app-404': HTMLApp404Element;
    'app-about': HTMLAppAboutElement;
    'app-case-study': HTMLAppCaseStudyElement;
    'app-contact': HTMLAppContactElement;
    'app-detailed-service': HTMLAppDetailedServiceElement;
    'app-home': HTMLAppHomeElement;
    'app-opportunities': HTMLAppOpportunitiesElement;
    'app-resources': HTMLAppResourcesElement;
    'app-service-level-agreement': HTMLAppServiceLevelAgreementElement;
    'app-team-landing': HTMLAppTeamLandingElement;
    'app-toolbox': HTMLAppToolboxElement;
    'app-tos': HTMLAppTosElement;
    'open-forge-app': HTMLOpenForgeAppElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

