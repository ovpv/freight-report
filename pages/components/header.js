import Head from 'next/head';
import {Component} from 'react';
import Link from 'next/link';

import "../../sass/index.scss";

export default class Header extends Component{
    render(){
        return(
            <div>
                <Head>
                    <title>Page</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <header>
                    <div className="container d-flex justify-content-between align-items-center p-3">
                        <div className="d-flex align-items-center">
                            <h5>Freight Report</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-inline-flex align-items-center p-3">
                                <Link as="/" href="home" prefetch><a>Home</a></Link>
                            </div>
                            <div className="d-inline-flex align-items-center p-3">
                                <Link href="/trucks" prefetch><a>Trucks</a></Link>
                            </div>
                            <div className="d-inline-flex align-items-center p-3">
                                <Link href="/trips" prefetch><a>Trips</a></Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}