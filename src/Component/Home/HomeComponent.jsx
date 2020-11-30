import react , {Component} from 'react';
import {connect} from "react-redux";
import {fetchGetTarget} from "../../Store/Actions/TargetActions";



class HomeComponent extends Component {
    constructor(props) {
        super(props);
        console.log('mohamed')
        console.log(this.props);

    }


    render() {
        return (
            <div>
          <h1>Hello</h1>
            </div>
        );
    }
}

const MapStateToProps = state => {
    return {
        target : state.Target
    };
};
const MapDispatchToProps = dispatch => {
    return {
        onGetTarget: () => dispatch(fetchGetTarget()),
    };
};

export default connect(MapStateToProps , MapDispatchToProps) (HomeComponent) ;