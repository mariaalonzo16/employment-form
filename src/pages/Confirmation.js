import React from 'react';
import { TopNav } from '../layouts/topNav/TopNav';
import { Footers } from '../layouts/footer/Footers';
import { Button } from 'react-materialize';
import { useNavigate } from 'react-router-dom';

export const Confirmation = () => {
    let navigate = useNavigate();
    return (
        <>
            <TopNav />
            <main>
                <h1>Please Confirm your Information</h1>
                <Button
                    node="button"
                    style={{
                    marginRight: '5px'
                    }}
                    waves="light"
                    onClick={() => {
                    navigate("/")
                }}
                >
                    button
                </Button>
            </main>
            <Footers />
        </>
    );
}