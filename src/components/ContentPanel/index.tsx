import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import StiLogo from 'assets/images/sti-logo.png';
import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
  children: React.ReactNode;
  inf?: string;
  cat?: string;
};

const ContentPanel = ({ children, inf, cat }: Props) => {
  return (
    <>
      <div className="content-component">
        <div className="main-image-home">
          <Link to="/">
            <MainImage />
          </Link>
        </div>
        <div className="card principal">
          <div className="card-header">{inf}</div>
          <div className="card-body">
            <div className="card-title">{cat}</div>
            <div className="card-questions">{children}</div>
          </div>
        </div>
      </div>
      <div className="sti-logo">
        <img src={StiLogo} alt="Logo STI" />
      </div>
    </>
  );
};

export default ContentPanel;
