import QuestionConfig from './question-config';
import SectionConfig from './section-config';
import {Observable, Subject} from "rxjs";
import {IFormState} from "../../core/interfaces/iFormState";

export default class DynamicFormConfig {

  private formSubject: Subject<IFormState> = new Subject<IFormState>();
  source: Observable<IFormState> = this.formSubject.asObservable();

  id: string;
  version: string;
  title: string;
  sections: Map<string, SectionConfig>;
  questionsById: Map<string, QuestionConfig>;
  sectionsById: Map<string, SectionConfig>;

  constructor(json: any) {
    this.id = json.id;
    this.version = json.version;
    this.title = json.title;
    this.sections = new Map<string, SectionConfig>();
    for (let key in json.sections) {
      this.sections.set(key, new SectionConfig(json.sections[key], key));
    }
    this.initializeMap();
  }

  getQuestion(id: string) {
    if (id) {
      return this.questionsById.get(id);
    }
  }

  getControl(id: string) {
    if (id) {
      return this.questionsById.get(id).control;
    }
  }

  getPath(id: string) {
    if (id) {
      return this.questionsById.get(id).model;
    }
  }

  getRules(id: string) {
    if (id) {
      return this.questionsById.get(id).rules;
    }
  }

  getSchema(id: string) {
    if (id) {
      return this.questionsById.get(id).schema;
    }
  }

  getId(prop: string, value: any) {
    return Array.from(this.questionsById.keys()).find(key => this.questionsById.get(key)[prop] === value);
  }

  getSection(id: string) {
    if (id) {
      return this.sectionsById.get(id);
    }
  }

  getSectionsArray(): Array<SectionConfig> {
    return Array.from(this.sections.keys()).map(key => this.sections.get(key)).sort((n1, n2) => n1.order - n2.order);
  }

  emitFormChange(newState:IFormState): void {
    this.formSubject.next(newState);
  }

  private initializeMap(): void {
    this.sectionsById = new Map<string, SectionConfig>();
    this.questionsById = new Map<string, QuestionConfig>();
    this.sections.forEach((sectionConfig, key) => {
      this.sectionsById.set(key, sectionConfig);
      sectionConfig.questions.forEach((questionConfig, fieldId) => {
        this.questionsById.set(fieldId, questionConfig);
      });
    });
  }
}








