import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const ticketList = [
    {
      names: "Joe and Moe",
      location: "Driving School",
      issue: "tire pressure low",
    },
    {
      names: "Bart and Lisa",
      location: "Springfield Elementary",
      issue: "cat in tree",
    },
    {
      names: "Moe and Barney",
      location: "Moe's Tavern",
      issue: "jukebox stuck",
    },
  ];

  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      <hr />
      {ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
