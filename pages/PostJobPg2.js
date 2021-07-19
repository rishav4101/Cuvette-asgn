import styles from "../styles/PostJobPg2.module.css";
import React from "react";
import Multiselect from 'multiselect-react-dropdown';
import Slider from '@material-ui/core/Slider';
import Link from "next/Link";
import Navbar from "../components/Navbar";
import Image from "next/image";

function valuetext(value) {
    return `${value} INR`;
}

export default function PostJobPg2() {
    const [p1, setP1] = React.useState(false);
    const [p2, setP2] = React.useState(false);
    const [p3, setP3] = React.useState(false);
    const [formState, setFormState] = React.useState({
        mode:"",
        date:"",
        descp:"",
        duration:"",
        range:[5,40],
        skills: [],
    })

    const onSelect = (selectedList, selectedItem) => {
        console.log(selectedList);
        setFormState({...formState, skills:selectedList})
    }

    const onRemove = (selectedList, removedItem) => {
        console.log(selectedList);
        setFormState({...formState, skills:selectedList})
    }

    const handleSubmit = () => {
        const p1 = localStorage.getItem("currJobp1");

        var arr = localStorage.getItem("jobs");
        if(!arr){
            arr = [];
        }
        arr = JSON.parse(arr);
        arr.push({p1: p1, p2: JSON.stringify(formState)});

        localStorage.setItem("jobs", JSON.stringify(arr));
    }

    const options = [{name: "nodeJs", id:1}, {name: "reactJs", id:2}, {name: "Django", id:3}, {name: "MongoDB", id:4}, {name: "DRF", id:5}]

    const marks = [
        {
          value: 5,
          label: '5k INR',
        },
        {
          value: 100,
          label: '100k INR',
        },
      ];

    return (
        <>
        <Navbar/>
            <main className="main">
                <div className={styles.card}>
                <div className={styles.flex}>
                    <Link href="/PostJobPg1">
                        <div className={styles.headBack}>Back</div>
                    </Link>
                    <div className={styles.cardHead}># Intern Details</div>
                </div>
                    <div className={styles.formRow}>
                        <div className={styles.formCol20}>
                            Skill
                        </div>
                        <div className={styles.formCol80}>
                        <Multiselect
                            options={options} 
                            onSelect={onSelect} 
                            onRemove={onRemove} 
                            displayValue="name" 
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formCol20}>
                            Mode
                        </div>
                        <div className={styles.formCol80}>
                            <input type="checkbox" id="partTime" name="partTime" value="partTime" checked={p1} onChange={(e) => {
                                setP1(true);
                                setP2(false);
                                setP3(false);
                                 setFormState({...formState, mode:e.target.value})
                                 
                            }} />
                            <label htmlFor="partTime"> Part Time <br/> 20hrs/week</label>
                            &nbsp;&nbsp;&nbsp;
                            <input type="checkbox" id="semiPartTime" name="semiPartTime" checked={p2} value="semiPartTime" onChange={(e) => {
                                setP1(false);
                                setP2(true);
                                setP3(false);
                                 setFormState({...formState, mode:e.target.value})
                                 
                            }} />
                            <label htmlFor="semiPartTime"> Semi Part Time <br/> 20hrs/week</label>
                            &nbsp;&nbsp;&nbsp;
                            <input type="checkbox" id="fullTime" name="fullTime" value="fullTime" checked={p3} onChange={(e) => {
                                setP1(false);
                                setP2(false);
                                setP3(true);
                                 setFormState({...formState, mode:e.target.value})
                                 
                            }} />
                            <label htmlFor="fullTime"> Full Time <br/> 20hrs/week</label>
                        </div>
                    </div>
                    
                    <div className={styles.formRow}>
                        <div className={styles.formCol40}>
                            Stipend Range
                        </div>
                        <div className={styles.formCol60}>
                        <Slider
                            style={{width:"100%"}}
                            value={formState.range}
                            onChange={(e, val) => {
                                setFormState({...formState, range:val})
                            }}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                            min={5}
                            max={100}
                            marks={marks}
                        />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formCol50}>
                            <div className={styles.formcolIn1}>
                                Start Date &nbsp;
                            </div>
                            &nbsp;
                            <div className={styles.formcolIn2}>
                                <input className={styles.dateInput} type="text" placeholder="dd/mm/yyyy" value={formState.date} onChange={(e) => {
                                        setFormState({...formState, date: e.target.value});
                                        console.log(formState);
                                    }} />
                            </div>
                        </div>
                        <div className={styles.formCol50}>
                        <div className={styles.formColIn1}>
                                Duration &nbsp;
                            </div>
                            &nbsp;
                            <div className={styles.formColIn2}>
                                <input className={styles.durationInput} type="text" placeholder="" value={formState.duration} onChange={(e) => {
                                        setFormState({...formState, duration: e.target.value});
                                        console.log(formState);
                                    }} /> 
                                 &nbsp;&nbsp;Months
                            </div>
                        </div>
                    </div>

                    <div className={styles.formCol50}>
                            Job Description
                    </div>
                    <textarea
                        value={formState.descp} 
                        onChange={(e) => {
                            setFormState({...formState, descp: e.target.value});
                            console.log(formState);
                        }}
                        className={styles.description}
                        placeholder=
                        "Enter the job description.
                        Try to be as specific as possible
                        1.
                        2.
                        3."
                    />


                    <div className={styles.submitWrap}>
                        <Link href="/JobListing">
                        <button className={styles.submitBtn} onClick={handleSubmit}>Post</button>
                        </Link>
                    </div>
                </div>


            </main>
        </>
    )
}