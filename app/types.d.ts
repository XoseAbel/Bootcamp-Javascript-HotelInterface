export interface room {
  idRoom: number;
  maxCapacity: number;
  price: number;
  guest: string;
}
export interface person {
  idCard: string;
  name: string;
  age: number;
}

export interface guest {
  idGuest: string;
  members: person[];
  phone: string;
  asignedRoom: number[];
  checkInDate: string;
  checkOutDate: string;
  invoice: boolean;
}
export interface store {
  guests: guest[];
  rooms: room[];
  previousCustomers: person[];
}
export interface Result {
  resolve: any[];
  reject: any[];
}
