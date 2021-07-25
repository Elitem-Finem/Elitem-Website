import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Navbar from '../Navbar.js';
import History from './History.js';
import { auth, db } from '../../firebase.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const present_day = new Date().getDate(); // the current date in this case is 25
const present_month = new Date().getMonth(); // the current month in this case is 6
const present_year = new Date().getFullYear(); // the current year in this case is 2021


// determines if current year is a leap year
let leapYear = 28;
        if (present_year % 4 === 0) {
        leapYear = 29;
        }
        const daysPerMonth = [31, leapYear, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Dashboard() {
    const [user, setUser] = useState();
    const [inverse, setInverse] = useState();
    const [payment, setPayment] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await db.collection('users').doc(auth.currentUser.uid).get();
                let data = { title: 'not found'}
                if (response.exists) {
                    data = response.data();
                }
                setUser(data);
                setLoading(false);
            } catch (err) {
                console.log('async error')
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        try {
            let data = 0;
            const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            if (shortMonths[present_month] === user.payDate.substring(0, 2)) {
                data = (daysPerMonth[present_month] - present_day) + parseInt(user.payDate.substring(4, 6))    
            } else {
                data = (parseInt(user.payDate.substring(4, 6)) - present_day)
            }
            setPayment(data);
            setInverse(31 - data);
        } catch (err) {
            console.log('awaiting data');
        }
    }, [loading]);


    return (
        <div className='dashboard'>
            <Navbar />
            <div className='dashboard_inner'>
                <h1>Welcome back, {!loading && user.name}!</h1>
                <div className='dashboard_pay'>
                    <div className='dashboard_progress'>
                        <div>
                            <CircularProgressbar
                                value={!loading && inverse}
                                maxValue={31}
                                styles={buildStyles({
                                    pathColor: '#80C27F',
                                    backgroundColor: '#787F90'
                                })}
                            />
                        </div>
                        <h1>{!loading && payment} days until next payment on</h1>
                        <h1>{!loading && user.payDate}</h1>
                    </div>
                    <div className='dashboard_due'>
                        <div>
                            <h1>$00.00</h1>
                            <h2>due</h2>
                        </div>
                        <h2>Summary of Fees:</h2>
                        <div className='dashboard_duePayments'>
                            <p>{!loading && user.plan} maintenance fee</p>
                            <p>$00.00</p>
                        </div>
                        <h1>Pay Now</h1>
                    </div>
                </div>
                <History/>
            </div>
        </div>
    )
}

export default Dashboard;
