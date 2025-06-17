import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponent } from './activity-component';
import { By } from '@angular/platform-browser';

describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading "Activity Form"', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading.textContent).toContain('Activity Form');
  });

  it('should call addActivity() when form is submitted', () => {
    spyOn(component, 'addActivity');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.addActivity).toHaveBeenCalled();
  });

  it('should bind steps input to activity.steps', async () => {
    const input = fixture.debugElement.query(By.css('input[name="steps"]')).nativeElement;
    input.value = 120;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.newActivity.steps).toBe(120);
  });

  it('should display activities table', () => {
    fixture.detectChanges();
    const activitiesTable = fixture.debugElement.query(By.css('table[name="activitiesTable"]')).nativeElement;
    expect(activitiesTable).toBeTruthy();
  });
});
