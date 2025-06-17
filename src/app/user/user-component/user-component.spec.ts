import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user-component';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render view model div after clicking getUser()', () => {
    spyOn(component, 'getUser').and.callFake(() => {
      component.userById = {
        id: 1,
        userName: 'Manoj',
        email: 'manoj@gmail.com',
        password: '786786',
        profile: { id: 1, age: 21, height: 170, weight: 53 }
      };
    });

    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('.userById'));
    expect(component.getUser).toHaveBeenCalled();
    expect(div).toBeTruthy();
  });
});
function spyOn(component: UserComponent, arg1: string) {
  throw new Error('Function not implemented.');
}

