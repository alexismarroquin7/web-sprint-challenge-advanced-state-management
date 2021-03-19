export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = ({ description, name, nickname, position}) => {
    return {type: ADD_SMURF, payload: {id: Date.now(), description, name, nickname, position}}
}