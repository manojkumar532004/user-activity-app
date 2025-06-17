import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPage } from './register-page';
import { By } from '@angular/platform-browser';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPage],
      declarations:[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading "Register Page"', () => {
    const heading = fixture.nativeElement.querySelector('h2');
    expect(heading.textContent).toContain('Register Page');
  });

  it('should call registerUser() when form is submitted', () => {
    spyOn(component, 'registerUser');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.registerUser).toHaveBeenCalled();
  });

  it('should bind userName input to user.userName', async () => {
    const input = fixture.debugElement.query(By.css('input[name="userName"]')).nativeElement;
    input.value = 'Manoj';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.newUser.userName).toBe('Manoj');
  });
});
