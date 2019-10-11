import React from 'react';

class Avatar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const borderRadius = (this.props.shape === "circle") ? this.props.width / 2 : 0;
        let styles = {borderRadius: borderRadius};
        return(
            <div>
                <img src={this.props.url} width={this.props.width} height={this.props.width} style={styles}></img>
            </div>
        )
    }
}

export default Avatar;