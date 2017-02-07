/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';

import { FamilyMemberComponent } from './family-member.component';
import { FamilyMemberViewModel, Coverage } from './model/family-member.viewmodel';

describe('FamilyMemberComponent', () => {
  let component: FamilyMemberComponent;
  let fixture: ComponentFixture<FamilyMemberComponent>;
  let nativeElement;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyMemberComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent<FamilyMemberComponent>(FamilyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.debugElement.nativeElement;
    debugElement = fixture.debugElement;
  });

  describe('Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Api', () => {
    describe('.familyMember', () => {
      it(`should be defined`, () => {
        expect(component.familyMember).toBeDefined();
      });

      it(`should be empty object`, () => {
        expect(component.familyMember).toEqual({});
      });
    });

    describe('.hasSicknessComplementaryRights()', () => {
      it('should be defined', () => {
        expect(FamilyMemberComponent.prototype.hasSicknessComplementaryRights).toEqual(jasmine.any(Function));
      })

      it('should return false when set to None', () => {
        component.familyMember.sicknessCoverage = Coverage.None;
        expect(component.hasSicknessComplementaryRights()).toBe(false);
      })

      it('should return true when set to Complementary', () => {
        component.familyMember.sicknessCoverage = Coverage.Complementary;
        expect(component.hasSicknessComplementaryRights()).toBe(true);
      })

      it('should return false when set to Full', () => {
        component.familyMember.sicknessCoverage = Coverage.Full;
        expect(component.hasSicknessComplementaryRights()).toBe(false);
      })
    });

    describe('.hasSicknessFullRights()', () => {
      it('should be defined', () => {
        expect(FamilyMemberComponent.prototype.hasSicknessFullRights).toEqual(jasmine.any(Function));
      })

      it('should return false when set to None', () => {
        component.familyMember.sicknessCoverage = Coverage.None;
        expect(component.hasSicknessFullRights()).toBe(false);
      })

      it('should return false when set to Complementary', () => {
        component.familyMember.sicknessCoverage = Coverage.Complementary;
        expect(component.hasSicknessFullRights()).toBe(false);
      })

      it('should return true when set to Full', () => {
        component.familyMember.sicknessCoverage = Coverage.Full;
        expect(component.hasSicknessFullRights()).toBe(true);
      })
    });

    describe('.hasAccidentComplementaryRights()', () => {
      it('should be defined', () => {
        expect(FamilyMemberComponent.prototype.hasAccidentComplementaryRights).toEqual(jasmine.any(Function));
      })

      it('should return false when set to None', () => {
        component.familyMember.accidentCoverage = Coverage.None;
        expect(component.hasAccidentComplementaryRights()).toBe(false);
      })

      it('should return true when set to Complementary', () => {
        component.familyMember.accidentCoverage = Coverage.Complementary;
        expect(component.hasAccidentComplementaryRights()).toBe(true);
      })

      it('should return false when set to Full', () => {
        component.familyMember.accidentCoverage = Coverage.Full;
        expect(component.hasAccidentComplementaryRights()).toBe(false);
      })
    });

    describe('.hasAccidentFullRights()', () => {
      it('should be defined', () => {
        expect(FamilyMemberComponent.prototype.hasAccidentFullRights).toEqual(jasmine.any(Function));
      })

      it('should return false when set to None', () => {
        component.familyMember.accidentCoverage = Coverage.None;
        expect(component.hasAccidentFullRights()).toBe(false);
      })

      it('should return false when set to Complementary', () => {
        component.familyMember.accidentCoverage = Coverage.Complementary;
        expect(component.hasAccidentFullRights()).toBe(false);
      })

      it('should return true when set to Full', () => {
        component.familyMember.accidentCoverage = Coverage.Full;
        expect(component.hasAccidentFullRights()).toBe(true);
      })
    });
  });

  describe('Markup', () => {
    it('should render proper root element', async(() => {
      let root = debugElement.query(By.css('.asm-family-member'));
      expect(root).not.toBeNull();
    }));

    describe('Selected / Unselected State', () => {
      it('should render properly when selected', async(() => {
        component.familyMember.selected = true;
        fixture.detectChanges();

        let root = debugElement.query(By.css('.asm-family-member'));
        expect(root.classes['asm-family-member--selected']).toBeTruthy();
      }));

      it('should render properly when unselected', async(() => {
        component.familyMember.selected = false;
        fixture.detectChanges();

        let root = debugElement.query(By.css('.asm-family-member'));
        expect(root.classes['asm-family-member--selected']).not.toBeTruthy();
      }));
    });

    describe('Enabled / Disabled State', () => {
      it('should render properly when enabled', async(() => {
        component.familyMember.disabled = false;
        fixture.detectChanges();

        let root = debugElement.query(By.css('.asm-family-member'));
        expect(root.classes['asm-family-member--disabled']).toBeFalsy();
      }));

      it('should render properly when disabled', async(() => {
        component.familyMember.disabled = true;
        fixture.detectChanges();

        let root = debugElement.query(By.css('.asm-family-member'));
        expect(root.classes['asm-family-member--disabled']).toBeTruthy();
      }));
    });

    describe('Header Section', () => {
      it('should render relation name', async(() => {
        component.familyMember.relationName = 'Affiliate';
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain('Affiliate');
      }));

      it('should render personal number', async(() => {
        component.familyMember.personalNumber = '234642';
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain('234642');
      }));
    });

    describe('Main Data Section', () => {
      it('should render first name', async(() => {
        component.familyMember.firstName = 'Piotr';
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain('Piotr');
      }));

      it('should render last name', async(() => {
        component.familyMember.familyName = 'Nowak';
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain('Nowak');
      }));

      it('should render birth date', async(() => {
        component.familyMember.birthDate = new Date(2017, 1, 16);
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain('16/02/2017');
      }));

      it('should render death date', async(() => {
        component.familyMember.deathDate = new Date(1986, 3, 24);
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toContain('24/04/1986');
      }));
    });

    describe('Footer Section', () => {
      describe('Languages', () => {
        it('should render main language', async(() => {
          component.familyMember.language = 'POL';
          fixture.detectChanges();

          expect(debugElement.nativeElement.textContent).toContain('POL');
        }));

        it('should render country code', async(() => {
          component.familyMember.country = 'BEL';
          fixture.detectChanges();

          expect(debugElement.nativeElement.textContent).toContain('BEL');
        }));
      });

      describe('Sickness Coverage Badge', () => {
        let badgeEl;

        beforeEach(() => {
          badgeEl = debugElement.query(By.css('.fa.fa-heart.asm-family-member__badge'));
        })

        it('should render badge', async(() => {
          expect(badgeEl).toBeTruthy();
        }));

        it('should render proper badge with no rights set', async(() => {
          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
        }));

        it('should render proper badge with rights set to None', async(() => {
          component.familyMember.sicknessCoverage = Coverage.None;
          fixture.detectChanges();

          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
        }));

        it('should render proper badge with rights set to Complementary', async(() => {
          component.familyMember.sicknessCoverage = Coverage.Complementary;
          fixture.detectChanges();

          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeTruthy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
        }));

        it('should render proper badge with rights set to Full', async(() => {
          component.familyMember.sicknessCoverage = Coverage.Full;
          fixture.detectChanges();

          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeTruthy();
        }));
      });

      describe('Accident Coverage Badge', () => {
        let badgeEl;

        beforeEach(() => {
          badgeEl = debugElement.query(By.css('.fa.fa-plus.asm-family-member__badge'));
        })

        it('should render badge', async(() => {
          expect(badgeEl).toBeTruthy();
        }));

        it('should render proper badge with no rights set', async(() => {
          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
        }));

        it('should render proper badge with rights set to None', async(() => {
          component.familyMember.accidentCoverage = Coverage.None;
          fixture.detectChanges();

          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
        }));

        it('should render proper badge with rights set to Complementary', async(() => {
          component.familyMember.accidentCoverage = Coverage.Complementary;
          fixture.detectChanges();

          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeTruthy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeFalsy();
        }));

        it('should render proper badge with rights set to Full', async(() => {
          component.familyMember.accidentCoverage = Coverage.Full;
          fixture.detectChanges();

          expect(badgeEl.classes['asm-family-member__badge--complementary-rights']).toBeFalsy();
          expect(badgeEl.classes['asm-family-member__badge--full-rights']).toBeTruthy();
        }));
      });
    });
  });

});
