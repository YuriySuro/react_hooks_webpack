import React from 'react';
import * as usersApi from '~/api/users';

export default class extends React.PureComponent {
    state = {
        loaded: false,
        info: null,
        something: 0
    };

    componentDidMount() {
        this.loadInfo();
    };

    componentDidUpdate(prevProps) {
        if(prevProps.id !== this.props.id) {
           this.loadInfo();
        }
    };

    loadInfo() {
        if(this.state.loaded) {
            this.setState({ loaded: false, info: null });
        }
        usersApi.get(this.props.id).then((info) => {
            this.setState({
                loaded: true,
                info
            });
        });
    }

    somethingInc = () => { 
        this.setState({ something: this.state.something + 1 });
    }

    derivedSomething = (something) => {
        console.log("derived");
        return something ** 8;
    }

    render() {
        if(!this.state.loaded) {
            return <div>Loading...</div>
        }

        let derived = this.derivedSomething(this.state.something); 

        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{this.state.info.name}</td>
                    </tr>
                    <tr>
                        <td>About</td>
                        <td>{this.state.info.description}</td>
                    </tr>
                    <tr onClick={this.somethingInc}>
                        <td>Something Counter</td>
                        <td>{this.state.something}</td>
                    </tr>
                    <tr>
                        <td>Something Derived</td>
                        <td>{derived}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
};