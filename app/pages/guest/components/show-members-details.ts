import { store } from '../../../store';

export const showMembersDetails = (areaMemberList, membersId) => {
  areaMemberList.children[0].innerHTML = ``;
  const guestToShow = store.guests.find(guest => guest.idGuest === membersId);
  guestToShow.members.forEach(member => {
    areaMemberList.children[0].insertAdjacentHTML(
      'beforeend',
      `<ul>Name: ${member.name} → IdCard: ${member.idCard} → Age: ${member.age}
      </ul>`
    );
  });
};
