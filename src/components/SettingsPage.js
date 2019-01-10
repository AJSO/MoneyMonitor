import React from 'react';
import { connect } from 'react-redux'
import { startUpdateCurrency } from '../actions/settings';

class SettingsPage extends React.Component {

    changeCurrency = (e) => {
        const currency = e.target.value;
        this.props.startUpdateCurrency(currency);
    }

    render() {
        return (
            <div className="content-container">
                <div className="summary__container">
                    <h1 className="page-header__title">Customise Preferences</h1>
                </div>
                <div className="settings__option">
                    <h2>Currency</h2>
                    <select className="select" value={this.props.settings.currency} onChange={this.changeCurrency}>
                        <option key="en-gb" value="en-gb">Pound (£)</option>
                        <option key="en" value="en">Dollar ($)</option>
                        <option key="fr" value="fr">Euro (€)</option>
                    </select>
                </div>
                <div className="summary__container">
                    <h1 className="page-header__title">Manage Your Data</h1>
                </div>
                <div className="settings__option">
                    <h2>Clear All Expenses</h2>
                    <button className="button">Clear</button>
                </div>
                <div className="settings__option">
                    <h2>Clear All Trackers</h2>
                    <button className="button">Clear</button>
                </div>
                <div className="summary__container">
                    <h1 className="page-header__title">Account Management</h1>
                </div>
                <div className="settings__option">
                    <h2>Delete Account</h2>
                    <button className="button">Delete</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    settings: state.settings
});

const mapDispatchToProps = (dispatch) => ({
    startUpdateCurrency: (data) => dispatch(startUpdateCurrency(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);