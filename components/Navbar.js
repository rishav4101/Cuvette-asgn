import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
        <div className="navWrap">
            <div className="navCol1">
                <Link href="/">
                <Image src="/cuvette.svg" alt="." height="50" width="120"/>
                </Link>
            </div>
            <div className="navCol2">
                <Link href="/JobListing">
                <button className="detailsBtn">Job Listings</button>
                </Link>
                </div>
        </div>
    )
}