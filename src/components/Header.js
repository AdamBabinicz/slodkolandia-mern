import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch, BsCart4 } from "react-icons/bs";
import { LuGitCompare } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Wynajem namiotów, stołów, krzeseł, dmuchańców i&nbsp;urządzeń
                kateringowych
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                ☎&nbsp;
                <a href="tel:+48531890827" className="text-white">
                  +48 531 890 827
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h3>
                <Link className="text-white">
                  <span className="sweet">
                    <em>słodko</em>
                  </span>
                  Landia<em className="sweet">wita:</em>
                </Link>
              </h3>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Wyszukaj tutaj produkt"
                  aria-label="Wyszukaj tutaj produkt"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <LuGitCompare className="icon" />
                    <p className="mb-0">
                      Porównaj
                      <br />
                      produkty
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <MdFavoriteBorder className="icon" />
                    <p className="mb-0">
                      Ulubiona <br />
                      lista
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <FaRegUser className="icon" />
                    <p className="mb-0">
                      Zaloguj się <br />
                      na swoje konto
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <BsCart4 className="icon yellow" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">500 zł</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BiSolidCategory />
                      <span className="me-5 d-inline-block">Kategorie</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-label="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="" className="dropdown-item">
                          Namioty
                        </Link>
                      </li>

                      <li>
                        <Link to="" className="dropdown-item">
                          Stoły
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item">
                          Krzesła
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item">
                          Dmuchańce
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item">
                          Urządzenia
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Start</NavLink>
                    <NavLink to="/product">Wynajem</NavLink>
                    <NavLink to="/blogs">Blogi</NavLink>
                    <NavLink to="/contact">Kontakt</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import { BsSearch, BsCart4 } from "react-icons/bs";
// import { LuGitCompare } from "react-icons/lu";
// import { MdFavoriteBorder } from "react-icons/md";
// import { FaRegUser } from "react-icons/fa";
// import { BiSolidCategory } from "react-icons/bi";

// const Header = () => {
//   return (
//     <>
//       <header className="header-top-strip py-3">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
//               <p className="text-white mb-0">
//                 Wynajem namiotów, stołów, krzeseł, dmuchańców i&nbsp;urządzeń
//                 kateringowych
//               </p>
//             </div>
//             <div className="col-12 col-md-6 text-center text-md-end">
//               <p className="text-white mb-0">
//                 ☎&nbsp;
//                 <a href="tel:+48531890827" className="text-white">
//                   +48 531 890 827
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>
//       <header className="header-upper py-3 d-flex justify-content-between align-items-center">
//         <div className="col-6 col-md-2 text-center text-md-start">
//           <h3>
//             <Link className="text-white">
//               <span className="sweet">
//                 <em>słodko</em>
//               </span>
//               Landia
//             </Link>
//           </h3>
//         </div>
//         <div className="col-12 col-md-5 mt-3 mt-md-0">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control py-2"
//               placeholder="Wyszukaj tutaj produkt"
//               aria-label="Wyszukaj tutaj produkt"
//               aria-describedby="basic-addon2"
//             />
//             <span className="input-group-text p-3" id="basic-addon2">
//               <BsSearch className="fs-6" />
//             </span>
//           </div>
//         </div>
//         <div className="col-12 col-md-5">
//           <div className="header-upper-links d-flex align-items-center justify-content-between">
//             <div>
//               <Link className="d-flex align-items-center gap-10 text-white">
//                 <LuGitCompare className="icon" />
//                 <p className="mb-0">
//                   Porównaj
//                   <br />
//                   produkty
//                 </p>
//               </Link>
//             </div>
//             <div>
//               <Link className="d-flex align-items-center gap-10 text-white">
//                 <MdFavoriteBorder className="icon" />
//                 <p className="mb-0">
//                   Ulubiona <br />
//                   lista
//                 </p>
//               </Link>
//             </div>
//             <div>
//               <Link className="d-flex align-items-center gap-10 text-white">
//                 <FaRegUser className="icon" />
//                 <p className="mb-0">
//                   Zaloguj się <br />
//                   na swoje konto
//                 </p>
//               </Link>
//             </div>
//             <div>
//               <Link className="d-flex align-items-center gap-10 text-white">
//                 <BsCart4 className="icon yellow" />
//                 <div className="d-flex flex-column gap-10">
//                   <span className="badge bg-white text-dark">0</span>
//                   <p className="mb-0">500 zł</p>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>
//       <header className="header-bottom py-3">
//         <div className="container-xxl">
//           <div className="row">
//             <div className="col-12">
//               <div className="menu-bottom d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 gap-md-5">
//                 <div className="col-12 col-md-6">
//                   <div className="dropdown">
//                     <button
//                       className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
//                       type="button"
//                       id="dropdownMenuButton1"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       <BiSolidCategory />
//                       <span className="me-5 d-inline-block">Kategorie</span>
//                     </button>
//                     <ul
//                       className="dropdown-menu"
//                       aria-label="dropdownMenuButton1"
//                     >
//                       <li>
//                         <Link to="" className="dropdown-item">
//                           Namioty
//                         </Link>
//                       </li>

//                       <li>
//                         <Link to="" className="dropdown-item">
//                           Stoły
//                         </Link>
//                       </li>

//                       <li>
//                         <Link to="" className="dropdown-item">
//                           Krzesła
//                         </Link>
//                       </li>

//                       <li>
//                         <Link to="" className="dropdown-item">
//                           Dmuchańce
//                         </Link>
//                       </li>

//                       <li>
//                         <Link to="" className="dropdown-item">
//                           Urządzenia
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-12 col-md-6">
//                   <div className="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-5">
//                     <NavLink to="/">Start</NavLink>
//                     <NavLink to="/">Wynajem</NavLink>
//                     <NavLink to="/">Blogi</NavLink>
//                     <NavLink to="/contact">Kontakt</NavLink>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
