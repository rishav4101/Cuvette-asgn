import styles from "../styles/JobListing.module.css";
import React from "react";
import Link from "next/Link";
import Navbar from "../components/Navbar";

export default function JobListing() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        var arr = localStorage.getItem("jobs");
        if(!arr){
            arr = [];
        }

        arr = JSON.parse(arr);
        console.log(arr)

        setData(arr);
    }, [])

    return(
        <>
        <Navbar/>
        <main className="main">
        
        <div className={styles.tableWrap}>
            
        <div className={styles.tableHead}>
            <Link href="/PostJobPg1">
            + Add a new Job
            </Link>
        </div>
        {data.map((m) => (
            <div className={styles.tableRow} key={m.p1}>
            <div className={styles.col1}>{JSON.parse(m.p1).jobTitle}</div>
            <div className={styles.col2}>{JSON.parse(m.p1).date}</div>
            <div className={styles.col3}>
                <button className={styles.detailsBtn}>
                    Details
                </button>
            </div>
            </div>
        ))}
            
        </div>
        </main>
        </>
    )
}
