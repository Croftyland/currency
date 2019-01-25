import React, {Component} from 'react';
import CheckBox from './CheckBox'
import Open from './Open'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {IsShowOpen: false };

        this.handleIsShowInput = this.handleIsShowInput.bind(this);
    }

    handleIsShowInput(IsShowOpen) {
        this.setState({ IsShowOpen: IsShowOpen })
    }

    render() {
        return (<div>
                <CheckBox
                    IsShowOpen={ this.state.IsShowOpen }
                    IsShowInput={ this.handleIsShowInput }/>
                <Open
                    IsShowOpen={ this.state.isShowOpen }/>
            </div>
        )

    }
}

export default App;





