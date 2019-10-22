import React, { useState, useEffect, useMemo } from 'react';
import * as usersApi from '../../api/users';

export default function(props) {
    let [user, setUser] = useState({ loaded: false, info: null });
    useEffect(() => {
        console.log('here!');
        if(user.loaded) {
            setUser({ loaded: false, info: null });
        }
        usersApi.get(props.id).then((info) => setUser({ loaded: true, info }));
    }, [props.id]);

    let [something, somethingInc] = useState(0);
    let derived = useMemo(() => something ** 8, [something]);
    
    if(!user.loaded) {
        return <div>Loading...</div>;
    }

    return (
        <table className="table table-bordered">
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.info.name}</td>
                </tr>
                <tr>
                    <td>About</td>
                    <td>{user.info.description}</td>
                </tr>
                <tr onClick={() => somethingInc(something + 1)}>
                    <td>Something Counter</td>
                    <td>{something}</td>
                </tr>
                <tr>
                    <td>Something Derived</td>
                    <td>{derived}</td>
                </tr>
            </tbody>
        </table>
    );
};