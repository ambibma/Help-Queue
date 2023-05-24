import React from "react";
import PropTypes from "prop-types";
import {v4} from 'uuid';
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
      <form onSubmit={handleNewTicketFormSubmission}>

        <input
          type='text'
          name='names'
          placeholder='put yer name' />
        <input
          type='text'
          name='location'
          placeholder='WHERE' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type = 'submit'>Help!</button>
      </form>       
    </>
  );
}
NewTicketForm.propTypes = {onNewTicketCreation: PropTypes.func};

export default NewTicketForm; 