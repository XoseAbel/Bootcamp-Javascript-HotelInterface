export const addInputForMember = () => {
  const addMemberButton = document.querySelector('#addMemberButton');

  addMemberButton?.addEventListener(
    'click',
    onclickCallbackAddMemberButton,
    false
  );
};

export const onclickCallbackAddMemberButton = () => {
  const addInputMember = document.querySelector('.addPerson');
  addInputMember.insertAdjacentHTML(
    'afterend',
    ` <div class="form-row addPerson">
<div class="form-group col-md-4">
<label for="name" class="bg-white rounded px-2">Name</label>
<input type="text" class="form-control namePerson" />
</div>
<div class="form-group col-md-4">
<label for="idCard" class="bg-white rounded px-2">idCard</label>
<input type="text" class="form-control idCardPerson" />
</div>
<div class="form-group col-md-4">
<label for="age" class="bg-white rounded px-2">Age</label>
<input
  type="number"
  class="form-control agePerson"
  min="0"
  max="99"
/>
</div>
</div>    `
  );
};
