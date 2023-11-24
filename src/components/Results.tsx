'use client'
import React from 'react'
import electiondata from '@/app/electiondata'
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from '../app/firebaseConfig';
type Props = {}
function DataDisplay(){
    const DisplayData=electiondata.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.seats}</td>
                    <td>{info.difference}</td>
                </tr>
            )
        }
    )};
function Results({}: Props) {
    var year = 2017;
    const [data, setData] = useState([]);
    const [key, setKey] = useState(Date.now());
    useEffect(() => {
        const dbRef = ref(database, 'dataresult');

        onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
                setKey(Date.now());
            } else {
                console.log("No data available");
            }
        }, (error) => {
            console.error(error);
        });
    }, []);
  return (
    <div className='w-[300px] m-3'>
       
        
        <table className=' border-t-2 border-red-800'>
            <thead className=' '>
                <tr className=''>
                    <th className=''>Alliance</th>
                    <th className=''>Loss</th>
                    <th className=''>Seats</th>
                    <th className=''>Voteshare</th>
                    <th>Win</th>
                </tr>
            </thead>
            <tbody className=''>
                
               
                {electiondata.map((info)=>{
                    return(
                        <tr>
                            <td>{info.name}</td>
                            <td>{info.loss}</td>
                            <td>{info.seats}</td>
                            <td>{info.voteshare}</td>
                            <td>{info.win}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Results