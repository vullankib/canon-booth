import React from 'react';

class Settings extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     show: false
        // };
    }

    render() {
        return (
            <div className="settings-page">
                <div className="settings-top">
                    <h2 className="settings-title">Lifestyle</h2>
                    <p className="settings-text">Adjust the filters and see how you look on the photobooth screen! Once you're satisfied, just take a picture using the shutter button below.</p>
                </div>
                <div className="settings-options">
                    <div className="settings-left-side">
                        <p>Saturation</p>
                        <p>Highlights</p>
                        <p>Polarization</p>
                        <p>Aperature</p>
                        <p>Brightness</p>
                        <p>Contrast</p>
                        <p>Shutter&nbsp;Speed</p>
                    </div>
                    <div className="settings-right-side">
                        <div className="settings-toggle-bar"></div>
                        <div className="settings-toggle-bar"></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Settings;