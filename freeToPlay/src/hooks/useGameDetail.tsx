import {useEffect, useState} from 'react';
import {GameDetail} from '../interface/gameDetails';
import {axiosConfig} from '../api/axiosConfig';

interface GameDetailState {
    gameDetail?: GameDetail;
  isLoading: boolean;
  isError: boolean;
  messageError: string;
}

const useGameDetail = (id: number) => {
  const [gameDetailState, setGameDetail] = useState<GameDetailState>({
    gameDetail: undefined,
    isLoading: true,
    isError: false,
    messageError: '',
  });

  const getGameDetail = () => {
    axiosConfig
      .get<GameDetail>(`/game?id=${id}`)
      .then(response => {
        setGameDetail({
          ...gameDetailState,
          gameDetail: response.data,
          isLoading: false,
        });
      })
      .catch(err => {
        setGameDetail({
          ...gameDetailState,
          isError: true,
          messageError: 'An error occured loading the data',
          isLoading: false,
        });
      });
  };

  useEffect(() => {
    getGameDetail();
  }, []);

  return {...gameDetailState};
};

export default useGameDetail;
