import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Resetowanie hasła"} />
      <BreadCrumb title={"Resetowanie hasła"} />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Zresetuj hasło</h3>
              <form action="" className="d-flex flex-column gap-20">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Hasło"
                />
                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Potwierdź hasło"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-20 align-items-center">
                    <button className="button border-0">OK</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resetpassword;
