import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import SectionConfig from '../../config/section-config';
import Entity from "../../../entity/entity";

@Component({
  selector: 'dynamic-sections',
  template: `
    <ul class="nav-list-stacked">
      <li *ngFor="let sectionConfig of sections" [hidden]="sectionConfig.state.isHidden"
          [class]="sectionConfig.id === activeId ? 'active' : ''">
        <a (click)="switchSection(sectionConfig)"
           [class]="sectionConfig.state.isDisabled ? 'disabled' : ''">{{sectionConfig.label}}</a>
      </li>
    </ul>
  `,
  styleUrls: ['./dynamic-sections.component.scss']
})
export class DynamicSectionsComponent implements OnInit {

  @Input() sections: Array<SectionConfig>;
  @Input() model: Entity;
  @Output() sectionChanged: EventEmitter<SectionConfig> = new EventEmitter();
  activeId: string;

  constructor() {
  }

  ngOnInit() {
    this.activeId = this.sections[0].id;
  }

  switchSection(e) {
    if (e.id !== this.activeId) {
      const section = this.model.getSectionById(e.id);
      if (section.state.isDisabled || section.state.isHidden) return;
      this.activeId = e.id;
      this.sectionChanged.emit(section);
    }
  }

}
