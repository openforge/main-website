import '@stencil/router';
import { Component } from '@stencil/core';
import { polyfill } from 'smoothscroll-polyfill';

polyfill();

@Component({
  tag: 'open-forge-app',
  styleUrl: 'open-forge-app.scss',
})
export class OpenForgeApp {
  mainEl: HTMLElement;
  newServiceWorker: boolean = false;

  componentDidLoad() {
    try {
      this.mainEl = document.querySelector('app-nav-header');
    } catch (e) {
      console.error('caught error componentDidLoad open-forge-app', e);
    }

    if (this.mainEl) {
      this.mainEl.addEventListener('click', ev => {
        if (ev.srcElement.classList.contains('dropdown-toggle')) {
          return;
        }
        const opened = document.getElementsByClassName('navbar-collapse show');
        if (opened.length > 0) {
          const navbarButton: any = document.getElementsByClassName(
            'navbar-toggler'
          )[0];
          navbarButton.click();
        }
      });
    }
    console.log('new Service Worker available: ' + `${this.newServiceWorker}`);
  }

  onNewServiceWorker(registration, callback) {
    console.log('onNewServiceWorker called');
    if (registration.waiting) {
      return callback();
    }

    function listenInstalledStateChange() {
      registration.installing.addEventListener('statechange', event => {
        if (event.target.state === 'installed') {
          // A new service worker is available, so trigger the callback to inform the user
          callback();
        }
      });
    }

    if (registration.installing) {
      return listenInstalledStateChange();
    }

    // We are currently controlled so a new SW may be found...
    // Add a listener in case a new SW is found,
    registration.addEventListener('updatefound', listenInstalledStateChange);
  }

  listenForNewServiceWorker = window.addEventListener('load', event => {
    console.log('load event detected');
    console.log(event);
    console.log('listenForNewServiceWorker function called');
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('The Service Worker is registering');
      console.log(registration);
      // Track updates to the Service Worker
      if (!navigator.serviceWorker.controller) {
        console.log('This window client is not currently controlled');
        // The window client isn't currently controlled so it's a new service worker that will activate immediately
        return;
      }

      // When the user asks to refresh the UI, we'll need to reload the window
      let preventDevToolsReloadLoop;
      navigator.serviceWorker.addEventListener('controllerchange', event => {
        console.log('controllerchange event detected');
        console.log(event);
        // Ensure refresh is only called once.
        // This works around a bug in "force update on reload".
        if (preventDevToolsReloadLoop) return;
        preventDevToolsReloadLoop = true;
        window.location.reload();
      });

      setTimeout(
        this.onNewServiceWorker(registration, () => {
          console.log('new service worker detected');
          this.newServiceWorker = true;
        }),
        5000
      );
    });
  });

  // @Listen('load')
  // handleServiceWorker() {
  //   console.log('load event detected');
  //   console.log(event);
  //   console.log('listenForNewServiceWorker function called');
  //   navigator.serviceWorker.register('/sw.js').then(registration => {
  //     console.log('The Service Worker is registering');
  //     console.log(registration);
  //     // Track updates to the Service Worker
  //     if (!navigator.serviceWorker.controller) {
  //       console.log('This window client is not currently controlled');
  //       // The window client isn't currently controlled so it's a new service worker that will activate immediately
  //       return;
  //     }

  //     // When the user asks to refresh the UI, we'll need to reload the window
  //     let preventDevToolsReloadLoop;
  //     navigator.serviceWorker.addEventListener('controllerchange', (event) => {
  //       console.log('controllerchange event detected');
  //       console.log(event);
  //       // Ensure refresh is only called once.
  //       // This works around a bug in "force update on reload".
  //       if (preventDevToolsReloadLoop) return;
  //       preventDevToolsReloadLoop = true;
  //       console.log(event + ' Controller loaded');
  //       window.location.reload();
  //     });

  //     setTimeout(
  //       this.onNewServiceWorker(registration, () => {
  //       console.log('new service worker detected');
  //       this.newServiceWorker = true;
  //     })
  //     , 3000);
  //   });
  // }

  render() {
    return (
      <stencil-router>
        {/* <div>
          {this.newServiceWorker ? (
            <button class="sw">Here's a button</button>
          ) : (
            <span />
          )}
        </div> */}
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/404" component="app-404" exact={true} />
          <stencil-route url="/contact" component="app-contact" />
          <stencil-route
            url="/opportunities/:type"
            component="app-opportunities"
          />
          <stencil-route url="/about" component="app-about" exact={true} />
          <stencil-route url="/about/" component="app-about" exact={true} />
          <stencil-route url="/toolbox" component="app-toolbox" />
          <stencil-route
            url="/services/:service"
            component="app-detailed-service"
          />
          <stencil-route url="/resources/:source" component="app-resources" />
          <stencil-route url="/about/:member" component="app-team-landing" />
          <stencil-route url="/juntoscope" component="app-case-study" />
          <stencil-route url="/terms-of-service" component="app-tos" />
          <stencil-route
            url="/service-level-agreement"
            component="app-service-level-agreement"
          />
          <stencil-route component="app-home" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
