import React from 'react';
class ProductList extends React.Component {
    render() { 
        return(
            <div>

<form>
        <div className="mb-3 col-4">
          <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
          <button type="submit" className="btn btn-primary mt-3 col-4 ">Submit</button>
        </div>
        
      </form>

            </div>
        )
    }
}
 
export default ProductList;
