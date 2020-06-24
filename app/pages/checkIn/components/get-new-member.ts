import { person, Result } from '../../../types';
import { Person } from '../../../components/constructor-functions';

export const getNewMember = () => {
  let result: Result = {
    resolve: [],
    reject: [],
  };
  const addPerson = document.querySelectorAll('.addPerson');
  let newMembers: person[] = [];
  addPerson.forEach((value, index) => {
    const newIdCard = value.children[0].children[1].value;
    const newName = value.children[1].children[1].value;
    let newAge: string | number = value.children[2].children[1].value;
    newAge = +newAge;
    if (newIdCard === '' || newName === '' || newAge === 0) {
      result.reject.push(`Faltan datos de la linea ${index + 1}`);
      return result;
    }
    const newPerson = new Person(newIdCard, newName, newAge);
    newMembers.push(newPerson);
  });
  if (newMembers.length !== 0) {
    result.resolve.push(newMembers);
  }
  return result;
};
