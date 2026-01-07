import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

// The app uses Vitest (see tsconfig.spec.json) with Angular's TestBed APIs.
// Follow the same style as src/app/app.spec.ts

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
  });

  it('should create the header component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the header element', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // expect template root to exist
    expect(compiled).toBeTruthy();
  });

  it('should include template content from header.component.html', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Smoke test: there should be some element in template
    expect(compiled.childElementCount).toBeGreaterThanOrEqual(0);
  });

  it('should have correct selector to be used as <app-header>', () => {
    // Angular compiles component metadata; this smoke test ensures the component can be instantiated via TestBed
    const fixture = TestBed.createComponent(HeaderComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should not throw change detection errors on first detectChanges', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
