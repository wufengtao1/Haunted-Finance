import { useContext } from 'react';
import { Context } from '../contexts/HauntedCashProvider';

const useHauntedCash = () => {
  const { hauntedCash } = useContext(Context);
  return hauntedCash;
};

export default useHauntedCash;
