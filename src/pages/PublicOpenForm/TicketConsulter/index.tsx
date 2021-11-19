import { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import {
  TicketGLPIResponseData,
} from 'types/TicketGLPIResponse';
import {requestBackend } from 'util/requests';
import { TicketData } from './SearchForm';
import SearchForm from './SearchForm';

import './styles.css';
import { formatTicketState, formatDate } from 'util/formatters';
import HTMLReactParser from 'html-react-parser';
import Accordion from 'components/Accordion';

export type ProductFilterData = {
  ticketid: string;
};

const TicketConsulter = () => {
  const [ticketResponse, setTicketReponse] = useState<TicketGLPIResponseData>();
  let nameArr: Array<string> = [];
  const handleReset = () => {
    setTicketReponse(undefined);;
  };
  const handleSubmitFilter = (data: TicketData) => {
    handleReset();
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/search/Ticket?criteria[0][field]=2&criteria[0][searchtype]=equals&criteria[0][value]=${data.ticketId}&forcedisplay[10]=12&forcedisplay[0]=5&forcedisplay[1]=21&forcedisplay[4]=36&forcedisplay[9]=15&forcedisplay[2]=19&forcedisplay[3]=18&forcedisplay[4]=17&forcedisplay[5]=7&forcedisplay[6]=83&forcedisplay[7]=24&forcedisplay[8]=76665`,
      withCredentials: false,
    };
    requestBackend(config).then((response) => {
      if (response.data.data[0][24])
        response.data.data[0][24] = HTMLReactParser(response.data.data[0][24]);

      setTicketReponse(response.data.data[0]);
    });
  };

  return (
    <div className="ticket-consulter-container">
      <SearchForm onSubmitFilter={handleSubmitFilter} onReset={handleReset} />
      <div className="ticket-content-table">
        {ticketResponse && (
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Status</strong>: {formatTicketState(ticketResponse)}
            </li>
            <li className="list-group-item">
              <ul>
               <Accordion techsId={ticketResponse?.[5]}/>
              </ul>
            </li>
            <li className="list-group-item">
              <strong>Abertura</strong>: {ticketResponse?.[15]}
            </li>
            {ticketResponse?.[12] && ticketResponse?.[12] !== '6' && (
              <li className="list-group-item">
                <strong>Previsão Antendimento</strong>:{' '}
                {formatDate(ticketResponse?.[18])}
              </li>
            )}

            {ticketResponse?.[17] && (
              <li className="list-group-item">
                <strong>Data Encerramento do Chamado (Se houver)</strong>:{' '}
                {formatDate(ticketResponse?.[17])}
              </li>
            )}
            {ticketResponse?.[24] && (
              <li className="list-group-item">
                <strong>Solução</strong>:{' '}
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${ticketResponse?.[24]}`,
                  }}
                />{' '}
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TicketConsulter;
