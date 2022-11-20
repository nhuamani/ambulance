import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicModule } from './modules/medic/medic.module';

export class Logger {
  info(message: string) {
    console.log(message);
  }
}

export class HandleException {
  handle(error: Error) {
    console.error(error);
  }
}

export class TokenMyLogger {}
export class NewTokenMyLogger {}
export class OtherTokenMyLogger {}

export const tokenLogger = new InjectionToken('MyLog');

export interface IProduct {
  getAll(): string[];
}

export class ProductService implements IProduct {
  getAll() {
    return ['product1', 'product2'];
  }
}

export class FakeProductService implements IProduct {
  getAll() {
    return ['fakeproduct1', 'fakeproduct2'];
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MedicModule
  ],
  providers: [
    { provide: tokenLogger, useClass: Logger },
    { provide: 'IsFake', useValue: true }, // useValue: false
    {
      provide: 'MY_SERVICE',
      useFactory: (isFake: boolean) => {
        if (isFake) {
          return new FakeProductService();
        }
        return new ProductService();
      },
      deps: ['IsFake'],
    },
    { provide: 'MyLogger', useClass: Logger },
    { provide: 'HandleError', useClass: HandleException },
    { provide: NewTokenMyLogger, useExisting: TokenMyLogger },
    { provide: TokenMyLogger, useClass: Logger },
    /*  { provide: Logger, useClass: Logger }, */
    Logger,
    { provide: 'MY_DATA', useValue: 'Hello World' },
    { provide: 'USER_INFO', useValue: { name: 'John', age: 30 } },
    { provide: 'MY_NAME', useValue: 'Sergio' },
    {
      provide: 'MY_DATA2',
      useFactory: (name: string, logger: Logger) => {
        logger.info('useFactory');
        return `Hello ${name}`;
      },
      deps: ['MY_NAME', TokenMyLogger],
    },
    { provide: OtherTokenMyLogger, useClass: HandleException },
    { provide: OtherTokenMyLogger, useClass: Logger },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
