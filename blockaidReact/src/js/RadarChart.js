import React, {useState,memo, useEffect} from "react";
import { RadarDataFront, RadarOptionsFront, RadarOptionsFront_Mini } from "./RaderConfigFront";
import { RadarDataBack, RadarOptionsBack, RadarOptionsBack_Mini } from "./RaderConfigBackend";
import { RadarDataOthers, RadarOptionsOthers, RadarOptionsOthers_Mini } from "./RaderConfigOthers";
import { Radar } from "react-chartjs-2";

export const RadarChart=memo((props)=> {
    console.log(props["chartType"])
    const [RadarOption, setOption] = useState();
    const [RadarData, setData] = useState({});
    const window_w = window.innerWidth
    useEffect(()=>{
        if(props["chartType"]==="front"&& window_w > 400){
            setOption(RadarOptionsFront)
            setData(RadarDataFront)
        }else if(props["chartType"]==="front"&& window_w <= 400){
            setOption(RadarOptionsFront_Mini)
            setData(RadarDataFront)
        }
        else if (props["chartType"]==="backend" && window_w > 400){
            setOption(RadarOptionsBack)
            setData(RadarDataBack)
        }else if(props["chartType"]==="backend" && window_w <= 400){
            setOption(RadarOptionsBack_Mini)
            setData(RadarDataBack)
        }else if(props["chartType"]==="others" && window_w > 400){
            setOption(RadarOptionsOthers)
            setData(RadarDataOthers)
        }else if(props["chartType"]==="others" && window_w <= 400){
            setOption(RadarOptionsOthers_Mini)
            setData(RadarDataOthers)
        }
    },[])
    return (
        <Radar  data={RadarData} options={RadarOption}/>
    );
})
