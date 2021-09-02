import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLandingComponent } from './music-landing.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MusicLandingComponent', () => {
  let component: MusicLandingComponent;
  let fixture: ComponentFixture<MusicLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MusicLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check error status', () => {
    component.errorStatus = true;
    component.RefreshData();
    expect(component.errorStatus).toEqual(false);
  });

  it('check getDistinctRecordLabels set the recordsLabelArray with data', () => {
    component.jsonobj = [
      {
        "bands": [
          {
            "name": "Critter Girls",
            "recordLabel": "ACR"
          },
          {
            "name": "Propeller",
            "recordLabel": "Pacific Records"
          }
        ]
      },
      {
        "name": "LOL-palooza",
        "bands": [
          {
            "name": "Winter Primates",
            "recordLabel": ""
          },
          {
            "name": "Frank Jupiter",
            "recordLabel": "Pacific Records"
          },
          {
            "name": "Jill Black",
            "recordLabel": "Fourth Woman Records"
          },
          {
            "name": "Werewolf Weekday",
            "recordLabel": "XS Recordings"
          }
        ]
      },
      {
        "name": "Small Night In",
        "bands": [
          {
            "name": "Wild Antelope",
            "recordLabel": "Marner Sis. Recording"
          },
          {
            "name": "Squint-281",
            "recordLabel": "Outerscope"
          },
          {
            "name": "The Black Dashes",
            "recordLabel": "Fourth Woman Records"
          },
          {
            "name": "Yanke East",
            "recordLabel": "MEDIOCRE Music"
          },
          {
            "name": "Green Mild Cold Capsicum",
            "recordLabel": "Marner Sis. Recording"
          }
        ]
      },
      {
        "name": "Twisted Tour",
        "bands": [
          {
            "name": "Auditones",
            "recordLabel": "Marner Sis. Recording"
          },
          {
            "name": "Summon",
            "recordLabel": "Outerscope"
          },
          {
            "name": "Squint-281"
          }
        ]
      },
      {
        "name": "Trainerella",
        "bands": [
          {
            "name": "Wild Antelope",
            "recordLabel": "Still Bottom Records"
          },
          {
            "name": "Manish Ditch",
            "recordLabel": "ACR"
          },
          {
            "name": "Adrian Venti",
            "recordLabel": "Monocracy Records"
          },
          {
            "name": "YOUKRANE",
            "recordLabel": "Anti Records"
          }
        ]
      }
    ];
    component.getDistinctRecordLabels();

    expect(component.recordLabelAry.length > 0).toEqual(true);
  });


  it('check if masterArray is loaded after function calls', () => {
    component.jsonobj = [
      {
        "bands": [
          {
            "name": "Critter Girls",
            "recordLabel": "ACR"
          },
          {
            "name": "Propeller",
            "recordLabel": "Pacific Records"
          }
        ]
      },
      {
        "name": "LOL-palooza",
        "bands": [
          {
            "name": "Winter Primates",
            "recordLabel": ""
          },
          {
            "name": "Frank Jupiter",
            "recordLabel": "Pacific Records"
          },
          {
            "name": "Jill Black",
            "recordLabel": "Fourth Woman Records"
          },
          {
            "name": "Werewolf Weekday",
            "recordLabel": "XS Recordings"
          }
        ]
      },
      {
        "name": "Small Night In",
        "bands": [
          {
            "name": "Wild Antelope",
            "recordLabel": "Marner Sis. Recording"
          },
          {
            "name": "Squint-281",
            "recordLabel": "Outerscope"
          },
          {
            "name": "The Black Dashes",
            "recordLabel": "Fourth Woman Records"
          },
          {
            "name": "Yanke East",
            "recordLabel": "MEDIOCRE Music"
          },
          {
            "name": "Green Mild Cold Capsicum",
            "recordLabel": "Marner Sis. Recording"
          }
        ]
      },
      {
        "name": "Twisted Tour",
        "bands": [
          {
            "name": "Auditones",
            "recordLabel": "Marner Sis. Recording"
          },
          {
            "name": "Summon",
            "recordLabel": "Outerscope"
          },
          {
            "name": "Squint-281"
          }
        ]
      },
      {
        "name": "Trainerella",
        "bands": [
          {
            "name": "Wild Antelope",
            "recordLabel": "Still Bottom Records"
          },
          {
            "name": "Manish Ditch",
            "recordLabel": "ACR"
          },
          {
            "name": "Adrian Venti",
            "recordLabel": "Monocracy Records"
          },
          {
            "name": "YOUKRANE",
            "recordLabel": "Anti Records"
          }
        ]
      }
    ];
    component.getDistinctRecordLabels();
    component.normalizeData();

    expect(component.masterLabelAry.length > 0).toEqual(true);
  });


  it('check if all function including sorting returns master array ', () => {
    component.jsonobj = [
      {
        "bands": [
          {
            "name": "Critter Girls",
            "recordLabel": "ACR"
          },
          {
            "name": "Propeller",
            "recordLabel": "Pacific Records"
          }
        ]
      },
      {
        "name": "LOL-palooza",
        "bands": [
          {
            "name": "Winter Primates",
            "recordLabel": ""
          },
          {
            "name": "Frank Jupiter",
            "recordLabel": "Pacific Records"
          },
          {
            "name": "Jill Black",
            "recordLabel": "Fourth Woman Records"
          },
          {
            "name": "Werewolf Weekday",
            "recordLabel": "XS Recordings"
          }
        ]
      },
      {
        "name": "Small Night In",
        "bands": [
          {
            "name": "Wild Antelope",
            "recordLabel": "Marner Sis. Recording"
          },
          {
            "name": "Squint-281",
            "recordLabel": "Outerscope"
          },
          {
            "name": "The Black Dashes",
            "recordLabel": "Fourth Woman Records"
          },
          {
            "name": "Yanke East",
            "recordLabel": "MEDIOCRE Music"
          },
          {
            "name": "Green Mild Cold Capsicum",
            "recordLabel": "Marner Sis. Recording"
          }
        ]
      },
      {
        "name": "Twisted Tour",
        "bands": [
          {
            "name": "Auditones",
            "recordLabel": "Marner Sis. Recording"
          },
          {
            "name": "Summon",
            "recordLabel": "Outerscope"
          },
          {
            "name": "Squint-281"
          }
        ]
      },
      {
        "name": "Trainerella",
        "bands": [
          {
            "name": "Wild Antelope",
            "recordLabel": "Still Bottom Records"
          },
          {
            "name": "Manish Ditch",
            "recordLabel": "ACR"
          },
          {
            "name": "Adrian Venti",
            "recordLabel": "Monocracy Records"
          },
          {
            "name": "YOUKRANE",
            "recordLabel": "Anti Records"
          }
        ]
      }
    ];

    let testExpectedJson = [
      {
        "name": "Trainerella",
        "bands": [
          {
            "name": "Wild Antelope",
            "recordLabel": "Still Bottom Records"
          },
          {
            "name": "Manish Ditch",
            "recordLabel": "ACR"
          },
          {
            "name": "Adrian Venti",
            "recordLabel": "Monocracy Records"
          },
          {
            "name": "YOUKRANE",
            "recordLabel": "Anti Records"
          }
        ]
      },
      {
        "name": "LOL-palooza",
        "bands": [
          {
            "name": "Winter Primates",
            "recordLabel": ""
          },
          {
            "name": "Frank Jupiter",
            "recordLabel": "Pacific Records"
          },
          {
            "name": "Jill Black",
            "recordLabel": "Fourth Woman Records"
          },
          {
            "name": "Werewolf Weekday",
            "recordLabel": "XS Recordings"
          }
        ]
      },
      {
        "name": "Twisted Tour",
        "bands": [
          {
            "name": "Summon",
            "recordLabel": "Outerscope"
          },
          {
            "name": "Auditones",
            "recordLabel": "Marner Sis. Recording"
          },
          {
            "name": "Squint-281"
          }
        ]
      }
    ];
    component.getDistinctRecordLabels();
    component.normalizeData();
    component.sortList();
    

    expect(component.masterLabelAry.length>0).toEqual(true);
  }); 

  



});
