import { toast } from 'react-toastify';
import './styles.css';

type Props = {
  text: string;
};

const MyToastWarning = ({ text }: Props) => {
  return toast.warning(text, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default MyToastWarning;
