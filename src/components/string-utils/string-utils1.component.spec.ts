import { TestBed, async, inject } from '@angular/core/testing';
import { StringUtilsComponent } from './string-utils.component';
import { FormsModule } from '@angular/forms';
import { StringUtilService } from '../../services/StringUtil.service';
import { MockStringUtilService } from '../../../mocks/StringUtils.service.mock ';

describe('Math utils Component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StringUtilsComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        StringUtilService,
        MockStringUtilService
      ]
    }).compileComponents();
    // compileComponents compiles all the components so they are ready to be created as needed
  }));

  it('should create the String Utils Component', async(() => {
    const fixture = TestBed.createComponent(StringUtilsComponent);
    const mathUtils = fixture.debugElement.componentInstance;
    expect(mathUtils).toBeTruthy();
  }));


  // Standard Matcher Example
  it('should accurately add two Strings together', async(() => {
    // Create the compiled component pertinant to our test
    const fixture = TestBed.createComponent(StringUtilsComponent);

    // Get an instance of the MathUtilsService
    const StringUtilsService = fixture.debugElement.injector.get(StringUtilService);

    // Declare two numbers that can only reach a third number when added.
    let textA = "This Text Needs ";
    let textB = "To Be Added Together";
    let textC = "This Text Needs To Be Added Together";

    // Call the add method on the mathUtilsComponent, and see that the final result returns
    expect(StringUtilsService.concatenateTexts(textA, textB)).toEqual(textC);
  }));


  // Spy Example
  it('should have called the StringUtilsService when StringUtils.concatenate is called', async(() => {
    // Create the compiled component pertinant to our test
    const fixture = TestBed.createComponent(StringUtilsComponent);

    // Get an instance of the StringUtilsComponent
    const StringUtils = fixture.debugElement.componentInstance;

    // Get an instance of the StringUtilsService
    const stringUtilsService = fixture.debugElement.injector.get(StringUtilService);

    // Set up a spy on the String Utils Service so we can monitor if it is being called properly
    spyOn(stringUtilsService, 'concatenateTexts');

    // Call the add method on the StringUtilsComponent, which should in turn call the StringUtilsService.concatenateTexts() method
    StringUtils.concatenateTexts('I am','Awesome');

    // Check to see if the Service has been called
    expect(stringUtilsService.concatenateTexts).toHaveBeenCalled();

  }));

  // Spy Return Value Example
  it('should correctly assign the returned value to the addedValue variable', async(() => {
    // Create the compiled component pertinant to our test
    const fixture = TestBed.createComponent(StringUtilsComponent);

    // Get an instance of the StringUtilsComponent
    const stringUtils = fixture.debugElement.componentInstance;

    // Get an instance of the StringUtilsService
    const stringUtilsService = fixture.debugElement.injector.get(StringUtilService);

    // Declare set Number that will be the return value no matter what.
    let letterToReturn = 'B';

    // Set up a spy on the Math Utils Service so we can monitor if it is being called properly
    spyOn(stringUtilsService, 'toUppercaseText').and.returnValue(letterToReturn);

    // Call the toUpperCaseText method on the StringUtilsComponent, which should in turn call the StringUtilsService.toUppercaseText() method
    stringUtils.toUppercaseText('b');

    // Check that the stringUtilsComponent is correctly assigning the returned value to the right variable
    expect(stringUtils.uppercaseText).toEqual(letterToReturn);
  }));

  // Custom Matcher Example
  // https://jasmine.github.io/2.8/custom_matcher.html
});
