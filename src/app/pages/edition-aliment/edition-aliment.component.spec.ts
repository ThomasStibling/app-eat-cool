import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionAlimentComponent } from './edition-aliment.component';

describe('EditionArticleComponent', () => {
  let component: EditionAlimentComponent;
  let fixture: ComponentFixture<EditionAlimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionAlimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
