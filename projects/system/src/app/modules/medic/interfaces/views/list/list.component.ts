import { Component, Inject, OnInit } from '@angular/core';

import { HandleException, IProduct, Logger, NewTokenMyLogger, OtherTokenMyLogger, tokenLogger, TokenMyLogger} from 'projects/system/src/app/app.module';

@Component({
  selector: 'amb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private readonly userInfo: { name: string; age: number };

  constructor(
    //@Inject('MyLogger') private readonly logger: Logger,
    @Inject(TokenMyLogger) private readonly logger: Logger,
    @Inject('HandleError') private readonly handle: HandleException,
    @Inject(Logger) private readonly logger2: Logger,
    private readonly logger3: Logger,
    @Inject('MY_DATA') private readonly data: string,
    @Inject('USER_INFO')
    userInfo: { name: string; age: number },
    @Inject('MY_DATA2') private readonly data2: string,
    @Inject('MY_SERVICE') private readonly service: IProduct,
    @Inject(NewTokenMyLogger) private readonly logger4: Logger,
    @Inject(OtherTokenMyLogger) private readonly instance: any,
    @Inject(tokenLogger) private readonly logger5: Logger
  ) {
    logger5.info('hola mundo');
    console.log('instance: ', instance);
    logger4.info('Using useExisting');
    console.log(service.getAll());
    logger3.info('ListComponent');
    this.userInfo = userInfo;
    console.log('data', data);
    console.log('data2', data2);
    console.log('userInfo', userInfo);


    handle.handle(new Error('Error'));
  }

  ngOnInit(): void {
    //this.userInfo = { name: 'John', age: 30 };
  }
}
