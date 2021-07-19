import styles from "../styles/PostJobPg1.module.css";
import React from "react";
import Link from "next/Link";
import Navbar from "../components/Navbar";

export default function PostJobPg1() {
    const [formState, setFormState] = React.useState({
        jobTitle:"",
        jobLocation:"",
        isRemote:false,
        isFlexible:false
    })

    const handleOnSubmit = () => {
        localStorage.setItem("currJobp1", JSON.stringify(formState));
    } 

    return (
        <>
        <Navbar/>
            <main className="main">
                <div className={styles.card}>
                <br/>
                    <div className={styles.formRow}>
                        <div className={styles.formCol1}>
                            Job Title
                        </div>
                        <div className={styles.formCol2}>
                            <input className={styles.titleInput} type="text" placeholder="" value={formState.jobTitle} onChange={(e) => {
                                setFormState({...formState, jobTitle: e.target.value});
                                console.log(formState);
                            }} />
                        </div>
                    </div>
                    <br/><br/>
                    <div className={styles.formRow}>
                        <div className={styles.formCol1}>
                            Job Location
                        </div>
                        <div className={styles.formCol2}>
                            {(!formState.isRemote && !formState.isFlexible) || (formState.isFlexible) 
                            ? 
                            <input className={styles.locationInput} 
                            type="text" 
                            placeholder="Enter the location" 
                            value={formState.jobLocation} 
                            onChange={(e) => {
                                setFormState({...formState, jobLocation: e.target.value});
                                console.log(formState);
                            }} /> : <></>}
                            <div className={styles.subRow}>
                            <div>
                                <input type="checkbox" 
                                id="remote" 
                                name="remote" 
                                value="remote" 
                                onChange={() => {
                                    setFormState({...formState, isRemote: !formState.isRemote})
                                }}/>
                                <label htmlFor="remote"> This Job is remote</label>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div>
                                <input type="checkbox" id="flexible" name="flexible" value="flexible" 
                                onChange={() => {
                                    setFormState({...formState, isFlexible: !formState.isFlexible})
                                }}/>
                                <label htmlFor="flexible"> This Job is flexible</label>
                            </div>
                            </div>
                        </div>
                    </div>

                    <br/>

                    <div className={styles.submitWrap}>
                    <Link href="/PostJobPg2">
                        <button className={styles.submitBtn} onClick={handleOnSubmit}>
                            NEXT
                        </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}