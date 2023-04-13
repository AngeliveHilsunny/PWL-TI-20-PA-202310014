import React, { useEffect, useState } from "react";
import TableUsers from "./TableData";
import CallAxios from "../../../Library/CallAxios";
import LoadingSpin from "../../../../../layouts/components/loadings/LoadingSpin";
import Form from "./Form";
import { useParams } from "react-router-dom";

export default function Users() {
  const { id } = useParams();

  const [paramUser, setParamUser] = useState({
    loading: false,
    data: [],
    message: "",
  });

  const GET_ALL_USER = () => {
    setParamUser({ ...paramUser });
    const postData = {
      method: "GET",
      url: "http://localhost:8080/api/students",
      headers: { "Content-Type": "application/json" },
    };
    CallAxios(postData).then((response) => {
      if (response.error) {
        setParamUser({ ...paramUser, message: response.error });
      } else {
        let results = response.data;
        console.log(results);
        if (results) {
          setParamUser({ ...paramUser, message: "", data: results });
        } else {
          setParamUser({ ...paramUser, message: "No record found" });
        }
      }
    });
  };

  useEffect(() => {
    GET_ALL_USER();
  }, []);

  return (
    <div id="product-master">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          <div className="d-flex flex-wrap flex-stack pb-7">
            <div className="d-flex flex-wrap align-items-center my-1">
              <h3 className="fw-bolder me-5 my-1">
                {Object.values(paramUser.data).length} list of user
              </h3>
            </div>
            <div className="d-flex flex-wrap my-1">
              <div className="d-flex my-0">
                <div className="input-group me-3">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Search here"
                    autoComplete="off"
                  />
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
                <select name="sort" className="form-select">
                  <option value="">Sort by</option>
                  <option value="">Name</option>
                  <option value="">Price</option>
                </select>
              </div>
            </div>
          </div>

          {paramUser.loading ? <LoadingSpin /> : ""}

          <div
            className={"product-items " + (paramUser.loading ? "d-none" : "")}
          >
            <TableUsers data={paramUser.data} id={id} />
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <Form getProduk={GET_ALL_USER} />
        </div>
      </div>
    </div>
  );
}
