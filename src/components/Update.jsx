import React, { Component } from 'react';

export default class Update extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            desc: this.props.desc
        }
    }
    render() {
        return (
            <div>
                <h2>Update</h2>
                <form action="/update_process" method="post" onSubmit={
                    function(e){
                        e.preventDefault();
                        const id = e.target.id.value;
                        const title = e.target.title.value;
                        const desc = e.target.desc.value;
                        this.props.onUpdate(id,title,desc);
                    }.bind(this)
                }>
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={function(e){
                        this.setState({title:e.target.value});
                    }.bind(this)}></input></p>
                    <p><textarea name="desc" placeholder="desc" value={this.state.desc} onChange={function(e){
                        this.setState({desc:e.target.value});
                    }.bind(this)}></textarea></p>
                    <p><input type="submit" value="Update"></input></p>
                </form>
            </div>
        );
    }
}

