import { useState } from "react";
import { API_ROUTE } from "../../constants";
import axios from "axios";
import styled from "styled-components";
import ExampleModal from "../ExampleModal";

/** CSS for styled divs */

const Root = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SiteTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #3f434e;
  margin-bottom: 12px;
`;

const SiteDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #9ca1ae;
`;

const DocLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: #3f434e;
  margin-top: 12px;
`;

/** Site functions */

/**
 * Checks if the backend is properly connected
 */
async function checkBackendConnection() {
  try {
    const resp = await axios.get(API_ROUTE + "/");

    console.log(resp.data);

    alert("Success! The backend is properly connected.");
  } catch (error) {
    alert("Failed to find backend!");
    console.error(error);
  }
}

/** Site preview for the Editor page */
function Site(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Root>
      <SiteTitle>StyleAI Fullstack Interview ⭐️</SiteTitle>
      <SiteDescription>
        Congratulations on making it to the coding interview for the software
        engineer role at StyleAI! In this task, will be creating an upcoming
        feature in our website editor: domain searching. After a new customer
        purchases a Style site, they will have the option to select a domain to
        host their new website. Your job will be to create both the UI of the
        domain selection as well as the backend function to query for available
        domains.
      </SiteDescription>
      <SiteDescription>
        This task is designed to test your ability to work with React
        components, backend logic, and connecting full stack applications
        together. We wish you the best of luck in completing this task and look
        forward to reviewing your work.
      </SiteDescription>
      <DocLink
        target="_blank"
        href="https://github.com/tapp-ai/tapp-frontend-interview#readme"
      >
        Read Task Documentation
      </DocLink>
      <button onClick={checkBackendConnection}>Check backend connection</button>
      <button onClick={() => setIsModalOpen(true)}>Find Domain!</button>
      <ExampleModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </Root>
  );
}

export default Site;
