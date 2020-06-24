import { person, guest } from '../types';

function Person(this: person, idCard: string, name: string, age: number) {
  this.idCard = idCard;
  this.name = name;
  this.age = age;
}
function Guest(
  this: guest,
  idGuest: string,
  members: person[],
  phone: string,
  asignedRoom: number[],
  checkInDate: string,
  checkOutDate: string,
  invoice: boolean
) {
  this.idGuest = idGuest;
  this.members = members;
  this.phone = phone;
  this.asignedRoom = asignedRoom;
  this.checkInDate = checkInDate;
  this.checkOutDate = checkOutDate;
  this.invoice = invoice;
}

export { Person, Guest };
