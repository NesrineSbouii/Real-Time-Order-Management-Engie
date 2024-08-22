import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { ordersFeatureKey, ordersReducer } from '@features/dashboard/store/reducers';
import { provideEffects } from '@ngrx/effects';
import { OrdersEffects } from '@features/dashboard/store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore({
    orders: ordersReducer
  }), provideEffects(OrdersEffects), importProvidersFrom(StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: !isDevMode(),
    autoPause: true,
    trace: false,
    traceLimit: 75,
    connectInZone: true
  }))
  ]
};
