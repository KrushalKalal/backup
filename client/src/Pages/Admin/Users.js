import React from "react";
import AdminMenu from "../../Component/Layout/AdminMenu";
import Layout from "../../Component/Layout/Layout";
const CreateCategory = () => {
  return (
    <Layout title={"Dashboard - Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Users List</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
