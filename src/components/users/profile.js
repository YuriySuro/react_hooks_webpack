import React from 'react';
import * as usersApi from '../../api/users';

export default class extends React.PureComponent {
    state = {

    };

    render() {
        if(true) {
            return <div>Loading...</div>
        }

        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>About</td>
                        <td></td>
                    </tr>
                    <tr onClick={this.somethingInc}>
                        <td>Something Counter</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        );
    }
};