import React from "react";
import "./tableHead.css";
export default ({ children }) => {
  return (
    <table className="t_head_outer">
      <thead>
        <tr>
          <th className="snumber">S No.</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Mobile</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="snumber">1</td>
          <td>
            Naman Bhardwaj <i className="fas fa-pen"></i>
          </td>
          <td>
            23 <i className="fas fa-pen"></i>
          </td>
          <td>
            Male <i className="fas fa-pen"></i>
          </td>
          <td>
            9013473552 <i className="fas fa-pen"></i>
          </td>
        </tr>
        <tr>
          <td className="snumber">1</td>
          <td>
            Naman Bhardwaj <i className="fas fa-pen"></i>
          </td>
          <td>
            23 <i className="fas fa-pen"></i>
          </td>
          <td>
            Male <i className="fas fa-pen"></i>
          </td>
          <td>
            9013473552 <i className="fas fa-pen"></i>
          </td>
        </tr>
        <tr>
          <td className="snumber">1</td>
          <td>
            Naman Bhardwaj <i className="fas fa-pen"></i>
          </td>
          <td>
            23 <i className="fas fa-pen"></i>
          </td>
          <td>
            Male <i className="fas fa-pen"></i>
          </td>
          <td>
            9013473552 <i className="fas fa-pen"></i>
          </td>
        </tr>
        <tr>
          <td className="snumber">1</td>
          <td>
            Naman Bhardwaj <i className="fas fa-pen"></i>
          </td>
          <td>
            23 <i className="fas fa-pen"></i>
          </td>
          <td>
            Male <i className="fas fa-pen"></i>
          </td>
          <td>
            9013473552 <i className="fas fa-pen"></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
