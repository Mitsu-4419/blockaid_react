import React, {useState,memo, useEffect} from "react";
import { RadarDataFront, RadarOptionsFront } from "./RaderConfigFront";
import { RadarDataBack, RadarOptionsBack } from "./RaderConfigBackend";
import { RadarDataOthers, RadarOptionsOthers } from "./RaderConfigOthers";
import { Radar } from "react-chartjs-2";

export const RadarChart=memo((props)=> {
    console.log(props["chartType"])
    const [RadarOption, setOption] = useState();
    const [RadarData, setData] = useState({});
    useEffect(()=>{
        if(props["chartType"]=="front"){
            setOption(RadarOptionsFront)
            setData(RadarDataFront)
        }else if (props["chartType"]=="backend"){
            setOption(RadarOptionsBack)
            setData(RadarDataBack)
        }else if(props["chartType"]=="others"){
            setOption(RadarOptionsOthers)
            setData(RadarDataOthers)
        }
    },[])
    return (
        <Radar  data={RadarData} options={RadarOption}/>
    );
})
