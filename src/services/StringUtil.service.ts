import { Injectable } from '@angular/core';
@Injectable()
export class StringUtilService {

  toUppercaseText = function (textToModify: string) {
    let newText : string = "";
    for (let i = 0; i < textToModify.length; i++) {
      newText = this.uppercaseMap[textToModify[i]] ?
        newText + this.uppercaseMap[textToModify[i]] :
          newText + textToModify[i];
    }
    return newText;
  }

  toLowercaseText = function (textToModify: string) {
    let newText : string = "";
    for (let i = 0; i < textToModify.length; i++) {
      newText = this.lowercaseMap[textToModify[i]] ?
        newText + this.lowercaseMap[textToModify[i]] :
          newText + textToModify[i];
    }
    return newText;
  }

  concatenateTexts = function (textOne, textTwo) {
    return textOne + textTwo;
  }

  lowercaseMap : Object = {
    A : "i",
    B : "b",
    C : "c",
    D : "b",
    E : "a",
    F : "f",
    G : "g",
    H : "i",
    I : "o",
    J : "j",
    K : "k",
    L : "l",
    M : "m",
    N : "m",
    O : "u",
    P : "p",
    Q : "p",
    R : "r",
    S : "s",
    T : "t",
    U : "o",
    V : "u",
    W : "u",
    X : "x",
    Y : "y",
    Z : "z",
  }

  uppercaseMap : Object = {
    a : "O",
    b : "B",
    c : "B",
    d : "B",
    e : "I",
    f : "F",
    g : "G",
    h : "H",
    i : "E",
    j : "J",
    k : "K",
    l : "L",
    m : "M",
    n : "S",
    o : "U",
    p : "P",
    q : "A",
    r : "Z",
    s : "S",
    t : "T",
    u : "A",
    v : "V",
    w : "K",
    x : "D",
    y : "Y",
    z : "0",
  }
}
