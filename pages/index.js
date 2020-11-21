import axios from 'axios';
import {useState, useEffect} from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import React from 'react';


const Index = () => {
    const [data, setData]= useState(null);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6')
            .then(res => {
                setData(res.data.aisle);
                console.log(res.data.aisle);
                setLoading(false);
            });
    }, []);

    if (isLoading){
        return <div className="App">Loading...</div>;
    }
    return (
        <>
            <Head>
                <title>Foxtrot</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
            </Head>
            <Navbar/>
            <main>
                <div className={'content'}>
                    <Jumbotron aisleTitle={data.title}/>
                    <Grid data= {data.groups}/>
                </div>
                <Footer/>
            </main>
        </>
    );
};

export default Index;
