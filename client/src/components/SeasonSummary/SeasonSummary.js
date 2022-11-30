import React, { useEffect, useState } from 'react'
import { Card, ClassSelect, ClassTab, Division, DivisionSelect, Info, Medal, MedalHeader, MedalImage, PlayerCards, PlayerName, PlayerNameCard, PlayerTeam, SeasonHeader, SummaryPage, SummaryTable, SummaryWrapper, Team, TopStatMedals, Username } from './SeasonSummaryStyles';
import axios from 'axios';

const SeasonSummary = () => {
    const [divisionChoice, setDivisionChoice] = useState("invite")
    const [classChoice, setClassChoice] = useState("scout")
    const [apiResponse, setApiResponse] = useState({})
    const [displayArray, setDisplayArray] = useState([])
    useEffect(() => {
        async function apiCall(){
            setApiResponse(await axios.get(`http://localhost:8080/api/season-13-summary`))
            console.log("apicalss")
        }
        apiCall()
    }, [])
    
    useEffect(() => {
        let currentArray= [];
        let max = 0;
        try {
            console.log(apiResponse.data[divisionChoice])
            apiResponse.data[divisionChoice].map((playerInfo)=>{
                if(Object.entries(playerInfo)[0][1].classPlayed == classChoice && Object.entries(playerInfo)[0][1].gamesPlayed > 3 ){
                    currentArray.push(Object.entries(playerInfo)[0][1])
                }
                
            })
        } catch (error) {
            console.log(error)
        }
        setDisplayArray(currentArray)
        console.log(displayArray)

    }, [classChoice,divisionChoice,apiResponse])
    

    function divisionStyleObject(input){
        return( input == divisionChoice ? {background: "#f08149", color: "#121111", "font-weight" : "800"} : {});
    }
    function classStyleObject(input){
        return( input == classChoice ? {background: "#f08149", color: "#121111", "font-weight" : "800"} : {});
    }

    return (
    <>
        <SummaryPage>
            <SummaryWrapper>
                <SeasonHeader>RGL HIGHLANDER SEASON 13</SeasonHeader>
                <SummaryTable>
                    <DivisionSelect>
                        <Division style={divisionStyleObject("invite")} onClick={() => {setDivisionChoice("invite")}}>Invite</Division>
                        <Division style={divisionStyleObject("advanced")} onClick={() => {setDivisionChoice("advanced")}}>Advanced</Division>
                        <Division style={divisionStyleObject("main")} onClick={() => {setDivisionChoice("main")}}>Main</Division>
                        <Division style={divisionStyleObject("intermediate")} onClick={() => {setDivisionChoice("intermediate")}}>Intermediate</Division>
                    </DivisionSelect>
                    <ClassSelect>
                        <ClassTab style={classStyleObject("scout")} onClick={() => {setClassChoice("scout")}}>Scout</ClassTab>
                        <ClassTab style={classStyleObject("soldier")} onClick={() => {setClassChoice("soldier")}}>Soldier</ClassTab>
                        <ClassTab style={classStyleObject("pyro")} onClick={() => {setClassChoice("pyro")}}>Pyro</ClassTab>
                        <ClassTab style={classStyleObject("demoman")} onClick={() => {setClassChoice("demoman")}}>Demoman</ClassTab>
                        <ClassTab style={classStyleObject("heavyweapons")} onClick={() => {setClassChoice("heavyweapons")}}>Heavy</ClassTab>
                        <ClassTab style={classStyleObject("engineer")} onClick={() => {setClassChoice("engineer")}}>Engineer</ClassTab>
                        <ClassTab style={classStyleObject("medic")} onClick={() => {setClassChoice("medic")}}>Medic</ClassTab>
                        <ClassTab style={classStyleObject("sniper")} onClick={() => {setClassChoice("sniper")}}>Sniper</ClassTab>
                        <ClassTab style={classStyleObject("spy")} onClick={() => {setClassChoice("spy")}}>Spy</ClassTab>
                    </ClassSelect>
                    <PlayerCards>
                        <Card style={{background: "#f08149"}} >
                            <PlayerNameCard style={{color: "#000" , "margin-top" : "8px"}} >PLAYERINFO</PlayerNameCard>
                            <Info style={{color: "#000"}}>KILLS</Info>
                            <Info style={{color: "#000"}}>ASSIST</Info>
                            <Info style={{color: "#000"}}>DEATH</Info>
                            <Info style={{color: "#000"}}>DPM</Info>
                            <Info style={{color: "#000"}}>KD</Info>
                            <Info style={{color: "#000"}}>DTM</Info>
                            <Info style={{color: "#000"}}>HP</Info>
                            <Info style={{color: "#000"}}>PLAYED</Info>
                            <Info style={{color: "#000"}}>SPOT</Info>
                        </Card>
                        {displayArray.map((player) =>{
                            return(
                                <Card>
                                    <PlayerNameCard>
                                        <Username  href={`https://rgl.gg/Public/PlayerProfile.aspx?p=${player.playerID64}`} target="_blank">{player.playerUserName}</Username>
                                        <Team>{player.team}</Team>
                                    </PlayerNameCard>
                                    <Info>{Math.ceil(player.kills/player.gamesPlayed)}</Info>
                                    <Info>{Math.ceil(player.assists/player.gamesPlayed)}</Info>
                                    <Info>{Math.round(player.deaths/player.gamesPlayed)}</Info>
                                    <Info>{Math.ceil(player.damage/player.gamesPlayed)}</Info>
                                    <Info>{(player.kills/player.deaths).toFixed(2)}</Info>
                                    <Info>{Math.ceil(player.damageTaken/player.gamesPlayed)}</Info>
                                    <Info>{Math.ceil(player.medkits/player.gamesPlayed)}</Info>
                                    <Info>{player.gamesPlayed}</Info>
                                    <Info>{player.teamPlacement}</Info>
                                </Card>
                            )
                        })}
                        
                    </PlayerCards>
                </SummaryTable>
                <TopStatMedals>
                    <Medal>
                        <MedalHeader>KILLS</MedalHeader>
                        <PlayerTeam>bigbraincomp</PlayerTeam>
                        <PlayerName>dookiemonster33</PlayerName>
                        <MedalImage src="https://i.imgur.com/KwwYkBb.png"></MedalImage>
                    </Medal>
                    <Medal>
                        <MedalHeader>DEATHS</MedalHeader>
                        <PlayerTeam>bigbraincomp</PlayerTeam>
                        <PlayerName>dookiemonster33</PlayerName>
                        <MedalImage src="https://i.imgur.com/KwwYkBb.png"></MedalImage>
                    </Medal>
                    <Medal>
                        <MedalHeader>DPM</MedalHeader>
                        <PlayerTeam>bigbraincomp</PlayerTeam>
                        <PlayerName>dookiemonster33</PlayerName>
                        <MedalImage src="https://i.imgur.com/KwwYkBb.png"></MedalImage>
                    </Medal>
                    <Medal>
                        <MedalHeader>KD</MedalHeader>
                        <PlayerTeam>bigbraincomp</PlayerTeam>
                        <PlayerName>dookiemonster33</PlayerName>
                        <MedalImage src="https://i.imgur.com/KwwYkBb.png"></MedalImage>
                    </Medal>
                    <Medal>
                        <MedalHeader>DAMAGE TAKEN</MedalHeader>
                        <PlayerTeam>bigbraincomp</PlayerTeam>
                        <PlayerName>dookiemonster33</PlayerName>
                        <MedalImage src="https://i.imgur.com/KwwYkBb.png"></MedalImage>
                    </Medal>
                    <Medal>
                        <MedalHeader>HEALS</MedalHeader>
                        <PlayerTeam>bigbraincomp</PlayerTeam>
                        <PlayerName>dookiemonster33</PlayerName>
                        <MedalImage src="https://i.imgur.com/KwwYkBb.png"></MedalImage>
                    </Medal>
                    <Medal>
                        <MedalHeader>HEADSHOT</MedalHeader>
                        <PlayerTeam>bigbraincomp</PlayerTeam>
                        <PlayerName>dookiemonster33</PlayerName>
                        <MedalImage src="https://i.imgur.com/KwwYkBb.png"></MedalImage>
                    </Medal>
                </TopStatMedals>
            </SummaryWrapper>
        </SummaryPage>
    </>
  )
}

export default SeasonSummary;