import { useCallback, useEffect, useState } from 'react';
import { getTechName } from 'util/formatters';
import { getTech } from 'util/requests';
import ReactAccordion from 'react-bootstrap/Accordion';
import './styles.css';

type Props = {
  techsId?: string | string[];
};

const Accordion = ({ techsId }: Props) => {
  const [techs, setTechs] = useState<String[]>([]);

  const updateTechs = (techName: string) =>
    setTechs((previusState) => {
      return [...previusState, techName];
    });

  const getTechCallback = useCallback(() => {
    if (techsId) {
      if (typeof techsId === 'string') {
        getTech(techsId).then((tech) => {
          setTechs([getTechName(tech)]);
        });
      } else {
        techsId.forEach((eachTechId) => {
          getTech(eachTechId).then((tech) => {
            let techName = getTechName(tech);
            updateTechs(techName);
          });
        });
      }
    }
  }, [techsId]);

  useEffect(() => {
    getTechCallback();
  }, [getTechCallback]);
  return (
    <ReactAccordion defaultActiveKey="0">
      <ReactAccordion.Item eventKey="0">
        <ReactAccordion.Header>
          {techsId && techsId !== '1999'
            ? 'Técnico(s) Responsável(eis)'
            : 'Não há técnicos escalados'}
        </ReactAccordion.Header>
        <ReactAccordion.Body>
          {techsId && (
            <div className="accordion-body">
              <ul>
                {techs.map((tech) => (
                  <li key="techsId">{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </ReactAccordion.Body>
      </ReactAccordion.Item>
    </ReactAccordion>
  );
};

export default Accordion;
