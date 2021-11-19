import { Tech } from 'types/Techs';
import { TicketGLPIResponseData } from 'types/TicketGLPIResponse';
import moment from 'moment';
import 'moment/locale/pt-br';

export const formatPrice = (price: number) => {
  const params = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  return new Intl.NumberFormat('pt-BR', params).format(price);
};

export const formatDate = (date: Date | string) => {
  moment.locale('pr-br');
  return moment(date).format('llll');
};

export const getTechName = (tech: Tech): string => {
  return `${tech.firstname} ${tech.realname}`;
};

export const formatTicketState = (
  ticket: TicketGLPIResponseData | undefined
) => {
  if (ticket === undefined) {
    return;
  }
  let result = '';
  switch (Number(ticket[12])) {
    case 1:
      result = 'NOVO';
      break;
    case 2:
      result = 'ATRIBUÍDO';
      break;
    case 6:
      result = 'FECHADO';
      break;
    default:
      break;
  }
  return result;
};
