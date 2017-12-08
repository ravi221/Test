import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPlan} from '../../interfaces/iPlan';
import SectionConfig from '../../../dynamic-forms/config/section-config';
import {ViewConfigDataService} from '../../services/view-config-data.service';
import {DataStorageService} from '../../services/data-storage.service';
import {LogService} from '../../../core/services/log.service';
import Entity from '../../../entity/entity';

@Component({
  selector: 'app-plan-details',
  template: `
    <div *ngIf="entity">
      <div class="col-md-2">
        <dynamic-sections
          [sections]="sectionConfig"
          [model]="entity"
          (sectionChanged)="switchSection($event)">
        </dynamic-sections>
      </div>

      <div class="card col-md-10">
        <dynamic-form
          [config]="activeSection"
          [model]="entity"
          (valueChanged)="onChildChange($event)">
        </dynamic-form>
        <div class="controls text-right">
          <button class="btn btn-secondary" (click)="validate()">VALIDATE</button>
        </div>
      </div>
      <app-snack-bar [model]="entity" (onSaveClicked)="save()"></app-snack-bar>
    </div>`,
  styleUrls: ['./plan-entry.component.scss']
})
export class PlanEntryComponent implements OnInit {
  entity: Entity;
  sectionConfig: Array<SectionConfig>;
  activeSection: SectionConfig;

  constructor(private _route: ActivatedRoute, private _viewConfigDataService: ViewConfigDataService, private _log: LogService, private _dataService: DataStorageService) {
  }

  ngOnInit() {
    this._route.data.subscribe((data: { PLN: IPlan }) => {
      let plan = data.PLN;
      this._log.info(`Successfully loaded plan ${plan.PLN_ID}`);
      this._viewConfigDataService.getView(plan.CVR_ID)
        .subscribe(formConfig => {
          this._log.info(`Successfully loaded view config for coverage ${plan.CVR_ID}`);
          this.sectionConfig = formConfig.getSectionsArray();
          this.activeSection = this.sectionConfig[0];
          this.entity = new Entity(plan, formConfig);
        });
    });
  }

  switchSection(section) {
    this.activeSection = section;
  }

  save(): void {
    const payload = this.entity.toJS();
    const id = this.entity.getIn('PLN_ID');
    this._dataService
      .save(id, payload)
      .subscribe((response) => {
          this._log.info(response);
        });
  }

  validate(): void {
    // TODO: Hook in validation to PPC
  }

}
