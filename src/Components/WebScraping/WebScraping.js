import React, {useEffect} from "react";
import Mercury from "@postlight/mercury-parser";
import $ from 'jquery';
import styles from './WebScraping.module.scss';

let html = null;

class WebScraping extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lastUpdate: null,
            confirmed: null,
            deaths: null,
            recovered: null,
            dailyDeaths: null,
            dailyCases: null,
        };
    }



    componentDidMount() {



        // fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        //         "x-rapidapi-key": "108748eee1mshbc7448c0fbf3580p1c0a23jsn4094d8d94c7b"
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data.data.covid19Stats[3389]);
        //
        //         this.setState({lastUpdate: data.data.covid19Stats[3389].lastUpdate})
        //         this.setState({confirmed: data.data.covid19Stats[3389].confirmed})
        //         this.setState({deaths: data.data.covid19Stats[3389].deaths})
        //         this.setState({recovered: data.data.covid19Stats[3389].recovered})
        //     })

        fetch("https://services1.arcgis.com/YmCK8KfESHdxUQgm/arcgis/rest/services/KoronawirusPolska_czas_widok/FeatureServer/0/query?f=json&where=1=1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Aktualizacja%20asc&resultOffset=0&resultRecordCount=2000&cacheHint=true&fbclid=IwAR0YggKYOqHI7wlSxqoeKUwUNSPU1-Yym1uV1Kx_wcMb-Ys0JaA3TYkpHtY", {
                "method": "GET",
            headers: {
                "Accept": "application/json"
            }

            })
            .then(response => response.json())
            .then(json => {
                console.log(json.features[json.features.length-1].attributes);
                console.log(json.features[json.features.length-1].attributes.Potwierdzone);
                this.setState({confirmed: json.features[json.features.length-1].attributes.Potwierdzone});
                console.log(json.features[json.features.length-1].attributes.Smiertelne);
                this.setState({deaths: json.features[json.features.length-1].attributes.Smiertelne});
                console.log(json.features[json.features.length-1].attributes.Wyleczone);
                this.setState({recovered: json.features[json.features.length-1].attributes.Wyleczone});
                console.log(json.features[json.features.length-1].attributes.Dziennie_potwierdzone);
                this.setState({dailyCases: json.features[json.features.length-1].attributes.Dziennie_potwierdzone});
                console.log(json.features[json.features.length-1].attributes.Dziennie_śmiertelne);
                this.setState({dailyDeaths: json.features[json.features.length-1].attributes.Dziennie_śmiertelne});

                })

















    }


    render(){

        return(
            <>

                <div className={styles.wrapper}>



                    <div className={styles.confirmed}><b>{this.state.confirmed}</b> <div>przypadków</div></div>
                    <div className={styles.deaths}><b>{this.state.deaths} </b><div>zgonów</div></div>

                    <div className={styles.daily}>
                        <div className={styles.dailyCases}><b> +{this.state.dailyCases}</b><div>nowe przypadki</div></div>
                        <div className= {styles.dailyDeaths}><b> +{this.state.dailyDeaths}</b> <div>nowe zgony</div> </div>
                    </div>

                </div>
            </>
        );
    }

}

export default WebScraping;