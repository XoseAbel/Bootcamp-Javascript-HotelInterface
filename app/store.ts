import { store } from './types';

let store: store = {
  guests: [
    {
      idGuest: '65478',
      members: [
        {
          idCard: '92325678',
          name: 'Peter',
          age: 20,
        },
        {
          idCard: '99348678',
          name: 'Sarah',
          age: 20,
        },
      ],
      phone: '19009090',
      asignedRoom: [101],
      checkInDate: '2020/06/16',
      checkOutDate: '2020/06/26',
      invoice: true,
    },
    {
      idGuest: '98278',
      members: [
        {
          idCard: '12345678',
          name: 'Peter',
          age: 20,
        },
        {
          idCard: '12348678',
          name: 'Sarah',
          age: 20,
        },
      ],
      phone: '09009090',
      asignedRoom: [401],
      checkInDate: '2020/06/16',
      checkOutDate: '2020/06/26',
      invoice: false,
    },
    {
      idGuest: '99378',
      members: [
        {
          idCard: '32345678',
          name: 'Axel',
          age: 25,
        },
        {
          idCard: '72348678',
          name: 'Sarah',
          age: 25,
        },
        {
          idCard: '33345678',
          name: 'Axel',
          age: 10,
        },
        {
          idCard: '33348678',
          name: 'Sarah',
          age: 10,
        },
      ],
      phone: '09009190',
      asignedRoom: [204, 304],
      checkInDate: '2020/06/17',
      checkOutDate: '2020/06/19',
      invoice: false,
    },
  ],
  rooms: [
    { idRoom: 101, maxCapacity: 2, price: 60, guest: '65478' },
    { idRoom: 102, maxCapacity: 2, price: 60, guest: '' },
    { idRoom: 103, maxCapacity: 2, price: 60, guest: '' },
    { idRoom: 104, maxCapacity: 2, price: 80, guest: '' },
    { idRoom: 201, maxCapacity: 3, price: 90, guest: '' },
    { idRoom: 202, maxCapacity: 3, price: 90, guest: '' },
    { idRoom: 203, maxCapacity: 3, price: 90, guest: '' },
    { idRoom: 204, maxCapacity: 3, price: 90, guest: '99378' },
    { idRoom: 301, maxCapacity: 4, price: 100, guest: '' },
    { idRoom: 302, maxCapacity: 4, price: 100, guest: '' },
    { idRoom: 303, maxCapacity: 4, price: 110, guest: '' },
    { idRoom: 304, maxCapacity: 2, price: 100, guest: '99378' },
    { idRoom: 401, maxCapacity: 3, price: 120, guest: '98278' },
    { idRoom: 402, maxCapacity: 2, price: 100, guest: '' },
    { idRoom: 403, maxCapacity: 3, price: 120, guest: '' },
    { idRoom: 404, maxCapacity: 4, price: 150, guest: '' },
  ],
  previousCustomers: [
    {
      idCard: '12345678',
      name: 'Peter',
      age: 20,
    },
    {
      idCard: '99999999',
      name: 'Robert',
      age: 30,
    },
  ],
};
export { store };
