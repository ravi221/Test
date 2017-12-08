import remixDSL from 'remix-dsl';
import * as Common from 'remix-common-rules';
import RuleConfig from '../dynamic-forms/config/rule-config';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {IObservedItem} from '../core/interfaces/iObservedItem';

export default class DSL {

  private dsl = remixDSL();
  private contextBuilder = Common['Context'];
  private ruleSubject: Subject<IObservedItem> = new Subject<IObservedItem>();
  ruleSource: Observable<IObservedItem> = this.ruleSubject.asObservable();

  constructor() {
  }

  execute = (id: string, configuration: Array<RuleConfig>, context: any) => {
    const rule = this.dsl.compile(configuration);

    const defaultContext = typeof context.setIn  === 'function' ? context : this.contextBuilder(context);

    const promise = rule(defaultContext);

    promise
      .then((ctx) => {
        this.ruleSubject.next(<IObservedItem>{id: id, previousValue: defaultContext, currentValue: ctx});
      })
      .catch((error) => console.error(error));

    return promise;
  }

  register = (name: string, callback: any) => {
    this.dsl.register(name, callback);
  }
}
