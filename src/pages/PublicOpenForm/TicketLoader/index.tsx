import ContentLoader from 'react-content-loader';

import './styles.css';

const TicketLoader = ({ ...rest }) => (
  <>
  <p className="text-center text-danger">Aguarde, seu chamado está sendo processado. </p>
  <p className="text-center text-danger fw-bold">Este processo demora cerca de 15 segundos!</p>
  <ContentLoader 
  speed={2}
  width={476}
  height={200}
  viewBox="0 0 476 200"
  backgroundColor="#5a5959"
  foregroundColor="#434343"
  {...rest}
>
  <rect x="-60" y="-2" rx="10" ry="10" width="583" height="27" /> 
  <rect x="-47" y="33" rx="10" ry="10" width="583" height="27" /> 
  <rect x="-51" y="68" rx="10" ry="10" width="583" height="27" /> 
  <rect x="-52" y="102" rx="10" ry="10" width="583" height="300" />
</ContentLoader>
</>
);

// TicketLoader.metadata = {
//   name: 'Yusuf Özlü',
//   github: 'ozluy',
//   description: 'Dashboard strategy item on CLEO.one(https://cleo.one).',
//   filename: 'TicketLoader',
// }

export default TicketLoader;
