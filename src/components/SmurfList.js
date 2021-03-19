import React from 'react';
import { connect } from "react-redux";
import Smurf from './Smurf';

 const SmurfList = (props) => {

    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(
    <>
        {props.smurfsData && props.smurfsData.map(smurf => (
            <Smurf key={smurf.id} smurf={smurf} />
        ))}
    </>
    );
}

const mapStateToProps = state => {
    return {
        smurfsData: state.smurfsData,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.