import react , {Component} from 'react';
import {connect} from "react-redux";
import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl';
import { Dropdown } from 'primereact/dropdown';
import './Home.css';
import {add_locale, fetchGetTarget} from "../../Store/Actions/TargetActions";



class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : {name: "hello"} ,
            selectedLanguage : {code : 'en' , name : 'English'} ,
        }
        this.languages = [
            { name: 'English', code: 'en' },
            { name: 'Arabic', code: 'ar' },
        ];
    }
    onLanguageChange = (e) =>  {
        this.setState({ selectedLanguage: e.value });
        this.props.changeLocale(e.value.code)
    }
    componentDidMount() {
        console.log('here' , this.props.Target)
    }

    render() {
        return (
            <div>
          <h1>Hello</h1>
                <Dropdown value={this.state.selectedLanguage} options={this.languages} onChange={this.onLanguageChange} optionLabel="name" placeholder="Select a Language" />

                    <p>
                        <FormattedMessage
                            id="btnCheckout"
                            defaultMessage="some default one"
                            values={ this.state.selectedLanguage.code }
                        />
                        <br />
                        <FormattedMessage id="btnTermsandConditions" defaultMessage="some default one" />
                    </p>
                    <p>
                        {/* <FormattedMessage
                            id="title"
                            defaultMessage="lets learn a simple way in {channelName}"
                            values={{ channelName: 'forThoseWhoCode' }}
                        /> */}
                    </p>
                    <p>

                    </p>
            </div>

        );

    }
}


const MapStateToProps = state => {
    return {
        Target : state.Target
    };
};
const MapDispatchToProps = dispatch => {
    return {
        onGetTarget: () => dispatch(fetchGetTarget()),
        changeLocale : (value) => dispatch(add_locale(value))
    };
};

export default connect(MapStateToProps , MapDispatchToProps) (HomeComponent) ;