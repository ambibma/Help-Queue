import React from "react";
import PropTypes from "prop-types";
import {v4} from 'uuid';
import ReusableForm from "./ReusableForm";
//import NewTicketForm from './NewTicketForm';
//import TicketList from "./TicketList";


function NewTicketForm(props){

    function handleNewTicketFormSubmission(e)
    {
      e.preventDefault();
      props.onNewTicketCreation({
        names: e.target.names.value,
        location: e.target.location.value,
        issue: e.target.issue.value,
        // numberOfStudents: parseInt(e.target.numberOfStudents.value),
        id: v4()
         

      });
    }
  return (
    <>
     <ReusableForm
      formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="HALP!" />    
    </>
  );
}
NewTicketForm.propTypes = {onNewTicketCreation: PropTypes.func};

export default NewTicketForm; 