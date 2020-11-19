import React from 'react';

export default class FilterSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.searchQuery,
            checks: this.looperino(this.props.filterList)
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate() {
        if (this.props.searchQuery !== this.state.searchQuery) {
            let jsonerino = this.looperino(this.props.filterList);
            this.setState({
                searchQuery: this.props.searchQuery,
                checks: jsonerino
            }, () => this.props.updateProp(new Set()));
        }
    }

    looperino(listerino) {
        let jsonerino = {}
        jsonerino['StockFilter'] = false;
        for (var str of listerino) {
            jsonerino[str] = false;
        }
        return jsonerino;
    }

    handleChange(event) {
        var newChecks = this.state.checks;
        newChecks[event.target.name] = !this.state.checks[event.target.name];
        this.setState({
            checks: newChecks
        });
        this.sendFilters(this.state.checks);
    }

    sendFilters(checks) {
        let filterSet = new Set();

        for (var [key, value] of Object.entries(checks)) {
            if (key === 'StockFilter' && value === true) {
                filterSet.add('stock^true');
            } else if (value) {
                filterSet.add('category^' + key.toString());
            }
        }
        this.props.updateProp(filterSet);
    }

    render() {
        const filterList = this.props.filterList;

        return (
            <div className='FilterSelector' >
                <form id="FilterForm">
                    <label htmlFor="StockFilter">In Stock</label>
                    <input type='checkbox' checked={this.state.checks['StockFilter']} id='StockFilter' name='StockFilter' onChange={this.handleChange} />
                    {
                        filterList.map(filter => (
                            <div className={filter + 'CheckBox'} key={filter}>
                                <label htmlFor={filter + 'Filter'}>{filter}</label>
                                <input type='checkbox' checked={this.state.checks[filter]} name={filter} id={filter + 'Filter'} key={filter} onChange={this.handleChange} />
                            </div>
                        ))
                    }
                </form>
            </div>
            );
    }
}
