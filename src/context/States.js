import Constants from "../utiles/constants/Constant";
let constant = new Constants();

let state = {
  JSON_DATA: constant.JSON_DATA,
  updateValue: obj => {
    let people = this.state.JSON_DATA;
    let index = people.findIndex(person => person.id === obj.id);
    people[index][obj.f_type] = obj.value;
    this.setState({ JSON_DATA: people });
  }
};
export {State};
