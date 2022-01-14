import React, {useEffect, useState} from 'react';
import {GameResponse} from '../interface/gameResponse';
import {axiosConfig} from '../api/axiosConfig';

interface GameState {
  games: GameResponse[];
  isLoading: boolean;
  isError: boolean;
  messageError: string;
}

const useGames = (textToSearch?: string) => {
  const [state, setstate] = useState<GameState>({
    games: [],
    isLoading: true,
    isError: false,
    messageError: '',
  });
  // const [games, setGames] = useState<GameResponse[]>();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [messageError, setMessageError] = useState('');

  const getGames = () => {
    axiosConfig
      .get<GameResponse[]>('/games')
      .then(response => {
        const gamesResult = response.data;
        setstate({
          games: gamesResult,
          isLoading: false,
          isError: false,
          messageError: '',
        });
      })
      .catch(err => {
        console.log(err);
        setstate({
          ...state,
          isError: true,
          isLoading: false,
          messageError: 'An error ocurred loading the data',
        });
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    if (textToSearch !== '') {
      setstate({...state, isLoading: true});
      const gamesFiltered = state.games.filter(game =>
        game.title.toLowerCase().includes(textToSearch!.toLocaleLowerCase()),
      );

      setstate({
        ...state,
        games: gamesFiltered,
        isLoading: false,
      });
    } else {
      getGames();
    }
  }, [textToSearch]);

  return {
    ...state,
  };
};

export default useGames;
