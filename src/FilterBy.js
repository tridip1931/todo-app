import React, { Component } from "react";

class FilterBy extends Component {
  render() {
    return (
      <div className="py18">
        <div className="flex-parent flex-parent--center-main">
          <div className="toggle-group txt-s mr18">
            <label className="toggle-container">
              <input name="toggle-2" type="radio" defaultChecked />
              <div className="toggle toggle--customColor">All</div>
            </label>
            <label className="toggle-container">
              <input name="toggle-2" type="radio" />
              <div className="toggle toggle--customColor">Active</div>
            </label>
            <label className="toggle-container">
              <input name="toggle-2" type="radio" />
              <div className="toggle toggle--customColor">Completed</div>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBy;
