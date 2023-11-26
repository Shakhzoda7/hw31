import React from "react";

// Написать 10 переменных с типом string
const str1: string = "Строка №1";
const str2: string = "Строка №2";
const str3: string = "Строка №3";
const str4: string = "Строка №4";
const str5: string = "Строка №5";
const str6: string = "Строка №6";
const str7: string = "Строка №7";
const str8: string = "Строка №8";
const str9: string = "Строка №9";
const str10: string = "Строка №10";

// Написать 10 переменных с типом number
const num1: number = 1;
const num2: number = 2;
const num3: number = 3;
const num4: number = 4;
const num5: number = 5;
const num6: number = 6;
const num7: number = 7;
const num8: number = 8;
const num9: number = 9;
const num10: number = 10;


// Написать 10 переменных с типом boolean
const bln1: boolean = true;
const bln2: boolean = true;
const bln3: boolean = true;
const bln4: boolean = true;
const bln5: boolean = true;
const bln6: boolean = true;
const bln7: boolean = true;
const bln8: boolean = true;
const bln9: boolean = true;
const bln10: boolean = true;


// Написать 10 обектов
const obj1 = { hw: "31", grade: 2 };
const obj2 = { hw: "32", grade: 2 };
const obj3 = { hw: "33", grade: 2 };
const obj4 = { hw: "34", grade: 2 };
const obj5 = { hw: "35", grade: 2 };
const obj6 = { hw: "36", grade: 2 };
const obj7 = { hw: "37", grade: 2 };
const obj8 = { hw: "38", grade: 2 };
const obj9 = { hw: "39", grade: 2 };
const obj10 = { hw: "40", grade: 2 };

// Написать 10 массивов
const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: string[] = ["Shakhzoda", "Tatyana", "Nodir"];
const arr3: boolean[] = [true, false, true];
const arr4: any[] = [1, "two", true];
const arr5: number[] = [5, 10, 15, 20, 25];
const arr6: string[] = ["red", "violet", "purple"];
const arr7: boolean[] = [false, false, true, true];
const arr8: any[] = ["grade", 2, true];
const arr9: number[] = [100, 200, 300];
const arr10: string[] = ["React", "Vue", "Angular"];


// Написать 10 функций
function sum(a: number, b: number): number {
    return a + b;
  }
  
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  function isEven(num: number): boolean {
    return num % 2 === 0;
  }
  
  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
  }
  
  function findMax(numbers: number[]): number {
    return Math.max(...numbers);
  }
  
  function filterStrings(arr: any[]): string[] {
    return arr.filter(item => typeof item === 'string');
  }
  
  function calculateAverage(numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
  }
  
  function getUniqueValues<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }
  
  function formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }


export const MainPage = () => {
    const exampleSum = sum(5, 10);
    const exampleMultiply = multiply(3, 4);
    const exampleIsEven = isEven(10);
    const exampleCapitalize = capitalize('hello');
    const exampleReverseArray = reverseArray([1, 2, 3, 4, 5]);
    const exampleFindMax = findMax([10, 20, 30, 40]);
    const exampleFilterStrings = filterStrings(['React', 123, 'TypeScript', true]);
    const exampleCalculateAverage = calculateAverage([1, 2, 3, 4, 5]);
    const exampleGetUniqueValues = getUniqueValues(['apple', 'banana', 'apple', 'orange']);
    const exampleDate = formatDate(new Date());

  return (
    <div>
        <h1>ДЗ №31</h1>
        <p>Пример суммы: {exampleSum}</p>
        <p>Пример умножения: {exampleMultiply}</p>
        <p>Число 10 чётное: {exampleIsEven ? 'Да' : 'Нет'}</p>
        <p>Пример capitalize: {exampleCapitalize}</p>
        <p>Пример reverseArray: {exampleReverseArray.join(', ')}</p>
        <p>Максимальное значение в массиве: {exampleFindMax}</p>
        <p>Только строки из массива: {exampleFilterStrings.join(', ')}</p>
        <p>Среднее значение массива: {exampleCalculateAverage}</p>
        <p>Уникальные значения в массиве: {exampleGetUniqueValues.join(', ')}</p>
        <p>Текущая дата: {exampleDate}</p>
    </div>
  );
};