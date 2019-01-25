import React from 'react';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleIsOpenInputChange = this.handleIsOpenInputChange.bind(this);
    }

    handleIsOpenInputChange(e) {
        this.props.onIsOpenInput(e.target.checked);
    }
    render() {
        return (
            <form>
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.open}
                        onChange={this.handleIsOpenInputChange}
                    />
                    {' '}
                    Show open markets
                </p>
            </form>
        );
    }
}

export default CheckBox;