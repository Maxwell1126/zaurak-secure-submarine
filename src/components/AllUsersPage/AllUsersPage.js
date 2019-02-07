import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AllUsersPage extends Component {
    constructor(){
        super();
        this.state={
            users:[]
        }
    }
    componentDidMount() {
        this.getUsers();
    }

getUsers = () =>{
    axios.get('/api/allUsers',(req,res)=>{ 
    }).then((response)=>{
        let userNames = response.data;
        this.setState({
            users: userNames
        })
    })
}
    render() {
        return (
            <div>
                <ul>
                    {JSON.stringify(this.state)}
                    {this.state.users.map(user => (
                        <li>
                            Name: {user.username}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    secrets: state.secrets,
    user: state.user,
});

export default connect(mapStateToProps)(AllUsersPage);