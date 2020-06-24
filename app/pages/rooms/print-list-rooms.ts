const printListRooms = listToPrint => {
  const listRoomsTable = document.querySelector('#listRoomsTable');
  if (listRoomsTable) {
    listRoomsTable.innerHTML = '';
    listToPrint.forEach((value, index) => {
      listRoomsTable.insertAdjacentHTML(
        'beforeend',
        `<tr class="table-success">
          <th scope="row" class="py-1">${index + 1}</th>
      <th scope="col" class="py-1">${value.idRoom}</th>
      <th scope="col" class="py-1">${value.maxCapacity}</th>
      <th scope="col" class="py-1">${value.price}</th>
    </tr>`
      );
    });
  }
};
export { printListRooms };
