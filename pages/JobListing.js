import styles from "../styles/JobListing.module.css";
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal"

export default function JobListing() {
    const [data, setData] = React.useState([]);
    const [modalData, setModalData] = React.useState({});

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const handleClick = async (data) => {
        console.log(data);
        setModalData(data);
        setOpen(true);
    };

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
        <Modal data={modalData} open={open} handleClose={handleClose}/>
        <div className={styles.tableHead}>
            <Link href="/PostJobPg1">
            + Add a new Job
            </Link>
        </div>
        <div className={styles.tableWrap}>
        
        {data.map((m) => (
            <div className={styles.tableRow} key={m.p1}>
            <div className={styles.col1}>{JSON.parse(m.p1).jobTitle}</div>
            <div className={styles.col2}>{JSON.parse(m.p2).date}</div>
            <div className={styles.col3}>
                <button className={styles.detailsBtn} onClick={() => handleClick(m)}>
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
