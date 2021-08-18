import React from 'react';

class SearchBar extends React.Component {

    state = {term : ''}
    onInputChange = event => {
        this.setState({term: event.target.value})
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);

        //TODO : Call back from the Parent component.
        //AIzaSyCOIkvrCERO9Sj5riNXMjz44zg4NoWgHnY
    };

    render() {
        return (
                <div className="search-bar ui segment">
                    <form  onSubmit= {this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>Video Search</label>
                            <input type="text" value={this.state.term} onChange={this.onInputChange} ></input>
                        </div>

                    </form>

                </div>
                );
    }

}

export default SearchBar;