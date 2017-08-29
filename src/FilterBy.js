import React, { Component } from "react";

class FilterBy extends Component {
  handleChange = (e) => {
    this.props.setCurrentFilter(e.target.value);
  }

  render() {
    const { currentFilter } = this.props;
    return (
      <div className="py18">
        <div className="flex-parent flex-parent--center-main">
          <div className="toggle-group txt-s mr18" >
            <label className="toggle-container">
              <input name="toggle-2" type="radio" checked={currentFilter === "ALL"} value="ALL" onChange={this.handleChange} />
              <div className="toggle toggle--customColor">All</div>
            </label>
            <label className="toggle-container">
              <input name="toggle-2" type="radio" checked={currentFilter === "ACTIVE"} value="ACTIVE" onChange={this.handleChange} />
              <div className="toggle toggle--customColor">Active</div>
            </label>
            <label className="toggle-container">
              <input name="toggle-2" type="radio" checked={currentFilter === "COMPLETED"} value="COMPLETED" onChange={this.handleChange} />
              <div className="toggle toggle--customColor">Completed</div>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBy;
