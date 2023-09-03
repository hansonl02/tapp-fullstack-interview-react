import { useState } from "react";
import { API_ROUTE } from "../../constants";
import axios from "axios";
import styled from "styled-components";
import BusinessNameInputModal from "../BusinessNameInput";
import SearchResultsModal from "../SearchResults";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

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
  color: ${theme.colors.black[100]}; // Change to Secondary color: ;
  margin-bottom: 12px;
`;

const SiteDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.black[80]}; // Change to Tertiary color
`;

const DocLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: ${theme.colors.black[100]}; // Change to Secondary color
  margin-top: 12px;
`;

const Button = styled(motion.div)`
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  user-select: none;
  position: relative;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
`;

const ConnectionButton = styled(Button)`
  margin-top: 16px;
  background-color: #fff;
  border: 1px solid ${theme.colors.black[40]};
  color: ${theme.colors.black[100]};
  &:hover {
    background-color: ${theme.colors.black[10]};
  }
`;

const ModalButton = styled(Button)`
  background-color: ${theme.colors.blue[100]};
  color: #fff;
  &:hover {
    background-color: ${theme.colors.blue[200]};
  }
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
  const [isBusinessNameInputModalOpen, setIsBusinessNameInputModalOpen] = useState(false);
  const [isSearchResultsModalOpen, setIsSearchResultsModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chosenDomain, setChosenDomain] = useState('');
  const [businessName, setBusinessName] = useState('');

  const handleBusinessNameInputModalClose = () => {
    setIsBusinessNameInputModalOpen(false);
  };

  const handleSearchResultsModalClose = () => {
    setIsSearchResultsModalOpen(false);
  };

  async function handleSearchDomain(businessName) {
    setLoading(true);
    setBusinessName(businessName);
    setIsBusinessNameInputModalOpen(false);
    setIsSearchResultsModalOpen(true);

    // Simulate an API call (replace with your actual API call).
    // Make a POST request to an API endpoint using Axios
    const resp = await axios.post(API_ROUTE + "/api/v1/get-domains", {"name": businessName})
      .then((response) => {
        if (response.data.data) {
          setSearchResults(response.data.data);
          setLoading(false);
        } else {
          console.log("no available domains!");
        }
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const handleSelectDomain = (domain) => {
    setChosenDomain(domain);
    setIsSearchResultsModalOpen(false);
  };

  return (
    <Root>
      <SiteTitle>StyleAI Fullstack Interview ⭐️</SiteTitle>
      <SiteDescription>
        Congratulations on making it to the coding interview for the software
        engineer role at StyleAI! Your task is to develop a new feature for our
        website editor: domain searching. Once a customer purchases a Style
        subscription, they will be able to choose a domain for hosting their new
        website. Your responsibility is to develop the user interface for the
        domain selection view and implement the backend function for querying
        available domains.
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
      <ConnectionButton
        onClick={checkBackendConnection}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.95 }}
      >
        Check backend connection
      </ConnectionButton>
      <ModalButton
        onClick={() => setIsBusinessNameInputModalOpen(true)}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.95 }}
      >
        Find Domain!
      </ModalButton>

      <BusinessNameInputModal
        isOpen={isBusinessNameInputModalOpen}
        onClose={handleBusinessNameInputModalClose}
        onSearch={handleSearchDomain}
      />

      <SearchResultsModal
        isOpen={isSearchResultsModalOpen}
        onClose={handleSearchResultsModalClose}
        onDomainClick={handleSelectDomain}
        results={searchResults}
        loading={loading}
      />

      {chosenDomain && (
        <div className="centered">
          <h2>Chosen Domain for {businessName}:</h2>
          <p>{chosenDomain}</p>
        </div>
      )}
      
    </Root>
  );
}

export default Site;
