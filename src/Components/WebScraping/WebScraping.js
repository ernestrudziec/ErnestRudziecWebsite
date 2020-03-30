import React, {useEffect} from "react";
import Mercury from "@postlight/mercury-parser";
import $ from 'jquery';
import styles from './WebScraping.module.scss';
import deaths from '../../assets/svg/death.svg';
import cases from '../../assets/svg/virus.svg';

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
            polandRegions: []
        };
    }

    fetchPoland =  async () => {

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

    });

}

    fetchPolandRegions =  async () => {

        fetch("https://services1.arcgis.com/YmCK8KfESHdxUQgm/arcgis/rest/services/wojewodztwa_corona_widok/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=SUM_Confirmed%20desc&resultOffset=0&resultRecordCount=25&cacheHint=true", {
            "method": "GET",
            headers: {
                "Accept": "application/json"
            }

        })
            .then(response => response.json())
            .then(json => {

             json.features.map( region => {
                 console.log(region.attributes);
                 // console.log(region.attributes.jpt_nazwa_.toUpperCase());

                 this.setState({
                     polandRegions: [ ...this.state.polandRegions, region.attributes ]

                 })



             })

            });



    }



   async componentDidMount() {

            this.fetchPoland();
            this.fetchPolandRegions();


            //wszystkie kraje
            //https://services1.arcgis.com/0MSEUqKaxRlEPj5g/ArcGIS/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=177&cacheHint=true


            //wojewodztwa
            // https://services1.arcgis.com/YmCK8KfESHdxUQgm/arcgis/rest/services/wojewodztwa_corona_widok/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=SUM_Confirmed%20desc&resultOffset=0&resultRecordCount=25&cacheHint=true

            //all cases
            //https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/2/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&outSR=102100&cacheHint=true










    }


    render(){

        return(
            <>

                <div className={styles.polandWrapper}>



                    <div className={styles.confirmed}><b>{this.state.confirmed}</b> <div>przypadków</div></div>
                    <div className={styles.deaths}><b>{this.state.deaths} </b><div>zgonów</div></div>

                    <div className={styles.daily}>
                        <div className={styles.dailyCases}><b> +{this.state.dailyCases}</b><div>nowe przypadki</div></div>
                        <div className= {styles.dailyDeaths}><b> +{this.state.dailyDeaths}</b> <div>nowe zgony</div> </div>
                    </div>

                </div>

                <div className={styles.polandRegionsWrapper}>

                    {
                        this.state.polandRegions.map((region, i) => {
                            return(
                                <div key={region.jpt_nazwa_} className={styles.regionWrapper}>

                                    <div className={styles.regions}>
                                    <p>{i+1}.{region.jpt_nazwa_.toUpperCase()}</p>
                                    </div>

                                    <div className={styles.cases}>

                                            <div className={styles.regionConfirmed}>
                                                 {region.SUM_Confirmed} <img alt='cases: ' src={cases} className={styles.casesIMG} />
                                             </div>
                                         <div className={styles.regionDeaths}>
                                             {region.SUM_Deaths} <img alt='deaths: ' src={deaths} className={styles.deathsIMG}/>
                                    </div>

                                    </div>

                                </div>
                            );
                        })

                    }


                </div>
            </>
        );
    }

}

export default WebScraping;