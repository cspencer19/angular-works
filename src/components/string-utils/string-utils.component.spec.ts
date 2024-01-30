import { TestBed, async, inject } from '@angular/core/testing';
import { MathUtilsComponent } from '../math-utils/math-utils.component';
import { StringUtilsComponent } from '../string-utils/string-utils.component';
import { FormsModule } from '@angular/forms';
import { MathUtilService } from '../../services/MathUtil.service';
import { StringUtilService } from '../../services/StringUtil.service';
import { MockMathUtilService } from '../../../mocks/MathUtils.service.mock';


describe('String utils Component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MathUtilsComponent,
        StringUtilsComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        MathUtilService,
        StringUtilService,
        MockMathUtilService
      ]
    }).compileComponents();
    // compileComponents compiles all the components so they are ready to be created as needed
  }));



  it('should create the String Utils Component', async(() => {
    const fixture = TestBed.createComponent(StringUtilsComponent);
    const StringUtils = fixture.debugElement.componentInstance;
    expect(StringUtils).toBeTruthy();
  }));

  
});
