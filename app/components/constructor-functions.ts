import { person } from '../types';

export function Person(idCard: string, name: string, age: number) {
  this.idCard = idCard;
  this.name = name;
  this.age = age;
}
