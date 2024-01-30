import { Injectable } from '@angular/core';
@Injectable()
export class MockStringUtilService {

  concatenateTexts = function (firstValue: string, secondValue: string) {
    return "I am Awesome";
  }
}
