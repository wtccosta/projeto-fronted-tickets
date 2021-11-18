import { useCallback, useEffect, useState } from 'react';
import { getTechName } from 'util/formatters';
import { getTech } from 'util/requests';
import './styles.css';

type Props = {
  techsId?: string | string[];
};

const Accordion = ({ techsId }: Props) => {
  const [techs, setTechs] = useState<String[]>([]);
  let aux = [] as Array<String>;
  const getTechCallback = useCallback(() => {
    if (techsId) {
      if (typeof techsId === 'string') {
        getTech(techsId).then((tech) => {
          setTechs([getTechName(tech)]);
        });
      } else {
        techsId.forEach((eachTechId) => {
          getTech(eachTechId)
            .then((tech) => {
              aux.push(getTechName(tech));
              
            })
            .then(() => setTechs(aux));
        });
      }
    }
  }, []);

  useEffect(()=>{
    getTechCallback();
  }, [getTechCallback])

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {techsId ? 'Técnico Responsável' : 'Não há técnicos escalados'}
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          {techsId && (
            <div className="accordion-body">
              <ul>
                {' '}
                {techs.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
