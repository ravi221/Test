import FormControlState from './form-control-state';
import QuestionConfig from './question-config';

export default class SectionConfig {
  id: string;
  order: number;
  label: string;
  state: FormControlState;
  questions: Map<string, QuestionConfig>;

  constructor(json: any, key: string) {
    this.id = key;
    this.order = json.order;
    this.label = json.label;
    this.state = new FormControlState(json.state);
    this.questions = new Map<string, QuestionConfig>();
    for (let key in json.questions) {
      this.questions.set(key, new QuestionConfig(json.questions[key], key));
    }
  }

  getQuestionsArray(): Array<QuestionConfig> {
    return Array.from(this.questions.keys()).map(key => this.questions.get(key)).sort((n1, n2) => n1.order - n2.order);
  }
}
