import React, {useState,memo, useEffect} from "react";
import { RadarDataFront, RadarOptionsFront } from "./RaderConfigFront";
import { Radar } from "react-chartjs-2";

export const RadarChart=memo((props)=> {
    console.log(props["chartType"])
    const [RadarOption, setOption] = useState();
    const [RadarData, setData] = useState();
    useEffect(()=>{
        if(props["chartType"]){
            setOption(RadarOptionsFront)
            setData(RadarDataFront)
        }
    },[])
    return (
        <Radar  data={RadarData} options={RadarOption}   width={300}
        height={300}/>
    );
})
