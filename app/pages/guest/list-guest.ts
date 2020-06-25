import { store } from '../../store';
import { showMembersDetails } from './components/show-members-details';

const listGuests = () => {
  const listGuestsTable = document.querySelector('#listGuestsTable');
  //checknull

  if (listGuestsTable) {
    listGuestsTable.innerHTML = '';
    store.guests.forEach((guest, index) => {
      listGuestsTable.insertAdjacentHTML(
        'beforeend',
        `<tr class="table-success ">
            <th scope="row">${index + 1}</th>
            <td class="pl-0">${guest.idGuest}</td>
            <td class="pl-0">${guest.checkInDate}</td>
            <td class="pl-0">${guest.checkOutDate}</td>
            <td class="pl-0">${guest.invoice}</td>
            <td class="pl-0">${guest.asignedRoom}</td>
            <td class="pl-0 d-flex justify-content-center ">
            <button class="btn btn-success py-1 listMembers" type="button" id="${
              guest.idGuest
            }">
            ${guest.members.length}  ▼
            </button>
            </div></td>
            </tr>
            <tr class="d-none">
            <td class="px-3" colspan="7" style="background-color:#c3e6cb">          
            </td></tr>
                        `
      );
    });
  }

  listGuestsTable?.addEventListener('click', event => {
    if (event.target.classList.value.includes('listMembers')) {
      let membersId = event.target.id;
      let areaMemberList =
        event.target.parentElement.parentElement.nextElementSibling;
      areaMemberList.classList.toggle('d-none');
      showMembersDetails(areaMemberList, membersId);
    }
  });
};

export { listGuests };
