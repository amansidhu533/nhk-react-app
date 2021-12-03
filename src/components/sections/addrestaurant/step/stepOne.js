import React from 'react';

function stepOne(props) {
  return (
    <div className="general-sec">
      <form>
        <div className="row">
          <div className="col-12">
            <h5 className="text-light-black fw-700">General Information</h5>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">Restaurant name <sup className="fs-16">*</sup>
              </label>
              <input type="text" name="#" className="form-control form-control-submit" placeholder="i.e Pizza Hut" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">Restaurant phone</label>
              <input type="text" name="#" className="form-control form-control-submit" placeholder="i.e +1 321 828 6662" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">Manager Name</label>
              <input type="text" name="#" className="form-control form-control-submit" placeholder="i.e Alard Willaim" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">Manager Contact phone</label>
              <input type="text" name="#" className="form-control form-control-submit" placeholder="i.e +1 321 828 6662" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="text-light-black fw-700">Contact Email</label>
              <input type="email" name="#" className="form-control form-control-submit" placeholder="i.e alard@example.com " />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="u-line mb-xl-20" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5 className="text-light-black fw-700">Location</h5>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="text-light-black fw-700">Country <sup className="fs-16">*</sup>
              </label>
              <select className="form-control form-control-submit custom-select-2 full-width">
                <option value>Select Country</option>
                <option value="brazil" data-name>Brazil</option>
                <option value="canada" data-name>Canada</option>
                <option value="france" data-name>France</option>
                <option value="india" data-name>India</option>
                <option value="italy" data-name>Italy</option>
                <option value="spain" data-name>Spain</option>
                <option value="united-kingdom" data-name>United Kingdom</option>
                <option value="united-states" data-name>United States</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">State</label>
              <select className="form-control form-control-submit custom-select-2 full-width">
                <option value>Select State</option>
                <option value="uttar-pradesh">Uttar Pradesh</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">City</label>
              <select className="form-control form-control-submit custom-select-2 full-width">
                <option value>Select City</option>
                <option value="uttar-pradesh">Uttar Pradesh</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">Latitude</label>
              <input type="text" name="#" className="form-control form-control-submit" defaultValue="40.4167754" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">Longitude</label>
              <input type="text" name="#" className="form-control form-control-submit" defaultValue="-3.7037901999999576" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">Find On Map</label>
              <input type="text" name="#" className="form-control form-control-submit" placeholder="Type Your Address" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <div className="form-group" />
              <button type="submit" className="btn-second btn-submit">Search Location</button>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <iframe id="locmap" title="map" className="w-100" height={300} src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="u-line mb-xl-20" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label className="text-light-black fw-700">Delivery/Pickup</label>
              <select className="form-control form-control-submit custom-select-2 full-width">
                <option value="delivery">Delivery</option>
                <option value="pickup">Pickup</option>
                <option value="delivery_and_pickup">Delivery &amp; Pickup</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="text-light-black fw-700">Cuisines <sub>*</sub>
              </label>
              <input type="text" className="form-control form-control-submit" placeholder="Cuisines" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="u-line mb-xl-20" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5 className="text-light-black fw-700">Account Information</h5>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">Username</label>
              <input type="text" className="form-control form-control-submit" placeholder="Username" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-light-black fw-700">Email</label>
              <input type="email" className="form-control form-control-submit" placeholder="Email I'D" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="u-line mb-xl-20" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label className="custom-checkbox text-light-black fw-700">
              <input type="checkbox" name="#" /> <span className="checkmark" />By Registering You Confirm That You Accept The Terms &amp; Conditions And Privacy Policy</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default stepOne;