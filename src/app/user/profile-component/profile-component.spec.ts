import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile-component';
import { By } from '@angular/platform-browser';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render view model div after clicking getProfile()', () => {
    spyOn(component, 'getProfile').and.callFake(() => {
      component.profileById = {
         id: 1, age: 21, height: 170, weight: 53 
      };
    });

    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('.profileById'));
    expect(component.getProfile).toHaveBeenCalled();
    expect(div).toBeTruthy();
  });
});
