import React, { Component } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { withRouter } from "react-router";

 class Navbar extends Component {

    constructor(props) {
        super(props);

        this.items =  [
            {label: 'Home', icon: 'pi pi-fw pi-home' , link : '/'},
            {label: 'About', icon: 'pi pi-fw pi-calendar' , link : '/about'},
            {label: 'from', icon: 'pi pi-fw pi-pencil' , link : '/form'},
           
        ];
    }
    onTabChange = (e) => {
        console.log(e);
        this.setState({activeItem: e.value})
        this.props.history.push({
            pathname: e.value.link,
        })

    }
    render() {
        return (
            <div>
                <div className="card">
                    <TabMenu model={this.items} onTabChange={this.onTabChange}/>
                </div>
            </div>
        );
    }
}
export default withRouter(Navbar);