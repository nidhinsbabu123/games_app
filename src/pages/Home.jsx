import React, { useEffect, useState } from 'react';
import GenreList from '../components/GenreList';
import GlobalApi, { getAllGames, getGameListByGenreId } from '../services/GlobalApi';
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GamesByGenresId from '../components/GamesByGenresId';


function Home() {

    const[allGameList,setAllGameList] = useState();

    const[gameListByGenres,setGameListByGenres] = useState([])

    const[selectedGenresName,setSelectedGenresName] = useState('Action')

    useEffect(() => {
        getAllGamesList();
        getGameListByGenresId(4);
    }, []);

    const getAllGamesList = async () => {

        try{
            const resp = await getAllGames()
            // console.log(resp.results);
            setAllGameList(resp.results)
            // setGameListByGenres(resp.results)
        } catch (error) {
            console.error('Error fetching games list : ',error);
        }

    }


    const getGameListByGenresId = (id) => {

        // console.log('Genre Id', id );

        GlobalApi.getGameListByGenreId(id).then((resp)=>{
            console.log('Game List By Genre Id : ', resp.results);
            setGameListByGenres(resp.results)
        })
    }




    return (
        <div className='grid grid-cols-4 px-2'>
            <div className='hidden md:block'>
                <GenreList genreId = {(genreId) => getGameListByGenresId(genreId) } selectedGenresName = {(name)=>setSelectedGenresName(name)} />
            </div>
            <div className='col-span-4 md:col-span-3'>
                {allGameList?.length>0 && gameListByGenres.length > 0 ? 
                <div>
                    <Banner gameBanner={allGameList[0]}/>
                    <TrendingGames gameList = {allGameList}/>
                    <GamesByGenresId gameList = {gameListByGenres} selectedGenresName = {selectedGenresName}/>
                </div>
                : null}
            </div>
        </div>
    )
}

export default Home;




