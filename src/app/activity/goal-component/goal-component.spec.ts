import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalComponent } from './goal-component';
import { By } from '@angular/platform-browser';

describe('GoalComponent', () => {
  let component: GoalComponent;
  let fixture: ComponentFixture<GoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading "Add Goal For A User"', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading.textContent).toContain('Add Goal For A User');
  });

  it('should call addGoal() when form is submitted', () => {
    spyOn(component, 'addGoal');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.addGoal).toHaveBeenCalled();
  });

  it('should bind targetSteps input to goal.targetSteps', async () => {
    const input = fixture.debugElement.query(By.css('input[name="targetSteps"]')).nativeElement;
    input.value = 200;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.newGoal.targetSteps).toBe(200);
  });

  it('should display goals table', () => {
    fixture.detectChanges();
    const goalsTable = fixture.debugElement.query(By.css('table[name="goalsTable"]')).nativeElement;
    expect(goalsTable).toBeTruthy();
  });
});
