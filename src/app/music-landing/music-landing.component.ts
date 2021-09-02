import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../shared/service/music.data.service';
import * as _ from 'lodash';

interface Band {
  band: string;
  festival: string;
}

interface Festival {
  name: string;
  bands: Band[];
}

interface MasterLabel {
  recordLabelname: string;
  bands: Band[];
}

@Component({
  selector: 'app-music-landing',
  templateUrl: './music-landing.component.html',
  styleUrls: ['./music-landing.component.scss'],
})
export class MusicLandingComponent implements OnInit {
  jsonobj: any;

  errorMessage = '';
  errorStatus: boolean = false;

  recordLabelAry: string[] = [];
  masterLabelAry: any[] = [];

  bandObj = {
    bandname: '',
    festivals: [],
  };

  constructor(private dataservice: MusicDataService) {}

  ngOnInit() {
    this.getfestivalData();
  }
  getfestivalData() {
    this.dataservice.getMusicFestivals().subscribe(
      (res) => {
        if (res.length == 0) {
          this.errorStatus = true;
          this.errorMessage = 'Empty response';
        }

        this.jsonobj = res;

        this.getDistinctRecordLabels();
        this.normalizeData();
        this.sortList();
      },
      (err) => {
        console.log('http error', err);
        this.errorStatus = true;
        this.errorMessage = err.statusText;
      }
    );
  }

  RefreshData() {
    this.errorStatus = false;
    this.jsonobj = [];
    this.recordLabelAry = [];

    this.masterLabelAry = [];
    this.getfestivalData();
  }

  getDistinctRecordLabels() {
    _.forEach(this.jsonobj, (festival) => {
      _.forEach(festival.bands, (band) => {
        if (band.recordLabel) {

          this.recordLabelAry.push(band.recordLabel);
        }
      });
    });

    //removing duplicates of recordLabel
    this.recordLabelAry = this.recordLabelAry.filter(
      (el, i, a) => i === a.indexOf(el)
    );
  }

  normalizeData() {
    for (let i = 0; i < this.recordLabelAry.length; i++) {
      let recordLabeltemp: string = this.recordLabelAry[i];
      let bands: Object[] = [];
      let recordLabelObj = {
        recordLabelname: recordLabeltemp,
        bands: bands,
      };

      _.forEach(this.jsonobj, (festival) => {
        _.forEach(festival.bands, (band) => {
          let name: string = band.name;

          let banddObj = {
            band: name,
            festival: '',
          };

          if (band.recordLabel && band.recordLabel === recordLabeltemp) {
            if (festival.name) {
              banddObj.festival = festival.name;
            } else {
              banddObj.festival = 'n/a';
            }
            recordLabelObj.bands.push(banddObj);
          }
        });
      });

      this.masterLabelAry.push(recordLabelObj);
    }
  }

  sortList() {
    _.forEach(this.masterLabelAry, (record) => {
      let tmporderlistBands = record.bands;
      tmporderlistBands = _.orderBy(tmporderlistBands, ['band'], ['asc']);
      record.bands = tmporderlistBands;
    });

    let festivalstemp = this.masterLabelAry;
    festivalstemp = _.orderBy(festivalstemp, ['recordLabelname'], ['asc']);
    this.masterLabelAry = festivalstemp;
  }
}
